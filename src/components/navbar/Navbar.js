import React, { Component } from "react";
import "./Navbar.css";
import animateScrollTo from "animated-scroll-to";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-light">
          <a className="navbar-brand" href="#">
          It'smekiran
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <button
                  className="nav-link btn nav-btn"
                  onClick={() =>
                    animateScrollTo(document.querySelector(".navbar-expand-md"))
                  }
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn nav-btn"
                  onClick={() =>
                    animateScrollTo(document.querySelector("#scroll-projects"))
                  }
                >
                  Projects
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn nav-btn"
                  onClick={() =>
                    animateScrollTo(document.querySelector("#scroll-skills"))
                  }
                >
                  Skills
                </button>
              </li>
              <li className="nav-item btn resume-btn">
                <a
                  className="nav-link text-light"
                  href="https://drive.google.com/open?id=1aU53eBQkluL6VmeWTUY1s4IKdA2havmE"
                >
                  <p className="resume-btn-text">RESUME</p>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
