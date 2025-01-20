"use client";
import LoadingContainer from "./components/Loading/LoadingContainer";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen bg-[#EEEEEE]">
      <div className="flex px-[15px] w-full h-full items-start">
        <LoadingContainer />
      </div>
    </main>
  );
}
