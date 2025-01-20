"use client";
import { useEffect } from "react";
import LoadingContainer from "./components/Loading/LoadingContainer";
import PageList from "./components/pageList/pageList";

export default function Home() {
  useEffect(() => {
    // Lock scrolling by setting the body's overflow to hidden
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when the component unmounts
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#EEEEEE]">
      <div className="flex px-[15px] w-full min-h-screen py-[15px]">
        <PageList />
        <LoadingContainer />
      </div>
    </main>
  );
}
