import React from "react";
import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";

const nationality = [
  {
    id: 1,
    src: "/faces/asian.jpg",
    value: "Asian",
  },
  {
    id: 2,
    src: "/faces/european.jpg",
    value: "European",
  },
  {
    id: 3,
    src: "/faces/mix.jpg",
    value: "Mix",
  },
];
const HeroFaces: React.FC = () => {
  return (
    <section className="pt-20 md:pt-28 xl:pt-40">
      <Container>
        <SectionTitle
          text="We always strive for an individual approach to casting, therfore we work with different types"
          isSmall
          className="max-w-2xl xl:max-w-4xl space-y-6 mb-5 md:mb-10"
        />
        <ul className="grid grid-cols-3 gap-1 md:gap-4 lg:gap-14 xl:gap-20">
          {nationality.map((item) => (
            <li key={item.id} className="text-center">
              <SectionTitle text={item.value} isSmall className="mb-1 lg:mb-2" />
              <img src={item.src} alt="" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HeroFaces;
