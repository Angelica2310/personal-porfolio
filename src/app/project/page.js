import React from "react";
import Image from "next/image";

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      src: "/restaurant.png",
      title: "Restaurant website",
      description:
        "The app, built with Next.js and styled using Tailwind CSS, features dynamic pages, real-time table booking, and live Google Reviews with Maps for easy access and credibility. It includes a dynamic menu, responsive design, EmailJS-powered contact forms, and smooth animations for a modern, user-friendly experience across all devices.",
      github: "https://github.com/Angelica2310/restaurant-web",
      demo: "https://restaurant-web-self.vercel.app/",
    },
    {
      id: 2,
      src: "/e-commerce.png",
      title: "E-commerce shopping",
      description:
        "3Bay is an online marketplace where sellers create personalized storefronts, offering buyers an immersive shopping experience. Built with Next.js, Tailwind CSS, and Clerk for authentication, it uses Stripe for payments, Radix UI for components, React Redux for state management, and AWS S3 with API Gateway to handle media and RESTful requests.",
      github: "https://github.com/Angelica2310/3bay-app",
      demo: "https://3bay-app.vercel.app/",
    },
    {
      id: 3,
      src: "/ratingsystem.png",
      title: "Rating system",
      description:
        "Built with Next.js, this app lets users view, vote, and comment on their favorite brands, with real-time updates and data fetched from a database. Users can sign in with GitHub or Gmail, create a profile, and manage their own comments. The app features dynamic metadata, responsive design, Radix-based forms, a 404 error page, and a user profile section with avatar and login details.",
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
    <div className="flex flex-col justify-center items-center pt-[30%] lg:pt-[10%]">
      <p className="uppercase font-sans self-center text-2xl lg:text-4xl">
        My latest <span className="text-[--grey]">works</span>
      </p>
      <p className="pb-10 pt-3 text-xl lg:text-2xl">
        Some cool things I’ve worked on recently
      </p>
      <div className="gap-7 grid grid-cols-1 lg:grid-cols-3 pb-20 w-[80vw]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card hover:scale-105 transition-transform duration-200 overflow-hidden font-serif"
          >
            <div className="w-full max-w-[350px] flex flex-col items-center">
              <Image
                src={project.src}
                alt="img"
                width={500}
                height={500}
                className="w-full h-auto object-cover shadow-md rounded-xl mt-7"
              />
              <p className="pt-5 text-xl text-[--grey]">{project.title}</p>
              <p className=" text-justify">{project.description}</p>
              <div className="flex gap-3 py-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="custom-button"
                >
                  Github
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="custom-button"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
