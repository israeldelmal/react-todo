import React from 'react'
import './Form.scss'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'

export const Form = () => {
    return (
        <form className="form">
            <TextField id="standard-basic" label="Todo" color="primary" variant="filled" size="small" style={{width: "100%"}}/>
            <IconButton color="primary">
                <AddIcon/>
            </IconButton>
        </form>
    )
}