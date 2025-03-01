import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface OptionCardProps {
  title: string;
  imageSrc: StaticImageData;
  link: string;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
}

export default function TeamCardErko({
  title,
  imageSrc,
  link,
  position,
}: OptionCardProps) {
  return (
    <Link
      href={link}
      className="flex flex-col justify-center items-center gap-[5px]"
    >
      <div className="flex justify-start items-center w-[149px] flex-col h-[150px] border-[2px] bg-white border-black rounded-md relative">
        <Image
          src={imageSrc}
          alt={title}
          className="rounded-[66px] w-[132px] h-[132px] top-2"
          style={{ position: position }} // Remove quotes around radius
        />
      </div>
      <h3 className="text-center text-[24px]">{title}</h3>
    </Link>
  );
}
