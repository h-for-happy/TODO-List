import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem >
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={props.todo} secondary="Dummy Deadline⏰" />
                </ListItem>
            </List>  
        </div>
    )
}

export default Todo
