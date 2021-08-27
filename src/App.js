import React, { Component } from "react";
//import "./App.css";
import Task from "./ Task";
import History from "./History";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      text: "",
      status: "",
    };
  }

  addTdo = (text) => {
    //не привязываю к контенту классу
    const newTodos = [...this.state.todos];
    newTodos.push({
      id: `cmr${(+new Date()).toString(16)}`,
      text: text,
      status: false,
    });
    this.setState({
      todos: newTodos,
    });
    this.setState({
      text: "",
    });
  };

  handler = (event) => {
    let value = event.target.value;

    this.setState({
      text: value,
    });
  };

  delTodo = (key) => {
    const todo = this.state.todos.filter((item) => item.id !== key);
    this.setState({ todos: todo });
  };

  setStatus = (id) => {
    const oldTodos = [...this.state.todos];
    let newTodos = oldTodos.map((item) => {
      if (item.id === id) {
        return {
          text: item.text,
          status: !item.status,
          id: item.id,
        };
      } else {
        return item;
      }
    });
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div>
        <Task
          addTdo={this.addTdo}
          text={this.state.text}
          handler={this.handler}
        />
        <History
          todos={this.state.todos}
          text={this.text}
          delTodo={this.delTodo}
          addTdo={this.addTodo}
          setStatus={this.setStatus}
        />
      </div>
    );
  }
}

export default App;
