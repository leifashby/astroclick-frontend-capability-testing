"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Test1 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items: []
		};
	}
	addItem(e) {
		var itemArray = this.state.items;
		itemArray.push({
			text: this._inputElement.value
		});

		this.setState({
			items: itemArray
		});

		this._inputElement.value = "";
		e.preventDefault();
	}
	render () {
	    return (
	      <div>
	      	<h1>Test 1 - React Components</h1>
	      	<h4>This test is designed to guage your understanding of React Containers and Components, how they are imported and exported, and when they are necessary. The goal is simple, break down the the rendered code within the "Test 1" container into smaller components. Please use the smallest component structure that feels reasonable to you, and be able to defend that decision.</h4>
	      	<Link to="/">Go Home</Link>
	      	<div className="body">
	      		<h4>This is a list of some things</h4>
		      	<ul>
					<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
					<li>Aliquam tincidunt mauris eu risus.</li>
					<li>Vestibulum auctor dapibus neque.</li>
				</ul>
				<br />
				<br />
				<h4>This is a generator that generates some things</h4>
				<form onSubmit={this.addItem}>
					<input ref={(a) => this._inputElement = a} placeholder="enter thing"></input>
					<button type="submit">add</button>
					<ul>
					{this.state.items.map((i)=>(
						<li>{i.text}</li>
					))}
					</ul>
	            </form>
	            <div className="testBox">
	            	<h4>These are some boxes critical to innovation</h4>
	            	<div>Box 1</div>
	            	<div>Box 2</div>
	            	<div>Box 3</div>
	            </div>
			</div>
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