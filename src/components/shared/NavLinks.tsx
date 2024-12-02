import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  value: string;
  href: string;
  to: string;
}

const NavLinks: React.FC<Props> = ({ value, href, to }) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <li className="hover:-translate-y-1 duration-200">
      {isHomePage ? (
        <a href={href} className="text-lg font-semibold outline-none">
          {value}
        </a>
      ) : (
        <Link to={to} className="text-lg font-semibold outline-none">
          {value}
        </Link>
      )}
    </li>
  );
};

export default NavLinks;
