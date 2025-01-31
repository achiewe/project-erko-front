"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface OptionCardProps {
  title: string;
  imageSrc: StaticImageData;
  link: string;
}

export default function OptionCardErko({
  title,
  imageSrc,
  link,
}: OptionCardProps) {
  return (
    <div className="w-[150px]">
      <Link href={link} className="flex justify-center items-center flex-col">
        <Image
          src={imageSrc}
          alt={title}
          className="h-[150px] w-[170px] h-sm:h-[120px] h-sm:w-[140px] h-mm:h-[120px] h-mm:w-[140px] 
          h-ml:h-[60px] h-ml:w-[80px]"
        />
        <h3 className="text-center text-[20px]">{title}</h3>
      </Link>
    </div>
  );
}
