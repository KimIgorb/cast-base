import React from "react";
import Container from "./Container";
import { contacts } from "../data/data";

const Footer:React.FC = () => {
  return (
    <footer className="bg-secondary py-24">
      <Container>
        <div className="flex justify-between items-top mb-24">
          {contacts.map((el) => (
            <div key={el.id}>
              <div className="flex gap-6 items-center mb-6">
                <img src={el.image} alt={el.alt} />
                <span className="font-contacts font-semibold text-3xl text-contacts">
                  {el.text}
                </span>
              </div>
              {el.value.map((item) => (
                <a
                  href={item.href}
                  key={item.id}
                  className="text-contacts font-contacts block font-semibold text-xl leading-7 relative group w-fit"
                >
                  {item.text}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-contacts transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>
          ))}
        </div>
        <h2 className="font-title text-center font-bold text-[180px]">CastBase</h2>
      </Container>
    </footer>
  );
};

export default Footer;
