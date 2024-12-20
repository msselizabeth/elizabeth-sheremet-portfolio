import "./Skills.scss";
import {
  RiCss3Fill,
  RiFigmaFill,
  RiGithubFill,
  RiHtml5Fill,
  RiInstagramFill,
  RiJavascriptFill,
  RiLinkedinFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
} from "@remixicon/react";

import StackIcon from "tech-stack-icons";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h2 className="section-title">// Skills</h2>
      <ul className="skills__list">
        <li className="skills__item">
          <StackIcon name="html5" className="icon" />
          <p>HTML</p>
        </li>
        <li className="skills__item">
          <StackIcon name="css3" className="icon" />
          <p>CSS</p>
        </li>
        <li className="skills__item">
          <StackIcon name="sass" className="icon" />
          <p>SASS</p>
        </li>
        <li className="skills__item">
          <StackIcon name="reactjs" className="icon" />
          <p>REACT</p>
        </li>
        <li className="skills__item">
          <StackIcon name="nextjs" className="icon nextjs" />
          <p>NEXT</p>
        </li>
        <li className="skills__item">
          <StackIcon name="nodejs" className="icon" />
          <p>NODE</p>
        </li>
        <li className="skills__item">
          <StackIcon name="js" className="icon" />
          <p>JS</p>
        </li>
        <li className="skills__item">
          <StackIcon name="typescript" className="icon" />
          <p>TS</p>
        </li>
        <li className="skills__item">
          <StackIcon name="mongodb" className="icon" />
          <p>MongoDB</p>
        </li>
        <li className="skills__item">
          <StackIcon name="mysql" className="icon" />
          <p>MySQL</p>
        </li>
        <li className="skills__item">
          <StackIcon name="git" className="icon" />
          <p>GIT</p>
        </li>
        <li className="skills__item">
          <StackIcon name="figma" className="icon" />
          <p>FIGMA</p>
        </li>
        <li className="skills__item">
          <StackIcon name="openai" className="icon open-ai" />
          <p>OpenAI</p>
        </li>
        <li className="skills__item">
          <StackIcon name="heroku" className="icon" />
          <p>Heroku</p>
        </li>
        <li className="skills__item">
          <StackIcon name="webpack" className="icon" />
          <p>Webpack</p>
        </li>
      </ul>
    </div>
  );
}
