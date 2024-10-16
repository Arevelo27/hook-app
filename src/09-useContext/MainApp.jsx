import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, AboutPage, LoginPage, NavBar } from '../09-useContext';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>MainApp</h1> */}
            <NavBar />
            <hr />

            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />

                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
        </UserProvider>
    );
};
