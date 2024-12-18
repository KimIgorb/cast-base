import React from "react";
import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";
import { musicVideo, advertisingVideo, tvShowVideo } from "../../data/data";
import PosterLink from "../shared/PosterLink";

const Works: React.FC = () => {
  return (
    <section className="section-gap">
      <Container className="flex flex-col justify-center items-center">
        <SectionTitle
          text="WORKS"
          isThin
          className="text-center mb-4 md:mb-16 xl:mb-24"
        />
        <div className="flex flex-col w-full gap-4 lg:gap-8 xl:gap-12">
          <PosterLink
            arrToUse={musicVideo}
            alt="Music video poster"
            href="/clips"
            linkText="// music video"
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
            imageStyle="h-72 sm:h-[370px]"
            isMainPage
          />
          <PosterLink
            arrToUse={advertisingVideo}
            alt="Advertising video poster"
            href="/clips"
            linkText="// advertising"
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
            imageStyle="h-72 sm:h-[370px]"
            isMainPage
          />
          <PosterLink
            arrToUse={tvShowVideo}
            alt="Tv-show video poster"
            href="/clips"
            linkText="// tv show"
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
            imageStyle="h-72 sm:h-[370px]"
            isMainPage
          />
        </div>
      </Container>
    </section>
  );
};

export default Works;
