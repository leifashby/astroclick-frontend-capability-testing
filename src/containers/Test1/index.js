"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ThingList, ThingGenerator } from '../../components/Things';
import Box from '../../components/Box';

class Test1 extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    const boxes = this.props.boxList.map((box, i) => {
      return <Box key={i} value={box}></Box>
    });
    return (
      <div>
        <h1>Test 1 - React Components</h1>
        <h5>This test is designed to guage your understanding of React Containers and Components, how they are imported and exported, and when they are necessary.</h5>
        <h5>The goal is simple, break down the the rendered JSX code within the "Test 1" container into smaller components. Please use the smallest component structure that feels reasonable to you, and be able to defend that decision.</h5>
        <Link to="/">Go Home</Link>
        <div className="body">
          <h4>This is a list of some things</h4>
          <ThingList things={this.props.thingList}></ThingList>
          <br />
          <br />
          <h4>This is a generator that generates some things</h4>
          <ThingGenerator></ThingGenerator>
          <div className="testBox">
            <h4>These are some boxes critical to innovation</h4>
            {boxes}
          </div>
          {/* <TestBoxes boxes={['Box 1', 'Box 2', 'Box 3']}></TestBoxes> */}
        </div>
      </div>
    );
 	}
}

Test1.propTypes = {
  thingList: React.PropTypes.arrayOf(React.PropTypes.string),
  boxList: React.PropTypes.arrayOf(React.PropTypes.string)
};

Test1.defaultProps = {
  thingList: [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    'Aliquam tincidunt mauris eu risus.',
    'Vestibulum auctor dapibus neque.'
  ],
  boxList: [
    'Box 1',
    'Box 2',
    'Box 3'
  ]
};

export default connect(
  (state) => ({

  }),
)(Test1);
