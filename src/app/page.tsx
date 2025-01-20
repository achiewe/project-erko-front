"use client";
// import { useSelector } from "react-redux";
import LoadingContainer from "./components/Loading/LoadingContainer";
// import { RootState } from "./redux/features/store";
// import Link from "next/link";

export default function Home() {
  // const isLoading = useSelector(
  //   (store: RootState) => store.isLoading.isLoading
  // );
  return (
    <main className="flex flex-col w-full h-screen bg-[#EEEEEE]">
      <div className="flex px-[15px] py-[30px] w-full h-full items-start">
        <LoadingContainer />
      </div>
    </main>
  );
}
