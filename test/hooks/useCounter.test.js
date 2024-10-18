import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";

describe('Pruebas en el useCounter', () => {

    test('debe de retornar el valor por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, reset, decrement } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe de tener el counter en 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test('debe de incrementar el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
            increment();
            increment(2);
        });
        const { counter } = result.current;
        expect(counter).toBe(103);
    });

    test('debe de decrementar el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
            decrement();
            decrement(2);
        });
        const { counter } = result.current;
        expect(counter).toBe(97);
    });

    test('debe de resetear el counter', () => { 
        const { result } = renderHook(() => useCounter(100));
        const { decrement, reset } = result.current;
        act(() => {
            decrement();
            decrement();
            reset();
        });
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

})