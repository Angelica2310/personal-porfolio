import { Github, Linkedin, Instagram } from "lucide-react";
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
        <div className="connection-icon">
          <Github />
        </div>
        <div className="connection-icon">
          <Linkedin />
        </div>
        <div className="connection-icon">
          <Instagram />
        </div>
      </div>
    </div>
  );
}
