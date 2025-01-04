import './favoritos.css';
import { useFavoritos } from '../../../contexto/contextfavs';
import { TarjetaInmueble } from '../../propiedades/inmuebles/tarjeta_inmueble/tarjetainmueble';

export function Favoritos() {
    const { listafavs } = useFavoritos();

    // Asegúrate de retornar el JSX directamente
    return (
        <section className='favor-container'>
            {listafavs.length > 0 ? (
                listafavs.map((elem) => (
                    <TarjetaInmueble
                        key={elem.id}
                        id={elem.id}
                        titulo={elem.titulo}
                        cantidadambientes={elem.cantidadambientes}
                        cantidadbanos={elem.cantidadbanos}
                        metroscuadrados={elem.metroscuadrados}
                        precio={elem.precio}
                        pais={elem.pais}
                        provincia={elem.provincia}
                        barrio={elem.barrio}
                        descuento={elem.descuento}
                    />
                ))
            ) : (
                <p>No tienes propiedades en favoritos</p>
            )}
        </section>
    );
}