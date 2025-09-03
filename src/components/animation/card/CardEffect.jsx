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
      src: "/e-commerce.png",
      title: "E-commerce shopping",
      description1:
        "Collaborated in an agile team to build a Next.js marketplace, featuring Stripe payments, Clerk authentication, and AWS image handling, delivering a secure MVP under tight deadlines.",
      description2:
        "Integrated PostgreSQL APIs and reusable components, ensuring reliable features and consistent user experience.",
      github: "https://github.com/Angelica2310/3bay-app",
      demo: "https://3bay-app.vercel.app/",
    },
    {
      id: 3,
      src: "/ratingsystem.png",
      title: "Rating system",
      description1:
        "Applied bootcamp knowledge to build an interactive brand rating platform with a connected backend and Clerk authentication, self-learned Chart.js to add real-time data visualisation, providing secure collection and display of feedback.",
      description2:
        "Delivered interactive visualisations with responsive UI, improving engagement and clarity of insights.",
      github: "https://github.com/Angelica2310/rating-system",
      demo: "https://rating-system-beta.vercel.app/",
    },
    {
      id: 4,
      src: "/expensetracker.png",
      title: "Expense Tracker",
      description1:
        "Built a full-stack tracker with React Router, Express, and SQL, enabling secure user authentication, account management, and real-time balance updates.",
      description2:
        "Designed responsive UI with clear income/expense indicators, ensuring users could easily track finances across devices.",
      github: "https://github.com/Angelica2310/expense-tracker",
      demo: "https://expense-tracker-client-xldz.onrender.com/",
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
    <div className="gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-15 md:w-[80vw]">
      {projects.map((project) => (
        <CardContainer key={project.id} className="inter-var md:pb-20 pb-16">
          <CardBody className="bg-green-600/10 relative group/card border-black/[0.1] w-[90vw] md:w-full max-w-[350px] md:max-w-[40vw] md:h-[75vh] h-auto rounded-xl p-6 border font-serif flex flex-col items-center hover:cursor-pointer">
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
              <p className="text-justify">• {project.description1}</p>
              <p className="text-justify">• {project.description2}</p>
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
