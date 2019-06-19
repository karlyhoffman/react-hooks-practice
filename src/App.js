import React, { useState } from 'react';
import Todo from './components/Todo';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <section>
        <h1>Todo List</h1>
        <Todo/>
      </section>
    </div>
  );
}

export default App;
