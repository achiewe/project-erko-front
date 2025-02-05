import React from "react";
import SocialsInfo from "./SocialsInfo";
import faceBookLink from "../../../../public/assets/facebookLink.png";
import instagramLink from "../../../../public/assets/instagramLink.png";
import tiktokLink from "../../../../public/assets/tiktokLink.png";

export default function SocialsContainer() {
  return (
    <div
      className="flex flex-col gap-y-[80px] w-full items-center justify-start min-h-screen bg-[#FFFFF0] 
      border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] py-[40px] relative"
    >
      <div className="flex items-start justify-between gap-x-[55px]">
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
      </div>
      <div className="flex justify-between gap-x-[55px] min-w-[229px]">
        <SocialsInfo
          profileUrl="https://www.tiktok.com/@erko.ge"
          imageSrc={tiktokLink}
          title="TikTok"
        />
      </div>
    </div>
  );
}
