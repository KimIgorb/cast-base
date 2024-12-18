import React from "react";
import { musicVideo, advertisingVideo, tvShowVideo } from "../data/data";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Video from "../components/shared/Video";

   

export const ClipView: React.FC = () => {
  const { id } = useParams();

  const allVideos = [...musicVideo, ...advertisingVideo, ...tvShowVideo];

  const currentVideo = allVideos.find((item) => item.id === Number(id));

  return (
    <section className="pt-24 md:pt-32 lg:pt-40 pb-8 md:pb-14 bg-black">
      <Container>
        <div className="flex items-center justify-center">
          <Video
            src={currentVideo!.src}
            poster={currentVideo!.poster}
            className='w-full h-56 mini:h-80 sm:h-96 md:h-[28rem] lg:h-[36rem] xl:h-[40rem]'
            classNameView="flex items-center justify-center w-full md:w-4/5 xl:w-full"
            isView
          />
        </div>
      </Container>
    </section>
  );
};
