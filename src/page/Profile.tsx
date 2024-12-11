import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/shared/SectionTitle";
import { useParams } from "react-router-dom";
import { faces } from "../data/faces";
import Text from "../components/shared/Text";
import ProfileCard from "../components/faces/ProfileCard";
import Video from "../components/shared/Video";
import BackLink from "../components/shared/BackLink";

export const Profile: React.FC = () => {
  const { id } = useParams();

  const face = faces.find((item) => item.id === Number(id));

  const leftPhotos = face?.photos.slice(0, 2) || [];
  const rightPhotos = face?.photos.slice(2) || [];

  if (!face) {
    return (
      <main className="bg-stone-950">
        <section className="pt-48">
          <Container>
            <SectionTitle text="Profile not found" className="text-white" />
            <Text
              text="The profile you're looking for doesn't exist."
              className="text-white text-xl mt-4"
            />
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-stone-950">
      <section className="py-16">
        <Container className="relative">
          <BackLink to="/faces" />

          <SectionTitle
            text={face.name}
            className="text-white mb-3.5"
          />
          <div className="grid grid-cols-2 gap-3 lg:gap-6 mb-10 sm:mb-14 lg:mb-28">
            <div className="space-y-4 lg:space-y-6">
              <ProfileCard
                age={face.age}
                height={face.height}
                weight={face.weight}
                experience={face.experience}
              />
              {leftPhotos.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.src}
                  className={photo.className}
                  alt="Photo"
                />
              ))}
            </div>
            <div className="space-y-4 lg:space-y-6">
              {rightPhotos.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.src}
                  className={photo.className}
                  alt="Photo"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Video
              src={face.video}
              poster={face.poster}
              className="w-full lg:h-[32.75rem] 2xl:h-[37rem]"
              classNameView="lg:w-8/12 2xl:w-10/12"
            />
          </div>
        </Container>
      </section>
    </main>
  );
};
