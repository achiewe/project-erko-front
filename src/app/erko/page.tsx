import React from "react";
import Header from "../components/Header/Header";
import NavigationPages from "../components/Navigation/NavigationPages";
import MainErkoContainer from "../components/ErkoContainer/MainErkoContainer";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-[#EEEEEE]">
      <Header />
      <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px]">
        <NavigationPages />
        <MainErkoContainer />
      </div>
    </div>
  );
}
