import React from "react";
import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";
import MainLink from "../shared/MainLink";
import { musicVideo, advertisingVideo, tvShowVideo } from "../../data/data";
import { Link } from "react-router-dom";

const Works: React.FC = () => {
  return (
    <section className="pt-24">
      <Container className="flex flex-col justify-center items-center">
        <SectionTitle text="WORKS" isThin className="text-center mb-24" />
        <div className="flex flex-col 2xl:w-11/12 xl:w-5/6 gap-16">
          <div>
            <div className="flex justify-between items-center mb-2">
              {musicVideo.map((item) => (
                <Link
                  key={item.id}
                  to={`/clips/${item.id}`}
                  className="cursor-pointer hover:-translate-y-1 duration-200 2xl:max-w-full xl:max-w-[30rem]"
                >
                  <img src={item.poster} alt="Music video poster" />
                </Link>
              ))}
            </div>
            <MainLink href="/clips" text="// music video" className="w-fit" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              {advertisingVideo.map((item) => (
                <Link
                  key={item.id}
                  to={`/clips/${item.id}`}
                  className="cursor-pointer hover:-translate-y-1 duration-200"
                >
                  <img src={item.poster} alt="Advertising video poster" />
                </Link>
              ))}
            </div>
            <MainLink href="/clips" text="// advertising" className="w-fit" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              {tvShowVideo.map((item) => (
                <Link
                  key={item.id}
                  to={`/clips/${item.id}`}
                  className="cursor-pointer hover:-translate-y-1 duration-200"
                >
                  <img src={item.poster} alt="Tv-show video poster" />
                </Link>
              ))}
            </div>
            <MainLink href="/clips" text="// tv show" className="w-fit" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Works;
