import Container from "../Container";
import MainLink from "../shared/MainLink";
import SectionTitle from "../shared/SectionTitle";

const Faces:React.FC = () => {
  return (
    <section className="section-gap">
      <Container>
        <SectionTitle text="Faces" isThin/>
        <div className="flex gap-8">
          <div className="flex flex-col gap-8 lg:basis-2/3">
            <div className="lg:flex lg:items-end lg:gap-2">
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
              className="object-contain block self-end"
            />
          </div>
          <div className="pt-28 mini:pt-40 md:pt-52 flex flex-col gap-20 sm:gap-32 md:gap-48">
            <img
              src="/faces/image3.png"
              alt="actorPhoto"
              className="object-contain"
            />
            <img
              src="/faces/image4.png"
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
