import React from "react";
import BackstageGallery from "../components/backstage/BackstageGallery";
import Container from "../components/Container";
import { backstageImages, backstageImages2 } from "../data/data";

export const Backstage: React.FC = () => {
  return (
    <main className="bg-bg">
      <section className="pt-48 pb-24">
        <Container>
          <div className="flex gap-[51px]">
            <BackstageGallery arr={backstageImages} />
            <BackstageGallery arr={backstageImages2} />
          </div>
        </Container>
      </section>
    </main>
  );
};
