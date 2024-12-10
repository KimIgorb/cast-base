import React from "react";
import { musicVideo, advertisingVideo, tvShowVideo } from "../data/data";
import { useParams } from "react-router-dom";
import Video from "../components/shared/Video";
import Container from "../components/Container";

export const ClipView: React.FC = () => {
  const { id } = useParams();

  const allVideos = [...musicVideo, ...advertisingVideo, ...tvShowVideo];

  const currentVideo = allVideos.find((item) => item.id === Number(id));

  return (
    <section className="py-32 bg-black">
      <Container>
        <div>
          <Video
            src={currentVideo!.src}
            poster={currentVideo!.poster}
            isView
            className="w-full h-[50rem]"
          />
        </div>
      </Container>
    </section>
  );
};
