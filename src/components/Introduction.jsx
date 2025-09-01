import GenerateModel from "./GenerateModel";
import { TextShimmerWave } from "./animation/ShimmerText";
import { BadgeEffect } from "./animation/BadgeEffect";

export default function Introduction() {
  return (
    <div className="md:grid md:grid-cols-2 pt-[30%] md:py-[10%]">
      <div className=" pl-[10%] md:pl-[20%] md:pt-[40%] lg:pt-[30%] xl:pt-[20%]">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          <div className="flex gap-2 pb-2 md:pb-3 xl:pb-6">
            <p>Hi There! </p>
            <p className="animate-wiggle"> 👋🏻 </p>
          </div>
          <div className="flex gap-1 items-center">
            <p>
              My name is{" "}
              <span className="text-[--grey]">Giang (Angelica) Le</span>
            </p>
            <BadgeEffect />
          </div>
        </div>
        <p className="pt-10 md:pt-8 xl:pt-20 lg:pt-16 text-xl md:text-3xl lg:text-4xl xl:text-5xl text-[--grey] type-jobroles break-words"></p>
      </div>
      <div className="flex flex-col items-center">
        <div className="animate-fadeInUp w-[50vw] h-[50vh]">
          <GenerateModel />
        </div>
        <TextShimmerWave className="text-2xl md:text-4xl" duration={1}>
          3D Interactive Object
        </TextShimmerWave>
        <p className="font-sans text-[--grey]">
          "Build with ThreeJS - try spinning me around!"
        </p>
      </div>
    </div>
  );
}
