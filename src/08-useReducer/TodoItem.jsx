export const TodoItem = ({ todo, dispatch }) => {
    return (
        <li className="list-group-item d-flex justify-content-between" >
            <span> {todo.description} </span>
            <button
                className="btn btn-danger"
                onClick={() => dispatch({ type: '[TODO] Remove Todo', payload: todo })}
            >
                Borrar
            </button>
        </li>
    )
}