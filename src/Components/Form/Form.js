import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import { FormStyled } from './Form.styled'

export const Form = () => {
    return (
        <FormStyled>
            <TextField id="standard-basic" label="Todo" color="primary" variant="filled" size="small" style={{width: "100%"}}/>
            <IconButton color="primary">
                <AddIcon/>
            </IconButton>
        </FormStyled>
    )
}