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
import { useDispatch } from "react-redux";
import { setOpenModal } from "@/app/redux/features/ModalOpenSlice";

export default function MainErkoContainer() {
  const dispatch = useDispatch();
  return (
    <main className="flex mt-[1px] items-center justify-center w-full h-full bg-[#FFFFF0] border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] h-mm:pt-[0px] py-[20px] relative">
      <div className="w-[363px] flex flex-row flex-wrap items-center justify-end md:w-full md:justify-center gap-y-[40px]">
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
        <OptionCardErko
          title="Archive"
          imageSrc={archivePng}
          link="/erko/archive"
        />
      </div>
    </main>
  );
}
