"use client";
import { useEffect } from "react";
import LoadingContainer from "./components/Loading/LoadingContainer";
import WrapperForLoading from "./shared/WrapperForLoading";

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
    <WrapperForLoading>
      <main className="flex flex-col w-full h-screen bg-[#EEEEEE] overflow-hidden lg:h-full lg:max-w-[960px] lg:max-h-[700px]">
        <div className="flex px-[15px] py-[8px] w-full h-screen items-start overflow-hidden">
          <LoadingContainer />
        </div>
      </main>
    </WrapperForLoading>
  );
}
