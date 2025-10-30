"use client";

import { FaPause, FaPlay } from "react-icons/fa6";
import { useMusic } from "./MusicContext";

export default function MusicControl() {
  const { isPlaying, soundInstance } = useMusic();

  const toggleMusic = () => {
    if (!soundInstance) return;

    if (isPlaying) {
      soundInstance.pause();
    } else {
      soundInstance.play();
    }
  };

  return (
    <button
      type="button"
      onClick={toggleMusic}
      className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
      aria-label={
        isPlaying ? "Pause background music" : "Play background music"
      }
    >
      {isPlaying ? (
        <FaPause className="w-4 h-4" />
      ) : (
        <FaPlay className="w-4 h-4" />
      )}
    </button>
  );
}
