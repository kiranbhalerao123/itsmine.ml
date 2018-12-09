import React, { Component } from "react";
import "./Showcase.css";
import Navbar from "../navbar/Navbar";
import animateScrollTo from "animated-scroll-to";

class Showcase extends Component {
  render() {
    return (
      <div id="showcase">
        <Navbar />
        <section>
          <div className="row m-0 p-0">
            <div className="col-lg-5">
              <div className="content d-flex flex-column align-items-center">
                <div>
                  <h1 className="main-title">
                    HELLO,
                    <br />I AM KIRAN.
                  </h1>
                </div>
                <p className="text-center slogun-text">
                  I'm Glad that you visited my site where you get to know me and
                  my work.
                </p>
                <button
                  className="btn big ui button mt-4"
                  onClick={() =>
                    animateScrollTo(document.querySelector("#scroll-projects"))
                  }
                >
                  <h3 className="text-light">Next</h3>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Showcase;
