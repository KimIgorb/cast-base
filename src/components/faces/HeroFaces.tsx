import React from "react";
import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";

const nationality = [
  {
    id: 1,
    styles: "w-80 h-96 bg-zinc-500",
    src: "/faces/asian.jpg",
    value: "Asian",
  },
  {
    id: 2,
    styles: "w-80 h-96 bg-zinc-500",
    src: "/faces/european.jpg",
    value: "European",
  },
  {
    id: 3,
    styles: "w-80 h-96 bg-zinc-500",
    src: "/faces/test.jpg",
    value: "Mix",
  },
];

const HeroFaces: React.FC = () => {
  return (
    <section className="pt-48">
      <Container>
        <div className="max-w-[52rem] space-y-6 mb-24">
          <SectionTitle
            text="We always strive for an individual approach to casting, therfore we work with different types"
            isSmall
          />
        </div>
        <div className="mb-40">
          <ul className="grid grid-cols-3 gap-[13.75rem]">
            {nationality.map((item) => (
              <li key={item.id} className="text-center">
                <SectionTitle text={item.value} isSmall className="mb-5" />
                <div className={item.styles}>
                  <img src={item.src} alt="" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default HeroFaces;
