import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos]=useState(["Complete this course", "add it to git up"]);
  return (
    <div className="App">
      <h1>Hello World i am happy</h1>
      <input/>
      <button>Add todo</button>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
    </div>
  );
}

export default App;
