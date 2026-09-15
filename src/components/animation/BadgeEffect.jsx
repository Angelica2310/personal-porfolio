"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/components/UseOutsideClick";
import Link from "next/link";

export function BadgeEffect() {
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
    <div className="inline-block align-middle">
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
              ref={ref}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-[90vw] max-w-[450px] md:max-w-[550px] h-fit max-h-[90vh] flex flex-col bg-[--background] rounded-3xl overflow-hidden"
            >
              <div>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </div>

              <div>
                <div className="flex justify-between items-start p-4"></div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[--grey] font-sans text-base md:text-xl h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
      <ul className="flex flex-row md:gap-3">
        {cards.map((card, index) => (
          <motion.div
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            whileHover={{ y: -4 }}
            className="group relative p-0.5 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer transform "
          >
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <div>
                {/* metallic border wrapper */}
                <div className="relative p-[2px] rounded-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 shadow-md overflow-hidden">
                  {/* shine sweep overlay */}
                  <span
                    className="pointer-events-none absolute top-0 left-[-150%] h-full w-[60%]
                     bg-gradient-to-r from-transparent via-white/80 to-transparent
                     blur-sm opacity-90 rotate-12
                     transition-transform duration-700 ease-out
                     group-hover:translate-x-[300%] animate-shine"
                  />
                  {/* inner card */}
                  <div className="relative bg-white rounded-full p-0.5 flex justify-center items-center">
                    <img
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] rounded-full object-cover object-top"
                    />
                  </div>
                </div>
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
    title: "Badge",
    src: "https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    content: () => {
      return (
        <div>
          <p>Microsoft Certified: Azure Fundamentals (AZ-900)</p>
          <Link
            href="https://learn.microsoft.com/api/credentials/share/en-us/GiangLe-6769/D121C8960831F00E?sharingId=8289F237B07CA743"
            target="_blank"
          >
            <span className="hover:text-[--pink]">Verify Credential </span> 👈🏻
          </Link>
        </div>
      );
    },
  },
  {
    title: "Developing Apps for Shopify",
    src: "/app-badge.jpg",
    content: () => {
      return (
        <div>
          <p>Developing Apps for Shopify</p>
          <Link
            href="https://www.credly.com/earner/earned/badge/42502446-6f71-408b-925c-7b9afa6ef3f8"
            target="_blank"
          >
            <span className="hover:text-[--pink]">Verify Credential </span> 👈🏻
          </Link>
        </div>
      );
    },
  },
  {
    title: "Shopify Development Fundamentals",
    src: "/fundamental-badge.jpg",
    content: () => {
      return (
        <div>
          <p>Shopify Development Fundamentals</p>
          <Link
            href="https://www.credly.com/earner/earned/badge/d2959c1e-be37-40f6-9cb3-2f528575fff1"
            target="_blank"
          >
            <span className="hover:text-[--pink]">Verify Credential </span> 👈🏻
          </Link>
        </div>
      );
    },
  },
];
