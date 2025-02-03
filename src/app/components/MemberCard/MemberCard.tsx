import Image, { StaticImageData } from "next/image";
import React from "react";

interface MemberCardProps {
  title: string;
  imageSrc: StaticImageData;
  info: string[];
}

export default function MemberCard({ title, imageSrc, info }: MemberCardProps) {
  return (
    <div
      className="flex mt-[1px] flex-col items-center justify-start w-full h-full gap-y-[0px] flex-wrap gap-x-[30px] bg-[#FFFFF0] 
    border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
    >
      <div className="flex flex-col justify-center items-center gap-[30px]">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="flex justify-start items-center w-[87px] flex-col h-[87px] border-[0.5px] bg-white border-black rounded-md">
            <Image
              src={imageSrc}
              alt={title}
              className="rounded-[66px] w-[76px] h-[77px]"
            />
          </div>
          <h3 className="text-center text-[26px]">{title}</h3>
        </div>
        <div className="flex flex-col gap-10 px-5">
          {info.map((text, index) => (
            <p key={index} className="text-left text-[20px]">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
