import { Form } from './Components/Form/Form'
import TodoList from './Components/TodoList/TodoList'
import { Main, Header, Container } from './App.styled'

function App() {
    return (
        <Main>
            <Header>
                <h1>Todo List</h1>
            </Header>
            <Container>
                <Form/>
                <TodoList/>
            </Container>
        </Main>
    );
}

export default App;