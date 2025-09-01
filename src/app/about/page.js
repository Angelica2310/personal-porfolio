import Skillset from "@/components/Skillset";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Me",
  description: "Find more information about myself and my skills",
};

export default function Introduce() {
  return (
    <div>
      <div className="grid md:grid-cols-[1fr_1fr] p-4 items-center pt-[30%] lg:pt-[10%] pl-10">
        <div className="md:w-3/4 mx-auto">
          <p className="text-4xl lg:text-5xl font-serif mb-7">
            Who <span className="text-[--grey]">Am I?</span>
          </p>
          <div className="flex gap-5 lg:gap-8 flex-col text-xl md:text-2xl lg:text-3xl text-justify">
            <p className="font-sans">
              Hi everyone, you can call me{" "}
              <span className="text-[--grey]">Angelica</span>. I'm living in{" "}
              <span className="text-[--grey]">the UK</span>, but origionally
              come from <span className="text-[--grey]">Viet Nam</span>.
            </p>
            <p className="font-sans">
              My background is in business management, but I recently completed
              a Software Development Bootcamp. I have a strong enthusiasm for
              technology and have finally found the right path for my career.
            </p>
            <blockquote className="text-base md:text-xl lg:text-2xl w-[90%] mx-auto my-10 text-[#555555] py-4 px-7 pl-10 border-l-8 border-[--pink] leading-relaxed relative bg-[rgb(237,237,237,0.7)]">
              <div className="before:content-['\201C'] before:text-[--pink] before:text-7xl before:absolute before:left-4 before:-top-4">
                No matter where you come from, your hard work will always pay
                off.
                <span className="block text-[#333333] font-bold mt-4">
                  Angelica
                </span>
              </div>
            </blockquote>
          </div>
        </div>

        <Image
          src="/computer-girl.png"
          alt="girl"
          width={300}
          height={300}
          // sizes="100%"
          className="pl-10 w-[90vw] xl:w-[30vw] h-auto place-self-center pb-5"
        />
      </div>
      <Skillset />
    </div>
  );
}
