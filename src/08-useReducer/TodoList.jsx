import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], dispatch }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map(todo => (

                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        dispatch={dispatch}
                    />
                ))
            }
        </ul>
    )
}