import {  Input, List, ListItem, ListItemIcon, ListItemText, makeStyles, Modal } from '@material-ui/core';
import './Todo.css';
import React, { useState } from 'react';
import db from '../firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const [open, setOpen] = useState(false);
    const classes =useStyles();
    const [input, setInput] = useState();

    const handleOpen = () =>{
        setOpen(true);
    };

    const updateTodo = () =>{
        setOpen(false)
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge:true});
    };

    

    return (
        <>
        <Modal
        open={open}
        onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1> I am a Modal</h1>
                <Input placeholder={props.todo.todo} value={input} onChange= {event => setInput(event.target.value)}/>
                <UpdateIcon onClick={e => updateTodo()} />
                <CloseIcon onClick={e => setOpen(false)}/>
            </div>
        
        </Modal >
            <div>
                <List>
                    <ListItem >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={props.todo.todo} secondary="Dummy Deadline⏰" />
                    </ListItem>
                    <EditIcon onClick={e => setOpen(true)}/>
                    <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
                </List>  
            </div>
        </>    
    )
}

export default Todo
