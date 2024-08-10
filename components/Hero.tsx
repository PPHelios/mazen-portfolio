"use client";

import React from "react";
import { useTheme } from "next-themes";
import GridBackground from "./ui/GridBackground";
import { FlipWords } from "./ui/flip-words";
function Hero() {
  const { theme, setTheme } = useTheme();
  if (theme === "light") {
    setTheme("dark");
  }
  return (
    <main>
      <GridBackground>
        <div
          className="relative flex h-screen w-full flex-col items-center
            justify-start gap-12"
        >
          <div className="mt-20">
            <img src="/logo.jpg" alt="logo" className="h-52 rounded-md" />
          </div>
          <div
            className="text-5xl font-bold text-neutral-400 dark:text-neutral-400"
          >
            We provide
            <FlipWords
              className="text-red-600"
              duration={2000}
              words={["Play", "Roles", "Shouts"]}
            />
            <br />
            The best SMP to play
          </div>
        </div>

        <img
          src="/potion.jpg"
          alt="potion"
          className="absolute bottom-20 right-20 z-50 hidden h-24 rotate-12
            animate-bounce opacity-80 animate-normal animate-duration-[5000ms]
            animate-infinite animate-ease-in-out md:block"
        />
        <img
          src="/ss.jpg"
          alt="potion"
          className="absolute left-36 top-56 z-50 hidden h-24 -rotate-12
            animate-bounce  animate-normal animate-duration-[4000ms]
            animate-infinite animate-ease-in-out md:block"
        />
      </GridBackground>
      {/* <Lamp /> */}
    </main>
  );
}

export default Hero;
