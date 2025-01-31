import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface OptionCardProps {
  title: string;
  imageSrc: StaticImageData;
  link: string;
}

export default function TeamCardErko({
  title,
  imageSrc,
  link,
}: OptionCardProps) {
  return (
    <Link
      href={link}
      className="flex flex-col justify-center items-center gap-[5px]"
    >
      <div className="flex justify-start items-center w-[149px] flex-col h-[150px] border-[0.5px] border-black rounded-md">
        <Image
          src={imageSrc}
          alt={title}
          className="rounded-[66px] w-[132px] h-[132px]"
        />
      </div>
      <h3 className="text-center text-[20px]">{title}</h3>
    </Link>
  );
}
