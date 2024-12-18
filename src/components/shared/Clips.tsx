import React from "react";
import { Link } from "react-router-dom";
import MainLink from "./MainLink";
import Text from "./Text";

interface Props {
  arrToUse: { id: number; src: string; poster: string, title: string }[];
  alt: string;
  href?: string;
  linkText?: string;
  className: string;
  imageStyle: string;
  isClipPage?: boolean
  isMainPage?: boolean
}

const Clips: React.FC<Props> = ({ arrToUse, alt, href, linkText, className, imageStyle, isClipPage, isMainPage }) => {
  return (
    <div>
      <div className={className}>
        {arrToUse.map((item) => (
          <Link
            key={item.id}
            to={`/clips/${item.id}`}
            className="cursor-pointer hover:-translate-y-1 duration-200 max-w-full"
          >
            <img src={item.poster} alt={alt} className={`object-cover w-full ${imageStyle}`} />
            {isClipPage && <p className="text-primary text-sm font-semibold lg:text-base">{item.title}</p>}

          </Link>
        ))}
      </div>
      {isMainPage && <MainLink href={href!} text={linkText!} className="w-fit" />}

    </div>
  );
};

export default Clips;
