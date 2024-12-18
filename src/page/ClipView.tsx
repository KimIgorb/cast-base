import React from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/Container";
import Video from "../components/shared/Video";

export const ClipView: React.FC = () => {
  const location = useLocation();
  const clip = location.state?.clip;

  return (
    <section className="pt-24 md:pt-32 lg:pt-40 pb-8 md:pb-14 bg-black">
      <Container>
        <div className="flex items-center justify-center">
          <Video
            src={clip!.src}
            poster={clip!.poster}
            className='w-full h-56 mini:h-80 sm:h-96 md:h-[28rem] lg:h-[36rem] xl:h-[40rem]'
            classNameView="flex items-center justify-center w-full md:w-4/5 xl:w-full"
            isView
          />
        </div>
      </Container>
    </section>
  );
};
