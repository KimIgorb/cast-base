import Container from "../Container";

const HeroAbout = () => {
  return (
    <section className="pt-16 sm:pt-28 2xl:pt-48">
      <Container>
        <h1 className="w-full flex flex-col mini:items-start lg:items-center xl:items-start tracking-wide sm:tracking-wider xl:tracking-normal ">
          <div className="mb-1 mini:mb-3">
            <p className="font-titleAbout text-5xl mini:text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[253px] 2xl:text-[286px] uppercase">
              you idea
            </p>
          </div>
          <div className="2xl:w-full flex items-center 2xl:justify-between gap-9 mb-1 sm:mb-5">
            <img
              className="object-contain min-w-32"
              src="/about/hero-img2.png"
              alt="Photo"
            />
            <p className="font-titleAbout text-5xl mini:text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[253px] 2xl:text-[286px] uppercase">
              our
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-titleAbout text-5xl mini:text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[253px] 2xl:text-[286px] uppercase">
              faces
            </p>
            <img
              className="object-contain min-w-24"
              src="/about/hero-img1.png"
              alt="Photo"
            />
          </div>
        </h1>
      </Container>
    </section>
  );
};

export default HeroAbout;
