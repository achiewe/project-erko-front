import Header from "@/app/components/Header/Header";
import HelpContainer from "@/app/components/HelpContainer/HelpContainer";
import BackButton from "@/app/shared/BackButton";
import Wrapper from "@/app/shared/Wrapper";
import React from "react";

export default function page() {
  return (
    <Wrapper>
      <main className="w-full min-h-screen bg-[#EEEEEE] lg:max-w-[960px] lg:min-h-[697px] lg:shadow-lg lg:shadow-gray-800">
        <Header />
        <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px] lg:px-[20px]">
          <BackButton destination="/erko" />
          <HelpContainer />
        </div>
      </main>
    </Wrapper>
  );
}
