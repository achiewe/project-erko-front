import Image from "next/image";
import Link from "next/link";
import React from "react";
import contractPng from "../../../../public/assets/contracts.png";

interface ContractFileProps {
  navigate: string;
  fileName: string;
}

export default function ContractFile({
  navigate,
  fileName,
}: ContractFileProps) {
  return (
    <Link
      href={navigate}
      className="flex flex-col items-center justify-center relative"
    >
      <Image
        src={contractPng}
        alt="contract png"
        className="w-[179px] h-[165px] lg:w-[200px] lg:h-[200px]"
      />
      <h3
        className={`text-[25px] absolute bottom-0 text-center lg:text-[28px]`}
      >
        {fileName}
      </h3>
    </Link>
  );
}
