import React, { Component } from "react";
import "encode-case64";
import "./ProjectCard.css";
class ProjectCard extends Component {
  render() {
    return (
      <div className="row card-section d-flex flex-column">
        <div className="d-flex flex-row">
          <img
            src={`https://i.imgur.com/${
              this.props.node.repositoryTopics.nodes[0].topic.name.convertFromCase64()
            }.png`}
            alt="img"
            width="120px"
            height="120px"
            className="mb-0 mt-1"
          />
          <div className="d-flex flex-column pl-4 mt-4 card-left">
            <h2 className="mb-0">{this.props.node.name}</h2>
            <div className="mt-4 d-flex justify-content-end">
              <a target="blank" href={this.props.node.homepageUrl || this.props.node.url}>
                <div
                  className="btn btn-open"
                  style={{
                    background: this.props.btnColor,
                    color: this.props.fontColor
                  }}
                >
                  Open
                </div>
              </a>
              <a target="blank" href={this.props.node.url}>
                <div
                  className="btn btn-github"
                  style={{
                    background: this.props.btnColor,
                    color: this.props.fontColor
                  }}
                >
                  Github
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="ml-auto mt-0 card-desc">
            {this.props.node.description}
          </p>
        </div>
      </div>
    );
  }
}
export default ProjectCard;
