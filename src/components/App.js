import React from "react";
import "../stylesheets/main.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
        <p className="help">Questions? Something broken? Reach out to Greg Brunk at greg.brunk@gmail.com.</p>
      </div>
    );
  }
}
