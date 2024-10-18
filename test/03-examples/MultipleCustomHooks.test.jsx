import { act, fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch, useCounter } from '../../src/hooks';

// Mock de los hooks
jest.mock('../../src/hooks/useCounter');
jest.mock('../../src/hooks/useFetch');

const mockUseCounter = useCounter;
const mockUseFetch = useFetch;

describe('Pruebas en el <MultipleCustomHooks>', () => {

    const incrementMock = jest.fn();

    mockUseCounter.mockReturnValue({
        counter: 1,
        increment: incrementMock,
        decrement: jest.fn(),
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de hacer match con el snapshot', () => {

        mockUseFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        const { container } = render(<MultipleCustomHooks />);
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el componente <MultipleCustomHooks>', () => {
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Información de Pokemón')).toBeTruthy();
        expect(screen.getByText('Cargando')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton).toBeTruthy();
        expect(nextButton.disabled).toBeTruthy();
    })

    test('debe de mostrar el pokemon <MultipleCustomHooks>', () => {
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton.disabled).toBeTruthy();

        act(() => {
            nextButton.click();
        })

        const nextButton2 = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton2.disabled).toBeTruthy();
    })

    test('debe de mostrar un Pokemon', () => {
        // Arrange
        const pokemonData = {
            id: 1,
            name: 'Bulbasaur',
            sprites: {
                front_default: 'front.png',
                back_default: 'back.png',
                front_shiny: 'front_shiny.png',
                back_shiny: 'back_shiny.png',
            },
        };

        mockUseFetch.mockReturnValue({
            data: pokemonData,
            isLoading: false,
            hasError: null,
        });

        // Act
        render(<MultipleCustomHooks />);

        // Assert
        expect(screen.getByText('Bulbasaur')).toBeTruthy();
        const nextButton2 = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton2.disabled).toBeFalsy();

    })

    test('debe de llamar la funcion de incrementar', () => {

        // Arrange
        const pokemonData = {
            id: 1,
            name: 'Bulbasaur',
            sprites: {
                front_default: 'front.png',
                back_default: 'back.png',
                front_shiny: 'front_shiny.png',
                back_shiny: 'back_shiny.png',
            },
        };

        mockUseFetch.mockReturnValue({
            data: pokemonData,
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        screen.debug();

        // Act
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click(nextButton);

        // Assert
        expect(incrementMock).toHaveBeenCalled();
    })

})