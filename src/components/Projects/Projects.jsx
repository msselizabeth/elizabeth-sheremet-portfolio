import "./Projects.scss";
import { projects } from "../../data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";

export default function Projects() {
  return (
    <section className="section" id="projects">
    <h2 className="section-title">// Projects</h2>
    <ul className="projects__list">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </ul>
  </section>
  );
}
