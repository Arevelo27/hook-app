export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between" >
            <span
                className={`align-self-center text-break ${todo.done ? 'text-decoration-line-through' : ''}`}
                // style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                onClick={() => onToggleTodo(todo.id)}
                aria-label="span"
            >
                {todo.description}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => onDeleteTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}