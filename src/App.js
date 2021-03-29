import { useState } from 'react'
import { Form } from './Components/Form/Form'
import TodoList from './Components/TodoList/TodoList'
import { Main, Header, Container } from './App.styled'
import GlobalStyles from './Styles/GlobalStyles'

function App() {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])

    return (
        <Main>
            <GlobalStyles/>
            <Header>
                <h1>Todo List</h1>
            </Header>
            <Container>
                <Form todos={ todos } setTodos={ setTodos } inputText={ inputText } setInputText={ setInputText }/>
                <TodoList todos={ todos } setTodos={ setTodos }/>
            </Container>
        </Main>
    );
}

export default App;