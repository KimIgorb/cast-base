import Container from "../Container";

const HeroAbout = () => {
  return (
    <section className="pt-16 sm:pt-16 md:pt-20">
      <Container>
        <div className="relative flex justify-center items-center">
          <h1 className="flex justify-center items-center w-full md:w-5/6 xl:w-full">
            <img src="/about.png" alt="Your idea our faces" className="xl:h-screen object-contain" />
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default HeroAbout;
