import { todoReducer } from "../../src/08-useReducer";

describe('Pruebas en el todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'aprender react',
        done: false
    }];

    test('debe de retornar el estado inicial', () => {
        const state = todoReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('debe de agregar un todo', () => {
        const newTodo = {
            id: 2,
            description: 'aprender jest',
            done: false
        };
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        };
        const state = todoReducer(initialState, action);
        expect(state.length).toBe(2);
        expect(state).toContain(newTodo);
    });

    test('debe de borrar un todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };
        const state = todoReducer(initialState, action);
        expect(state.length).toBe(0);
    });

    test('debe de realizar el toggle del todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };
        const state = todoReducer(initialState, action);
        expect(state[0].done).toBe(true);
    });
  
})