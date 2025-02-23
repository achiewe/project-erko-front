import React from "react";
import OptionCardErko from "../ErkoContainer/OptionCardErko";
import developerPng from "../../../../public/assets/developer.png";
import assistantPng from "../../../../public/assets/assistant.png";
import advertiserPng from "../../../../public/assets/advertiser.png";
import memeMakerPng from "../../../../public/assets/memeMaker.png";
import designerPng from "../../../../public/assets/designer.png";
import editorPng from "../../../../public/assets/editor.png";
import intershipPng from "../../../../public/assets/internship.png";
import salesPng from "../../../../public/assets/sales.png";
import DArtistPng from "../../../../public/assets/3DArtist.png";
import strategistPng from "../../../../public/assets/strategist.png";
import creativePng from "../../../../public/assets/creative.png";

export default function JobsMainContainer() {
  return (
    <div
      className="flex mt-[1px] items-center justify-center w-full h-full h-mm:pt-[0px] bg-[#FFFFF0] 
border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
    >
      <div className="w-[363px] flex flex-row flex-wrap items-center justify-end md:w-full md:justify-center gap-y-[40px]">
        <OptionCardErko
          title="Developer"
          imageSrc={developerPng}
          link="/jobs/form"
        />
        <OptionCardErko
          title="Assistant"
          imageSrc={assistantPng}
          link="/jobs/form"
        />
        <OptionCardErko
          title="Advertiser"
          imageSrc={advertiserPng}
          link="/jobs/form"
        />
        <OptionCardErko
          title="Meme Maker"
          imageSrc={memeMakerPng}
          link="/jobs/form"
        />
        <OptionCardErko
          title="Graphic Designer"
          imageSrc={designerPng}
          link="/jobs/form"
        />
        <OptionCardErko
          title="Video Editor"
          imageSrc={editorPng}
          link="/jobs/form"
        />
        <OptionCardErko
          title="Student Internship"
          imageSrc={intershipPng}
          link="/jobs/form"
        />
        <OptionCardErko
          title="Sales God"
          imageSrc={salesPng}
          link="/jobs/form"
        />
        <OptionCardErko
          title="3D Artist"
          imageSrc={DArtistPng}
          link="/jobs/form"
        />
        <OptionCardErko
          title="Content Strategist"
          imageSrc={strategistPng}
          link="/jobs/form"
        />
        <OptionCardErko
          title="Creative Mind"
          imageSrc={creativePng}
          link="/jobs/form"
        />
      </div>
    </div>
  );
}
