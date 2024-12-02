import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";
import { aboutInfo } from "../../data/data";
import Text from "../shared/Text";

const InfoAbout = () => {
  return (
    <section className="pt-24">
      <Container>
        <SectionTitle
          text="During our work, we have helped to realize projects in the following categories:"
          isSmall
          className="max-w-3xl mb-12"
        />
        <ul className="list-disc max-w-[33rem] mb-12">
          {aboutInfo.map((el) => (
            <li key={el} className="text-secondary">
              <Text text={el} className="text-primary" />
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <img
            src="/about/info-img1.png"
            alt="Photo"
            className="object-contain"
          />
          <img
            src="/about/info-img2.png"
            alt="Photo"
            className="object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default InfoAbout;
