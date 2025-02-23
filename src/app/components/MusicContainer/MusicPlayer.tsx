"use client";

import { useMusicPlayer } from "@/app/hooks/useMusicPlayer";

// Adjust the path if needed

const songs = [
  { title: "Song One", src: "/music/muzika.mp3" },
  { title: "Song Two", src: "/music/song2.mp3" },
];

export default function MusicPlayer() {
  const {
    currentSongIndex,
    isPlaying,
    volume,
    playSong,
    stopSong,
    togglePlayPause,
    changeVolume,
    nextSong,
    previousSong,
  } = useMusicPlayer(songs);

  return (
    <div className="p-4 text-white rounded-lg">
      <div className="mt-4">
        <button
          onClick={stopSong}
          className="w-full p-2 my-2 rounded bg-red-500"
        >
          Stop
        </button>
        <button
          onClick={togglePlayPause}
          className="w-full p-2 my-2 rounded bg-yellow-500"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <div>
        {songs.map((song, index) => (
          <button
            key={index}
            onClick={() => playSong(index)}
            className={`block w-full p-2 my-2 rounded ${
              currentSongIndex === index ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            {song.title}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <label htmlFor="volume" className="block mb-2">
          Volume
        </label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => changeVolume(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mt-4">
        <button
          onClick={previousSong}
          className="w-full p-2 my-2 rounded bg-green-500"
        >
          Previous
        </button>
        <button
          onClick={nextSong}
          className="w-full p-2 my-2 rounded bg-blue-500"
        >
          Next
        </button>
      </div>
    </div>
  );
}
