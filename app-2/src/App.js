import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ["something", "another thing", "thing 3", "thing 4"]
    };
  }

  
  render() {
    let listDisplay = this.state.list.map((element) => {
      return <h2>{element}</h2>
    })
    return (
      <div className="App">
        {listDisplay}
      </div>
    );
  }
}

export default App;
