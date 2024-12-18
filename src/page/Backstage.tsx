import React from "react";
import BackstageGallery from "../components/backstage/BackstageGallery";
import Container from "../components/Container";
import { backstageImages, backstageImages2 } from "../data/data";

export const Backstage: React.FC = () => {
  return (
    <main className="bg-bg">
      <section className="pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-48 pb-8 lg:pb-16 xl:pb-24">
        <Container>
          <div className="grid grid-cols-2 gap-2">
            <BackstageGallery arr={backstageImages} />
            <BackstageGallery arr={backstageImages2} className="pt-12" />
          </div>
        </Container>
      </section>
    </main>
  );
};
