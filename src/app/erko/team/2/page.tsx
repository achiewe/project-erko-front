import Header from "@/app/components/Header/Header";
import BackButton from "@/app/shared/BackButton";
import MemberCard from "@/app/components/MemberCard/MemberCard";
import TemikoPxl from "../../../../../public/assets/Temiko pixel .png";
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
            title="About temiko"
            imageSrc={TemikoPxl}
            info={[
              "Temur Khazaradze is a strategic marketer and brand architect, known for building and scaling ventures across multiple industries. As the founder of ERKO, he blends bold branding, consumer psychology, and high-impact marketing to drive success.",
              " Why Temur?",
              "Brand Builder – Creates cult-like followings around businesses Growth Hacker – Drives massive engagement & conversions Trend Forecaster – Spots opportunities before they go mainstream High-ROI Strategist – Delivers marketing that sells & scales, From streetwear to digital influence, Temur dominates the marketing game, helping brands own their space and turn vision into revenue.",
            ]}
          />
        </div>
      </div>
    </Wrapper>
  );
}
