import React from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/Container";
import Video from "../components/shared/Video";

export const ClipView: React.FC = () => {
  const location = useLocation();
  const clip = location.state?.clip;

  return (
    <section className="pt-28 md:pt-32 lg:pt-40 pb-28 bg-black">
      <Container>
        <div className="flex items-center justify-center ">
          <Video
            src={clip!.src}
            poster={clip!.poster}
            className='w-full h-full'
            classNameView="flex items-center justify-center w-full xl:w-full h-80 mini:h-[30rem] lg:h-[36rem] xl:h-[40rem]"
            isView
          />
        </div>
      </Container>
    </section>
  );
};
