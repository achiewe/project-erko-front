"use client";
import React from "react";
import ModalButton from "../components/RegionalProperties/ModalButton";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/features/store";

interface infoModalProps {
  txt1: string;
  txt2: string;
}

export default function InfoModal({ txt1, txt2 }: infoModalProps) {
  const openModal = useSelector(
    (store: RootState) => store.openModal.openModal
  );
  return (
    <div
      className="max-w-[300px] bg-[#F3F3F3] flex-col px-[8px] py-[20px] top-[-300px] h-fit left-0 right-[0] bottom-0 gap-[30px] justify-center items-center 
      border-r-2 border-b-2 border-gray-800 m-auto absolute z-10"
      style={{
        display: openModal ? "flex" : "none",
        boxShadow: openModal ? "1px 1px 3px rgba(0, 0, 0, 0.40)" : "none", // Applying the shadow conditionally
      }}
    >
      <p className="text-center text-[24px]">{txt1}</p>
      <p className="text-center text-[24px]">{txt2}</p>
      <ModalButton />
    </div>
  );
}
