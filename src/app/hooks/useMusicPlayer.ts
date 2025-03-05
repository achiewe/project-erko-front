import { useState, useEffect } from "react";
import { Howl } from "howler";

interface Song {
  title: string;
  src: string;
}

export const useMusicPlayer = (songs: Song[]) => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(-1); // Initialize to -1 (no song selected)
  const [player, setPlayer] = useState<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);

  // Cleanup the Howl instance when the component unmounts
  useEffect(() => {
    return () => {
      if (player) {
        player.stop(); // Stop the player when the component unmounts
      }
    };
  }, [player]);

  const playSong = (index: number) => {
    if (player) {
      player.stop(); // Stop the current song if it exists
    }

    const newPlayer = new Howl({
      src: [songs[index].src],
      html5: false,
      format: ['mp3'],
      volume: volume,
      onend: () => nextSong(), // Automatically play the next song when the current one ends
    });

    newPlayer.play();
    setPlayer(newPlayer);
    setIsPlaying(true);
    setCurrentSongIndex(index);
  };

  const stopSong = () => {
    if (player) {
      player.stop();
      setIsPlaying(false);
      setCurrentSongIndex(-1); // Reset to no song selected
    }
  };

  const togglePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pause();
      } else {
        player.play();
      }
      setIsPlaying(!isPlaying);
    } else if (currentSongIndex === -1) {
      // If no song is selected, start playing the first song
      playSong(0);
    }
  };

  const changeVolume = (newVolume: number) => {
    if (player) {
      player.volume(newVolume);
      setVolume(newVolume);
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(nextIndex);
  };

  const previousSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(prevIndex);
  };

  return {
    currentSongIndex,
    isPlaying,
    volume,
    stopSong,
    togglePlayPause,
    changeVolume,
    nextSong,
    previousSong,
  };
};
