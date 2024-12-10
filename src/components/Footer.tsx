import React from "react";
import Container from "./Container";
import { contacts } from "../data/data";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary section-gap pb-8">
      <Container>
        <div className="flex justify-center mini:block mb-5 lg:mb-10">
          <div className="w-[40%] mini:w-full flex flex-col justify-center items-start mini:flex-row gap-5 mini:gap-0 mini:justify-between">
            {contacts.map((el) => (
              <div
                className="flex flex-col items-start mini:flex-col mini:justify-normal"
                key={el.id}
              >
                <div className="flex gap-1 items-center">
                  <img
                    src={el.image}
                    alt={el.alt}
                    className="w-7 h-7 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                  />
                  <span className="font-contacts font-semibold text-sm lg:text-base xl:text-xl">
                    {el.text}
                  </span>
                </div>
                <div>
                  {el.value.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="font-contacts block font-semibold text-sm lg:text-base xl:text-xl leading-7 relative group w-fit"
                    >
                      {item.text}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="font-title text-center font-bold text-6xl lg:text-9xl 2xl:text-[150px]">
          CastBase
        </h2>
      </Container>
    </footer>
  );
};

export default Footer;
