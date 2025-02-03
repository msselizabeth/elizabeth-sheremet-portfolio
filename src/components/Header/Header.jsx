import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <MobileMenu />

      <nav className="header__nav">
        <ul className="header__list">
          <li>
            <a href="/" className="header__link">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="header__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="header__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#background" className="header__link">
              Background
            </a>
          </li>
          <li>
            <a href="#contacts" className="header__link">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
