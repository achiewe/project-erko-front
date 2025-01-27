import React from "react";
import OptionCardErko from "../ErkoContainer/OptionCardErko";
import developerPng from "../../../../public/assets/developer.png";
import assistantPng from "../../../../public/assets/assistant.png";
import advertiserPng from "../../../../public/assets/advertiser.png";
import memeMakerPng from "../../../../public/assets/memeMaker.png";
import designerPng from "../../../../public/assets/designer.png";
import editorPng from "../../../../public/assets/editor.png";
import intershipPng from "../../../../public/assets/intership.png";
import salesPng from "../../../../public/assets/sales.png";
import DArtistPng from "../../../../public/assets/3DArtist.png";
import strategistPng from "../../../../public/assets/strategist.png";
import creativePng from "../../../../public/assets/creative.png";

export default function JobsMainContainer() {
  return (
    <div
      className="flex mt-[1px] flex-row items-center justify-center w-full h-full h-sm:h-[600px] h-mm:h-[520px]  
  h-mn:h-[450px] h-mn:gap-y-[0px] h-sm:gap-y-[10px] h-mm:pt-[0px] gap-y-[40px] flex-wrap gap-x-[50px] bg-[#FFFFF0] 
border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
    >
      <OptionCardErko
        title="Developer"
        imageSrc={developerPng}
        link="/jobs/developer"
      />
      <OptionCardErko
        title="Assistant"
        imageSrc={assistantPng}
        link="/jobs/assistant"
      />
      <OptionCardErko
        title="Advertiser"
        imageSrc={advertiserPng}
        link="/jobs/advertiser"
      />
      <OptionCardErko
        title="Meme Maker"
        imageSrc={memeMakerPng}
        link="/jobs/meme-maker"
      />
      <OptionCardErko
        title="Graphic Designer"
        imageSrc={designerPng}
        link="/jobs/graphic-designer"
      />
      <OptionCardErko
        title="Video Editor"
        imageSrc={editorPng}
        link="/jobs/video-editor"
      />
      <OptionCardErko
        title="Student Internship"
        imageSrc={intershipPng}
        link="/jobs/student-internship"
      />
      <OptionCardErko
        title="Sales God"
        imageSrc={salesPng}
        link="/jobs/sales-god"
      />
      <OptionCardErko
        title="3D Artist"
        imageSrc={DArtistPng}
        link="/jobs/3d-artist"
      />
      <OptionCardErko
        title="Content Strategist"
        imageSrc={strategistPng}
        link="/jobs/content-strategist"
      />
      <OptionCardErko
        title="Creative Mind"
        imageSrc={creativePng}
        link="/jobs/creative-mind"
      />
    </div>
  );
}
