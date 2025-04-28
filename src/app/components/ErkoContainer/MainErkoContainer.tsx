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
import { setIsDropDown } from "@/app/redux/features/DropDownSlice";

export default function MainErkoContainer() {
  const dispatch = useDispatch();
  return (
    <main
      className="flex mt-[1px] items-center justify-center w-full h-full bg-[#FFFFF0] border-r-2 border-b-2 border-gray-800 
      drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] h-mm:pt-[0px] py-[20px] relative lg:items-start 2xl:px-[20px] lg:h-[605px]"
    >
      <div
        className="w-[358px] flex flex-row flex-wrap items-center justify-end md:w-full md:justify-center gap-y-[40px] lg:justify-start 
      lg:gap-y-[80px] lg:gap-x-[20px]"
      >
        <OptionCardErko title="Team" imageSrc={teamPng} link="/erko/team" onClick={() => {dispatch(setIsDropDown(null))}} />
        <OptionCardErko
          title="Socials"
          imageSrc={socialsPng}
          link="/erko/socials"
          onClick={() => {dispatch(setIsDropDown(null))}}
        />
        <OptionCardErko
          title="Startup Consulting"
          imageSrc={startupPng}
          link="/erko/consulting"
          onClick={() => {
            dispatch(setOpenModal(true));
            dispatch(setIsDropDown(null));
          }}
        />
        <OptionCardErko
          title="Free Music"
          imageSrc={freeMusicPng}
          link="/erko/music"
          onClick={() => {dispatch(setIsDropDown(null))}}
        />
        <OptionCardErko
          title="Regional Properties"
          imageSrc={regionalPng}
          link="/erko/regional"
          onClick={() => {
            dispatch(setOpenModal(true));
            dispatch(setIsDropDown(null));
          }}
        />
        <OptionCardErko
          title="Documents"
          imageSrc={documentsPng}
          link="/erko/documents"
          onClick={() => {dispatch(setIsDropDown(null))}}
        />
        <OptionCardErko
          title="Archive"
          imageSrc={archivePng}
          link="https://www.google.com/"
          target="_blank"
          onClick={() => {dispatch(setIsDropDown(null))}}
        />
      </div>
    </main>
  );
}
