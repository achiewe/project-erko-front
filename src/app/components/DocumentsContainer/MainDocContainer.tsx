import React from "react";
import DocumentFolders from "./DocumentFolders";

export default function MainDocContainer() {
  return (
    <div
      className="flex flex-row flex-wrap w-full items-start justify-start min-h-screen bg-[#FFFFF0] 
border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] relative"
    >
      <DocumentFolders navigate="documents/about" folderName="About ERKO" />
      <DocumentFolders navigate="documents/contracts" folderName="Contracts" />
      <DocumentFolders
        navigate="documents/digital-assets"
        folderName="Digital Assets"
      />
    </div>
  );
}
