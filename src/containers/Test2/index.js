"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Test2 extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <h1>Test 2</h1>
        <Link to="/">Return</Link>
      </div>
    );
  }
}


Test2.propTypes = {

};

Test2.defaultProps = {

};

export default connect(
  (state) => ({

  }),
)(Test2);