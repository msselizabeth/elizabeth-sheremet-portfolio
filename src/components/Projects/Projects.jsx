import "./Projects.scss";
import { projects } from "../../data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Projects() {
  return (
    <>
      <SectionTitle title="Projects"/>
      <section className="section" id="projects">
    <ul className="projects__list">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </ul>
  </section>
    </>
  );
}
