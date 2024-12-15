import Container from "../Container";

const HeroAbout = () => {
  return (
    <section className="pt-16 sm:pt-16 md:pt-20">
      <Container>
        <div className="relative flex justify-center items-center">
          <h1 className="flex justify-center items-center">
            <img src="/about.png" alt="Your idea our faces" className="object-contain" />
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default HeroAbout;
