import React, { Component } from "react";
import Collections from "./Collections";
import ContactList from "./Home";

const GridWrapper = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col l6 offset-l4">{props.children}</div>
      </div>
    </div>
  );
};

export default GridWrapper;
