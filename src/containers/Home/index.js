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
        <h5>Now that you have forked this repo, please complete the following 3 tests, and then commit your changes to your forked branch and send us your updated repo. Good Luck!</h5>
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