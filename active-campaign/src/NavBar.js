import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper indigo accent-4">
          <a href="/" className="brand-logo center">
            LampPost API
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            
          </ul>
        </div>
      </nav>
    );
  }
}
