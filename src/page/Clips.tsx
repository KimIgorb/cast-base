import React from "react";
import { musicVideo, advertisingVideo, tvShowVideo } from "../data/data";
import SectionTitle from "../components/shared/SectionTitle";
import Container from "../components/Container";
import { Link } from "react-router-dom";

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
              <Link
                key={item.id}
                to={`/clips/${item.id}`}
                className="cursor-pointer hover:-translate-y-1 duration-200"
              >
                <img src={item.poster} alt="Video Poster" />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};
