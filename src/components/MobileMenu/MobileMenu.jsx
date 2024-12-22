import "./MobileMenu.scss";
import { RiCloseFill, RiMenuLine } from "@remixicon/react";
import { useState } from "react";
import Footer from "../Footer/Footer";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button onClick={toggleMenu} className="mobile-menu__button">
        <RiMenuLine size={26} className="mobile-menu__open" />
      </button>

      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu__container">
            <div className="mobile-menu__header">
            <a href="/" className="header__logo">elizabeth-sheremet</a>
              <button className="mobile-menu__button" onClick={toggleMenu}>
              <RiCloseFill size={28} className="mobile-menu__close" />
           </button>
           </div>
            <nav className="mobile-menu__nav">
              <ul className="mobile-menu__list">
                <li>
                  <a
                    href="#home"
                    onClick={closeMenu}
                    className="mobile-menu__link"
                  >
                    _hello
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={closeMenu}
                    className="mobile-menu__link"
                  >
                    _about-me
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={closeMenu}
                    className="mobile-menu__link"
                  >
                    _skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={closeMenu}
                    className="mobile-menu__link"
                  >
                    _projects
                  </a>
                </li>
              </ul>
            </nav>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
