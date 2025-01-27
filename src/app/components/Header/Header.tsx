"use client";
import Image from "next/image";
import erkoLogo from "../../../../public/erkoLogo.png";
import DropDownMenu from "./DropDownMenu";
import { useDispatch } from "react-redux";
import { setIsDropDown } from "@/app/redux/features/DropDownSlice";
import HeaderOptionBtn from "./HeaderOptionBtn";
export default function Header() {
  const dispatch = useDispatch();
  return (
    <header className="w-full bg-white py-[5px] border-b-[1.9px] border-black shadow-[0px_1px_0px_rgba(0,0,0,0.5)] mb-[10px]">
      <nav className="w-full flex flex-row justify-start items-center gap-[20px] pl-[15px] relative">
        <Image
          src={erkoLogo}
          alt="erko logo"
          onClick={() => {
            location.reload();
          }}
        />
        <HeaderOptionBtn
          text="File"
          onClick={() => {
            dispatch(setIsDropDown());
          }}
        />
        <HeaderOptionBtn text="View" />
        <HeaderOptionBtn text="Surprise" />
        <HeaderOptionBtn text="Help" />
        <DropDownMenu />
      </nav>
    </header>
  );
}
