import React from "react";
import Container from "../Container";
import MainLink from "../shared/MainLink";
import SectionTitle from "../shared/SectionTitle";
import SwiperBackstage from "../shared/SwiperBackstage";

const Backstage: React.FC = () => {
  return (
    <section className="section-gap pb-8 lg:pb-16 xl:pb-24">
      <Container>
        <div className="flex justify-between items-end mb-4 md:mb-8">
          <SectionTitle text="Backstage" isThin />
          <MainLink href="/backstage" text="full" />
        </div>
        <div>
          <SwiperBackstage />
        </div>
      </Container>
    </section>
  );
};

export default Backstage;
