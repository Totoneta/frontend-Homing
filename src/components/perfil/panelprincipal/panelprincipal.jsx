import { useEffect, useState } from 'react'
import './panelprincipal.css'
import { datosUser } from '../../../calls/apicall';
import { Link } from 'react-router-dom';

export function PanelPrincipal() {

    const [infouser, setInfoUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await datosUser();
                setInfoUser(data);
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);
    if (loading) return <p>Cargando...</p>;

    return (
        <section className='panelprincipal-container'>
            <section className='panelp-container'>
                <img src="svg/user.svg" alt="Imagen Perfil" />
                <div className="texto-perfil">
                    <div className="username-perfil">
                        <h2>{infouser.username}</h2>
                        <Link to='#'>Editar Perfil</Link>
                    </div>
                    <div className='username-perfil'>
                        <span>{infouser.email}</span>
                        <p>País</p>
                    </div>
                </div>
            </section>
        </section>
    )
}