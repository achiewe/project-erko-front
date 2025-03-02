import Header from "@/app/components/Header/Header";
import BackButton from "@/app/shared/BackButton";
import MemberCard from "@/app/components/MemberCard/MemberCard";
import LukaPxl from "../../../../../public/assets/luka pixel .png";
import React from "react";
import Wrapper from "@/app/shared/Wrapper";

export default function page() {
  return (
    <Wrapper>
      <div className="w-full min-h-screen bg-[#EEEEEE] lg:max-w-[960px] lg:min-h-[697px] lg:shadow-lg lg:shadow-gray-800">
        <Header />
        <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px] lg:px-[20px]">
          <BackButton destination="/erko/team" />
          <MemberCard
            title="About Luka"
            imageSrc={LukaPxl}
            info={[
              "Luka Erkomaishvili is a visionary branding strategist, entrepreneur, and content creator, transforming businesses through powerful brand identities and strategic marketing.",

              "As the founder of Erko, he has helped companies—from startups to established brands—achieve growth through innovative branding, digital marketing, and web development.",

              "Beyond agency work, Luka builds businesses, including BednEar, Georgia’s first concert earplug brand, and documents his journey to 1 million GEL from zero on YouTube, inspiring entrepreneurs to think bigger.",

              "With expertise in strategy, design, and business growth, Luka is redefining branding in the Georgian market and beyond.",
            ]}
          />
        </div>
      </div>
    </Wrapper>
  );
}
