import React, { Component } from 'react'

const Collections = props => {
    return (
      <ul className="collection">{props.children}</ul>
    )
  
}

export default Collections;
