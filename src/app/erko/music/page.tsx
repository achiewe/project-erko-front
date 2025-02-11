import Header from "@/app/components/Header/Header";
import BackButton from "@/app/components/MemberCard/BackButton";
import MusicContainer from "@/app/components/MusicContainer/MusicContainer";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full bg-[#EEEEEE]">
      <Header />
      <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px]">
        <BackButton destination="/erko" />
        <MusicContainer />
      </div>
    </div>
  );
}
