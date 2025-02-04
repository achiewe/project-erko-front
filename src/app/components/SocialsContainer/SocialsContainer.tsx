import React from "react";
import SocialsInfo from "./SocialsInfo";
import faceBookLink from "../../../../public/assets/facebookLink.png";
import instagramLink from "../../../../public/assets/instagramLink.png";
import tiktokLink from "../../../../public/assets/tiktokLink.png";
import youtubeLink from "../../../../public/assets/youtube.png";

export default function SocialsContainer() {
  return (
    <div
      className="flex mt-[1px] flex-row items-center justify-center w-full h-full gap-y-[0px] flex-wrap gap-x-[30px] bg-[#FFFFF0] 
  border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
    >
      <SocialsInfo
        profileUrl="https://www.facebook.com/ErkoAgency"
        imageSrc={faceBookLink}
        title="Facebook"
      />
      <SocialsInfo
        profileUrl="https://www.instagram.com/erko.agency?igsh=MXB3NmFwMTY3Z2djYg=="
        imageSrc={instagramLink}
        title="Instagram"
      />
      <SocialsInfo
        profileUrl="https://www.tiktok.com/@erko.ge"
        imageSrc={tiktokLink}
        title="TikTok"
      />
      <SocialsInfo
        profileUrl="https://www.facebook.com/ErkoAgency"
        imageSrc={youtubeLink}
        title="YouTube"
      />
    </div>
  );
}
