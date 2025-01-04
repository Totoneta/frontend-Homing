import './tajetainmueble.css';
import { useFavoritos } from '../../../../contexto/contextfavs';

export function TarjetaInmueble({
    id,
    titulo,
    cantidadambientes,
    cantidadbanos,
    metroscuadrados,
    precio,
    pais,
    provincia,
    barrio,
    descuento
}) {
    const { listafavs, AgregarAFavoritos, EliminarFavoritos } = useFavoritos();

    const inmuebleEnFavoritos = listafavs.some(inmueble => inmueble.id === id);

    const manejarFavorito = () => {
        if (inmuebleEnFavoritos) {
            EliminarFavoritos( id );
        } else {
            AgregarAFavoritos({ id, titulo, cantidadambientes, cantidadbanos, metroscuadrados, precio, pais, provincia, barrio, descuento });
        }
    };

    return (
        <div className="tarjeta-container">
            <img src="" alt="" />
            <div className="mid-tarjeta">
                <h2>{titulo}</h2>
                <span>Ambientes: {cantidadambientes}</span>
                <span>Baños: {cantidadbanos}</span>
                <p className='precio'>U$D{precio}</p>
            </div>
            <div className="mid-tarjeta">
                <p>{pais}, {provincia}, {barrio}</p>
                <span>{metroscuadrados}mts2</span>
            </div>
            <div className="fin-tarjeta">
                <a href="#">Ver Más</a>
                <button onClick={manejarFavorito}>
                    {inmuebleEnFavoritos ? 'Eliminar' : 'Agregar'}
                </button>
            </div>
            {descuento ? <div className='descuento'></div> : <></>}
        </div>
    );
}
