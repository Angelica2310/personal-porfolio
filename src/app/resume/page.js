"use client";
import Image from "next/image";
import { useState, Suspense } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ResumePage() {
  const files = [
    { id: 1, src: "/CV1.png" },
    { id: 2, src: "/CV2.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClickImage(index) {
    setCurrentIndex(index);
  }

  const changePage = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === files.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? files.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <div className="relative">
      <div className=" flex justify-center items-center flex-col p-4 w-full">
        <div className="hidden">
          {files.map((file, index) => (
            <div key={file.id}>
              <Image
                src={file.src}
                alt="img"
                width={100}
                height={100}
                onClick={() => handleClickImage(index)}
              />
            </div>
          ))}
        </div>
        {/* DISPLAY IMAGE */}
        <div className="flex cursor-pointer relative py-[20%] md:py-[10%]">
          {currentIndex > 0 && (
            <ChevronLeft
              onClick={() => changePage("prev")}
              className="fixed top-1/2 -translate-y-1/2 left-[2vw] md:left-[15vw] w-8 h-8 md:w-10 md:h-10 border rounded-2xl border-[--darktext] cursor-pointer z-50"
            />
          )}

          <div className=" shadow-2xl animate-fadeInDown pt-4 w-[80vw] md:w-[55vw]">
            {/* <Suspense> */}
            <Image
              src={files[currentIndex].src}
              alt="CV img"
              width={0}
              height={0}
              sizes="100%"
              className="transition-opacity duration-500 opacity-0"
              onLoad={(e) => {
                e.currentTarget.classList.remove("opacity-0");
                e.currentTarget.classList.add("opacity-100");
              }}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            {/* </Suspense> */}
          </div>
          {currentIndex < files.length - 1 && (
            <ChevronRight
              onClick={() => changePage("next")}
              className="fixed top-1/2 -translate-y-1/2 right-[2vw] md:right-[15vw] w-8 h-8 md:w-10 md:h-10 border rounded-2xl border-[--darktext] cursor-pointer z-50"
            />
          )}
        </div>
      </div>
    </div>
  );
}
