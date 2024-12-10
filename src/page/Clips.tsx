import React from "react";
import { musicVideo, advertisingVideo, tvShowVideo } from "../data/data";
import SectionTitle from "../components/shared/SectionTitle";
import Container from "../components/Container";
import { Link } from "react-router-dom";

export const Clips: React.FC = () => {
  const videos = [...musicVideo, ...advertisingVideo, ...tvShowVideo];

  return (
    <main className="bg-bg">
      <section className="pt-20 pb-12 md:pb-16 xl:pb-32 md:pt-28 xl:pt-40">
        <Container>
          <SectionTitle text="Our Works" className="mb-5 md:mb-10 xl:mb-14 text-center md:text-left" />
          <div className=" grid gap-3 xl:gap-5 grid-cols-2 md:grid-cols-3">
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
