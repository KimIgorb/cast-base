import Container from "../Container";
import MainLink from "../shared/MainLink";
import SectionTitle from "../shared/SectionTitle";

const Faces:React.FC = () => {
  return (
    <section className="pt-24" id="faces">
      <Container>
        <SectionTitle text="Faces" isThin/>
        <div className="mt-24 flex gap-16 min-h-[2000px]">
          <div className="flex flex-col gap-14 basis-3/5">
            <div className="flex items-end gap-10">
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
          <div className="mt-auto flex flex-col gap-96">
            <img
              src="/faces/image3.png"
              alt="actorPhoto"
              className="object-contain max-w-md"
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
