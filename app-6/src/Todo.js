import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: []
    };
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  handleClick() {
    let newList = this.state.list;
    newList.push(this.state.input);

    this.setState({
      list: newList,
      input: ""
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={e => this.handleChange(e)} />
        <button onClick={() => this.handleClick()}>Add</button>
        <div>
          {this.state.list.map(e => {
            return <h3>{e}</h3>;
          })}
        </div>
      </div>
    );
  }
}

export default Todo;
