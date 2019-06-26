import React from "react";
import "reset-css";
import "normalize.css";
import "./App.css";
import { connect } from 'react-redux';
import { addTodo, delTodos, togTodo, setLocal } from './actions/activate'
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      inputText: "Input a Todo",
      newItem: "",
      completed: false
    };
  }

  componentDidMount = () => {
    if (!localStorage.todoData) {
      localStorage.setItem('todoData', JSON.stringify(this.props.todos))
    }

    let storedTodoArr = JSON.parse(localStorage.todoData)
    this.props.setLocal(storedTodoArr);
  }
  
  componentDidUpdate() {
    localStorage.setItem('todoData', JSON.stringify(this.props.todos))
  }

  addNewItem = event => {
    event.preventDefault();
    if (this.state.newItem !== "") {
      this.props.addTodo(this.state.newItem)
      this.setState({newItem: ""});
      console.log(this.props.todo)
    }
  };

  formEventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearHandler = event =>{
    event.preventDefault();
    
    const clearedArray = [...this.props.todos].filter(cur => cur.completed === false)

    this.props.delTodos(clearedArray)
  }


  toggleHandler = event => {
    const toggledArray = [...this.props.todos]
    let position = null;

    const target = toggledArray.find((cur, index) => {
      position = index
      return cur.id === Number.parseInt(event.target.getAttribute('data-key'), 10)
    });

    target.completed === false ? target.completed = true : target.completed = false;
    
    toggledArray[position] = target;

    this.props.togTodo(toggledArray);
  };

  render() {
    return (
      <div className="appContainer">
        <h1>A Simple Todo List</h1>
        <TodoForm
          addNewItem={this.addNewItem}
          inputText={this.state.inputText}
          newItem={this.state.newItem}
          formEventHandler={this.formEventHandler}
          clearButton={this.clearHandler}
        />
        <TodoList todoData={this.props.todos} toggleItem={this.toggleHandler} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todos: state.TodoData
  };
};

export default connect(mapStateToProps, { addTodo, delTodos, togTodo, setLocal })(App);
