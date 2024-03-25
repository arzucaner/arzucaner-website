import React from 'react';
import './skills.css';
import SkillsImage from '../../assets/skills.png';


const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">Who I am</span>
      <span className="skillDesc">I'm Arzu, a passionate Software Developer with a strong technical SEO background. I'm passionate about building robust and scalable applications. Let's connect and create an amazing project together! 🚀</span>
      <div className="skillBars">
        <div className="skillBar">
           <img src={SkillsImage} alt="skills" className="skillBarImg"/>
           <div className="skillBarText">
            <h2>Frontend</h2>
            <p></p>
           </div>
           </div>

           <div className="skillBar">
           <img src={SkillsImage} alt="skills" className="skillBarImg"/>
           <div className="skillBarText">
            <h2>Backend</h2>
            <p></p>
           </div>
           </div>           

           <div className="skillBar">
           <img src={SkillsImage} alt="skills" className="skillBarImg"/>
           <div className="skillBarText">
            <h2>Database</h2>
            <p></p>
           </div>
           </div>       
      </div>        
    </section>
  );
}

export default Skills;
