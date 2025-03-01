"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface OptionCardProps {
  title: string;
  imageSrc: StaticImageData;
  link: string;
  onClick?: () => void;
}

export default function OptionCardErko({
  title,
  imageSrc,
  link,
  onClick,
}: OptionCardProps) {
  return (
    <div className="flex flex-col justify-center items-center w-[179px] lg:w-[200px] lg:h-[200px]">
      <Link
        href={link}
        className="flex justify-center items-center flex-col"
        onClick={onClick}
      >
        <Image
          src={imageSrc}
          alt={title}
          className="h-[150px] lg:w-[200px] lg:h-[200px]"
        />
        <h3 className="text-center text-[25px] lg:text-[28px]">{title}</h3>
      </Link>
    </div>
  );
}
