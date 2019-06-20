import React from 'react';
import Todo from './components/Todo';
import Modal from './components/Modal';
import useModal from './components/useModal';
import logo from './logo.svg';
import './App.css';

function App() {
  const { isShowing, toggle } = useModal();

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <section>
        <h1>Todo List</h1>
        <Todo/>
      </section>
      <section>
        <h1>Modal</h1>
        <button className="button-default" onClick={toggle}>Show Modal</button>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
      </section>
    </div>
  );
}

export default App;
