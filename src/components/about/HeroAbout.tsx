import Container from "../Container";

const HeroAbout = () => {
  return (
    <section className="pt-48">
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="w-full">
            <div className="mb-12">
              <p className="font-titleAbout font-black text-[286px] font-normal uppercase leading-[215px]">
                you idea
              </p>
            </div>
            <div className="flex items-center justify-between mb-12">
              <img
                className="object-contain"
                src="/about/hero-img2.png"
                alt="Photo"
              />
              <p className="font-titleAbout font-black text-[286px] font-normal uppercase leading-[215px]">
                our
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-titleAbout font-black text-[286px] font-normal uppercase leading-[215px]">
                faces
              </p>
              <img
                className="object-contain max-w-md"
                src="/about/hero-img1.png"
                alt="Photo"
              />
            </div>
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default HeroAbout;
