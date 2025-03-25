'use client'

import {ModeToggle} from "@/components/theme-toggle"
import Projects from "@/components/Projects";
import Footer from "@/components/Footer"
import OnekoCat from "@/components/OnekoCat"
import Reach from "@/components/Reach"
import Experience from "@/components/Experience"
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const skills = ["websites", "backends", "apps"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <OnekoCat />
      <div className="flex justify-end p-4 absolute top-0 right-0">
          <ModeToggle/>
      </div>
      <div className="flex flex-col items-start justify-center px-6 md:px-12 lg:ml-100 pt-20 md:pt-28 space-y-8 md:space-y-12 max-w-3xl mx-auto">
        <div>
          <h1 className="text-2xl md:text-4xl font-medium">Kartik Labhshetwar</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-md md:text-lg text-neutral-600 dark:text-neutral-400">
              Available for new opportunities
            </p>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-lg md:text-xl font-light">
              I make <span className="text-neutral-800 dark:text-neutral-200 font-medium opacity-0 animate-fadeIn">{skills[currentSkillIndex]}</span>
            </p>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-light">
              I&apos;m Kartik, a 21 year old developer living in India. I am a self-taught developer who loves to code and build things.
            </p>
            <a
              href="https://drive.google.com/file/d/1h040xt9mLKCMFEDwhCn3xuH7R5PyuToZ/view?usp=sharing"
              className="inline-flex items-center justify-center px-3 py-2 bg-white/20 text-black dark:text-white rounded-md border border-black/20 dark:border-white/10 hover:cursor-pointer font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center text-sm lg:text-base 3xl:text-lg">
                <span>View CV</span>
              </div>
            </a>
          </div>
          
        </div>
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Work</h2>
            <Projects/>
        </div>
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Experience</h2>
          <Experience />
        </div>
        {/* <div className="w-full">
          <h2 className="text-lg font-medium mb-2">Skills</h2>
          <p className="text-xs md:text-sm font-light">
            List your technical skills and expertise
          </p>
        </div>
        <div className="w-full">
          <h2 className="text-lg font-medium mb-2">Moments</h2>
          <p className="text-xs md:text-sm font-light">
            Share significant achievements or milestones
          </p>
        </div> */}
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Contact</h2>
          <Reach />
        </div>
        <div className="w-full">
          <Footer/>
        </div>
      </div>
    </div>
  );
}
