"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Test1 extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
      	<h1>Test 1</h1>
      	<Link to="/">Return</Link>
      </div>
    );
  }
}


Test1.propTypes = {

};

Test1.defaultProps = {

};

export default connect(
  (state) => ({

  }),
)(Test1);