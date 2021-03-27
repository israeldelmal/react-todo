import React from 'react';
import './Todo.scss';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export const Todo = () => {
    return (
        <li className="todo">
            <span>Todo name</span>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small"/>
            </IconButton>
        </li>
    )
}