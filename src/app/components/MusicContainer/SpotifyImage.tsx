import Image from "next/image";
import React from "react";
import spotifyWebp from "../../../../public/assets/spotify.png";

interface spotifyImageProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export default function SpotifyImage({
  top,
  right,
  bottom,
  left,
}: spotifyImageProps) {
  return (
    <Image
      src={spotifyWebp}
      alt="spotify png"
      width={25}
      height={25}
      className="lg:w-[40px]"
      style={{
        position: "absolute",
        top: top ? `${top}rem` : "auto",
        right: right ? `${right}rem` : "auto",
        bottom: bottom ? `${bottom}rem` : "auto",
        left: left ? `${left}rem` : "auto",
      }}
    />
  );
}
