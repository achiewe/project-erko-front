"use client";
import React from "react";
import ModalButton from "./ModalButton";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/features/store";

export default function InfoModal() {
  const openModal = useSelector(
    (store: RootState) => store.openModal.openModal
  );
  return (
    <div
      className={`w-[233px] bg-[#F3F3F3] ${
        openModal ? "flex" : "hidden"
      }  flex-col p-[5px] absolute top-[200px] gap-[10px] justify-center items-center 
    border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)]`}
    >
      <p className="text-center text-[18px]">
        ERKO supports international projects, adapting and restructuring our
        teams to ensure the success of each project.
      </p>
      <p className="text-center text-[18px]">
        The red dots on the map represent international locations where our
        teams are currently operating remotely.
      </p>
      <ModalButton />
    </div>
  );
}
