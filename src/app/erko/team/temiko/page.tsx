import Header from "@/app/components/Header/Header";
import MemberCard from "@/app/components/MemberCard/MemberCard";
import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-[#EEEEE]">
      <Header />
      <MemberCard />
    </div>
  );
}
