import Image from "next/image";
import GenerateModel from "./GenerateModel";

export default function Introduction() {
  return (
    <div className="grid grid-rows-[1fr_2fr] h-screen overflow-hidden lg:grid-cols-2 md:min-h-screen w-full">
      <div className="pt-[30%] lg:pt-[40%] pl-20 lg:pl-40">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          <div className="flex gap-2 pb-2 md:pb-3 xl:pb-6">
            <p>Hi There! </p>
            <p className="animate-wiggle"> 👋🏻 </p>
          </div>
          <p>
            My name is{" "}
            <span className="text-[--grey]">Giang (Angelica) Le</span>
          </p>
        </div>
        <p className="pt-10 md:pt-8 xl:pt-20 lg:pt-16 text-xl md:text-3xl lg:text-4xl xl:text-5xl text-[--grey] type-jobroles"></p>
      </div>
      <div>
        <div className="relative lg:pt-[25%]">
          <div className=" hidden lg:block animate-[fadein_1.5s_ease-in-out,wiggle_5s_infinite]">
            <GenerateModel />
          </div>
          <button className="hidden lg:text-2xl lg:block absolute bottom-[18%] right-[50%] animate-tada">
            Move me around!
          </button>
          <div className="block pt-[10%] lg:hidden pl-20">
            <Image
              src="/computer-girl.png"
              width={0}
              height={0}
              alt="computer girl"
              sizes="100%"
              className=" w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] h-auto animate-[fadein_1.5s_ease-in,wiggle_5s_infinite]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
