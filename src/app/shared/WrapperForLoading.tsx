"use client";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const WrapperForLoading = ({ children }: WrapperProps) => {
  return (
    <>
      {/* For Desktop (≥1024px) → Wrap content inside a flexbox */}
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-full lg:h-screen lg:px-[50px] lg:py-[20px] lg:bg-[#008080]">
        {children}
      </div>

      {/* For Mobile (<1024px) → Show content normally */}
      <div className="lg:hidden">{children}</div>
    </>
  );
};

export default WrapperForLoading;
