"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "./UseOutsideClick";
import Link from "next/link";

export function ExpandableResume() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="pb-10">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 md:h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-[--background] rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[450px] md:max-w-[550px] h-[60vh] md:h-fit md:max-h-[90%]  flex flex-col bg-[--background] rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-fill object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-[--grey] md:text-4xl text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[--grey] font-sans text-base md:text-xl h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full gap-7 flex flex-col md:flex-row">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer md:hover:bg-[--background]"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-[--grey] text-center md:text-left text-2xl"
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Education",
    src: "https://cdn.pixabay.com/photo/2017/09/24/19/17/pencils-2782840_1280.jpg",
    content: () => {
      return (
        <div>
          <p>• Software Development Bootcamp – TechEducators (12/2024)</p>
          <p>• CompTIA A+ (Core 1 & 2), IT Fundamentals (2020)</p>
          <p>• MBA – London School of Commerce (2014)</p>
          <p>• BA in Business & Management – St Mary’s University (06/2013)</p>
        </div>
      );
    },
  },
  {
    title: "Skills",
    src: "https://img.freepik.com/free-psd/3d-rendering-team-work_23-2151911561.jpg",
    content: () => {
      return (
        <div>
          <p>• Languages: JavaScript, HTML, CSS</p>
          <p>• Frameworks/Libraries: ReactJS, Next.js, Vue.js</p>
          <p>• Backend: Node.js, Express, SQL</p>
          <p>• Styling: Tailwind CSS, Bootstrap</p>
          <p>• Tools: Git, GitHub, Jira, Visual Studio, Postman</p>
          <p>• APIs: RESTful APIs</p>
          <p>• Databases: PostgreSQL, Supabase</p>
        </div>
      );
    },
  },
  {
    title: "Languages",
    src: "https://play-lh.googleusercontent.com/EOsf5t544MSvgNKAjjmYlTaApdMoB1awLmsitT3HrImFd1BmptSx6A6WaomoH5K2hVc",
    content: () => {
      return (
        <div>
          <p>• English: Fluent</p>
          <p>• Vietnamese: Native</p>
        </div>
      );
    },
  },
  {
    title: "Hobbies",
    src: "https://cdn.pixabay.com/photo/2018/08/04/18/08/origami-3584204_1280.jpg",
    content: () => {
      return (
        <div>
          <p>• Coding personal projects</p>
          <p>• Learning via YouTube/Udemy</p>
          <Link
            href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy84YmJlZDJmODMxZWIzYmE4L0VrUmRONzFlbFk5UGhDc2hxZGMtLTVzQllxa3U5enp4ZGhTVm5jU3JsMkh6Unc%5FZT1lTVRqS24&id=8BBED2F831EB3BA8%21sbd375d44955e4f8f842b21a9d73efb9b&cid=8BBED2F831EB3BA8"
            target="_blank"
          >
            •{" "}
            <span className="hover:text-[--pink]">Canva design projects </span>{" "}
            👈🏻 <small>click me!</small>
          </Link>
        </div>
      );
    },
  },
];
