import React from "react";
import Image from "next/image";
import { ThreeDCardDemo } from "@/components/animation/card/CardEffect";

export const metadata = {
  title: "My Projects",
  description: "Find more information about my projects",
};

export default function ProjectPage() {
  return (
    <div className="flex flex-col justify-center items-center pt-[30%] lg:pt-[10%]">
      <p className="uppercase font-sans self-center text-2xl lg:text-4xl">
        My latest <span className="text-[--grey]">works</span>
      </p>
      <p className="pb-10 pt-3 text-xl lg:text-2xl">
        Some cool things I’ve worked on recently
      </p>

      <ThreeDCardDemo />
    </div>
  );
}
