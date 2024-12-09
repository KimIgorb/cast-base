import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  className?: string;
  isPrimary?: boolean;
  href: string
}

const MainLink: React.FC<Props> = ({ text, className, isPrimary, href }) => {
  return (
    <Link
      to={href}
      className={`flex items-center gap-3  2xl:text-3xl xl:text-2xl md:text-xl mb:text-xs text-[10px] w-fit font-medium group ${className} ${
        isPrimary ? " text-primary" : "text-secondary"
      }`}
    >
      {text}
      <svg
        className="transition-transform duration-300 group-hover:translate-x-2 w-4 h-3 md:w-10 md:h-4"
        width="40"
        height="15"
        viewBox="0 0 53 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 9.5L3.8743e-07 9.5"
          stroke={isPrimary ? "#131313" : "#7A2E2F"}
          strokeWidth="3"
        />
        <path
          d="M43 2L50.5 9.5L43 17"
          stroke={isPrimary ? "#131313" : "#7A2E2F"}
          strokeWidth="3"
        />
      </svg>
    </Link>
  );
};

export default MainLink;
