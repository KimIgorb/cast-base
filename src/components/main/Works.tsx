import React from "react";
import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";
import { musicVideo, advertisingVideo, tvShowVideo } from "../../data/data";
import Clips from "../shared/Clips";

const Works: React.FC = () => {
  return (
    <section className="section-gap">
      <Container className="flex flex-col justify-center items-center">
        <SectionTitle
          text="WORKS"
          isThin
          className="text-center mb-8 md:mb-16 xl:mb-24"
        />
        <div className="flex flex-col w-full mini:w-4/5 gap-4 lg:gap-8 xl:gap-12">
          <Clips
            arrToUse={musicVideo}
            alt="Music video poster"
            href="/clips"
            linkText="// music video"
          />
          <Clips
            arrToUse={advertisingVideo}
            alt="Advertising video poster"
            href="/clips"
            linkText="// advertising"
          />
          <Clips
            arrToUse={tvShowVideo}
            alt="Tv-show video poster"
            href="/clips"
            linkText="// tv show"
          />
        </div>
      </Container>
    </section>
  );
};

export default Works;
