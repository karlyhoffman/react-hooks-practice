import React from 'react';
import Todo from './components/Todo';
import Modal from './components/Modal';
import useModal from './components/useModal';
import InfiniteScroll from "./components/InfiniteScroll";
import logo from './logo.svg';
import './App.css';

function App() {
  const { isShowing, toggle } = useModal();

  return (
    <div className="app">
      <div className="header">
        <h1>React Hooks</h1>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <section>
        <h2>Todo List</h2>
        <Todo />
      </section>
      <section>
        <h2>Modal</h2>
        <button className="button-default" onClick={toggle}>
          Show Modal
        </button>
        <Modal isShowing={isShowing} hide={toggle} />
      </section>
      <section>
        <h2>Infinite Scrolling</h2>
        <InfiniteScroll />
      </section>
    </div>
  );
}

export default App;
