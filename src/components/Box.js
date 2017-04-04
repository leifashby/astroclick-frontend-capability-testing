import React from "react";

class Box extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return <div>{this.props.value}</div>;
  }
}

Box.propTypes = {
  value: React.PropTypes.string
};

Box.defaultProps = {
  value: 'Box'
};

export default Box ;
