import React from "react";
import Header from "../components/Header/Header";
import NavigationPages from "../components/Navigation/NavigationPages";
import JobsMainContainer from "../components/JobsContainer/JobsMainContainer";

export default function page() {
  return (
    <div>
      <Header />
      <div className="flex px-[5px] w-full h-full items-start flex-col">
        <NavigationPages />
        <JobsMainContainer />
      </div>
    </div>
  );
}
