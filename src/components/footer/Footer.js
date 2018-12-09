import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column align-items-center pt-4 pb-4 w-100"
        style={{ background: "#fff" }}
        id="footer"
      >
        <p className="mb-0 pb-0">
          <span className="text-danger">{"<3"}</span>{" "}
          <strong>Open Source</strong>
        </p>
        <p className="text-center pl-3 pr-3 pt-1">
          Copyright © 2018 Created by <strong>Kiran Bhalerao</strong>.
        </p>
      </div>
    );
  }
}
export default Footer;
