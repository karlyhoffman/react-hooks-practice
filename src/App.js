import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /* 
   * SETTING INITIAL STATE:
   *
   * When you initialize state using the useState Hook, you define two values: the getter and the setter.
   * In this example, todos is the state value itself, and setTodos is the function that updates the state value.
   *
   * Below is initializing todos to have a default value of an array filled with objects.
   */
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Get haircut',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false,
    }
  ]);

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className="todo">
              <div className="checkbox" />
              <input type="text" value={todo.content} />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
