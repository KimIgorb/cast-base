import React from "react";
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

  const handleScroll = throttle(() => {
    setIsScrolled(window.scrollY > 0);
  }, 100);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();

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
    <header className={`fixed top-0 left-0 w-full py-7 z-50 ${headerStyles}`}>
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/" className={`font-title text-4xl ${logoStyles}`}>
            CastBase
          </Link>
          <nav>
            <ul className="flex gap-16 items-center">
              {navLinks.map((item) => (
                <NavLinks key={item.id} value={item.value} href={item.href} />
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
