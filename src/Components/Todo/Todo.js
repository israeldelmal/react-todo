import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import styled, { ThemeProvider } from 'styled-components'
import { TodoStyled, Buttons } from './Todo.styled'

const Todo = ({ todo, todos, setTodos }) => {
    const deleteHanlder = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    const StatusTodo = styled(TodoStyled)`
        background-color: ${ props =>  props.theme.bg};
        > span {
            color: ${ props =>  props.theme.textColor};
        }
    `

    return (
        <ThemeProvider theme={{
            bg: todo.completed ? '#00b278' : '#fff',
            textColor: todo.completed ? 'white' : 'black'
        }}>
            <StatusTodo>
                <span>{ todo.text }</span>
                <Buttons>
                    <IconButton aria-label="delete" size="small" onClick={ completeHandler }>
                        <CheckIcon fontSize="small"/>
                    </IconButton>
                    <IconButton aria-label="delete" size="small" onClick={ deleteHanlder }>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </Buttons>
            </StatusTodo>
        </ThemeProvider>
    )
}

export default Todo