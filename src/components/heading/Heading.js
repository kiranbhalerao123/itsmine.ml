import React from "react";
import "./Heading.css";

const Heading = ({ children, title, subtitle, id }) => (
  <section id={id} className="d-flex flex-column align-items-center">
    <h1 className="projects-tag">{title}</h1>
    <p className="text-center">{subtitle}</p>
    {children}
  </section>
);

export default Heading;
