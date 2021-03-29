import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import { FormStyled, InputStyled } from './Form.styled'

export const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHanlder = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.round(Math.random() * 100)
            }
        ])
        setInputText('')
    }

    return (
        <FormStyled>
            <InputStyled placeholder="Todo name" value={ inputText } onChange={ inputTextHanlder }/>
            <IconButton type="submit" color="primary" onClick={ submitTodoHandler } disabled={ inputText === '' }>
                <AddIcon/>
            </IconButton>
        </FormStyled>
    )
}