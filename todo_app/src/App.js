import React, {useEffect, useState} from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './components/Todo';
import './App.css';
import firebase from 'firebase';
import db from './firebase';

function App() {
  const [todos, setTodos]=useState(["abc", "efg"]);
  const [input, setInput]=useState("");
  
  //when the app loads, we need to listen to the database and fetch new todos as they are added or removed
  useEffect(() => {
    //this code here... fires when app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, [input]);
  const addTodo = (event) => {
    //this will add the todo in out list or append that in our array
    event.preventDefault(); // will stop the refresh
    //console.log("+-+" , "Added in the list");
    //setTodos([...todos, input]);
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FindValue.serverTimestamp()
    })
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
