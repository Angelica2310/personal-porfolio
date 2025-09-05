import React from "react";
import { TiltCard1 } from "./animation/tilteffect/TiltImg";
import ScrollReveal from "./animation/ScrollEffect";
import Link from "next/link";

export default function Introduce() {
  return (
    <div className="grid md:grid-cols-[2fr_1fr] p-4 items-center pt-[30%] lg:pt-[10%] pl-10">
      <div className="md:w-3/4 mx-auto">
        <p className="text-4xl md:text-5xl uppercase mb-7 font-serif">
          Let me <span className="text-[--grey]">introduce</span> myself
        </p>
        <div className="flex gap-5 lg:gap-8 flex-col text-xl md:text-2xl lg:text-3xl text-justify">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            <p className="font-sans pb-4">
              I am a tech enthusiast passionate about coding and
              problem-solving. I enjoy exploring new technologies and expanding
              my skills.
            </p>
            <p className="font-sans pb-4">
              I specialize in <span className="text-[--grey]">React</span>{" "}
              development, using
              <span className="text-[--grey]"> Next.js</span> or{" "}
              <span className="text-[--grey]">Vite</span> for efficient and{" "}
              <span className="text-[--grey]">Tailwind CSS </span>
              for sleek, responsive designs.
            </p>
            <p className="font-sans pb-4">
              I also have experience working with{" "}
              <span className="text-[--grey]">
                Vue.js, Bootstrap, SQL databases, RESTful APIs
              </span>
              , and integrating front-end apps with back-end services built in
              C#.
            </p>
            <p className="font-sans pb-6">
              Always eager to learn, I love tackling new challenges and building
              innovative solutions through code!
            </p>
            <Link
              href="/project"
              className="bg-[--background] px-6 py-2.5 rounded-lg cursor-pointer text-[--green] text-sm tracking-wider font-semibold outline-none border border-gray-300 shadow-[0_4px_20px_rgba(34,197,94,0.8)] hover:shadow-[0_6px_24px_rgba(34,197,94,1)] active:shadow-inner transition"
            >
              View My Projects
            </Link>
          </ScrollReveal>
        </div>
      </div>
      <TiltCard1 />
    </div>
  );
}
