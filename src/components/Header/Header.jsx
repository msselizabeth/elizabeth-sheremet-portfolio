import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
     <Logo />

      <MobileMenu />

      {/* <nav className="header__nav">
        <ul className="header__list">
          <li>
            <a href="#home" className="header__link">
              _hello
            </a>
          </li>
          <li>
            <a href="#about" className="header__link">
              _about-me
            </a>
          </li>
          <li>
            <a href="#skills" className="header__link">
              _skills
            </a>
          </li>
          <li>
            <a href="#projects" className="header__link">
              _projects
            </a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
