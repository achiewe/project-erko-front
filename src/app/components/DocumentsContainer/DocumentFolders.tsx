import Image from "next/image";
import React from "react";
import folderPng from "../../../../public/assets/Folder.png";
import Link from "next/link";

interface DocumentFoldersProps {
  navigate: string;
  folderName: string;
}

export default function DocumentFolders({
  navigate,
  folderName,
}: DocumentFoldersProps) {
  return (
    <Link
      href={navigate}
      className="flex flex-col items-center justify-center relative"
    >
      <Image src={folderPng} alt="folder png" className="w-[179px] h-[165px]" />
      <h3 className="text-[25px] absolute bottom-0">{folderName}</h3>
    </Link>
  );
}
