import { CarruselInifito } from '../../components/inicio/carrusel_infinito/carrusel_infinito';
import { InicioBtnVerMas } from '../../components/inicio/inicio_btnvermas/inicio_btnvermas';
import { InicioCuatroBeneficios } from '../../components/inicio/inicio_cuatrobeneficios/inicio_cuatrobeneficios';
import './inicio.css';

export function Inicio() {
    return (
        <>
            <InicioBtnVerMas />
            <InicioCuatroBeneficios />
            <CarruselInifito />

        </>
    );
}