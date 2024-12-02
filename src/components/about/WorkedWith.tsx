import React from "react";
import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";
import Text from "../shared/Text";

const workedInfo =
  "Tinkoff, Beeline, Merinda, Pepsi, Yandex, TBC bank , Xруcteam, HONOR , Avito, Ishonch, Casademont, Adrenaline , Fasten, NBU bank, Alif , Aviasales, Uzum , Avo, Lactel, Payme , NRG , Sabertea , Clik and many others .";

const WorkedWith: React.FC = () => {
  return (
    <section className="pt-24">
      <Container>
        <div className="flex items-end gap-12">
          <img src="/about/worked-img1.png" alt="Photo" />
          <div className="max-w-[45rem]">
            <div className="mb-20">
              <SectionTitle text="WE HAVE WORKED with" isSmall />
            </div>
            <Text text={workedInfo} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkedWith;
