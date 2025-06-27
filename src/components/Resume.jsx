import React from "react";
import { Timeline } from "./animation/Timeline";
import { MapPinCheckInside, Captions } from "lucide-react";
import { ExpandableResume } from "./ExpandableResume";

export function TimelineDemo() {
  const data = [
    {
      title: "Mar 2025",
      content: (
        <div>
          <div className="text-base font-normal text-[--grey] md:text-xl flex gap-2">
            <MapPinCheckInside />
            <p>TAG RETAIL SYSTEMS</p>
          </div>
          <div className="mb-8 text-base font-extrabold text-[--grey] md:text-xl flex gap-2">
            <Captions />
            Junior Software Developer
          </div>
          <div className="mb-8 leading-8">
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Contributed to a production-ready Vue.js application within a
              small agile team, collaborating closely through daily standups and
              Jira task boards.
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Collaborated with a backend engineer working in C# to integrate
              RESTful APIs, implementing secure user login and displaying
              hardware data on the frontend, which deepened my full-stack
              development knowledge.
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Applied Git best practices for version control and collaboration
              (feature branches, pull requests, merging).
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Gained confidence working in a real-world development cycle,
              adapting quickly to new tools like Visual Studio and Bootstrap
              while consistently meeting sprint goals.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2021 - Sep 2022",
      content: (
        <div>
          <div className="text-base font-normal text-[--grey] md:text-xl flex gap-2">
            <MapPinCheckInside />
            <p>360 OFFICE LIMITED</p>
          </div>
          <div className="mb-8 text-base font-extrabold text-[--grey] md:text-xl flex gap-2">
            <Captions />
            Office Manager
          </div>
          <div className="mb-8 leading-8">
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Delivered first-line IT support, troubleshooting technical
              issues across hardware and networks, often under time pressure
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Collaborated with engineers to ensure smooth operations
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Learned new tools (Netaphor, ticketing systems) on the job,
              showing fast adaptability
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2017 - July 2021",
      content: (
        <div>
          <div className="text-base font-normal text-[--grey] md:text-xl flex gap-2">
            <MapPinCheckInside />
            <p>REGUS, IWG GROUP</p>
          </div>
          <div className="mb-8 text-base font-extrabold text-[--grey] md:text-xl flex gap-2">
            <Captions />
            Acting Centre Manager
          </div>
          <div className="mb-8 leading-8">
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Maintained site-wide IT equipment (PCs, printers, devices),
              resolving software/hardware issues
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Partnered with central IT to implement process improvements that
              reduced technical downtime
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Demonstrated ownership, multitasking, and technical
              troubleshooting across a multi- client workspace.
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
      <ExpandableResume />
    </>
  );
}
