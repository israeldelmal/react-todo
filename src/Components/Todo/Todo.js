import React from 'react';
import './Todo.styled.js';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { TodoStyled } from './Todo.styled'

const Todo = () => {
    return (
        <TodoStyled>
            <span>Todo name</span>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small"/>
            </IconButton>
        </TodoStyled>
    )
}

export default Todo