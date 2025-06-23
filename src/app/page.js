"use client";
import ConnectMe from "@/components/ConnectMe";
import Introduce from "@/components/Introduce";
import Introduction from "@/components/Introduction";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

export default function HomePage() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timeout);
  // }, []);
  return (
    <>
      {/* {isLoading ? (
        <div className="flex pt-[40%] md:pt-[20%] justify-center">
          <DotLoader color="var(--pink)" size={50} />
        </div>
      ) : ( */}
      <div>
        <Introduction />
        <Introduce />
        <ConnectMe />
      </div>
      {/* )} */}
    </>
  );
}
