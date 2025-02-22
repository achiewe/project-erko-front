import Header from "@/app/components/Header/Header";
import BackButton from "@/app/shared/BackButton";
import MemberCard from "@/app/components/MemberCard/MemberCard";
import lukaPxl from "../../../../../public/assets/luka pixel .png";
import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-[#EEEEEE]">
      <Header />
      <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px]">
        <BackButton destination="/erko/team" />
        <MemberCard
          title="About Luka"
          imageSrc={lukaPxl}
          info={[
            "Achi Mamukashvili is a skilled React developer and full-stack engineer, transforming digital experiences through seamless front-end interfaces and robust back-end solutions. With expertise in React.js, TypeScript, Next.js, and Node.js, Achi crafts high-performance web applications that deliver outstanding user experiences.",

            "At EPAM Systems, Achi is optimizing application performance, solving complex front-end challenges, and ensuring responsive design across platforms. From building interactive interfaces for OSINT for Ukraine to mentoring future developers as a TA Assistant, Achi thrives in dynamic, high-impact environments.",

            "With a passion for innovation, continuous learning, and a holistic approach to web development, Achi is shaping the future of technology and software engineering in the digital age.",
          ]}
        />
      </div>
    </div>
  );
}
