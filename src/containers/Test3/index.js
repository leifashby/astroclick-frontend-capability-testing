"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Test3 extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <h1>Test 3</h1>
        <Link to="/">Return</Link>
      </div>
    );
  }
}


Test3.propTypes = {

};

Test3.defaultProps = {

};

export default connect(
  (state) => ({

  }),
)(Test3);