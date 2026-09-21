import GenerateModel from "./GenerateModel";
import { TextShimmerWave } from "./animation/ShimmerText";
import { BadgeEffect } from "./animation/BadgeEffect";

export default function Introduction() {
  return (
    <div className="md:grid md:grid-cols-2 md:items-center pt-28 pb-16 md:pt-24 md:pb-24">
      <div className="pl-[10%] md:pl-[20%]">
        <div className="font-sans text-2xl lg:text-3xl">
          <div className="flex gap-2 pb-2 md:pb-3 xl:pb-6">
            <p>Hi</p>
            <p className="animate-wiggle"> 👋🏻 </p>
          </div>
          <p>
            My name is{" "}
            <span className="text-[--grey]">Angelica Giang Le</span>
          </p>
        </div>
        <p className="font-sans pt-8 md:pt-10 text-xl md:text-2xl lg:text-3xl text-[--grey] type-jobroles break-words"></p>
        <div className="flex flex-wrap items-center gap-3 pt-8">
          <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-[--green] border-b border-[--green] pb-1">
            Certifications
          </span>
          <BadgeEffect />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[50vw] h-[50vh]">
          <GenerateModel />
        </div>
     
      </div>
    </div>
  );
}
