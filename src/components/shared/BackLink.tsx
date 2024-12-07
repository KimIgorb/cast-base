import React from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
}

const BackLink: React.FC<Props> = ({ to }) => {
  return (
    <Link to={to}>
      <svg
        className="absolute top-[-2rem]"
        width="54"
        height="19"
        viewBox="0 0 54 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.50586 9.50049L53.5058 9.54002"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M10.5 17.0059L3.00593 9.49993L10.5119 2.00586"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
    </Link>
  );
};

export default BackLink;
