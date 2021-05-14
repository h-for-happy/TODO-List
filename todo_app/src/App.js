import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos]=useState(["Complete this course", "add it to git up","test add"]);
  const [input, setInput]=useState("");
  console.log("--+",input);

  const addTodo = (event) => {
    //this will add the todo in out list or append that in our array
    event.preventDefault(); // will stop the refresh
    console.log("+-+" , "Added in the list");
    setTodos([...todos, input]);
    setInput("");//clear the input after we click submit
  }
  return (
    <div className="App">
      <h1>Hello World i am happy</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <button type="submit" onClick={addTodo}>Add todo</button>
      </form>
      
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
    </div>
  );
}

export default App;
