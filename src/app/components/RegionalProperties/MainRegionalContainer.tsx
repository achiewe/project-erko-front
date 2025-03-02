"use client";
import React from "react";
import RegionalMap from "./RegionalMap";
import InfoModal from "../../shared/InfoModal";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/features/store";
import useOverflowControl from "@/app/hooks/useOverflowControl"; // Adjust the path as necessary

export default function MainRegionalContainer() {
  const openModal = useSelector(
    (store: RootState) => store.openModal.openModal
  );
  // Use the custom hook
  useOverflowControl(openModal);

  return (
    <div
      className={`flex flex-col py-[50px] gap-y-[80px] px-[15px] w-full items-center justify-start min-h-screen bg-[#FFFFF0] 
      border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] relative lg:min-h-[605px] lg:py-[0]`}
    >
      <RegionalMap />
      <InfoModal
        txt1="ERKO supports international projects, adapting and restructuring our teams to ensure the success of each project."
        txt2="The red dots on the map represent international locations where our teams are currently operating remotely."
        top="-180px"
      />
    </div>
  );
}
