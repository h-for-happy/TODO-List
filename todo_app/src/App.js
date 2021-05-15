import React, {useState} from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './components/Todo';
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
      <FormControl>
        <InputLabel>✅ Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        
      </FormControl>
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add todo
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add todo</button> */}
      </form>
      
      {todos.map(todo => (
        <Todo todo={todo}/>
        // <li>{todo}</li>
      ))}
    </div>
  );
}

export default App;
