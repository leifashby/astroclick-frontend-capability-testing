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
        <h2>Welcome to Astronomer's React/Redux Code Test</h2>
        <h5>Now that you have forked this repo, please complete the following tests, and commit your changes to your forked branch. When finished, please send us a link to your fork.</h5>
        <h5>We anticipate you spending ~2-3 hours on Test 1 and 2, depending on your comfortability with React.</h5>
        <h5>Test 3 is slightly more difficult and significantly more open-ended, and is therefore competely optional. If you finish Test 1 and 2 quickly, please feel free to take on Test 3, but its completion is not critical to your consideration for open Astronomer positions.</h5>
        <h5><i>Note: where possible, please utilize React best practices, such as remembering to always define default props and proptypes, use OOP class-structure, keep react components dry, flat and "dumb", etc. <a target="blank" href="https://blog.risingstack.com/react-js-best-practices-for-2016/">For Reference</a></i></h5>
        <br />
        <h4>Good luck on these tests!</h4>
        <ul>
          <li><Link to="/test1">Test 1 - React Components</Link></li>
          <li><Link to="/test2">Test 2 - Using Redux</Link></li>
          <li><Link to="/test3">Test 3 - Mapping from API's (Optional)</Link></li>
        </ul>
      </div>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;