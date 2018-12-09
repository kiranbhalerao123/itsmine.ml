import React, { Component } from "react";
import "./Skills.css";
import Heading from "../heading/Heading";
import SkillCard from "../skill-card/SkillCard";

const subtitle = `Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolor, 
Possimus repudiandae, maiores quam fugit`;
class Skills extends Component {
  render() {
    return (
      <div>
        <div id="scroll-skills" />
        <Heading title="SKILLS" subtitle={subtitle} id="skills-section">
          <section className="card-container m-0 p-0">
            <SkillCard
              img_url={require("../../assets/design_icon.png")}
              title="UI/UX design"
              desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut
            soluta iure, saepe perferendis enim quidem veritatis`}
              url="https://dribbble.com/Kiranbhalerao11"
            />
            <SkillCard
              img_url={require("../../assets/development_icon.png")}
              title="Web development"
              desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut
            soluta iure, saepe perferendis enim quidem veritatis`}
              url="https://github.com/kiranbhalerao123"
            />
            <SkillCard
              img_url={require("../../assets/android_icon.png")}
              title="App development"
              desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut
            soluta iure, saepe perferendis enim quidem veritatis`}
              url="https://github.com/kiranbhalerao123"
            />
          </section>
        </Heading>
      </div>
    );
  }
}
export default Skills;
