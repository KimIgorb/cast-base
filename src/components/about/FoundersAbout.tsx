import React from "react";
import SectionTitle from "../shared/SectionTitle";
import Container from "../Container";
import Text from "../shared/Text";

const foundersText =
  "CastBase was founded by Aneta and Anita in 2023. The idea of creation came from many years of working as casting directors and understanding the need to create a convenient turnkey casting service. We were inspired by the many diverse and interesting people in Uzbekistan, as well as the experience of our colleagues in this field. CastBase allows us to show how international and diverse casting in Uzbekistan can be.";

const FoundersAbout: React.FC = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="flex items-end gap-36">
          <div className="max-w-[45rem]">
            <SectionTitle text="About Us." isSmall className="mb-20" />
            <Text text={foundersText} />
          </div>
          <img src="/about/founders-img.png" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default FoundersAbout;
