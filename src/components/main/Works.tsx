import React from "react";
import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";
import Video from "../shared/Video";
import MainLink from "../shared/MainLink";
import { musicVideo, advertisingVideo, tvShowVideo } from "../../data/data";

const Works: React.FC = () => {
  return (
    <section id="works" className="pt-24">
      <Container>
        <div className="text-center mb-24">
          <SectionTitle text="WORKS" isThin />
        </div>
        <div className="mb-16">
          <div className="flex justify-between items-center mb-2">
            {musicVideo.map((item) => (
              <Video
                key={item.id}
                src={item.src}
                poster={item.poster}
                className="max-w-lg h-[25rem]"
              />
            ))}
          </div>
          <MainLink href="/clips" text="// music video" />
        </div>
        <div className="mb-16">
          <div className="flex justify-between items-center mb-2">
            {advertisingVideo.map((item) => (
              <Video
                key={item.id}
                src={item.src}
                poster={item.poster}
                className="max-w-lg h-[25rem]"
              />
            ))}
          </div>
          <MainLink href="/clips" text="// advertising" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            {tvShowVideo.map((item) => (
              <Video
                key={item.id}
                src={item.src}
                poster={item.poster}
                className="max-w-lg h-[25rem]"
              />
            ))}
          </div>
          <MainLink href="/clips" text="// tv show" />
        </div>
      </Container>
    </section>
  );
};

export default Works;
