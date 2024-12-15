import React from "react";
import Container from "../Container";
import MainLink from "../shared/MainLink";
import Text from "../shared/Text";
import MainTitle from "../shared/MainTitle";
import Slogan from "../shared/Slogan";

const heroText = {
  about:
    "CAST BASE это кастинг‑агентство с более чем 100 проектами, 1000+ актерами и профессиональным сервисом для ваших проектов.",
  subtitle: "Casting agency from Uzbekistan",
};

const Hero: React.FC = () => {
  return (
    <section className="bg-secondary pt-16 pb-4">

      <Container>
        <div className="flex justify-between relative">
          <div className="self-end">
            <img
              className="max-w-32"
              src="/actors/hero-img2.png"
              alt="ActorPhoto" />
            <Text text={heroText.about} className="max-w-36"/>
            <MainLink text="full" href="/about" isPrimary/>
          </div>
          <div>
            <div className="flex items-end">
              <img
                className="max-w-32"
                src="/actors/hero-img1.png"
                alt="ActorPhoto" />
              <Text text={heroText.subtitle} />
            </div>
            <img
              className="max-w-32"
              src="/actors/hero-img3.png"
              alt="ActorPhoto" />
          </div>
        </div>
      </Container>

    </section>
  );
};

export default Hero;
