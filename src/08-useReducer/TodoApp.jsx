import { useReducer } from 'react'
import { todoReducer } from './todoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        todo: 'Recolectar la piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 2,
        todo: 'Recolectar la piedra del poder',
        done: false,
    }
];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>

            <h1>TodoApp</h1>

            <hr />

            {/* <TodoList /> */}
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

        </>
    )
}