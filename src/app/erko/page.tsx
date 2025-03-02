import React from "react";
import Header from "../components/Header/Header";
import NavigationPages from "../components/Navigation/NavigationPages";
import MainErkoContainer from "../components/ErkoContainer/MainErkoContainer";
import Wrapper from "../shared/Wrapper";

export default function page() {
  return (
    <Wrapper>
      <main className="flex flex-col w-full h-full bg-[#EEEEEE] lg:max-w-[960px] lg:max-h-[700px] lg:shadow-lg lg:shadow-gray-800">
        <Header />
        <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px] lg:px-[20px]">
          <NavigationPages />
          <MainErkoContainer />
        </div>
      </main>
    </Wrapper>
  );
}
