import { Github, Linkedin, Instagram } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row md:text-xl lg:gap-40 justify-around items-center bg-[rgba(195,79,90,0.3)] p-4 gap-3 z-99">
      <p>Designed and Developed by Angelica</p>
      <p>Copyright © 2025 GL</p>
      <div className="flex gap-3 lg:gap-8">
        <div className="connect-icon">
          <Github width={20} height={20} />
        </div>
        <div className="connect-icon">
          <Linkedin width={20} height={20} />
        </div>
        <div className="connect-icon">
          <Instagram width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
