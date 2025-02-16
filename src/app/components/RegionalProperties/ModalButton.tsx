import { setOpenModal } from "@/app/redux/features/ModalOpenSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function ModalButton() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(setOpenModal(false));
      }}
      className="border-r-2 w-[69px] justify-center items-center text-[20px] h-[30px] border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)]"
    >
      OK
    </button>
  );
}
