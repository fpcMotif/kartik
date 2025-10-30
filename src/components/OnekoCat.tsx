"use client";

import { useEffect, useRef, useState } from "react";

type Position = {
  x: number;
  y: number;
};

type SpriteSet = {
  [key: string]: [number, number][];
};

// ============================================================================
// Constants
// ============================================================================

// Sprite and Animation Constants
const SPRITE_SIZE = 32;
const SPRITE_HALF = 16;
const NEKO_SPEED = 10;
const IDLE_DISTANCE_THRESHOLD = 48;
const FRAME_INTERVAL_MS = 100;
const MAX_Z_INDEX = 999;

// Animation Thresholds
const IDLE_TRIGGER_TIME = 10;
const IDLE_ANIMATION_CHANCE = 200;
const SLEEPING_PRE_FRAMES = 8;
const SLEEPING_FRAME_DIVISOR = 4;
const SLEEPING_MAX_FRAMES = 192;
const SCRATCH_MAX_FRAMES = 9;

// Direction Calculation
const DIRECTION_THRESHOLD = 0.5;

// Initial Position
const INITIAL_POSITION: Position = { x: 32, y: 32 };

// Sprite Definitions
const SPRITE_SETS: SpriteSet = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  scratchWallN: [
    [0, 0],
    [0, -1],
  ],
  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],
  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],
  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
};

// ============================================================================
// Helper Functions
// ============================================================================

const calculateDistance = (pos1: Position, pos2: Position): number => {
  const diffX = pos1.x - pos2.x;
  const diffY = pos1.y - pos2.y;
  return Math.sqrt(diffX ** 2 + diffY ** 2);
};

const clampPosition = (
  pos: Position,
  minBound: number,
  maxWidth: number,
  maxHeight: number,
): Position => {
  const clampedX = Math.min(Math.max(minBound, pos.x), maxWidth - minBound);
  const clampedY = Math.min(Math.max(minBound, pos.y), maxHeight - minBound);
  return { x: clampedX, y: clampedY };
};

const computeDirection = (
  diffX: number,
  diffY: number,
  distance: number,
): string => {
  const normalizedDiffX = diffX / distance;
  const normalizedDiffY = diffY / distance;

  let direction = "";
  if (Number.isFinite(normalizedDiffY)) {
    direction += normalizedDiffY > DIRECTION_THRESHOLD ? "N" : "";
    direction += normalizedDiffY < -DIRECTION_THRESHOLD ? "S" : "";
  }
  if (Number.isFinite(normalizedDiffX)) {
    direction += normalizedDiffX > DIRECTION_THRESHOLD ? "W" : "";
    direction += normalizedDiffX < -DIRECTION_THRESHOLD ? "E" : "";
  }
  return direction || "idle";
};

const isValidSprite = (spriteSet: [number, number][] | undefined): boolean => {
  return Boolean(spriteSet && spriteSet.length > 0);
};

// ============================================================================
// Component
// ============================================================================

