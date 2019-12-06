import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ['coke','sprite', 'monster', 'dr. pepper'],
      input: ''
    }
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  render() {
  let listDisplay = this.state.list.filter(element => element.includes(this.state.input))
    return (
      <div className="App">
        <input onChange = {e => this.handleChange(e)}/>
        {listDisplay.map((element)=> {
          return <h2>{element}</h2>
        })}
      </div>
    );
  }
}

export default App;
