import styled from 'styled-components'

export const TodoStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: #fff;
    margin-bottom: 16px;
    &:last-of-type {
        margin-bottom: 0;
    }
    > span {
        display: inline-block;
    }
`

export const Buttons = styled.div`
    display: inline-flex;
    width: auto;
    align-items: center;
    justify-content: center;
`