import Image from "next/image";
import React from "react";
import startupPng from "../../../../public/assets/startupConsalt .webp";

export default function InfoBanner() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Image src={startupPng} alt="startup png" width={124} height={115} />
      <h3 className="text-[23px] w-full max-w-[260px] text-center">
        If you get a call from us - be ready to start!
      </h3>
    </div>
  );
}
