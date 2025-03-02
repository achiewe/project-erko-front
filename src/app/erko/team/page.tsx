import Header from "@/app/components/Header/Header";
import NavigationPages from "@/app/components/Navigation/NavigationPages";
import MainTeamContainer from "@/app/components/TeamContainer/MainTeamContainer";
import Wrapper from "@/app/shared/Wrapper";
import React from "react";

export default function page() {
  return (
    <Wrapper>
      <div className="w-full min-h-screen bg-[#EEEEEE] lg:max-w-[960px] lg:min-h-[697px] lg:shadow-lg lg:shadow-gray-800">
        <Header />
        <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px] lg:px-[20px]">
          <NavigationPages />
          <MainTeamContainer />
        </div>
      </div>
    </Wrapper>
  );
}
