import React from "react";

const SkillSection = ({ sectionTitle, skills }) => {
  return (
    <div className='skill-set'>
      <h2>{sectionTitle}</h2>
      {skills.map((skill) => {
        return (
          <img
            key={skill.id}
            src={skill.badge}
            alt={skill.description}
            className='tech-label'
          />
        );
      })}
    </div>
  );
};

export default SkillSection;
