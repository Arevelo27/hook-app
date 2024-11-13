import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer';
import { useTodos } from '../../src/hooks';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en <TodoApp />', () => {

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Piedra del alma', done: false },
            { id: 2, description: 'Piedra del tiempo', done: true }
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('debe de mostrar el componente correctamente', () => {

        render(<TodoApp />);

        expect(screen.getByText('Piedra del alma')).toBeTruthy();
        expect(screen.getByText('Piedra del tiempo')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

    });
});
