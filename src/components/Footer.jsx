import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row md:text-xl lg:gap-40 justify-around items-center bg-green-800/50 p-4 gap-3 z-99 text-white">
      <p>Designed and Developed by Angelica</p>
      <p>Copyright © 2025 GL</p>
      <div className="flex gap-3 lg:gap-8">
        <Link
          className="connect-icon"
          href="https://github.com/Angelica2310?tab=repositories"
          target="_blank"
        >
          <Github width={20} height={20} />
        </Link>
        <Link
          className="connect-icon"
          href="https://www.linkedin.com/in/giang-angelica-le-68188b195/"
          target="_blank"
        >
          <Linkedin width={20} height={20} />
        </Link>
        <div className="connect-icon">
          <Instagram width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
