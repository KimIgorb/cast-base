import React from "react";
import { musicVideo, advertisingVideo, tvShowVideo } from "../data/data";
import SectionTitle from "../components/shared/SectionTitle";
import Container from "../components/Container";
import Video from "../components/shared/Video";

export const Clips: React.FC = () => {
  const videos = [...musicVideo, ...advertisingVideo, ...tvShowVideo];

  return (
    <main className="bg-bg">
      <section className="pt-48">
        <Container>
          <div className="max-w-2xl space-y-6">
            <SectionTitle text="Our Works" />
          </div>
          <div className="py-24 grid gap-6 grid-cols-3">
            {videos.map((item) => (
              <Video key={item.id} src={item.src} poster={item.poster} className="h-[21.875rem]"/>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};
