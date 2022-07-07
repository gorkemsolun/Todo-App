import React from 'react';
import {List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import db from './firebase';

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary={"deadline"}>
                </ListItemText>
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Del</Button>
            </ListItem>
        </List>
    )
}

export default Todo