import React from "react";
import { musicVideo, advertisingVideo, tvShowVideo } from "../data/data";
import { useParams } from "react-router-dom";
import Video from "../components/shared/Video";
import Container from "../components/Container";
import SectionTitle from "../components/shared/SectionTitle";
import Text from "../components/shared/Text";

const test =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quibusdam veritatis ipsum doloremque alias suscipit minima! Unde consequatur autem quaerat delectus aperiam. Beatae dolorum aliquam repudiandae minima aspernatur optio asperiores velit iusto, temporibus dolore quod necessitatibus a, consectetur autem ab";

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
          <div>
            <SectionTitle text="Lorem, ipsum." isThin className="mb-4" />
            <Text
              className="text-gray-500 max-w-3xl"
              text={test}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
