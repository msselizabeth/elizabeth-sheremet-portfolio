import ShowMore from "../Buttons/ShowMore";
import "./ProjectItem.scss";
import { useEffect, useRef, useState } from "react";
import { RiExternalLinkFill, RiPlayLargeFill } from "@remixicon/react";
import techIcons from "../../data/tech-icons";

export default function ProjectItem({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef(null);

  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleVideoEnd = () => setVideoEnded(true);

  return (
    <li className="project__item">
      <div
        className={`project__item-container ${
          index % 2 !== 0 ? "reverse" : ""
        }`}>
        <div className="demo">
          <img
            src="/images/phone-frame.png"
            alt="phone frame"
            className="demo__frame"
          />

          <div className="demo__container">
            <div className="demo__video-container">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              preload="metadata"
              loading="lazy"
              poster={project.poster}
              playsInline
              onEnded={handleVideoEnd}
              className="demo__video">
              <source src={project.videoWebm} type="video/webm" />
              <source src={project.videoMp4} type="video/mp4" />
              The video aren't supported by your browser.
            </video>
            </div>
          </div>
        </div>

        <div className="project__description">
          <div className="project__name-container">
            <div>
              <h3 className="project__title">{project.title}</h3>
              <p className="project__type">
                {
                 project.brand && <img src={project.brand} alt="brand icon" className="project__brand-icon"/>
                }
                {project.type}</p>
            </div>
            {project.link && (
              <a href={project.link} className="project__link" target="_blank">
                Go to <RiExternalLinkFill size={20} />
              </a>
            )}
          </div>
          <p className="project__tech-title">Tech stack</p>
          <div className="project__tech-list">
            {project.techStack.map((tech) => (
              <span key={tech} className="project__icon-container">
                {techIcons[tech] || tech}
              </span>
            ))}
          </div>

          <p className="project__description-title">About project</p>
          <p
            className={`project__description-text ${
              isExpanded ? "expanded" : ""
            }`}>
            {project.description}
          </p>
          <ShowMore isExpanded={isExpanded} onClick={toggleDescription} />
        </div>
      </div>
    </li>
  );
}
