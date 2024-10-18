import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';

describe('Pruebas en el <MultipleCustomHooks>', () => {

    test('debe de hacer match con el snapshot', () => {
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

        screen.debug();
    })
  
})