export default function OnekoCat() {
  // ============================================================================
  // State and Refs
  // ============================================================================

  const nekoRef = useRef<HTMLDivElement>(null);
  const [nekoPos, setNekoPos] = useState<Position>(INITIAL_POSITION);
  const [_mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
  const [_frameCount, setFrameCount] = useState(0);
  const [_idleTime, setIdleTime] = useState(0);
  const [_idleAnimation, setIdleAnimation] = useState<string | null>(null);
  const [_idleAnimationFrame, setIdleAnimationFrame] = useState(0);

  // Refs to access current values in RAF loop
  const nekoPosRef = useRef<Position>(INITIAL_POSITION);
  const mousePosRef = useRef<Position>({ x: 0, y: 0 });
  const frameCountRef = useRef(0);
  const idleTimeRef = useRef(0);
  const idleAnimationRef = useRef<string | null>(null);
  const idleAnimationFrameRef = useRef(0);

  const lastFrameTimestamp = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // ============================================================================
  // Sprite Management
  // ============================================================================

  const setSprite = (name: string, frame: number) => {
    if (!nekoRef.current) return;
    const spriteSet = SPRITE_SETS[name];
    if (!isValidSprite(spriteSet)) {
      // Fallback to idle if sprite set doesn't exist
      const idleSprite = SPRITE_SETS.idle[0];
      if (idleSprite) {
        nekoRef.current.style.backgroundPosition = `${
          idleSprite[0] * SPRITE_SIZE
        }px ${idleSprite[1] * SPRITE_SIZE}px`;
      }
      return;
    }
    const sprite = spriteSet[frame % spriteSet.length];
    if (sprite && Array.isArray(sprite) && sprite.length >= 2) {
      nekoRef.current.style.backgroundPosition = `${
        sprite[0] * SPRITE_SIZE
      }px ${sprite[1] * SPRITE_SIZE}px`;
    }
  };

  // ============================================================================
  // Idle Animation Logic
  // ============================================================================

  const resetIdleAnimation = () => {
    idleAnimationRef.current = null;
    idleAnimationFrameRef.current = 0;
    setIdleAnimation(null);
    setIdleAnimationFrame(0);
  };

  const handleIdle = () => {
    const currentIdleTime = idleTimeRef.current + 1;
    idleTimeRef.current = currentIdleTime;

    if (
      currentIdleTime > IDLE_TRIGGER_TIME &&
      Math.floor(Math.random() * IDLE_ANIMATION_CHANCE) === 0 &&
      !idleAnimationRef.current
    ) {
      const availableIdleAnimations = ["sleeping", "scratchSelf"];
      const currentPos = nekoPosRef.current;
      if (currentPos.x < SPRITE_SIZE)
        availableIdleAnimations.push("scratchWallW");
      if (currentPos.y < SPRITE_SIZE)
        availableIdleAnimations.push("scratchWallN");
      if (currentPos.x > window.innerWidth - SPRITE_SIZE)
        availableIdleAnimations.push("scratchWallE");
      if (currentPos.y > window.innerHeight - SPRITE_SIZE)
        availableIdleAnimations.push("scratchWallS");

      const selectedAnimation =
        availableIdleAnimations[
          Math.floor(Math.random() * availableIdleAnimations.length)
        ];
      idleAnimationRef.current = selectedAnimation;
      setIdleAnimation(selectedAnimation);
    }

    const currentIdleAnimation = idleAnimationRef.current;
    const currentIdleAnimationFrame = idleAnimationFrameRef.current;

    switch (currentIdleAnimation) {
      case "sleeping":
        if (currentIdleAnimationFrame < SLEEPING_PRE_FRAMES) {
          setSprite("tired", 0);
          break;
        }
        setSprite(
          "sleeping",
          Math.floor(currentIdleAnimationFrame / SLEEPING_FRAME_DIVISOR),
        );
        if (currentIdleAnimationFrame > SLEEPING_MAX_FRAMES)
          resetIdleAnimation();
        break;
      case "scratchWallN":
      case "scratchWallS":
      case "scratchWallE":
      case "scratchWallW":
      case "scratchSelf":
        setSprite(currentIdleAnimation, currentIdleAnimationFrame);
        if (currentIdleAnimationFrame > SCRATCH_MAX_FRAMES)
          resetIdleAnimation();
        break;
      default:
        setSprite("idle", 0);
        setIdleTime(currentIdleTime);
        return;
    }
    const newFrame = currentIdleAnimationFrame + 1;
    idleAnimationFrameRef.current = newFrame;
    setIdleAnimationFrame(newFrame);
    setIdleTime(currentIdleTime);
  };

  // ============================================================================
  // Animation Frame Handler
  // ============================================================================

  const handleFrame = () => {
    if (!nekoRef.current) return;

    const currentFrameCount = frameCountRef.current + 1;
    frameCountRef.current = currentFrameCount;
    setFrameCount(currentFrameCount);

    const currentNekoPos = nekoPosRef.current;
    const currentMousePos = mousePosRef.current;
    const distance = calculateDistance(currentNekoPos, currentMousePos);

    if (!Number.isFinite(distance) || distance <= 0) {
      // Guard against NaN, zero, or invalid distance
      handleIdle();
      return;
    }

    if (distance < NEKO_SPEED || distance < IDLE_DISTANCE_THRESHOLD) {
      handleIdle();
      return;
    }

    idleAnimationRef.current = null;
    idleAnimationFrameRef.current = 0;
    setIdleAnimation(null);
    setIdleAnimationFrame(0);

    const currentIdleTime = idleTimeRef.current;
    if (currentIdleTime > 1) {
      setSprite("alert", 0);
      const newIdleTime = Math.max(currentIdleTime - 1, 0);
      idleTimeRef.current = newIdleTime;
      setIdleTime(newIdleTime);
      return;
    }

    // Compute direction with safe division
    const diffX = currentNekoPos.x - currentMousePos.x;
    const diffY = currentNekoPos.y - currentMousePos.y;
    const spriteDirection = computeDirection(diffX, diffY, distance);

    if (spriteDirection in SPRITE_SETS) {
      // Fallback to "idle" if direction is invalid
      setSprite(spriteDirection, currentFrameCount);
    } else {
      setSprite("idle", 0);
    }

    // Safe movement calculation
    const normalizedDiffX = diffX / distance;
    const normalizedDiffY = diffY / distance;
    const newPos = {
      x: currentNekoPos.x - normalizedDiffX * NEKO_SPEED,
      y: currentNekoPos.y - normalizedDiffY * NEKO_SPEED,
    };

    const clampedPos = clampPosition(
      newPos,
      SPRITE_HALF,
      window.innerWidth,
      window.innerHeight,
    );

    if (!Number.isFinite(clampedPos.x) || !Number.isFinite(clampedPos.y)) {
      // Guard against NaN in final position
      handleIdle();
      return;
    }

    nekoPosRef.current = clampedPos;
    setNekoPos(clampedPos);
  };

  // ============================================================================
  // Animation Setup
  // ============================================================================

  /* biome-ignore lint/correctness/useExhaustiveDependencies: Animation loop intentionally not tied to state dependencies */
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newMousePos = { x: event.clientX, y: event.clientY };
      mousePosRef.current = newMousePos;
      setMousePos(newMousePos);
    };

    const animate = (timestamp: number) => {
      if (!lastFrameTimestamp.current) {
        lastFrameTimestamp.current = timestamp;
      }

      if (timestamp - lastFrameTimestamp.current > FRAME_INTERVAL_MS) {
        lastFrameTimestamp.current = timestamp;
        handleFrame();
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Check for reduced motion preference
    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!isReducedMotion) {
      document.addEventListener("mousemove", handleMouseMove);
      animationFrameId.current = requestAnimationFrame(animate);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // ============================================================================
  // Render
  // ============================================================================

  return (
    <div
      ref={nekoRef}
      aria-hidden="true"
      style={{
        width: `${SPRITE_SIZE}px`,
        height: `${SPRITE_SIZE}px`,
        position: "fixed",
        pointerEvents: "none",
        imageRendering: "pixelated",
        left: `${nekoPos.x - SPRITE_HALF}px`,
        top: `${nekoPos.y - SPRITE_HALF}px`,
        zIndex: MAX_Z_INDEX,
        backgroundImage: "url(/oneko.gif)",
      }}
    />
  );
}
