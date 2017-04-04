import React from "react";
import moment from 'moment-timezone';

class Quake extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const properties = this.props.properties;
    const timestamp = moment(properties.time).tz('America/New_York').format('lll');
    return (
      <tr>
        <td>{properties.place}</td>
        <td>{properties.mag}</td>
        <td>{timestamp}</td>
      </tr>
    );
  }
}

Quake.propTypes = {
  properties: React.PropTypes.shape({
    place: React.PropTypes.string.isRequired,
    mag: React.PropTypes.number.isRequired,
    time: React.PropTypes.number.isRequired
  }).isRequired
};

class QuakeTable extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const quakes = this.props.quakes.map((feature) => {
      return <Quake key={feature.id} properties={feature.properties}></Quake>;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Place</th>
            <th>Magnitude</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {quakes}
        </tbody>
      </table>
    );
  }
}

QuakeTable.propTypes = {
  quakes: React.PropTypes.array
};

QuakeTable.defaultProps = {
  quakes: []
};

export { QuakeTable };
