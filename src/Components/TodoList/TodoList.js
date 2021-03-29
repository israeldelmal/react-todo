import React from 'react'
import { TodoListStyled } from './TodoList.styled'
import Todo from '../Todo/Todo'

const TodoList = ({ todos, setTodos }) => {
    return (
        <TodoListStyled>
            { todos.map(todo => (
                <Todo key={ todo.id } todos={ todos } setTodos={ setTodos } todo={ todo }/>
            )) }
        </TodoListStyled>
    )
}

export default TodoList