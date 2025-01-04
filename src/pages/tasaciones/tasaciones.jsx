import { QueEsTasar } from '../../components/tasaciones/queestasar/queestasar';
import { TasacionesImgFondo } from '../../components/tasaciones/tasaciones_imgfondo/tasaciones_imgfondo';
import './tasaciones.css';

export function Tasaciones() {
    return (
        <>
            <TasacionesImgFondo />
            <QueEsTasar />
        </>
    );
}