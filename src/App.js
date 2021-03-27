import './App.scss';
import { Form } from './Components/Form/Form'
import { TodoList } from './Components/TodoList/TodoList';

function App() {
    return (
        <main className="main">
            <header className="header">
                <h1>Todo List</h1>
            </header>
            <section className="container">
                <Form/>
                <TodoList/>
            </section>
        </main>
    );
}

export default App;