"use client";
import Image from "next/image";
import erkoLogo from "../../../../public/assets/erkoLogo.png";
import DropDownMenu from "./DropDownMenu";
import { useDispatch } from "react-redux";
import { setIsDropDown } from "@/app/redux/features/DropDownSlice";
import HeaderOptionBtn from "./HeaderOptionBtn";
import { useRouter } from "next/navigation";
export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <header className="w-full bg-white py-[5px] border-b-[1.9px] border-black shadow-[0px_1px_0px_rgba(0,0,0,0.5)] mb-[10px]">
      <nav className="w-full flex flex-row justify-start items-center gap-[20px] pl-[15px]">
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
            dispatch(setIsDropDown("File"));
          }}
        />
        <HeaderOptionBtn
          text="View"
          onClick={() => {
            dispatch(setIsDropDown("View"));
          }}
        />
        <HeaderOptionBtn
          text="Surprise"
          onClick={() => {
            dispatch(setIsDropDown("Surprise"));
          }}
        />
        <HeaderOptionBtn
          text="Help"
          onClick={() => {
            dispatch(setIsDropDown(null));
            router.replace("/erko/help");
            router.refresh();
          }}
        />
        <DropDownMenu />
      </nav>
    </header>
  );
}
