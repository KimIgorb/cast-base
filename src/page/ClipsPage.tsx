import React from "react";
import { musicVideo, advertisingVideo, tvShowVideo, videos } from "../data/data";
import SectionTitle from "../components/shared/SectionTitle";
import Container from "../components/Container";
import PosterLink from "../components/shared/PosterLink";

export const ClipsPage: React.FC = () => {
  const videosArr = [...musicVideo, ...videos, ...tvShowVideo, ...advertisingVideo];

  return (
    <main className="bg-bg">
      <section className="pt-20 pb-12 md:pb-16 xl:pb-32 md:pt-28 xl:pt-40">
        <Container>
          <SectionTitle text="Our Works" className="mb-5 md:mb-10 xl:mb-14 text-center md:text-left" />
          <PosterLink
            arrToUse={videosArr}
            alt="Video Poster"
            className="grid gap-3 xl:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            imageStyle="h-72 sm:h-56"
            isClipPage
          />
        </Container>
      </section>
    </main>
  );
};
