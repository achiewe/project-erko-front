"use client";
import Header from "@/app/components/Header/Header";
import BackButton from "@/app/shared/BackButton";
import MusicContainer from "@/app/components/MusicContainer/MusicContainer";
import React from "react";
import Wrapper from "@/app/shared/Wrapper";
import { useMusicPlayer } from "@/app/hooks/useMusicPlayer";
import songs from "@/app/data/data.json";

export function MusicPageContent() {
  const { stopSong } = useMusicPlayer(songs);

  const handleBackButtonClick = () => {
    stopSong();
  };

  return (
    <Wrapper>
      <div className="w-full h-full bg-[#EEEEEE] lg:max-w-[960px] lg:min-h-[697px] lg:shadow-lg lg:shadow-gray-800">
        <Header />
        <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px] lg:px-[20px]">
          <BackButton destination="/erko" onClick={handleBackButtonClick} />
          <MusicContainer />
        </div>
      </div>
    </Wrapper>
  );
}
