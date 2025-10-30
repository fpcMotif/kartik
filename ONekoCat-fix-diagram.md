# OnekoCat Fix: Stale State vs Refs Solution

## Problem: Old Implementation (❌ Broken)

```mermaid
sequenceDiagram
    participant Mount as Component Mount
    participant State as React State
    participant RAF as requestAnimationFrame
    participant Mouse as Mouse Move Event
    participant Cat as Cat Position

    Note over Mount,State: Initial Render
    Mount->>State: useState({x:32, y:32}) - nekoPos
    Mount->>State: useState({x:0, y:0}) - mousePos

    Note over Mount,RAF: useEffect runs (empty deps)
    Mount->>RAF: Creates animate() closure
    RAF->>RAF: Closure captures INITIAL values:<br/>nekoPos={x:32,y:32}<br/>mousePos={x:0,y:0}

    Note over Mouse,Cat: User moves mouse
    Mouse->>State: setMousePos({x:100,y:150})
    State->>State: State updates to {x:100,y:150}

    Note over RAF,Cat: Animation frame runs
    RAF->>RAF: handleFrame() executes
    RAF->>State: Reads nekoPos from CLOSURE<br/>Still sees {x:32,y:32} ❌
    RAF->>State: Reads mousePos from CLOSURE<br/>Still sees {x:0,y:0} ❌

    Note over RAF,Cat: Calculation uses STALE values
    RAF->>Cat: distance = sqrt((32-0)² + (32-0)²) = 45.2
    RAF->>Cat: Cat doesn't move toward mouse! ❌

    Note over RAF: Loop continues with same stale values
    RAF->>RAF: requestAnimationFrame(animate)
```

## Solution: New Implementation (✅ Fixed)

```mermaid
sequenceDiagram
    participant Mount as Component Mount
    participant State as React State
    participant Refs as Refs
    participant RAF as requestAnimationFrame
    participant Mouse as Mouse Move Event
    participant Cat as Cat Position

    Note over Mount,State: Initial Render
    Mount->>State: useState({x:32, y:32}) - nekoPos
    Mount->>State: useState({x:0, y:0}) - mousePos
    Mount->>Refs: useRef({x:32, y:32}) - nekoPosRef
    Mount->>Refs: useRef({x:0, y:0}) - mousePosRef

    Note over Mount,RAF: useEffect runs (empty deps)
    Mount->>RAF: Creates animate() closure
    RAF->>RAF: Closure uses REFS (always current)

    Note over Mouse,Cat: User moves mouse
    Mouse->>Refs: mousePosRef.current = {x:100,y:150}
    Mouse->>State: setMousePos({x:100,y:150})

    Note over RAF,Cat: Animation frame runs
    RAF->>Refs: Reads nekoPosRef.current ✅<br/>Gets {x:32,y:32}
    RAF->>Refs: Reads mousePosRef.current ✅<br/>Gets {x:100,y:150} (CURRENT!)

    Note over RAF,Cat: Calculation uses CURRENT values
    RAF->>Cat: distance = sqrt((32-100)² + (32-150)²) = 132.8
    RAF->>Cat: newPos = nekoPos - (diff/dist) * speed
    RAF->>Refs: Updates nekoPosRef.current
    RAF->>State: Updates nekoPos state
    Cat->>Cat: Cat moves toward mouse! ✅

    Note over RAF: Loop continues with fresh refs
    RAF->>RAF: requestAnimationFrame(animate)
```

## Flow Comparison

```mermaid
flowchart TB
    subgraph Old["Old Implementation - Broken"]
        O1[Component Mount] --> O2[useState: nekoPos, mousePos]
        O2 --> O3[useEffect creates RAF closure]
        O3 --> O4[RAF Closure Captures Initial State Values]
        O4 --> O5["nekoPos = x:32, y:32<br/>mousePos = x:0, y:0"]
        O5 --> O6[User Moves Mouse]
        O6 --> O7[State Updates]
        O7 --> O8[RAF Reads from Closure]
        O8 --> O9[Still Sees OLD Values]
        O9 --> O10[Cat Does Not Follow]
        O10 --> O11[Potential NaN if distance=0]
    end

    subgraph New["New Implementation - Fixed"]
        N1[Component Mount] --> N2[useState + useRef]
        N2 --> N3[useEffect creates RAF closure]
        N3 --> N4[RAF Closure Uses Refs Always Current]
        N4 --> N5["nekoPosRef.current<br/>mousePosRef.current"]
        N5 --> N6[User Moves Mouse]
        N6 --> N7["Update mousePosRef.current<br/>+ setState"]
        N7 --> N8[RAF Reads from Refs]
        N8 --> N9[Gets CURRENT Values]
        N9 --> N10[Cat Follows Smoothly]
        N10 --> N11[NaN Guards Prevent Errors]
        N11 --> N12[Fallback Sprites]
    end

    style Old fill:#ffebee
    style New fill:#e8f5e9
    style O9 fill:#ffcdd2
    style O10 fill:#ffcdd2
    style O11 fill:#ffcdd2
    style N9 fill:#c8e6c9
    style N10 fill:#c8e6c9
    style N11 fill:#c8e6c9
    style N12 fill:#c8e6c9
```

## Key Differences

| Aspect               | Old ❌                            | New ✅                                     |
| -------------------- | --------------------------------- | ------------------------------------------ |
| **State Access**     | Reads from closure-captured state | Reads from refs (always current)           |
| **Mouse Position**   | Stale initial value {x:0, y:0}    | Current value from `mousePosRef.current`   |
| **Cat Position**     | Stale initial value {x:32, y:32}  | Current value from `nekoPosRef.current`    |
| **Division by Zero** | No guard, can produce NaN         | `Number.isFinite()` + `distance > 0` check |
| **Sprite Fallback**  | No validation                     | Checks `direction in SPRITE_SETS`          |
| **Result**           | Cat never moves                   | Cat follows cursor smoothly                |

## Fix Summary

1. **Stale State Fix**: Refs provide current values to RAF loop
2. **NaN Prevention**: Guards check `Number.isFinite()` and `distance > 0`
3. **Sprite Safety**: Validates direction exists in SPRITE_SETS, falls back to "idle"
4. **Synchronization**: Refs updated immediately, state updated for re-renders
