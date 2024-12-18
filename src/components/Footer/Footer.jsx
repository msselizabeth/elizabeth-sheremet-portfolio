import "./Footer.scss";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMenuLine,
} from "@remixicon/react";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">find me on:</p>
      <div className="footer__links">
        <a href="https://www.linkedin.com/in/elizabethsheremet/" className="footer__link" target="_blank"><RiLinkedinFill size={26} /></a>
        <a href="https://www.instagram.com/elizabeth_sheremet/" className="footer__link" target="_blank"><RiInstagramFill size={26} /></a>
        <a href="https://github.com/msselizabeth" className="footer__link" target="_blank"><RiGithubFill size={26} /></a>
      </div>
    </footer>
  );
}
