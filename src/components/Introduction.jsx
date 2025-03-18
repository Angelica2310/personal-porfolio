import Image from "next/image";
import GenerateModel from "./GenerateModel";

export default function Introduction() {
  return (
    // grid grid-rows-2 h-screen overflow-hidden lg:grid-cols-2 md:min-h-screen w-full
    <div className="md:grid md:grid-cols-2 pt-[30%] md:pt-[10%]">
      <div className=" pl-[10%] md:pl-[20%] md:pt-[40%] lg:pt-[30%] xl:pt-[20%]">
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
        <p className="pt-10 md:pt-8 xl:pt-20 lg:pt-16 text-xl md:text-3xl lg:text-4xl xl:text-5xl text-[--grey] type-jobroles break-words"></p>
      </div>

      {/* <div className="relative lg:pt-[25%]"> */}
      <div className="animate-bounce">
        <GenerateModel />
      </div>
      {/* <button className=" lg:text-2xl animate-tada bottom-20">
        Move me around!
      </button> */}

      {/* <div className="block pt-[10%] lg:hidden pl-20">
            <Image
              src="/computer-girl.png"
              width={0}
              height={0}
              alt="computer girl"
              sizes="100%"
              className=" w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] h-auto animate-[fadein_1.5s_ease-in,wiggle_5s_infinite]"
            />
          </div> */}
      {/* </div> */}
    </div>
  );
}
