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
    <div className="w-[120px] flex items-center flex-col justify-center">
      <Link href={link}>
        <Image src={imageSrc} alt={title} className="h-[120px]" />
        <h3 className="text-center text-[18px]">{title}</h3>
      </Link>
    </div>
  );
}
