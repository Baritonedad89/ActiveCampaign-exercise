import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper indigo accent-4">
          <a href="#" class="brand-logo">
            LampPost API
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            {/* <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
