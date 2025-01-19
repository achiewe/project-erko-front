"use client";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import { RootState } from "./redux/features/store";
import LoadingContainer from "./components/Loading/LoadingContainer";
import PageList from "./components/pageList/pageList";

export default function Home() {
  const isLoading = useSelector(
    (store: RootState) => store.isLoading.isLoading
  );
  return (
    <div className="flex w-full h-screen bg-[#d9d9d9]">
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <>
          <Header />
          <PageList />
        </>
      )}
    </div>
  );
}
