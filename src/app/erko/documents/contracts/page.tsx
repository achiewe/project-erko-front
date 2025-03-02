import ContractsContainer from "@/app/components/ContractsCont/ContractsContainer";
import Header from "@/app/components/Header/Header";
import BackButton from "@/app/shared/BackButton";
import Wrapper from "@/app/shared/Wrapper";
import React from "react";

export default function page() {
  return (
    <Wrapper>
      <div className="w-full h-full bg-[#EEEEEE] lg:max-w-[960px] lg:min-h-[697px] lg:shadow-lg lg:shadow-gray-800">
        <Header />
        <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px] lg:px-[20px]">
          <BackButton destination="/erko/documents" />
          <ContractsContainer />
        </div>
      </div>
    </Wrapper>
  );
}
