import { Filtros } from '../../components/propiedades/filtros/filtros';
import ListaInmuebles from '../../components/propiedades/inmuebles/listainmuebles';
import './propiedades.css';

export function Propiedades() {
    return (
        <div className='propiedades-container'>
            <Filtros />
            <ListaInmuebles />
        </div>
    );
}