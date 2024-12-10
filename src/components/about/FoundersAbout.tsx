import React from "react";
import SectionTitle from "../shared/SectionTitle";
import Container from "../Container";
import Text from "../shared/Text";

const foundersText =
  "CastBase was founded by Aneta and Anita in 2023. The idea of creation came from many years of working as casting directors and understanding the need to create a convenient turnkey casting service. We were inspired by the many diverse and interesting people in Uzbekistan, as well as the experience of our colleagues in this field. CastBase allows us to show how international and diverse casting in Uzbekistan can be.";

const FoundersAbout: React.FC = () => {
  return (
    <section className="section-gap pb-8 lg:pb-16 xl:pb-24">
      <Container>
        <div className="flex flex-col items-end sm:grid sm:grid-cols-2 md:gap-5 lg:gap-6">
          <div className="sm:flex sm:justify-between sm:flex-col sm:gap-10 lg:gap-14">
            <SectionTitle text="About Us." isSmall className="mb-3 sm:mb-0" />
            <Text text={foundersText} className="mb-3"/>
          </div>
          <img src="/about/founders-img.png" alt="Photo" className="w-full" />
        </div>
      </Container>
    </section>
  );
};

export default FoundersAbout;
