"use client";
import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import {
  Menu,
  FolderOpenDot,
  Star,
  House,
  CircleUserRound,
  FolderGit2,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function MenuPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropDownMenu.Root open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DropDownMenu.Trigger className="items-center">
        <div aria-label="navigation menu">
          <Menu width={30} height={30} />
        </div>
      </DropDownMenu.Trigger>

      <DropDownMenu.Portal>
        <DropDownMenu.Content
          sideOffset={25}
          className="text-black w-screen mr-2 rounded-md bg-[--background] p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade flex flex-col items-center z-40"
        >
          <Link href="/">
            <DropDownMenu.Item className="relative flex h-[45px] select-none items-center rounded-[3px] px-4 text-[20px] leading-none text-darktext outline-none  hover:text-[--pink]">
              <div className="grid grid-cols-[auto,auto] gap-2 items-center">
                <House />
                <p>Home</p>
              </div>
            </DropDownMenu.Item>
          </Link>
          <Link href="/about">
            <DropDownMenu.Item className="relative flex h-[45px] select-none items-center rounded-[3px] px-4 text-[20px] leading-none text-darktext outline-none hover:text-[--pink]">
              <div className="grid grid-cols-[auto,auto] gap-2 items-center">
                <CircleUserRound />
                <p>About Me</p>
              </div>
            </DropDownMenu.Item>
          </Link>
          <Link href="/project">
            <DropDownMenu.Item className="relative flex h-[45px] select-none items-center rounded-[3px] px-4 text-[20px] leading-none text-darktext outline-none hover:text-[--pink]">
              <div className="grid grid-cols-[auto,auto] gap-2 items-center">
                <FolderGit2 />
                <p>My Projects</p>
              </div>
            </DropDownMenu.Item>
          </Link>
          <Link href="/resume">
            <DropDownMenu.Item className="relative flex h-[45px] select-none items-center rounded-[3px] px-4 text-[20px] leading-none text-darktext outline-none hover:text-[--pink]">
              <div className="grid grid-cols-[auto,auto] gap-2 items-center">
                <FileText />
                <p>My Resume</p>
              </div>
            </DropDownMenu.Item>
          </Link>
          <Link
            href="https://github.com/Angelica2310?tab=repositories"
            target="_blank"
          >
            <DropDownMenu.Item className="relative flex h-[35px] select-none px-4 leading-none text-darktext outline-none gap-2 items-center border border-[--pink] bg-[rgba(195,79,90,0.5)] hover:bg-[rgba(195,79,90,0.8)] cursor-pointer text-white w-fit rounded-md hover:-translate-y-[2px] hover:transition-transform my-3">
              <FolderOpenDot />
              <Star />
            </DropDownMenu.Item>
          </Link>
        </DropDownMenu.Content>
      </DropDownMenu.Portal>
    </DropDownMenu.Root>
  );
}
