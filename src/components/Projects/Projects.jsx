import "./Projects.scss";
import { projects } from "../../data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";
import SectionTitle from "../SectionTitle/SectionTitle";
import FadeInSection from "../FadeInSection/FadeInSection";
import { useState } from "react";
import LoadMore from "../Buttons/LoadMore";


export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 1);
  }
  return (
    <>
      <SectionTitle title="Projects" />
      <section className="section projects" id="projects">
        <ul className="projects__list">
      {projects.slice(0, visibleProjects).map((project, index) => (
        <FadeInSection key={index} >
          <ProjectItem project={project} index={index} />
       </FadeInSection>
      ))}
        </ul>
        {visibleProjects < projects.length && <LoadMore loadMore={loadMore}/>}
      </section>
    </>
  );
}
