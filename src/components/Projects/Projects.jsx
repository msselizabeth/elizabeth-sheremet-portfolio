import "./Projects.scss";
import { projects } from "../../data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";
import SectionTitle from "../SectionTitle/SectionTitle";
import FadeInSection from "../FadeInSection/FadeInSection";


export default function Projects() {
  return (
    <>
      <SectionTitle title="Projects" />
      <section className="section projects" id="projects">
        <ul className="projects__list">
      {projects.map((project, index) => (
        <FadeInSection key={index} >
          <ProjectItem project={project} index={index} />
       </FadeInSection>
      ))}
    </ul>
      </section>
    </>
  );
}
