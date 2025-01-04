import { createContext, useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ token });
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setUser({ token });
        Swal.fire({
            title: 'Inicio de sesion realizado con éxito!',
            text: 'Redireccionando a Perfil.',
            icon: 'success',
            color: '#fff',
            background: '#1dc6e4',
            iconColor: '#fff',
            confirmButtonText: 'Aceptar'
        })
        setTimeout(() => {
            window.location.href = 'http://localhost:5173/perfil';
        }, 2000)
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        Swal.fire({
            title: 'Sesion cerrada con éxito!',
            text: 'Redireccionando al Inicio.',
            icon: 'success',
            color: '#fff',
            background: '#1dc6e4',
            iconColor: '#fff',
            confirmButtonText: 'Aceptar'
        })
        setTimeout(() => {
            window.location.href = 'http://localhost:5173';
        }, 2000)
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
