import React from "react";
import Container from "../Container";
import MainLink from "../shared/MainLink";
import SectionTitle from "../shared/SectionTitle";
import SwiperBackstage from "../shared/SwiperBackstage";

const Backstage: React.FC = () => {
  return (
    <section className="py-24" id="backstage">
      <Container>
        <div className="flex justify-between items-end mb-24">
          <SectionTitle text="Backstage" isThin />
          <MainLink href="/backstage" text="full" />
        </div>
        <div className="mb-24">
          <SwiperBackstage />
        </div>
      </Container>
    </section>
  );
};

export default Backstage;
