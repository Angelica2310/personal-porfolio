"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import {
  House,
  CircleUserRound,
  FolderGit2,
  FileText,
  Star,
  FolderOpenDot,
} from "lucide-react";
import MenuPage from "./MenuDropDown";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleWide = () => setIsWide(window.innerWidth > 768);

    handleWide();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWide);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWide);
    };
  }, []);

  return (
    //  bg-[rgba(195,79,90,0.3)]
    <div
      className={`grid grid-cols-2 z-50 items-center transition-all duration-300 top-0 fixed w-full py-4 backdrop-blur-md ${
        isWide
          ? scrolled
            ? "bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.4)]"
            : ""
          : "bg-[--background]"
      } `}
    >
      <div className="lg:pl-20 pl-5">
        <ActiveLink href="/">
          <Image
            src="/logo1.png"
            alt="logo"
            height={0}
            width={0}
            sizes="100%"
            className="dark:drop-shadow-[0_0_6px_rgba(74,222,128,0.6)]"
            style={{ width: "50px", height: "auto" }}
          />
        </ActiveLink>
      </div>

      <div>
        <div className="flex justify-end items-center gap-3 mr-2 md:hidden animate-fadein">
          <ThemeToggle />
          <MenuPage />
        </div>

        <div className="hidden md:flex md:animate-fadein items-center gap-4 pr-4">
          <div className="font-sans text-lg md:grid md:grid-cols-5 md:gap-8 items-center tracking-wider justify-center">
            <ActiveLink href="/" variant="navBar">
              <div className="grid grid-cols-[auto,auto] gap-2 items-center">
                <House />
                <p className="md:hidden lg:block ">Home</p>
              </div>
            </ActiveLink>

            <ActiveLink href="/about" variant="navBar">
              <div className="grid grid-cols-[auto,auto] gap-2 items-center">
                <CircleUserRound />
                <p className="md:hidden lg:block ">About</p>
              </div>
            </ActiveLink>

            <ActiveLink href="/project" variant="navBar">
              <div className="grid grid-cols-[auto,auto] gap-2 items-center">
                <FolderGit2 />
                <p className="md:hidden lg:block ">Projects</p>
              </div>
            </ActiveLink>

            <ActiveLink href="/resume" variant="navBar">
              <div className="grid grid-cols-[auto,auto] gap-2 items-center">
                <FileText />
                <p className="md:hidden lg:block ">Resume</p>
              </div>
            </ActiveLink>

            <Link
              href="https://github.com/Angelica2310?tab=repositories"
              target="_blank"
            >
              {/* rgb(37, 99, 235) */}
              <div
                className="md:hidden lg:grid lg:grid-cols-[auto,auto] gap-2 items-center border border-[--green] bg-[rgba(21,128,61,0.5)] hover:bg-[rgba(21,128,61,0.8)]
cursor-pointer text-white p-2 w-fit rounded-md hover:-translate-y-[2px] hover:transition-transform"
              >
                <FolderOpenDot />
                <Star />
              </div>
              <div className="md:block lg:hidden">
                <FolderOpenDot />
              </div>
            </Link>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
