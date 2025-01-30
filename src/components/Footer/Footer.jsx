import "./Footer.scss";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "@remixicon/react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}
