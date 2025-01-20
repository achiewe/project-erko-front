"use client";
import LoadingContainer from "./components/Loading/LoadingContainer";
// import LoadingContainer from "./components/Loading/LoadingContainer";
import PageList from "./components/pageList/pageList";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#EEEEEE]">
      <main className="flex px-[15px] w-full min-h-screen py-[15px]">
        <PageList />
        <LoadingContainer />
      </main>
    </main>
  );
}
