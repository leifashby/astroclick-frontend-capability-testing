"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { fetchQuakeData } from '../../actions/QuakeActions';
import { QuakeTable } from '../../components/Quakes';

class Test3 extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render () {
    const quakes = this.props.quakes;
    return (
      <div>
        <h2>Test 3 - Mapping from APIs</h2>
        <h5>This test is designed to test your knowledge of loops in JSX and your ability to plug into external API's.</h5>
        <Link to="/">Go Home</Link>
        <div className="body">
          <p>Please review this API: Geoquakes: <a href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson">Link</a></p>
          <p>Please create a list of the 15 most recent earthqakes, with the following data: 1) Place, 2) Magnitude, and 3) Time (In EST and formated for legibility). The approach is completely up to you, but please at least use React Components and some type of map/loop.</p>
          <p>Formatting of the list is completely up to you, but remember that this is designed to test your ability to map data from an api, not to test your design skills. Feel free to keep it bare-bones.</p>
        </div>
        <QuakeTable quakes={quakes}></QuakeTable>
      </div>
    );
  }
}


Test3.propTypes = {
  quakes: React.PropTypes.array.isRequired
};

Test3.defaultProps = {

};

export default connect(
  (state) => ({
    quakes: state.quakes
  }),
  (dispatch) => ({
    fetchData: () => dispatch(fetchQuakeData()),
  })
)(Test3);
