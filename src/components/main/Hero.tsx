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
    <section className="relative bg-secondary pt-20 md:pt-28 pb-14">
      <Slogan />
      <Container className="relative">
        <MainTitle />
        <div className="flex 2xl:justify-end xl:justify-center lg:justify-center md:justify-center sm:justify-center mb:justify-center justify-center relative">
          <div className="flex max-w-[86%] w-full xl:justify-center lg:justify-center md:justify-center sm:justify-center mb:justify-center justify-center items-end">
            <div>
              <img
                className="object-contain 2xl:max-w-[30rem] xl:max-w-80 lg:max-w-80 md:max-w-64 sm:max-w-44 mb:max-w-28 max-w-24 w-full 2xl:mb-36 xl:mb-28 lg:mb-20 md:mb-12 sm:mb-20 mb:mb-8 mb-8"
                src="/actors/hero-img2.png"
                alt="ActorPhoto2"
              />
              <Text
                text={heroText.about}
                className="2xl:max-w-lg xl:max-w-lg lg:max-w-96 md:max-w-80 sm:max-w-64 mb:max-w-36 max-w-28"
              />
              <MainLink href="/about" text="full" className="block" isPrimary />
            </div>
            <div className="flex flex-col 2xl:gap-36 xl:gap-36 lg:gap-36 md:gap-28 sm:gap-20 mb:gap-14 gap-14 items-center xl:basis-1/3 2xl:basis-auto lg:basis-1/3">
              <div className="flex items-end">
                <img
                  className="object-contain 2xl:max-w-[21.938rem] xl:max-w-60 w-full lg:max-w-60 md:max-w-56 sm:max-w-44 mb:max-w-24 max-w-24"
                  src="/actors/hero-img1.png"
                  alt="ActorPhoto1"
                />
                <Text
                  text={heroText.subtitle}
                  className="text-right 2xl:max-w-52 xl:max-w-52 lg:max-w-28 md:max-w-24 sm:max-w-20 mb:max-w-12 max-w-12 2xl:pb-20 xl:pb-8 lg:pb-4 w-full"
                />
              </div>
              <img
                className="object-contain 2xl:max-w-[31.063rem] xl:max-w-80 lg:max-w-60 w-full md:max-w-56 sm:max-w-44 mb:max-w-24 max-w-24"
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
