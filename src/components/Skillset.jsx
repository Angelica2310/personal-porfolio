import Image from "next/image";
import React from "react";

const tools = [
  { id: 1, src: "/github.png" },
  { id: 2, src: "/ios.png" },
  { id: 3, src: "/supabase.png" },
  { id: 4, src: "/vscode.png" },
  { id: 5, src: "/jira.png" },
];

const softSkills = [
  { id: 1, src: "/communication.png" },
  { id: 2, src: "/problem-solving.png" },
  { id: 3, src: "/teamwork.png" },
  { id: 4, src: "/time-management.png" },
];

const frameworks = [
  { id: 1, src: "/html.png" },
  { id: 2, src: "/css.png" },
  { id: 3, src: "/javascript.png" },
  { id: 4, src: "/api.png" },
  { id: 5, src: "/json.png" },
  { id: 6, src: "/react.png" },
  { id: 7, src: "/sql.png" },
  { id: 8, src: "/tailwind.png" },
  { id: 9, src: "/vuejs.png" },
  { id: 10, src: "/bootstrap.png" },
];

export default function Skillset() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="uppercase font-sans self-center text-2xl lg:text-4xl pb-5">
        professional <span className="text-[--grey]">skillset</span>
      </p>
      <div className="gap-7 grid grid-cols-2 md:grid-cols-5 px-4 pb-20">
        {frameworks.map((framework) => (
          <div key={framework.id} className="card">
            <div className="w-[25vw] md:w-[13vw] h-24 md:h-32 lg:h-40 flex justify-center items-center p-2 hover:scale-105 transition-transform duration-200 overflow-hidden">
              <Image src={framework.src} alt="img" width={50} height={50} />
            </div>
          </div>
        ))}
      </div>

      <p className="uppercase font-sans self-center text-2xl lg:text-4xl pb-5">
        Tools <span className="text-[--grey]">I use</span>
      </p>
      <div className="gap-7 grid grid-cols-2 md:grid-cols-5 px-4 pb-20">
        {tools.map((tool) => (
          <div key={tool.id} className="card">
            <div className="w-[25vw] md:w-[13vw] h-24 md:h-32 lg:h-40 flex justify-center items-center p-2 hover:scale-105 transition-transform duration-200">
              <Image src={tool.src} alt="img" width={50} height={50} />
            </div>
          </div>
        ))}
      </div>

      <p className="uppercase font-sans self-center text-2xl lg:text-4xl pb-5">
        Softskill <span className="text-[--grey]">I have</span>
      </p>
      <div className="gap-7 grid grid-cols-2 md:grid-cols-4 px-4 pb-10">
        {softSkills.map((softSkill) => (
          <div key={softSkill.id} className="card">
            <div className="w-[25vw] md:w-[13vw] h-24 md:h-32 lg:h-40 flex justify-center items-center p-2 hover:scale-105 transition-transform duration-200">
              <Image src={softSkill.src} alt="img" width={50} height={50} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
