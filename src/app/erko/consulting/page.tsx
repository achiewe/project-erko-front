import Header from "@/app/components/Header/Header";
import BackButton from "@/app/shared/BackButton";
import StartupFormContainer from "@/app/components/StartupConsultCont/StartupFormContainer";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full bg-[#EEEEEE]">
      <Header />
      <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px]">
        <BackButton destination="/erko" />
        <StartupFormContainer />
      </div>
    </div>
  );
}
