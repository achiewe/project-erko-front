import Header from "@/app/components/Header/Header";
import HelpContainer from "@/app/components/HelpContainer/HelpContainer";
import BackButton from "@/app/shared/BackButton";
import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-[#EEEEEE]">
      <Header />
      <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px]">
        <BackButton destination="/erko" />
        <HelpContainer />
      </div>
    </div>
  );
}
