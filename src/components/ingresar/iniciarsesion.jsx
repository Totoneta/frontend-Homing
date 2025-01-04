import { useState } from 'react';
import './iniciarsesion.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexto/contextauth';


export function IniciarSesion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                login(data.access)
                
            } else {
                const data = await response.json();
                setError(data.error || 'Credenciales incorrectas.');
            }
        } catch (error) {
            setError('Error de conexión con el servidor.');
        }
    };

    return (
        <section className="iniciar-container">
            <div className="iniciar-sesion">
                <h3>Iniciar Sesión</h3>
                <form onSubmit={handleSubmit} className='form-ingresar'>
                    <div className='inpt'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='inpt'>
                        <label htmlFor="psw">Contraseña</label>
                        <input
                            type="password"
                            id="psw"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button className='btn-last' type="submit">Ingresar</button>
                    <Link className='btn-last' to="/registrarse">No tengo cuenta</Link>
                </form>
            </div>
        </section>
    );
}