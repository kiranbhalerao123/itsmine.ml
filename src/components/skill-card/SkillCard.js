import React, { Component } from "react";
import "./SkillCard.css";

class SkillCard extends Component {
  render() {
    return (
      <div className="skill-card-section d-flex flex-column align-items-center">
        <img
          src={this.props.img_url}
          alt="design_icon"
          height="120px"
          width="120px"
        />
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
        <a target="blank" href={this.props.url}>
          <div className=" learn-more-btn">LEARN MORE</div>
        </a>
      </div>
    );
  }
}
export default SkillCard;
