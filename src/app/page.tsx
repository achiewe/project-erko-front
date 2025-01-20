"use client";
import Header from "./components/Header/Header";
import LoadingContainer from "./components/Loading/LoadingContainer";
// import LoadingContainer from "./components/Loading/LoadingContainer";
import PageList from "./components/pageList/pageList";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen bg-[#d9d9d9]">
      <Header />
      <main className="flex px-[15px] py-[15px] w-full">
        <PageList />
        <LoadingContainer />
      </main>
    </main>
  );
}
