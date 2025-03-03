// components/MusicPlayer.tsx
"use client";

import { useMusicPlayer } from "@/app/hooks/useMusicPlayer";
import VolumeControl from "./VolumeControl";
import NowPlaying from "./NowPlaying";
import Controls from "./Controls";
import MusicThumbImg from "./MusicThumbImg";
import songs from "@/app/data/data.json"; // Import the JSON file

export default function MusicPlayer() {
  const {
    currentSongIndex,
    isPlaying,
    volume,
    stopSong,
    togglePlayPause,
    changeVolume,
    nextSong,
    previousSong,
  } = useMusicPlayer(songs);

  return (
    <div className="p-4 text-white rounded-lg flex flex-col justify-center items-center gap-5 lg:gap-8">
      <div className="w-full flex flex-row items-center justify-center gap-5 lg:gap-12">
        <MusicThumbImg currentSongIndex={currentSongIndex} songs={songs} />
        <Controls
          isPlaying={isPlaying}
          stopSong={stopSong}
          togglePlayPause={togglePlayPause}
          nextSong={nextSong}
          previousSong={previousSong}
        />
      </div>
      <NowPlaying currentSongIndex={currentSongIndex} songs={songs} />
      <VolumeControl volume={volume} changeVolume={changeVolume} />
    </div>
  );
}
