import React from "react";
import { Timeline } from "./animation/Timeline";
import { MapPinCheckInside, Captions } from "lucide-react";
import { ExpandableResume } from "./ExpandableResume";

export function TimelineDemo() {
  const data = [
     {
      title: "Apr 2026 - Present",
      content: (
        <div>
          <div className="text-base font-normal text-[--grey] md:text-lg flex gap-2">
            <MapPinCheckInside />
            <p>IDHL</p>
          </div>
          <div className="mb-8 text-base font-extrabold text-[--grey] md:text-lg flex gap-2">
            <Captions />
            UI Developer (Shopify platform)
          </div>
           <div className="mb-8 leading-8">
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-lg">
              •  Develop and maintain Shopify themes using Liquid, JavaScript, and OOP principles
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-lg">
              • Debug platform issues and support ongoing client Support Desk tickets
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-lg">
              • Work with Shopify metafields, metaobjects, and GraphQL Admin/Storefront APIs
            </div>
              <div className="flex items-center gap-2 text-base text-[--grey] md:text-lg">
              • Collaborate with developers, PMs, and account managers to deliver features on time
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2024 - Mar 2025",
      content: (
        <div>
          <div className="text-base font-normal text-[--grey] md:text-lg flex gap-2">
            <MapPinCheckInside />
            <p>TECH EDUCATORS & TAG RETAIL SYSTEMS</p>
          </div>
          <div className="mb-8 text-base font-extrabold text-[--grey] md:text-lg flex gap-2">
            <Captions />
            Junior Developer
          </div>
          <div className="mb-8 leading-8">
            <div className="text-base text-[--grey] md:text-lg">
              •{" "}
              <span className="font-bold">
                Junior Software Developer (TAG Retail Systems)
              </span>{" "}
              – Built features for a production- ready Vue.js application within
              a small agile team. Integrated REST APIs with a C# backend
              engineer, wrote and tested reusable components, and debugged
              cross-system issues to ensure reliability.
            </div>
            <div className="text-base text-[--grey] md:text-lg">
              •{" "}
              <span className="font-bold">
                Teaching Assistant / Location Lead
              </span>{" "}
              – Mentored junior developers in JavaScript, React, and API
              integration. Supported troubleshooting and code reviews,
              developing strong problem-solving and communication skills.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2021 - Sep 2022",
      content: (
        <div>
          <div className="text-base font-normal text-[--grey] md:text-lg flex gap-2">
            <MapPinCheckInside />
            <p>360 OFFICE LIMITED</p>
          </div>
          <div className="mb-8 text-base font-extrabold text-[--grey] md:text-lg flex gap-2">
            <Captions />
            Office Manager
          </div>
          <div className="mb-8 leading-8">
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-lg">
              • Delivered first-line IT support, troubleshooting technical
              issues across hardware and networks, often under time pressure
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-lg">
              • Collaborated with engineers to ensure smooth operations
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-lg">
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
          <div className="text-base font-normal text-[--grey] md:text-lg flex gap-2">
            <MapPinCheckInside />
            <p>REGUS, IWG GROUP</p>
          </div>
          <div className="mb-8 text-base font-extrabold text-[--grey] md:text-lg flex gap-2">
            <Captions />
            Acting Centre Manager
          </div>
          <div className="mb-8 leading-8">
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-lg">
              • Maintained site-wide IT equipment (PCs, printers, devices),
              resolving software/hardware issues
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-lg">
              • Partnered with central IT to implement process improvements that
              reduced technical downtime
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-lg">
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
