import FormButton from "@/app/components/FormComponents/FormButton";
import FormPage from "@/app/components/FormComponents/FormPage";
import Header from "@/app/components/Header/Header";
import Wrapper from "@/app/shared/Wrapper";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Wrapper>
      <div className="bg-[#EEEEEE] lg:max-w-[960px] lg:max-h-[700px] lg:shadow-lg lg:shadow-gray-800">
        <Header />
        <div className="flex px-[5px] w-full h-full items-end pb-[10px] flex-col lg:px-[20px]">
          <FormButton />
          <div
            className="flex flex-row items-start sm:justify-center justify-start w-full 
          h-full h-mn:gap-y-[0px] h-sm:gap-y-[10px] h-mm:pt-[0px] gap-y-[40px] flex-wrap gap-x-[50px] bg-[#FFFFF0] 
          border-r-2 border-b-2 border-gray-800 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
          >
           <Suspense fallback={<div>Loading...</div>}>
              <FormPage />
            </Suspense>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
