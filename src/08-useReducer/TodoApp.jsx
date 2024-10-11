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

            <h1>TodoApp: {todos.length}, <small>Pending: {todos.filter(todo => !todo.done).length}</small></h1>

            <hr />

            {/* <TodoList /> */}
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map(todo => (
                                <li key={todo.id} className="list-group-item d-flex justify-content-between" >
                                    <span>ListItem 1</span>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => dispatch({ type: 'delete', payload: 1 })}
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="col-5">
                    <h4> Agregar TODO</h4>
                    <hr />
                    <form>

                        <input
                            type="text"
                            placeholder="Que hay que hacer?"
                            className="form-control"
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1"
                        >
                            Agregar
                        </button>

                    </form>
                </div>

            </div>


        </>
    )
}