import React from "react";
import HeroAbout from "../components/about/HeroAbout";
import InfoAbout from "../components/about/InfoAbout";
import WorkedWith from "../components/about/WorkedWith";
import FoundersAbout from "../components/about/FoundersAbout";

export const About: React.FC = () => {
  return (
    <main className="bg-bg">
      <HeroAbout />
      <InfoAbout />
      <WorkedWith />
      <FoundersAbout/>
    </main>
  );
};
