"use client";
import React from "react";
import OptionCardErko from "./OptionCardErko";
import teamPng from "../../../../public/assets/team.png";
import socialsPng from "../../../../public/assets/socials.png";
import startupPng from "../../../../public/assets/startup.png";
import freeMusicPng from "../../../../public/assets/freeMusic.png";
import regionalPng from "../../../../public/assets/regional.png";
import documentsPng from "../../../../public/assets/documents.png";
import archivePng from "../../../../public/assets/archive.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setOpenModal } from "@/app/redux/features/ModalOpenSlice";

export default function MainErkoContainer() {
  const dispatch = useDispatch();
  return (
    <div
      className="flex mt-[1px] flex-row items-center justify-start w-full h-full sm:justify-center 
      gap-y-[20px] flex-wrap gap-x-[50px] bg-[#FFFFF0] border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] h-mm:pt-[0px] py-[20px] relative"
    >
      <OptionCardErko title="Team" imageSrc={teamPng} link="/erko/team" />
      <OptionCardErko
        title="Socials"
        imageSrc={socialsPng}
        link="/erko/socials"
      />
      <OptionCardErko
        title="Startup Consulting"
        imageSrc={startupPng}
        link="/erko/consulting"
        onClick={() => {
          dispatch(setOpenModal(true));
        }}
      />
      <OptionCardErko
        title="Free Music"
        imageSrc={freeMusicPng}
        link="/erko/music"
      />
      <OptionCardErko
        title="Regional Properties"
        imageSrc={regionalPng}
        link="/erko/regional"
        onClick={() => {
          dispatch(setOpenModal(true));
        }}
      />
      <OptionCardErko
        title="Documents"
        imageSrc={documentsPng}
        link="/erko/documents"
      />
      <a href="https://www.google.ge/" target="_blank">
        <Image src={archivePng} alt="archive png" width={150} height={150} />
        <h3 className="text-center text-[20px]"> Archive</h3>
      </a>
    </div>
  );
}
