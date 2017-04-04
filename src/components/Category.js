import React from 'react';
import { connect } from 'react-redux';
import { categoryRemove } from '../actions/CategoryActions';

class Category extends React.Component {
  removeCategory(event) {
    console.log(this.props.index);
    this.props.removeCategory(this.props.index);
  }

  render() {
    return <p onClick={this.removeCategory.bind(this)}> - {this.props.cat}</p>;
  }
}

Category.propTypes = {
  cat: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired
};

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    removeCategory: (index) => dispatch(categoryRemove(index))
  })
)(Category);
