import React from "react";
import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";
import { faces } from "../../data/faces";
import ArtistCard from "./ArtistCard";

const ExclusiveFaces: React.FC = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle text="Exclusive" isSmall className="mb-10" />
        <ul className="grid grid-cols-4">
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
