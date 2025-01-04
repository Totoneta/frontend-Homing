import { useEffect, useState } from 'react';
import { obtenerInmuebles } from '../../../calls/apicall';
import { TarjetaInmueble } from './tarjeta_inmueble/tarjetainmueble';
import './listainmuebles.css'

export function ListaInmuebles() {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    const fetchInmuebles = async () => {
      try {
        const data = await obtenerInmuebles();
        setPropiedades(data);
      } catch (error) {
        console.error('Error al obtener los inmuebles:', error);
      }
    };

    fetchInmuebles();
  }, []);

  return (
    <ul className='listainmuebles-container'>
      {propiedades.map((el) => (
        <TarjetaInmueble 
        key={el.id} 
        id={el.id}
        titulo={el.titulo} 
        cantidadambientes={el.cantidadambientes}  
        cantidadbanos={el.cantidadbanos}  
        metroscuadrados={el.metroscuadrados}
        precio={el.precio}
        pais={el.pais}
        provincia={el.provincia}
        barrio={el.barrio}
        descuento={el.descuento}
        />
      ))}
    </ul>
  );
};

export default ListaInmuebles;