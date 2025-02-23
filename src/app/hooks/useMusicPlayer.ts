import { useState } from "react";
import { Howl } from "howler";

interface Song {
  title: string;
  src: string;
}

export const useMusicPlayer = (songs: Song[]) => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [player, setPlayer] = useState<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);

  const playSong = (index: number) => {
    if (player) player.stop(); // Stop previous song

    const newPlayer = new Howl({
      src: [songs[index].src],
      html5: true,
      volume: volume,
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
    playSong,
    stopSong,
    togglePlayPause,
    changeVolume,
    nextSong,
    previousSong,
  };
};
