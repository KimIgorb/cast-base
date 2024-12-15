import React from "react";
import Container from "../Container";
import MainLink from "../shared/MainLink";
import Slogan from "../shared/Slogan";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-secondary pt-16 pb-5">
      <Container>
        <div className="relative  flex justify-center items-center">
          <h1 className="flex justify-center items-center w-full lg:w-5/6 xl:w-full">
            <img src="/hero1.png" alt="" className="xl:h-screen object-contain"/>
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
