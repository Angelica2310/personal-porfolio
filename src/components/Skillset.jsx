import Image from "next/image";
import React from "react";

const tools = [
  { id: 1, src: "/github.png", label: "GitHub" },
  { id: 2, src: "/ios.png", label: "iOS" },
  { id: 3, src: "/windows.png", label: "Windows" },
  { id: 4, src: "/supabase.png", label: "Supabase" },
  { id: 5, src: "/vscode.png", label: "VS Code" },
  { id: 6, src: "/vscodestudio.png", label: "Visual Studio" },
  { id: 7, src: "/jira.png", label: "Jira" },
  { id: 8, src: "/trello.png", label: "Trello" },
];

const softSkills = [
  { id: 1, src: "/communication.png", label: "Communication" },
  { id: 2, src: "/problem-solving.png", label: "Problem Solving" },
  { id: 3, src: "/teamwork.png", label: "Teamwork" },
  { id: 4, src: "/time-management.png", label: "Time Management" },
];

const frameworks = [
  { id: 1, src: "/html.png", label: "HTML" },
  { id: 2, src: "/css.png", label: "CSS" },
  { id: 3, src: "/javascript.png", label: "JavaScript" },
  { id: 4, src: "/api.png", label: "API" },
  { id: 5, src: "/json.png", label: "JSON" },
  { id: 6, src: "/react.png", label: "React" },
  { id: 7, src: "/sql.png", label: "SQL" },
  { id: 8, src: "/tailwind.png", label: "Tailwind CSS" },
  { id: 9, src: "/vuejs.png", label: "Vue.js" },
  { id: 10, src: "/bootstrap.png", label: "Bootstrap" },
  { id: 11, src: "/shopify.png", label: "Shopify" },
  { id: 12, src: "/liquid.png", label: "Liquid", filterBlack: true },
];

export default function Skillset() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="uppercase font-sans self-center text-2xl lg:text-3xl pb-5">
        professional <span className="text-[--grey]">skillset</span>
      </p>
      <div className="gap-7 grid grid-cols-2 md:grid-cols-5 px-4 pb-20">
        {frameworks.map((framework) => (
          <div key={framework.id} className="card">
            <div className="w-[25vw] md:w-[13vw] h-24 md:h-32 lg:h-40 flex flex-col justify-center items-center gap-2 p-2 hover:scale-105 transition-transform duration-200 overflow-hidden">
              <Image
                src={framework.src}
                alt={framework.label}
                width={50}
                height={50}
                className={framework.filterBlack ? "brightness-0" : ""}
              />
              <span className="text-xs md:text-sm font-sans text-[--grey] text-center">
                {framework.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="uppercase font-sans self-center text-2xl lg:text-3xl pb-5">
        Tools <span className="text-[--grey]">I use</span>
      </p>
      <div className="gap-7 grid grid-cols-2 md:grid-cols-4 px-4 pb-20">
        {tools.map((tool) => (
          <div key={tool.id} className="card">
            <div className="w-[25vw] md:w-[13vw] h-24 md:h-32 lg:h-40 flex flex-col justify-center items-center gap-2 p-2 hover:scale-105 transition-transform duration-200">
              <Image src={tool.src} alt={tool.label} width={50} height={50} />
              <span className="text-xs md:text-sm font-sans text-[--grey] text-center">
                {tool.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="uppercase font-sans self-center text-2xl lg:text-3xl pb-5">
        Softskill <span className="text-[--grey]">I have</span>
      </p>
      <div className="gap-7 grid grid-cols-2 md:grid-cols-4 px-4 pb-10">
        {softSkills.map((softSkill) => (
          <div key={softSkill.id} className="card">
            <div className="w-[25vw] md:w-[13vw] h-24 md:h-32 lg:h-40 flex flex-col justify-center items-center gap-2 p-2 hover:scale-105 transition-transform duration-200">
              <Image
                src={softSkill.src}
                alt={softSkill.label}
                width={50}
                height={50}
              />
              <span className="text-xs md:text-sm font-sans text-[--grey] text-center">
                {softSkill.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
