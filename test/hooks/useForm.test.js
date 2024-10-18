import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe('Pruebas en el useForm', () => {

    const initialForm = { username: 'test', email: 'andres@gmail.com', password: '123456' };

    test('debe de retornar el valor por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            username: initialForm.username,
            email: initialForm.email,
            password: initialForm.password,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    })

    test('debe de cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(() => {
            onInputChange({ target: { name: 'username', value: 'andres' } });
        });
        expect(result.current.username).toBe('andres');
        expect(result.current.formState.username).toBe('andres');
    })

    test('debe de resetear el formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onResetForm, onInputChange } = result.current;
        act(() => {
            onInputChange({ target: { name: 'username', value: 'andres' } });
            onResetForm();
        });
        expect(result.current.username).toBe(initialForm.username);
        expect(result.current.formState.username).toBe(initialForm.username);
    })

})