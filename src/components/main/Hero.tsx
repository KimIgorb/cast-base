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
        <div className="flex justify-end relative">
          <MainTitle />
          <div className="w-11/12 flex justify-center">
            <div className="self-end">
              <img
                className="max-w-24 mb-2"
                src="/actors/hero-img2.png"
                alt="ActorPhoto" />
              <Text text={heroText.about} className="max-w-32" />
              <MainLink text="full" href="/about" isPrimary />
            </div>
            <div className="flex flex-col items-center gap-12">
              <div className="flex items-end gap-1">
                <img
                  className="max-w-16"
                  src="/actors/hero-img1.png"
                  alt="ActorPhoto" />
                <Text text={heroText.subtitle} className="max-w-12" />
              </div>
              <img
                className="max-w-20"
                src="/actors/hero-img3.png"
                alt="ActorPhoto" />
            </div>
          </div>
        </div>

      </Container>

    </section>
  );
};

export default Hero;
