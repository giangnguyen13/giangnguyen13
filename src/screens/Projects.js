import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import CardProjectItem from "../components/CardProjectItem";
import { projects } from "../data";

const Projects = ({ setActiveSection }) => {
  const id = "projects";
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);

  return (
    <div className='basic-grid' ref={ref}>
      {projects.map((project) => {
        return (
          <CardProjectItem
            key={project.id}
            img={project.img}
            imgText={project.imgText}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        );
      })}
    </div>
  );
};

export default Projects;
