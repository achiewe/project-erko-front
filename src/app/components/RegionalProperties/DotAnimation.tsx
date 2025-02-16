import Image from "next/image";
import React from "react";
import dotAnimation from "../../../../public/assets/dotAnimation.gif";

interface DotAnimationProps {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

export default function DotAnimation({
  top,
  left,
  bottom,
  right,
}: DotAnimationProps) {
  return (
    <Image
      src={dotAnimation}
      alt="dot animation"
      width={20}
      height={20}
      style={{
        position: "absolute",
        top: top,
        left: left,
        bottom: bottom,
        right: right,
      }}
    />
  );
}
