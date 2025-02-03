import Header from "@/app/components/Header/Header";
import BackButton from "@/app/components/MemberCard/BackButton";
import MemberCard from "@/app/components/MemberCard/MemberCard";
import TemikoPxl from "../../../../../public/assets/Temiko pixel .png";
import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-[#EEEEE]">
      <Header />
      <div className="flex px-[5px] w-full h-screen items-start flex-col pb-[10px]">
        <BackButton />
        <MemberCard
          title="About temiko"
          imageSrc={TemikoPxl}
          info={[
            "Temur Khazaradze is a strategic marketer and brand architect, known for building and scaling ventures across multiple industries. As the founder of ERKO, he blends bold branding, consumer psychology, and high-impact marketing to drive success.",
            " Why Temur? Brand Builder – Creates cult-like followings around businesses Growth Hacker – Drives massive engagement & conversions Trend Forecaster – Spots opportunities before they go mainstream High-ROI Strategist – Delivers marketing that sells & scales ",
            "From streetwear to digital influence, Temur dominates the marketing game, helping brands own their space and turn vision into revenue.",
          ]}
        />
      </div>
    </div>
  );
}
