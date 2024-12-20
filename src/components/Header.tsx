import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import Container from "./Container";
import { Link, useLocation } from "react-router-dom";
import NavLinks from "./shared/NavLinks";
import useHandleScroll from "../hooks/useHandleScroll";
import useClickOutside from "../hooks/useClickOutside";


const navLinks = [
  { id: 1, value: "About", href: "/about" },
  { id: 2, value: "Works", href: "/clips" },
  { id: 3, value: "Faces", href: "/faces" },
  { id: 4, value: "Backstage", href: "/backstage" },
];

const Header: React.FC = () => {
 
  const [isOpen, setIsOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isScrolled = useHandleScroll(0, 100);
  useClickOutside(navRef, () => setIsOpen(false), isOpen);
 

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const routeChecks = {
    isProfilePage: /^\/faces\/\d+$/.test(location.pathname),
    isClipViewPage: /^\/clips\/\d+$/.test(location.pathname),
  };

  const isHomeOrClipView = location.pathname === "/" || routeChecks.isClipViewPage;

  if (routeChecks.isProfilePage) return null;

  const headerStyles = `${
    isScrolled
      ? "shadow-md border-transparent border-0"
      : "border-b-2 border-b-primary"
  } ${isHomeOrClipView ? "bg-secondary" : "bg-bg"}`;

  const logoStyles = isHomeOrClipView ? "text-primary" : "text-secondary";

  return (
    <header
      className={`fixed top-0 left-0 w-full py-1 md:py-3 xl:py-4 z-50 ${headerStyles}`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className={`font-title text-[16px] md:text-4xl ${logoStyles}`}
          >
            CastBase
          </Link>
          <div ref={navRef}>
            <nav
              className={`nav ${
                isOpen ? "open" : ""
              } transition-transform duration-500`}
            >
              <ul className="nav_list">
                {navLinks.map((item) => (
                  <NavLinks key={item.id} value={item.value} href={item.href} />
                ))}
              </ul>
            </nav>
            <button className="flex md:hidden w-10 h-10 justify-center items-center">
              <Hamburger
                toggle={setIsOpen}
                toggled={isOpen}
                size={25}
                distance="sm"
              />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
