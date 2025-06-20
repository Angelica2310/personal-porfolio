import Image from "next/image";
import React from "react";

export default function Introduce() {
  return (
    <div className="grid md:grid-cols-[2fr_1fr] p-4 items-center md:pt-[10%]">
      <div className="pl-10 lg:pl-40">
        <p className="self-center text-4xl md:text-5xl md:self-start uppercase mb-7 font-serif">
          Let me <span className="text-[--grey]">introduce</span> myself
        </p>
        <div className="flex gap-5 lg:gap-8 flex-col text-xl md:text-2xl lg:text-3xl md:w-3/4">
          <p className="font-sans">
            I am a tech enthusiast passionate about coding and problem-solving.
            I enjoy exploring new technologies and expanding my skills.
          </p>
          <p className="font-sans">
            I specialize in <span className="text-[--grey]">React</span>{" "}
            development, using
            <span className="text-[--grey]"> Next.js</span> or{" "}
            <span className="text-[--grey]">Vite</span> for efficient and{" "}
            <span className="text-[--grey]">Tailwind CSS </span>
            for sleek, responsive designs.
          </p>
          <p className="font-sans">
            I also have experience working with{" "}
            <span className="text-[--grey]">
              Vue.js, Bootstrap, SQL databases, RESTful APIs
            </span>
            , and integrating front-end apps with back-end services built in C#.
          </p>
          <p className="font-sans">
            Always eager to learn, I love tackling new challenges and building
            innovative solutions through code!
          </p>
        </div>
      </div>

      <Image
        src="/girl.png"
        alt="girl"
        width={200}
        height={200}
        className="pl-10 w-[50vw] lg:w-[50vw] xl:w-[20vw] h-auto mt-7 place-self-center"
      />
    </div>
  );
}
