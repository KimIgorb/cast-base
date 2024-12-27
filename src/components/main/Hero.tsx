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
    <section className="relative bg-secondary pt-[70px] md:pt-24 xl:pt-32 xl:pb-20 pb-10">
      <Slogan />
      <Container>
        <div className="flex justify-center">
          <div className="flex gap-5 mini:gap-14 md:gap-0 justify-center lg:justify-evenly 2xl:justify-end items-end lg:w-full">
            <div className="relative">
              <p className="title title_cast">CAST</p>
              <img
                className="object-contain xl:max-w-80 md:max-w-60 sm:max-w-40 mini:max-w-28 max-w-24 mb-4"
                src="/actors/hero-img2.png"
                alt="ActorPhoto2"
              />
              <Text
                text={heroText.about}
                className="2xl:max-w-xl xl:max-w-lg lg:max-w-96 md:max-w-96 sm:max-w-64 mini:max-w-40 max-w-32 sm:mb-3"
              />
              <MainLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSeK76v2byJzU3z9dsKQnXBMy7NLpn1w4-KHeG5j4xuioXfmhw/viewform?pli=1"
                text='Cвязаться с нами'
                isPrimary
                isExternal
              />
            </div>
            <div className="relative flex flex-col sm:gap-20 mini:gap-12 gap-8 items-center">
              <p className="title title_base">BASE</p>
              <div className="flex items-end lg:items-center">
                <img
                  className="object-contain  xl:max-w-72 md:max-w-44 sm:max-w-32 mini:max-w-24 max-w-20"
                  src="/actors/hero-img1.png"
                  alt="ActorPhoto1"
                />
                <Text
                  text={heroText.subtitle}
                  className="text-right  xl:max-w-52 lg:max-w-28 md:max-w-32 sm:max-w-20 max-w-12 "
                />
              </div>
              <img
                className="object-contain  xl:max-w-72 md:max-w-60 sm:max-w-40 mini:max-w-28 max-w-24"
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




