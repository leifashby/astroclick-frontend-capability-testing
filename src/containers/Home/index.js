"use strict";
import React from "react";
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h4>Welcome to Astronomer's React/Redux Code Test</h4>
        <ul>
          <li><Link to="/test1">Test 1</Link></li>
          <li><Link to="/test2">Test 2</Link></li>
          <li><Link to="/test3">Test 3</Link></li>
        </ul>
      </div>
    );
  }
}

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;