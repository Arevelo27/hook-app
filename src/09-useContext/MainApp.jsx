import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, AboutPage, LoginPage } from '../09-useContext';

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />

                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
        </>
    );
};
