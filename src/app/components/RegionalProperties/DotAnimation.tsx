import Image from "next/image";
import React from "react";
import dotAnimation from "../../../../public/assets/dotAnimation.gif";

interface DotAnimationProps {
  className?: string;
}

export default function DotAnimation({ className }: DotAnimationProps) {
  return (
    <Image
      src={dotAnimation}
      alt="dot animation"
      width={20}
      height={20}
      className={`absolute ${className}`}
    />
  );
}
