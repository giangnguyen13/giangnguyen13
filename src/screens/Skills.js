import React, { useEffect } from "react";
import SkillSection from "../components/SkillSection";
import { useInView } from "react-intersection-observer";
import { skills } from "../data";

const Skills = ({ setActiveSection }) => {
  const id = "skills";
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);

  return (
    <div ref={ref}>
      {skills.map((skill, key) => {
        return (
          <SkillSection
            key={key}
            sectionTitle={skill.title}
            skills={skill.skills}
          />
        );
      })}
    </div>
  );
};

export default Skills;
