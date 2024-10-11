export const TodoItem = ({ todo, dispatch }) => {
    return (
        <li className="list-group-item d-flex justify-content-between" >
            <span> {todo.descripcion} </span>
            <button
                className="btn btn-danger"
                onClick={() => dispatch({ type: 'delete', payload: 1 })}
            >
                Borrar
            </button>
        </li>
    )
}