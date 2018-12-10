import React, { Component } from "react";
import "./Skills.css";
import Heading from "../heading/Heading";
import SkillCard from "../skill-card/SkillCard";

const subtitle = `I think🤔 this is a good place to talk about my skills..hmm😃 isn't it? ok fine. I Categorised my skills into three sections as..`;
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
              desc={`Better UI means a better User experience. I understand and learn this key concept of UI/UX and I usually use design first approach before starting any new projects.`}
              url="https://dribbble.com/Kiranbhalerao11"
            />
            <SkillCard
              img_url={require("../../assets/development_icon.png")}
              title="Web development"
              desc={`I consider myself as a javascript developer😎. I can use javascript anywhere UI Development, Backend Development or the other factors.`}
              url="https://github.com/kiranbhalerao123"
            />
            <SkillCard
              img_url={require("../../assets/android_icon.png")}
              title="App development"
              desc={`I started my journey with android development and so I know the basics of Android development and React Native for developing cross-platform Apps😃.`}
              url="https://github.com/kiranbhalerao123"
            />
          </section>
        </Heading>
      </div>
    );
  }
}
export default Skills;
