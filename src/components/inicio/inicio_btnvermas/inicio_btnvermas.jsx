import { Link } from 'react-router-dom'
import './inicio_btnvermas.css'


export function InicioBtnVerMas() {

    return (
        <main className="index-primero">
            <div>
                <h1>HOMING</h1>
                <p>Somos la mejor inmobiliaria para venta y alquiler de departamentos y casas, ofreciendo asesoría personalizada, propiedades exclusivas y confianza en cada transacción para cumplir tus sueños de hogar ideal</p>
                <Link to="propiedades">Ver Propiedades</Link>
            </div>
        </main>
    )
}