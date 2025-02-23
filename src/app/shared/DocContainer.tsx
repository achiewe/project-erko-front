// DocumentContainer.js
import React, { ReactNode } from "react";

interface DocumentContainerProps {
  children: ReactNode;
  gap?: string;
  justifyContent?: string;
}

export default function DocContainer({
  children,
  gap,
  justifyContent,
}: DocumentContainerProps) {
  return (
    <div
      className="flex flex-row flex-wrap w-full items-start relative gap-y-[30px]"
      style={{ gap: gap, justifyContent: justifyContent }}
    >
      {children} {/* Render the passed children */}
    </div>
  );
}
