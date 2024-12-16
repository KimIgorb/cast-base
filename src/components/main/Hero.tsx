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
    <section className="relative bg-secondary pt-16 md:pt-24 pb-10">
      <Slogan />
      <Container>

        <div className="flex 2xl:justify-end xl:justify-center lg:justify-center md:justify-center sm:justify-center mb:justify-center justify-center">
          <div className="flex gap-5 mini:gap-14 justify-center items-end">
            <div className="relative">
              <p className="title title_cast">CAST</p>
              <img
                className="object-contain 2xl:max-w-[30rem] xl:max-w-80 lg:max-w-80 md:max-w-44 sm:max-w-36 mini:max-w-28 max-w-24 2xl:mb-36 xl:mb-28 lg:mb-20 md:mb-12 sm:mb-12 mb-4"
                src="/actors/hero-img2.png"
                alt="ActorPhoto2"
              />
              <Text
                text={heroText.about}
                className="2xl:max-w-lg xl:max-w-lg lg:max-w-96 md:max-w-96 sm:max-w-64 mini:max-w-40 max-w-32"
              />
              <MainLink href="/about" text="full" className="block" isPrimary />
            </div>
            <div className="relative flex flex-col 2xl:gap-36 xl:gap-36 lg:gap-36 md:gap-28 sm:gap-20 mini:gap-12 gap-8 items-center xl:basis-1/3 2xl:basis-auto lg:basis-1/3">
              <p className="title title_base">BASE</p>
              <div className="flex items-end">
                <img
                  className="object-contain 2xl:max-w-[21.938rem] xl:max-w-60 w-full lg:max-w-60 md:max-w-44 sm:max-w-36 mini:max-w-24 max-w-20"
                  src="/actors/hero-img1.png"
                  alt="ActorPhoto1"
                />
                <Text
                  text={heroText.subtitle}
                  className="text-left 2xl:max-w-52 xl:max-w-52 lg:max-w-28 md:max-w-24 sm:max-w-20 max-w-12 2xl:pb-20 xl:pb-8 lg:pb-4 w-full"
                />
              </div>
              <img
                className="object-contain 2xl:max-w-[31.063rem] xl:max-w-80 lg:max-w-60 w-full md:max-w-44 sm:max-w-36 mini:max-w-28 max-w-24"
                src="/actors/hero-img3.png"
                alt="ActorPhoto3"
              />
            </div>
          </div>
        </div>
      </Container>

    </section>
  );
};

export default Hero;




