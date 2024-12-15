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
    <section className="relative bg-secondary pt-20 md:pt-24 pb-4">
      {/* <Slogan /> */}
      <Container className="relative">
        {/* <MainTitle /> */}
        <div>
          <div>
            <img src="/actors/hero-img2.png" alt="ActorPhoto2" />
            <Text text={heroText.about} />
            <MainLink href="/about" text="full" className="block" isPrimary />
          </div>
          <div>
            <div>
              <img src="/actors/hero-img1.png" alt="ActorPhoto1" />
              <Text text={heroText.subtitle} />
            </div>
            <img src="/actors/hero-img3.png" alt="ActorPhoto3" />
          </div>
        </div>
      </Container>

    </section>
  );
};

export default Hero;
