import React from "react";
import Container from "../Container";
import MainLink from "../shared/MainLink";
import Text from "../shared/Text";
import MainTitle from "../shared/MainTitle";

const aboutText =
  "CAST BASE это кастинг‑агентство с более чем 100 проектами, 1000+ актерами и профессиональным сервисом для ваших проектов.";

const subtitle = "Casting agency from Uzbekistan";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-secondary pt-28 pb-14">
      <p className="absolute uppercase z-10 text-3xl tracking-widest top-[35rem] right-[-350px] rotate-90 font-bold">
        Your idea our faces
      </p>
      <Container className="relative">
        <MainTitle />
        <div className="flex 2xl:justify-end lg:justify-start relative">
          <div className="flex 2xl:max-w-[86%] lg:max-w-full w-full 2xl:justify-between lg:justify-evenly items-end">
            <div className="space-y-5">
              <img
                className="object-contain 2xl:max-w-[30rem] lg:max-w-80 w-full mb-36"
                src="/actors/hero-img2.png"
                alt="ActorPhoto2"
              />
              <Text text={aboutText} className="2xl:max-w-2xl lg:max-w-lg" />
              <MainLink href="/about" text="full" className="block" isPrimary />
            </div>
            <div className="flex flex-col gap-36 items-center">
              <div className="flex items-end">
                <img
                  className="object-contain 2xl:max-w-[21.938rem] lg:max-w-60 w-full"
                  src="/actors/hero-img1.png"
                  alt="ActorPhoto1"
                />
                <Text
                  text={subtitle}
                  className="text-right 2xl:max-w-52 lg:max-w-52 pb-20 w-full"
                />
              </div>
              <img
                className="object-contain 2xl:max-w-[31.063rem] lg:max-w-80 w-full"
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
