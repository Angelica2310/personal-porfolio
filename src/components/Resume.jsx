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
              • Built projects using Vue.js and Bootstrap as part of a group
              collaboration
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Developed a real-life application with a C# backend and RESTful
              API
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Implemented user login functionality and fetched hardware and
              user data from a custom API
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Collaborated using Jira to create, manage, and update
              development tickets
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Used GitHub for version control, including pushing code and
              merging branches
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Ran and tested the application using Visual Studio
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
              issues efficiently
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Handled support requests via phone, email, and in-person,
              prioritising tasks effectively
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Logged and documented service requests with strong attention to
              detail
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Monitored toner alerts and helpdesk emails using Netaphor;
              assigned service calls to engineers
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
            <p>Regus, IWG Group</p>
          </div>
          <div className="mb-8 text-base font-extrabold text-[--grey] md:text-xl flex gap-2">
            <Captions />
            Acting Centre Manager
          </div>
          <div className="mb-8 leading-8">
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Set up and maintained hardware and software (PCs, laptops,
              printers, mobile devices)
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Delivered IT support to ensure smooth operation of systems and
              networks
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Worked with IT team to resolve issues and implement improvements
            </div>
            <div className="flex items-center gap-2 text-base text-[--grey] md:text-xl">
              • Acted as first-line support, resolving basic issues before
              escalation
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
