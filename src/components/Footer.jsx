import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="font-sans flex flex-col lg:flex-row md:text-lg lg:gap-40 justify-around items-center bg-[rgba(21,128,61,0.5)] p-4 gap-3 text-white">

      <p>Copyright © {new Date().getFullYear()} GL</p>
      <div className="flex gap-3 lg:gap-8">
        <Link
          href="https://github.com/Angelica2310?tab=repositories"
          target="_blank"
        >
          <Github width={20} height={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/angelica-giang-le/"
          target="_blank"
        >
          <Linkedin width={20} height={20} />
        </Link>
          <Instagram width={20} height={20} />
      </div>
    </div>
  );
}
