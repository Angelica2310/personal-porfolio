import Skillset from "@/components/Skillset";
import Image from "next/image";
import React from "react";

export default function Introduce() {
  return (
    <div>
      <div className="grid md:grid-cols-[2fr_1fr] p-4 items-center pt-[30%] lg:pt-[10%]">
        <div className="pl-10 lg:pl-40">
          <p className="self-center text-4xl lg:text-5xl md:self-start font-serif mb-7">
            Who <span className="text-[--grey]">Am I?</span>
          </p>
          <div className="flex gap-5 lg:gap-8 flex-col text-xl md:text-2xl lg:text-3xl md:w-3/4 text-justify">
            <p>
              Hi everyone, you can call me{" "}
              <span className="text-[--grey]">Angelica</span>. I'm living in{" "}
              <span className="text-[--grey]">the UK</span>, but origionally
              come from <span className="text-[--grey]">Viet Nam</span>.
            </p>
            <p>
              I am currently worked as a junior software developer at Tag Retail
              Systems.
            </p>
            <p>
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
          width={400}
          height={400}
          // sizes="100%"
          className="pl-10 w-[90vw] xl:w-[40vw] h-auto mt-7 place-self-center"
        />
      </div>
      <Skillset />
    </div>
  );
}
