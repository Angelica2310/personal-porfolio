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

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleWide = () => {
      if (window.innerWidth > 768) {
        setIsWide(true);
      } else {
        setIsWide(false);
      }
    };
    handleWide();
    window.addEventListener("resize", handleWide);
    return () => window.removeEventListener("resize", handleWide);
  }, []);

  return (
    //  bg-[rgba(195,79,90,0.3)]
    <div
      className={`grid grid-cols-2 z-10 items-center transition-all duration-300 top-0 fixed w-screen py-4 backdrop-blur-md ${
        isWide
          ? scrolled
            ? "bg-[rgba(255,255,255,0.2)]"
            : ""
          : "bg-[--background]"
      } `}
    >
      <div className="lg:pl-20 pl-5">
        <ActiveLink href="/">
          <Image
            src="/logo.png"
            alt="logo"
            height={0}
            width={0}
            sizes="100%"
            style={{ width: "50px", height: "auto" }}
          />
        </ActiveLink>
      </div>

      <div>
        <div className="flex justify-end mr-2 md:hidden animate-fadein">
          <MenuPage />
        </div>

        <div className="hidden md:animate-fadein text-2xl md:grid md:grid-cols-5 md:gap-8 items-center tracking-wider justify-center pr-4">
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
            <div className="md:hidden lg:grid lg:grid-cols-[auto,auto] gap-2 items-center border border-[--pink] bg-[rgba(195,79,90,0.5)] hover:bg-[rgba(195,79,90,0.8)] cursor-pointer text-white p-2 w-fit rounded-md hover:-translate-y-[2px] hover:transition-transform">
              <FolderOpenDot />
              <Star />
            </div>
            <div className="md:block lg:hidden">
              <FolderOpenDot />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
