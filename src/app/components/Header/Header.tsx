"use client";
import Image from "next/image";
import erkoLogo from "../../../../public/assets/erkoLogo.png";
import DropDownMenu from "./DropDownMenu";
import { useDispatch } from "react-redux";
import { setIsDropDown } from "@/app/redux/features/DropDownSlice";
import HeaderOptionBtn from "./HeaderOptionBtn";
export default function Header() {
  const dispatch = useDispatch();
  return (
    <header className="w-full bg-white py-[10px] border-b-[2px] border-black shadow-lg">
      <nav className="w-full flex flex-row justify-start items-center gap-[20px] pl-[15px] relative">
        <Image src={erkoLogo} alt="erko logo" />
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
