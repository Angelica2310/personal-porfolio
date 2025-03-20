import Image from "next/image";
import React from "react";

const tools = [
  { id: 1, src: "/github.png" },
  { id: 2, src: "/ios.png" },
  { id: 3, src: "/supabase.png" },
  { id: 4, src: "/vscode.png" },
];

console.log(tools);

export default function Skillset() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="uppercase font-mono py-10 text-2xl">
        professional <span className="text-[--grey]">skillset</span>
      </p>
      <div className="gap-5 grid grid-cols-4 px-4">
        {tools.map((tool) => (
          <div key={tool.id} className="icons">
            <Image
              src={tool.src}
              alt="img"
              width={100}
              height={100}
              className="w-[20vw]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
