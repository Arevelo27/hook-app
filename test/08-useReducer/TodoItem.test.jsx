import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';


describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => { jest.clearAllMocks() })

    test('debe de mostrar el Todo pendiente de completar', () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />);
        
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).not.toContain('completed');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center text-break');
    })

    test('debe de mostrar el Todo completado', () => {
        todo.done = true;
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toContain('list-group-item d-flex justify-content-between');
    });

    test('span debe de llamar el toggleTodo cuando se hace click', () => {
        render(
            <TodoItem    
                todo={todo}
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);        
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('boton de eliminar debe de llamar el onDeleteTodo', () => {
        render(
            <TodoItem    
                todo={todo}
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />);

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);        
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });

})
