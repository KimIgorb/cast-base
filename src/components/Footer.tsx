import React from "react";
import Container from "./Container";
import { contacts } from "../data/data";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary section-gap pb-8">
      <Container>
        <div className="flex justify-center md:mb-10">
          <div className="grid grid-cols-2 gap-y-3 mini:gap-x-10 md:grid-cols-4 md:gap-x-20">
            {contacts.map((el) => (
              <div
                className="flex flex-col gap-1"
                key={el.id}
              >
                <div className="flex items-center gap-1">
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
        <h2 className="font-title text-center font-bold text-5xl lg:text-9xl 2xl:text-[150px] hidden md:block">
          CastBase
        </h2>
      </Container>
    </footer>
  );
};

export default Footer;
