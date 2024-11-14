import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext';
import { MemoryRouter } from 'react-router';

describe('Pruebas en <MainApp />', () => {

    test('debe de mostrar el HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )
        expect(screen.getByText('Home')).toBeTruthy();
        // screen.debug();
    });

    test('debe de mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )
        expect(screen.getByText('Login')).toBeTruthy();
        // screen.debug();
    });

})
