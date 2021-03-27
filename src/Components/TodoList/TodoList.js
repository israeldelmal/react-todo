import React from 'react'
import './TodoList.scss'
import { Todo } from '../Todo/Todo'

export const TodoList = () => {
    return (
        <ul className="todo-list">
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
        </ul>
    )
}