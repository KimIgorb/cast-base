import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import Container from "./Container";
import { Link, useLocation } from "react-router-dom";
import NavLinks from "./shared/NavLinks";
import throttle from "lodash.throttle";

const navLinks = [
  { id: 1, value: "About", href: "/about" },
  { id: 2, value: "Works", href: "/clips" },
  { id: 3, value: "Faces", href: "/faces" },
  { id: 4, value: "Backstage", href: "/backstage" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleScroll = throttle(() => {
    setIsScrolled(window.scrollY > 0);
  }, 100);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isProfilePage = /^\/faces\/\d+$/.test(location.pathname);
  const isClipViewPage = /^\/clips\/\d+$/.test(location.pathname);

  if (isProfilePage) {
    return null;
  }

  const isHomeOrClipView = location.pathname === "/" || isClipViewPage;

  const headerStyles = `${
    isScrolled
      ? "shadow-md border-transparent border-0"
      : "border-b-2 border-b-primary"
  } ${isHomeOrClipView ? "bg-secondary" : "bg-bg"}`;

  const logoStyles = isHomeOrClipView ? "text-primary" : "text-secondary";

  return (
    <header
      className={`fixed top-0 left-0 w-full py-1 md:py-5 xl:py-7 z-50 ${headerStyles}`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className={`font-title text-4xl mx-auto translate-x-5 md:mx-0 md:translate-x-0 ${logoStyles}`}
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
