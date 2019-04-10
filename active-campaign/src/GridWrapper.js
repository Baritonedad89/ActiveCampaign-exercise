import React from "react";
import styled from 'styled-components'

const GridItems = styled.div`
margin-top: 20px;
box-shadow: 0 0 35px rgba(0, 0, 0, 0.3);
`

const GridWrapper = props => {
  return (
    <div className="container">
      <div className="row">
        <GridItems className="col l6 offset-l3">{props.children}</GridItems>
      </div>
    </div>
  );
};

export default GridWrapper;
