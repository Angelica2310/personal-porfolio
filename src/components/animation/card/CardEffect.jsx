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
      description:
        "Independently learned and implemented a booking system with EmailJS integration, enhancing user interaction without a backend. Built using Next.js and Tailwind CSS, with embedded Google Maps and review features; deployed to Vercel.",
      github: "https://github.com/Angelica2310/restaurant-web",
      demo: "https://restaurant-web-self.vercel.app/",
    },
    {
      id: 2,
      src: "/e-commerce.png",
      title: "E-commerce shopping",
      description:
        "Developed a full-stack e-commerce marketplace in a team of four over 1.5 weeks, featuring Stripe payments, Clerk authentication, and AWS image handling. Built with Next.js and PostgreSQL; collaborated on architecture and version control using GitHub Projects.",
      github: "https://github.com/Angelica2310/3bay-app",
      demo: "https://3bay-app.vercel.app/",
    },
    {
      id: 3,
      src: "/ratingsystem.png",
      title: "Rating system",
      description:
        "Applied bootcamp knowledge to build an interactive brand rating platform with a connected backend, then self-learned Chart.js to add real-time data visualisation. Integrated Clerk authentication and Radix-based forms to create a smooth and engaging user experience.",
      github: "https://github.com/Angelica2310/rating-system",
      demo: "https://rating-system-beta.vercel.app/",
    },
    {
      id: 4,
      src: "/expensetracker.png",
      title: "Expense Tracker",
      description:
        "The app uses React Router DOM for smooth navigation and requires users to sign up and log in to access their personal tracker. Data is managed through an Express server with SQL, storing user accounts and transactions. Users can add or delete transactions, with real-time balance updates and color indicators for income and expenses. The UI is responsive, and access to the tracker is restricted to authenticated users only.",
      github: "https://github.com/Angelica2310/expense-tracker",
      demo: "https://expense-tracker-client-xldz.onrender.com/",
    },
    {
      id: 5,
      src: "/quizgame.png",
      title: "Quiz Quest Game",
      description:
        "A mini full-stack application built with Node.js and Vite, where users can register their names to play. The game generates 10 random questions, fetched from an Express-based database. Users can choose hints such as 50/50 or Ask the Audience. A live leaderboard displays scores, and users can generate a certificate upon completing the game.",
      github: "https://github.com/Angelica2310/quiz-quest-game",
      demo: "https://quiz-quest-game-client.onrender.com/",
    },
    {
      id: 6,
      src: "/cookiegame.png",
      title: "Cookie Clicker Game",
      description:
        "The game is built in React and Vite, with features sound effects and stylish UI elements to create an enjoyable, engaging experience. Users can play and purchase upgrade items, with item data fetched from an API, and progress is saved to local storage so they can resume where they left off. Upgrade buttons are disabled when users don't have enough cookies, adding a strategic layer to the gameplay. The game is also fully responsive, ensuring a smooth experience across all devices.",
      github: "https://github.com/Angelica2310/cookies-clicker-vite",
      demo: "https://cookies-clicker-vite.onrender.com/",
    },
  ];
  return (
    <div className="gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-15 md:w-[80vw]">
      {projects.map((project) => (
        <CardContainer key={project.id} className="inter-var md:pb-20 pb-16">
          <CardBody className="bg-white/10 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[90vw] md:w-full max-w-[350px] md:max-w-[40vw] lg:h-[65vh] md:h-[75vh] h-[90vh] rounded-xl p-6 border font-serif flex flex-col items-center hover:cursor-pointer">
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
              <p className="text-justify">{project.description}</p>
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
