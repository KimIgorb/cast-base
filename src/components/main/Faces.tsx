import Container from "../Container";
import MainLink from "../shared/MainLink";
import SectionTitle from "../shared/SectionTitle";

const Faces: React.FC = () => {
  return (
    <section className="section-gap">
      <Container>
        <SectionTitle text="Faces" isThin className="mb-4 md:mb-16 xl:mb-24" />
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-12">

          <div className="col-span-1">
            <div className="mb-4 sm:mb-8 lg:mb-12 lg:flex lg:items-end xl:justify-between">
              <img
                src="/faces/image1.png"
                alt="actorPhoto"
                className="object-contain"
              />
              <MainLink href="/faces" text="full" />
            </div>
            <img
              src="/faces/image2.png"
              alt="actorPhoto"
              className="object-contain"
            />
          </div>
          <div className="pt-14 sm:pt-20 md:pt-32">
            <img
              src="/faces/image3.png"
              alt="actorPhoto"
              className="object-contain mb-4 sm:mb-8 lg:mb-12 lg:w-full"
            />
            <img
              src="/faces/image4.jpg"
              alt="actorPhoto"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faces;