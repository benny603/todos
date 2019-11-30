// import React, { Component } from "react";
// import Todos from "./Todos";
// import AddForm from "./AddForm";

// class App extends Component {
//   state = {
//     todos: [
//       { content: "buy some milk", id: 1 },
//       { content: "play mario kart", id: 2 }
//     ]
//   };

//   deleteTodo = id => {
//     const todos = this.state.todos.filter(todo => {
//       return todo.id !== id;
//     });
//     this.setState({
//       todos: todos
//     });
//   };

//   addTodo = newTodo => {
//     newTodo.id = Math.random();
//     const todos = [...this.state.todos, newTodo];
//     this.setState({
//       todos: todos
//     });
//   };
//   render() {
//     return (
//       <div className="todo-app container">
//         <h1 className="center blue-text">Todo's</h1>
//         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
//         <AddForm addTodo={this.addTodo} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  };

  addTodo = newTodo => {
    newTodo.id = Math.random();
    const todos = [...this.state.todos, newTodo];
    this.setState({
      todos: todos
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
