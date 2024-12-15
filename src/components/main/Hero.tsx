import React from "react";
import Container from "../Container";
import MainLink from "../shared/MainLink";
import Slogan from "../shared/Slogan";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-secondary pt-16">
      <MainLink text="full" href="/about" isPrimary className="bottom-1 left-[11%] lg:left-[17.5%] absolute z-10" />
      <div>
        <div className="relative  flex justify-center items-center">
          <h1 className="flex justify-center items-center w-full lg:w-5/6 xl:w-full">
            <img src="/hero1.png" alt="" className="xl:h-screen object-contain" />
          </h1>
        </div>
      </div>

    </section>
  );
};

export default Hero;
