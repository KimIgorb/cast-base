import React from "react";
import { Link } from "react-router-dom";
import MainLink from "./MainLink";

interface Props {
  arrToUse: { id: number; src: string; poster: string }[];
  alt: string;
  href: string;
  linkText: string;
}

const Clips: React.FC<Props> = ({ arrToUse, alt, href, linkText }) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-2">
        {arrToUse.map((item) => (
          <Link
            key={item.id}
            to={`/clips/${item.id}`}
            className="cursor-pointer hover:-translate-y-1 duration-200 max-w-full"
          >
            <img src={item.poster} alt={alt} />
          </Link>
        ))}
      </div>
      <MainLink href={href} text={linkText} className="w-fit" />
    </div>
  );
};

export default Clips;
