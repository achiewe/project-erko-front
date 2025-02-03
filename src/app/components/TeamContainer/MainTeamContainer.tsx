import React from "react";
import TeamCardErko from "./TeamCardErko";
import LukaPxl from "../../../../public/assets/luka pixel .png";
import TemikoPxl from "../../../../public/assets/Temiko pixel .png";
import AchiPxl from "../../../../public/assets/Achi pixelman .png";
export default function MainTeamContainer() {
  return (
    <div
      className="flex mt-[1px] flex-row items-start justify-center w-full h-full sm:justify-center 
  gap-y-[0px] flex-wrap gap-x-[30px] bg-[#FFFFF0] border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
    >
      <TeamCardErko title="Luka" imageSrc={LukaPxl} link="/erko/team/luka" />
      <TeamCardErko
        title="Temiko"
        imageSrc={TemikoPxl}
        link="/erko/team/temiko"
      />
      <TeamCardErko title="Achi" imageSrc={AchiPxl} link="/erko/team/achi" />
      <TeamCardErko title="Luka" imageSrc={LukaPxl} link="/erko/socials" />
      <TeamCardErko title="Luka" imageSrc={LukaPxl} link="/erko/socials" />
      <TeamCardErko title="Luka" imageSrc={LukaPxl} link="/erko/socials" />
    </div>
  );
}
