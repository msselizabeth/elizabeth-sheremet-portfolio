import "./MobileMenu.scss";
import { RiCloseFill, RiMenuLine } from "@remixicon/react";
import { useState } from "react";
import Logo from "../Logo/Logo";

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
              <Logo />
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
                    className="mobile-menu__link">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={closeMenu}
                    className="mobile-menu__link">
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={closeMenu}
                    className="mobile-menu__link">
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    onClick={closeMenu}
                    className="mobile-menu__link">
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#contacts"
                    onClick={closeMenu}
                    className="mobile-menu__link">
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>

            <p className="mobile-menu__footer">
              &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
