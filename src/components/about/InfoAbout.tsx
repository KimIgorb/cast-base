import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";
import { aboutInfo } from "../../data/data";
import Text from "../shared/Text";

//  mb-12
// pt-24
// 
const InfoAbout = () => {
  return (
    <section className="section-gap">
      <Container>
        <SectionTitle
          text="During our work, we have helped to realize projects in the following categories:"
          isSmall
          className="mb-2 md:mb-5 xl:mb-12 sm:max-w-lg lg:max-w-2xl xl:max-w-3xl"
        />
        <ul className="list-disc custom-list mb-2 md:mb-5 xl:mb-12 pl-3">
          {aboutInfo.map((el) => (
            <li key={el} className="text-secondary">
              <Text text={el} className="text-primary" />
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2">
          <img
            src="/about/info-img1.png"
            alt="Photo"
            className="object-contain"
            loading="lazy"
          />
          <img
            src="/about/info-img2.png"
            alt="Photo"
            className="object-contain"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
};

export default InfoAbout;
