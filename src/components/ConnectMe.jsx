import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";
Github;

export default function ConnectMe() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 md:pt-20 gap-5 pb-6 md:pb-12">
      <p className="uppercase font-serif text-4xl">find me on</p>
      <p className="text-xl md:text-2xl">
        Feel free to <span className="text-[--grey]">connect</span> with me
      </p>
      <div className="flex gap-4">
        <Link
          className="connection-icon"
          href="https://github.com/Angelica2310?tab=repositories"
          target="_blank"
        >
          <Github />
        </Link>
        <Link
          className="connection-icon"
          href="https://www.linkedin.com/in/giang-angelica-le-68188b195/"
          target="_blank"
        >
          <Linkedin />
        </Link>
        <div className="connection-icon">
          <Instagram />
        </div>
      </div>
    </div>
  );
}
