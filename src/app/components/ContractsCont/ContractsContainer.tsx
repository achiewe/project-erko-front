import React from "react";
import ContractFile from "./ContractFile";

export default function ContractsContainer() {
  return (
    <div
      className="flex flex-row flex-wrap w-full items-start justify-start min-h-screen bg-[#FFFFF0] 
border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] relative"
    >
      <ContractFile
        navigate="contracts/one-month-trial"
        fileName="One Month (trial)"
      />
      <ContractFile navigate="contracts/full-package" fileName="Full Package" />
      <ContractFile
        navigate="contracts/ads-sprint-plan"
        fileName="Ads Sprint"
      />
      <ContractFile navigate="contracts/content-plan" fileName="Content Plan" />
    </div>
  );
}
