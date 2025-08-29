import React from "react";
import { Timeline } from "./animation/Timeline";
import { MapPinCheckInside, Captions } from "lucide-react";
import { ExpandableResume } from "./ExpandableResume";

export function TimelineDemo() {
  const data = [
    {
      title: "Sep 2024 - Mar 2025",
      content: (
        <div>
          <div className="text-base font-normal text-[--grey] md:text-xl flex gap-2">
            <MapPinCheckInside />
            <p>TECH EDUCATORS & TAG RETAIL SYSTEMS</p>
          </div>
          <div className="mb-8 text-base font-extrabold text-[--grey] md:text-xl flex gap-2">
            <Captions />
            From Student to Junior Developer
          </div>
          <div className="mb-8 leading-8">
            <div className="text-base text-[--grey] md:text-xl">
              •{" "}
              <span className="font-bold">
                Software Development Bootcamp Student
              </span>{" "}
              – Delivered multiple real-world projects (React, Next.js, Node.js,
              SQL), applying agile workflows, Git version control, and REST API
              design. Learned to manage features end-to-end, from requirements
              to testing.
            </div>
            <div className="text-base text-[--grey] md:text-xl">
              •{" "}
              <span className="font-bold">
                Teaching Assistant / Location Lead
              </span>{" "}
              – Mentored junior developers in JavaScript, React, and API
              integration. Supported troubleshooting and code reviews,
              developing strong problem-solving and communication skills.
            </div>
            <div className="text-base text-[--grey] md:text-xl">
              •{" "}
              <span className="font-bold">
                Junior Software Developer (TAG Retail Systems)
              </span>{" "}
              – Built features for a production- ready Vue.js application within
              a small agile team. Integrated REST APIs with a C# backend
              engineer, wrote and tested reusable components, and debugged
              cross-system issues to ensure reliability.
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
