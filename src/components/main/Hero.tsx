import React from "react";
import Container from "../Container";
import MainLink from "../shared/MainLink";
import Slogan from "../shared/Slogan";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-secondary pt-16 pb-5 ">
      <Container>
        <div className="relative">
          <img src="/hero.png" alt=""  className="h-auto"/>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
