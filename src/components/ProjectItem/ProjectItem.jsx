import ShowMore from "../Buttons/ShowMore";
import "./ProjectItem.scss";
import { useState } from "react";
import { RiLinksFill } from "@remixicon/react";

export default function ProjectItem ({ project }) {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleDescription = () => {
      setIsExpanded((prevState) => !prevState);
    };
  
    return (
      <li className="project__item">
        <img
          src={project.image}
          alt={project.alt}
          className="project__image"
        />
        <div className="project__item-container">
          <div className="project__name-container">
            <h3 className="project__title">{project.title}</h3>
            {project.link && (
              <a href={project.link} className="project__link">
                <RiLinksFill size={24} />
              </a>
            )}
          </div>
          <p className="project__description">// Description</p>
          <p
            className={`project__description-text ${
              isExpanded ? "expanded" : ""
            }`}
          >
            {project.description}
          </p>
          <ShowMore isExpanded={isExpanded} onClick={toggleDescription} />
        </div>
      </li>
    );
  };