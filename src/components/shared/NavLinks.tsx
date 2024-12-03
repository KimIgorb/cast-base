import React from "react";
import { Link } from "react-router-dom";

interface Props {
  value: string;
  href: string;
}

const NavLinks: React.FC<Props> = ({ value, href }) => {
  return (
    <li className="hover:-translate-y-1 duration-200">
      <Link to={href} className="text-lg font-semibold outline-none">
        {value}
      </Link>
    </li>
  );
};

export default NavLinks;
