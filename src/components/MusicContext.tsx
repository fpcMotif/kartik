"use client";

import type { Howl } from "howler";
import { createContext, type ReactNode, useContext, useState } from "react";

type MusicContextType = {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  soundInstance: Howl | null;
  setSoundInstance: (sound: Howl | null) => void;
};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundInstance, setSoundInstance] = useState<Howl | null>(null);

  return (
    <MusicContext.Provider
      value={{ isPlaying, setIsPlaying, soundInstance, setSoundInstance }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}
