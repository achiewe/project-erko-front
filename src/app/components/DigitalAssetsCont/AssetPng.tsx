"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ImageModalProps {
  src: StaticImageData;
  alt: string;
  imgTitle: string;
}

export default function AssetPng({ src, alt, imgTitle }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={toggleModal}
        style={{ cursor: "pointer" }}
        className="flex flex-col gap-[15px] items-center justify-center"
      >
        <Image src={src} alt={alt} width={160} height={165} />
        <h3 className="text-[20px] w-[100px] text-center">{imgTitle}</h3>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          onClick={toggleModal}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
        >
          <div className="relative w-4/5 max-w-3xl">
            <Image
              src={src}
              alt={alt}
              width={900}
              height={900}
              layout="responsive"
            />
          </div>
        </div>
      )}
    </>
  );
}
