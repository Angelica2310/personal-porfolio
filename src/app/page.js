// import GenerateModel from "@/components/GenerateModel";
import ConnectMe from "@/components/ConnectMe";
import Introduce from "@/components/Introduce";
import Introduction from "@/components/Introduction";
import React from "react";

// const MemoizedGenerateModel = React.memo(GenerateModel);

export default function HomePage() {
  return (
    <div className="">
      <Introduction />
      {/* <MemoizedGenerateModel /> */}
      <Introduce />
      <ConnectMe />
    </div>
  );
}
