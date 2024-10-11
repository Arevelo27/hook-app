import { useReducer } from 'react'
import { todoReducer, TodoList, TodoAdd } from './';

const initialState = [
    {
        id: new Date().getTime(),
        descripcion: 'Recolectar la piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        descripcion: 'Recolectar la piedra del poder',
        done: false,
    }
];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log({ todo })
    }

    return (
        <>

            <h1>TodoApp: {todos.length}, <small>Pending: {todos.filter(todo => !todo.done).length}</small></h1>

            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} dispatch={dispatch} />
                </div>

                <div className="col-5">
                    <h4> Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>

            </div>


        </>
    )
}