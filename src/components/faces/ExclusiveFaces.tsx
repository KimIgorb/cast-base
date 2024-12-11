import React from "react";
import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";
import { faces } from "../../data/faces";
import ArtistCard from "./ArtistCard";

const ExclusiveFaces: React.FC = () => {
  return (
    <section className="section-gap pb-8 lg:pb-16 xl:pb-24">
      <Container>
        <SectionTitle text="Exclusive" isSmall className="mb-3 md:mb-6" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-2">
          {faces.map((item) => (
            <ArtistCard
              key={item.id}
              name={item.name}
              src={item.src}
              id={item.id}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ExclusiveFaces;
