"use client";

import { useEffect, useState } from "react";
import { Howl } from "howler";

export default function SimpleVolumeTest() {
  const [player, setPlayer] = useState<Howl | null>(null);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const newPlayer = new Howl({
      src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"], // Test audio URL
      volume: volume,
    });

    setPlayer(newPlayer);

    return () => {
      newPlayer.unload();
    };
  }, []);

  const changeVolume = (newVolume: number) => {
    if (player) {
      player.volume(newVolume);
      setVolume(newVolume);
    }
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => changeVolume(parseFloat(e.target.value))}
      />
      <p>Volume: {volume}</p>
    </div>
  );
}
