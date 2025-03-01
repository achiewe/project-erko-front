import React from "react";
import Header from "../components/Header/Header";
import NavigationPages from "../components/Navigation/NavigationPages";
import JobsMainContainer from "../components/JobsContainer/JobsMainContainer";
import Wrapper from "../shared/Wrapper";

export default function page() {
  return (
    <Wrapper>
      <div className="bg-[#EEEEEE] lg:max-w-[960px] lg:max-h-[700px]">
        <Header />
        <div className="flex px-[5px] w-full h-full items-start pb-[10px] flex-col lg:px-[20px]">
          <NavigationPages />
          <JobsMainContainer />
        </div>
      </div>
    </Wrapper>
  );
}
