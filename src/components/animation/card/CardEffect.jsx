"use client";

import React from "react";
import Image from "next/image";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/animation/card/3dCard";

export function ThreeDCardDemo() {
  const projects = [
    {
      id: 1,
      src: "/restaurant.png",
      title: "Restaurant website",
      description1:
        "Independently learned and implemented a booking site with EmailJS integration, enhancing user interaction without a backend. Built using Next.js and Tailwind CSS, with embedded Google Maps and review features, enhancing usability and customer confidence.",
      description2:
        "Tested across devices and browsers to deliver a robust, responsive platform for real-world use.",
      github: "https://github.com/Angelica2310/restaurant-web",
      demo: "https://restaurant-web-self.vercel.app/",
    },
    {
      id: 2,
      src: "/bamboo-nail.png",
      title: "Beauty Salon website",
      description1:
        "Built a nail salon website with services, FAQ, and gallery sections, hardcoded client reviews, social media links, and WhatsApp-based booking for easy customer contact.",
      description2:
        "Reusable components, ensuring reliable features and consistent user experience.",
      github: "https://github.com/Angelica2310/bamboo-nail",
      demo: "https://www.bamboonailshull.com/",
    },
    {
      id: 3,
      src: "/hessle-nail.png",
      title: "Beauty Salon website",
      description1:
        "Built a nail salon website with services, contact, and gallery sections, integrated with the Google API for live reviews, and a custom booking system powered by a Next.js backend.",
      description2:
        "Added an AI chatbot powered by the Claude API to answer customer questions and assist with bookings.",
      github: "https://github.com/Angelica2310/hessle-nail",
      demo: "https://hessle-nail-eight.vercel.app/",
    },
    {
      id: 4,
      src: "/mientay.png",
      title: "Restaurant Website",
      description1:
        "Built a full-stack restaurant website with React Router, Express, and SQL, enabling secure user authentication, account management, and real-time reservation updates.",
      description2:
        "Included a custom booking system powered by a Next.js backend.",
      github: "https://github.com/Angelica2310/mientay-res",
      demo: "https://www.mientayshoreditch.co.uk/",
    },
    {
      id: 5,
      src: "/quizgame.png",
      title: "Quiz Quest Game",
      description1:
        "Developed a Node.js + Vite quiz app with randomised questions from an Express database, offering hints like 50/50 and Ask the Audience.",
      description2:
        "Added a live leaderboard and completion certificates, making the game engaging, competitive, and rewarding for users.",
      github: "https://github.com/Angelica2310/quiz-quest-game",
      demo: "https://quiz-quest-game-client.onrender.com/",
    },
    {
      id: 6,
      src: "/cookiegame.png",
      title: "Cookie Clicker Game",
      description1:
        "Created a React + Vite clicker game with sound effects, API-driven upgrade items, and local storage for progress persistence.",
      description2:
        "Implemented responsive UI and purchase mechanics with disabled buttons, enhancing strategy and user experience across devices.",
      github: "https://github.com/Angelica2310/cookies-clicker-vite",
      demo: "https://cookies-clicker-vite.onrender.com/",
    },
  ];
  return (
    <div className="gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-15 px-6">
      {projects.map((project) => (
        <CardContainer
          key={project.id}
          className="inter-var md:pb-20 pb-16 h-full"
        >
          <CardBody className="bg-green-600/10 relative group/card border border-black/10 w-[90vw] md:w-full max-w-[350px] md:max-w-[40vw] lg:max-w-[30vw] xl:max-w-[25vw] h-full rounded-xl p-6 font-sans flex flex-col items-center justify-between hover:cursor-pointer">
            <CardItem translateZ={60}>
              <Image
                src={project.src}
                alt="img"
                width={500}
                height={500}
                className="w-full h-auto object-cover shadow-md rounded-xl"
              />
            </CardItem>
            <CardItem translateZ={40}>
              <p className="pt-5 text-xl text-[--grey]">{project.title}</p>
            </CardItem>
            <CardItem translateZ={20}>
              <p className="leading-relaxed tracking-wide">
                • {project.description1}
              </p>
              <p className="leading-relaxed tracking-wide mt-4">
                • {project.description2}
              </p>
            </CardItem>
            <div className="flex gap-3 py-7">
              <CardItem translateZ={10}>
                <a
                  href={project.github}
                  target="_blank"
                  className="custom-button"
                >
                  Github
                </a>
              </CardItem>
              <CardItem translateZ={10}>
                <a
                  href={project.demo}
                  target="_blank"
                  className="custom-button"
                >
                  Demo
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
