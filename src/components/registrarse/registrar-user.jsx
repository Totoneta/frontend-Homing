import { useState } from 'react';
import { Link } from 'react-router-dom';
import './registrar-user.css';
import Swal from 'sweetalert2'


export function RegistrarUsuario() {
    const [email, setEmail] = useState('');
    const [remail, setRemail] = useState('');
    const [password, setPassword] = useState('');
    const [rpassword, setRpassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email !== remail) {
            setError('Los correos electrónicos no coinciden.');
            return;
        }
        if (password !== rpassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Registro realizado con éxito!',
                    text: 'Redireccionando a Iniciar Sesion.',
                    icon: 'success',
                    color: '#fff',
                    background: '#1dc6e4',
                    iconColor: '#fff',
                    confirmButtonText: 'Aceptar'
                  })
                  setTimeout(() => {
                    window.location.href = 'http://localhost:5173/iniciarsesion';
                  }, 2000)
            } else {
                const data = await response.json();
                setError(data.error || 'Ocurrió un error al registrar el usuario.');
            }
        } catch (err) {
            setError('Ocurrió un error al conectar con el servidor.');
        }
    };

    return (
        <section className="registrar-container">
            <div className="registrar-sesion">
                <h3>Registrarse</h3>
                {error && <p className="error-message">{error}</p>}
                <form className='form-registrarse' onSubmit={handleSubmit}>
                    <div className='inpt'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="remail">Repetir Email</label>
                        <input
                            type="email"
                            id="remail"
                            placeholder='repetir email'
                            value={remail}
                            onChange={(e) => setRemail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='inpt'>
                        <label htmlFor="psw">Contraseña</label>
                        <input
                            type="password"
                            id="psw"
                            placeholder='contraseña'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="rpsw">Repetir Contraseña</label>
                        <input
                            type="password"
                            id="rpsw"
                            placeholder='repetir contraseña'
                            value={rpassword}
                            onChange={(e) => setRpassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className='btn-last' type="submit">Registrarse</button>
                    <Link className='btn-last' to="/iniciarsesion">Ya tengo cuenta</Link>
                </form>
            </div>
        </section>
    );
}