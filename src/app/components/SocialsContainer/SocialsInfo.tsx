import Image, { StaticImageData } from "next/image";
import React from "react";

interface SocialsInfoProps {
  profileUrl: string;
  imageSrc: StaticImageData;
  title: string;
}

export default function SocialsInfo({
  profileUrl,
  imageSrc,
  title,
}: SocialsInfoProps) {
  return (
    <a
      href={profileUrl}
      target="_blank"
      className="flex flex-col items-center justify-center gap-[5px]"
    >
      <Image src={imageSrc} alt={title} />
      <h3 className="text-[22px]">{title}</h3>
    </a>
  );
}
