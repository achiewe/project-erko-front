"use client";
import { useEffect } from "react";
import LoadingContainer from "./components/Loading/LoadingContainer";

export default function Home() {
  useEffect(() => {
    // Set body overflow to hidden when loading page appears
    document.body.style.overflow = "hidden";

    // Clean up when the page transition completes (when you leave the loading page)
    return () => {
      document.body.style.overflow = "auto"; // Allow scrolling again
    };
  }, []);
  return (
    <main className="flex flex-col w-full h-screen bg-[#EEEEEE] overflow-hidden">
      <div className="flex px-[15px] py-[30px] w-full h-screen items-start overflow-hidden">
        <LoadingContainer />
      </div>
    </main>
  );
}
