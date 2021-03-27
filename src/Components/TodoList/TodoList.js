import React from 'react'
import { TodoListStyled } from './TodoList.styled'
import Todo from '../Todo/Todo'

const TodoList = () => {
    return (
        <TodoListStyled>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
        </TodoListStyled>
    )
}

export default TodoList