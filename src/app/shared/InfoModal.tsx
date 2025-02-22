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
      className={`w-[233px] bg-[#F3F3F3] ${
        openModal ? "flex" : "hidden"
      }  flex-col px-[8px] py-[20px] absolute top-[190px] gap-[10px] justify-center items-center 
    border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)]`}
    >
      <p className="text-center text-[18px]">{txt1}</p>
      <p className="text-center text-[18px]">{txt2}</p>
      <ModalButton />
    </div>
  );
}
