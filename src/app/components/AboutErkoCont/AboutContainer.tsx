import React from "react";
import AggementFiles from "./AggementFiles";
import DocContainer from "@/app/shared/DocContainer";

export default function AboutContainer() {
  return (
    <main
      className="flex flex-row flex-wrap w-full items-start justify-start min-h-screen bg-[#FFFFF0] 
border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] relative"
    >
      <DocContainer>
        <AggementFiles
          navigate="about/founder-story"
          aggementName="Founder's Story"
        />
        <AggementFiles
          navigate="about/core-principles"
          aggementName="Core Principles [MVV]"
          textWidth="150px"
          bottom="-39px"
        />
        <AggementFiles navigate="about/team" aggementName="Our Team" />
      </DocContainer>
    </main>
  );
}
