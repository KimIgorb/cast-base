import React from "react";
import { useNavigate } from "react-router-dom";
import MainLink from "./MainLink";

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

const PosterLink: React.FC<Props> = ({ arrToUse, alt, href, linkText, className, imageStyle, isClipPage, isMainPage }) => {

  const navigate = useNavigate();

  const handleNavigation = (id: number, item: { id: number; src: string; poster: string; title: string }) => {
    navigate(`/clips/${id}`, { state: { clip: item } });
  };

  return (
    <div>
      <div className={className}>
        {arrToUse.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavigation(item.id, item)}
            className="cursor-pointer hover:-translate-y-1 duration-200 max-w-full"
          >
            <img src={item.poster} alt={alt} className={`object-cover w-full ${imageStyle}`} />
            {isClipPage && <p className="text-primary text-sm font-semibold lg:text-base">{item.title}</p>}

          </div>
        ))}
      </div>
      {isMainPage && <MainLink href={href!} text={linkText!} className="w-fit" />}

    </div>
  );
};

export default PosterLink;
