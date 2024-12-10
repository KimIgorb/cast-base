import React from "react";
import Container from "../Container";
import SectionTitle from "../shared/SectionTitle";
import Text from "../shared/Text";

const workedInfo =
  "R&Co, BMW, Hyundai, Activ, Sprite, Beeline, Avito, OLX, Toyota, OPPO, Samsung, Nestle, Visit Almaty, Danone, Carlsberg, Home Credit Bank, Jusan Bank, Kaspi.kz, Kolesa, Yandex Go, Apollo, Flint, Snatch, Хрусteam, Kazakhtelecom, Tinkoff, Tele2, LG, KIA, Rexona, Old Spice, Krysha, Arbuz, Supradin and many others.";

// flex items-end gap-12
//max-w-[45rem]
const WorkedWith: React.FC = () => {
  return (
    <section className="section-gap">
      <Container>
        <div className="flex flex-col gap-2 sm:grid grid-cols-2 items-start xl:grid-cols-10 xl:gap-12">
          <img
            src="/about/worked-img1.png"
            className="order-2 sm:order-1 xl:col-span-4"
            alt="Photo"
          />
          <div className="h-full order-1 sm:order-2 sm:flex sm:flex-col sm:gap-5 xl:justify-between xl:col-span-6">
            <SectionTitle
              text="WE HAVE WORKED with"
              isSmall
              className="mb-2 sm:mb-0"
            />
            <Text text={workedInfo} className="md:text-sm"/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkedWith;
