import React from "react";
import smilePng from "../../../../public/assets/smile.png";
import Image from "next/image";

export default function SmileTxt() {
  return (
    <div className="flex w-full justify-center items-center flex-col">
      <Image src={smilePng} alt="smile png" width={116} height={107} />
      <h3 className="text-[25px]">Let’s play a game!</h3>
    </div>
  );
}
