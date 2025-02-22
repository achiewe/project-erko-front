"use client";
import Image from "next/image";
import React from "react";
import aggementPng from "../../../../public/assets/aggement.png";
import Link from "next/link";

interface AggementFilesProps {
  navigate: string;
  aggementName: string;
  textWidth?: string;
  bottom?: string;
}

export default function AggementFiles({
  navigate,
  aggementName,
  textWidth,
  bottom,
}: AggementFilesProps) {
  return (
    <Link
      href={navigate}
      className="flex flex-col items-center justify-center relative"
    >
      <Image
        src={aggementPng}
        alt="aggement png"
        className="w-[179px] h-[165px]"
      />
      <h3
        className={`text-[25px] absolute bottom-0 text-center`}
        style={{ width: `${textWidth}`, bottom: `${bottom}` }}
      >
        {aggementName}
      </h3>
    </Link>
  );
}
