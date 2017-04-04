import React from "react";

class ThingGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  addItem(e) {
    e.preventDefault();
    var itemArray = this.state.items;
    itemArray.push(this._inputElement.value);
    this.setState({
      items: itemArray
    });
    this._inputElement.value = "";
  }
  render() {
    return (
      <form onSubmit={this.addItem.bind(this)}>
        <input name="newThing" ref={(a) => this._inputElement = a} placeholder="enter thing"></input>
        <button type="submit">add</button>
        <ThingList things={this.state.items}></ThingList>
      </form>
    );
  }
}

class ThingList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const things = this.props.things.map((text, i) => {
      return <li key={i}>{text}</li>;
    });
    return (
      <ul>
        {things}
      </ul>
    );
  }
}

ThingList.propTypes = {
  things: React.PropTypes.arrayOf(React.PropTypes.string)
};

ThingList.defaultProps = {
  things: []
};

export { ThingList, ThingGenerator };
