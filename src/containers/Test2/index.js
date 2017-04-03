"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { counterUp, counterDown } from '../../actions/CounterActions';

class Test2 extends React.Component {
  constructor(props){
    super(props);
  }
  submitCategoryForm(event) {
    event.preventDefault();
    console.log(event.target.name.value);
  }
  render () {
    return (
      <div>
        <h1>Test 2 - Using Redux</h1>
        <Link to="/">Go Home</Link>
        <div>
          <h1>Task 1</h1>
          <p>Using actions and reducers, add to the existing counter functionality to:</p>
          <ol>
            <li>Prevent the counter from going below 0 and above 99</li>
            <li>Hook up a button to reset the counter to it's initialized state</li>
          </ol>
          <h4>Counter: {this.props.counter}</h4>
          <span>
            <label>Counter Controls </label>
            <button onClick={this.props.down.bind(this)}>-</button>
            <button>RESET</button>
            <button onClick={this.props.up.bind(this)}>+</button>
          </span>
        </div>
        <hr />
        <div>
          <h1>Task 2</h1>
          <p>Using the existing actions/CategoryActions.js and reducers/CategoryReducer.js file</p>
          <ol>
            <li>Add the ability to add and remove a single specific category</li>
            <li>Hook up the existing form to add a category, and to clear out the form when it is submitted</li>
            <li>Hook up ability to click on a category name to remove it</li>
          </ol>
          <b>Categories: </b>
          {this.props.categories.map((cat, i) => {
            return <p key={i}>{cat}</p>
          })}
          <div>
            <form onSubmit={this.submitCategoryForm.bind(this)}>
              <input type="text" name="name" />
              <button type="submit">Submit</button>
            </form>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

Test2.propTypes = {

};

Test2.defaultProps = {
  categories: []
};

export default connect(
  (state) => ({
    counter: state.counter,
    categories: state.categories
  }),
  (dispatch) => ({
    up: () => dispatch(counterUp()),
    down: () => dispatch(counterDown())
  })
)(Test2);
