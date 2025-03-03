import Image from "next/image";
import { NowPlayingProps } from "../../../../type/type";

export default function MusicThumbImg({
  currentSongIndex,
  songs,
}: NowPlayingProps) {
  const thumbnail = songs[currentSongIndex]?.thumbnail;

  return (
    <div
      className="bg-[#DBDBDB] w-[120px] h-[120px] relative flex justify-center items-center 
                 shadow-lg [box-shadow:_0_0_10px_rgba(0,0,0,0.5),_0_4px_6px_-1px_rgba(0,0,0,0.5),_0_2px_4px_-2px_rgba(0,0,0,0.5)] 
                 border-4 border-[#9b9b9b] border-opacity-50"
    >
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt="song thumbnail"
          fill
          className="object-cover absolute"
        />
      ) : (
        <h3>No thumbnail available</h3>
      )}
    </div>
  );
}
