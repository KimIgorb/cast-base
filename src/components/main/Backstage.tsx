import React from "react";
import Container from "../Container";
import MainLink from "../shared/MainLink";
import SectionTitle from "../shared/SectionTitle";

const Backstage: React.FC = () => {
  return (
    <section className="py-24" id="backstage">
      <Container>
        <div className="flex justify-between items-end mb-24">
          <SectionTitle text="Backstage" className="font-mainTitle" />
          <MainLink href="/backstage" text="full" />
        </div>
        <div className="mb-24">
          <img
            src="/backstage/image1.png"
            alt="Photo"
            className="object-cover"
          />
        </div>
        <p className="text-center text-xl">Lorem, ipsum dolor.</p>
      </Container>
    </section>
  );
};

export default Backstage;
