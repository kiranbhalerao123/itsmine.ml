import React from "react";
import "./Projects.css";
import ProjectCard from "../project-card/ProjectCard";
import Heading from "../heading/Heading";

/**
 project card container->
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-evenly
 **/

 /* Hardcoded colors
const btnColors = [
  "#f8cccd",
  "#fdf3d4",
  "#c8ffbf",
  "#c3f5fe",
  "#f8ccea",
  "#d2eee1"
];

const fontColors = [
  "#B52E31",
  "#FF8800",
  "#16A200",
  "#00B8D9",
  "#EE03A0",
  "#00AA5B"
];
*/

const subtitle = `Projects..hmm!🤗 ok, This section contains some of my projects that I've built in my free time. This site is also a part of them, I've fetch all projects info from github's graphql API, ok enough talking have look at..🙂`;

class Projects extends React.Component {
  state = {
    repos: []
  };
  componentWillMount = () => {
    fetch("/.netlify/functions/getrepos")
      .then(response => response.json())
      .then(repos => this.setState({repos}));
  };
  render() {
    return (
      <React.Fragment>
        <div id="scroll-projects" />
        <Heading title="PROJECTS" subtitle={subtitle} id="projects">
          <section className="project-card-container m-0 p-0">
            {this.state.repos.map((node, i) => (
              <ProjectCard
                node={node}
                btnColor={`#${node.repositoryTopics.nodes[1].topic.name}`}
                fontColor={`#${node.repositoryTopics.nodes[2].topic.name}`}
                key={i}
              />
            ))}
          </section>
        </Heading>
      </React.Fragment>
    );
  }
}
// export default Projects;
export default Projects;
