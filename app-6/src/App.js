import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My to-do List:</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
