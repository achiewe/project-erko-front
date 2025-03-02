import Header from "@/app/components/Header/Header";
import BackButton from "@/app/shared/BackButton";
import MemberCard from "@/app/components/MemberCard/MemberCard";
import VaxanaPxl from "../../../../../public/assets/pixelan vaxana .png"; // Fixed the image name
import React from "react";
import Wrapper from "@/app/shared/Wrapper";

export default function Page() {
  // Capitalized the component name to follow React convention
  return (
    <Wrapper>
      <div className="w-full min-h-screen bg-[#EEEEEE] lg:max-w-[960px] lg:min-h-[697px] lg:shadow-lg lg:shadow-gray-800">
        <Header />
        <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px] lg:px-[20px]">
          <BackButton destination="/erko/team" />
          <MemberCard
            title="About Luka"
            imageSrc={VaxanaPxl}
            info={[
              "With 2 years of high-level sales and marketing experience, Luka has mastered the art of ad buying. Worked with one of the top-spender companies across Meta and multiple platforms, he has personally managed over $5M in ad spend. That places him among the top 1% of media buyers worldwide.",
              "Why Luka?",
              "The Captain of Your Budget – Navigates ad spend with precision, turning investments into massive revenue. The Sniper of Targeting – Spots the right audience and locks them in. The Architect of Meta Campaigns – Builds high-performing structures that scale. Brand & Growth Strategist – Knows exactly how to drive sales through brand positioning. Retention Expert – Doesn’t just get customers—keeps them coming back.  The “Snake” of Ads Manager – Moves strategically, always ahead of the curve.",
            ]}
          />
        </div>
      </div>
    </Wrapper>
  );
}
