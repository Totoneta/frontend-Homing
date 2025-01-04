import { useState } from 'react'
import './container_preguntas.css'

export function ContainerPreguntas() {

    const [pregunta, setPregunta] = useState(null)

    const MostrarPregunta = (id) => {
        if (pregunta === id) {
            setPregunta(null);
        } else {
            setPregunta(id);
        }
    }


    return (
        <section className='container-preguntas'>

            <aside className="preguntas">
                <div className="pregunta-container" onClick={() => MostrarPregunta('respuestauno')}  id='preguntauno'>
                    <span>¿Cuáles son los requisitos para alquilar una propiedad en Argentina?</span>
                    <img src="/svg/flecha_derecha.svg" alt="Flecha De Referencia de Pregunta" />
                </div>
                <div className="pregunta-container" onClick={() => MostrarPregunta('respuestados')} id='preguntados'>
                    <span>¿Qué impuestos o gastos adicionales debo considerar al comprar una propiedad?</span>
                    <img src="/svg/flecha_derecha.svg" alt="Flecha De Referencia de Pregunta" />
                </div>
                <div className="pregunta-container" onClick={() => MostrarPregunta('respuestatres')} id='preguntatres'>
                    <span>¿Puedo alquilar una propiedad sin garantía propietaria?</span>
                    <img src="/svg/flecha_derecha.svg" alt="Flecha De Referencia de Pregunta" />
                </div>
                <div className="pregunta-container" onClick={() => MostrarPregunta('respuestacuatro')} id='preguntacuatro'>
                    <span>¿Cuánto dura un contrato de alquiler en Argentina?</span>
                    <img src="/svg/flecha_derecha.svg" alt="Flecha De Referencia de Pregunta" />
                </div>
                <div className="pregunta-container" onClick={() => MostrarPregunta('respuestacinco')} id='preguntacuatro'>
                    <span>¿Es posible comprar una propiedad con financiación?</span>
                    <img src="/svg/flecha_derecha.svg" alt="Flecha De Referencia de Pregunta" />
                </div>
                <div className="pregunta-container" onClick={() => MostrarPregunta('respuestaseis')} id='preguntacuatro'>
                    <span>¿Qué incluye el valor de expensas en un departamento?</span>
                    <img src="/svg/flecha_derecha.svg" alt="Flecha De Referencia de Pregunta" />
                </div>
            </aside>

            <div className="respuestas">
                <div className={`respuesta-container ${pregunta === 'respuestauno' ? 'visible' : 'hidden'}`} id='respuestauno'>
                    <h3>Requisitos</h3>
                    <span>Los requisitos suelen incluir presentar un DNI válido, demostrar ingresos suficientes mediante recibos de sueldo o comprobantes de actividad laboral, y contar con una garantía propietaria o seguro de caución.<br/><br/> Dependiendo del propietario o la inmobiliaria, puede solicitarse también un mes de depósito y el pago por adelantado del primer mes de alquiler.</span>
                </div>
                <div className={`respuesta-container ${pregunta === 'respuestados' ? 'visible' : 'hidden'}`} id='respuestados'>
                    <h3>Gastos Adicionales</h3>
                    <span>Al comprar una propiedad, debes tener en cuenta el costo de escrituración (aproximadamente 7-10% del valor de la propiedad), el impuesto de sellos, los honorarios del escribano y los gastos de gestoría.<br/><br/> También es importante considerar la comisión de la inmobiliaria, que suele ser entre 3% y 4% del valor de la propiedad.</span>
                </div>
                <div className={`respuesta-container ${pregunta === 'respuestatres' ? 'visible' : 'hidden'}`} id='respuestatres'>
                    <h3>Alquilar Sín Ganantía</h3>
                    <span>Sí, es posible. Actualmente existen alternativas como el seguro de caución, que actúa como garantía en lugar de una propiedad.<br/><br/> También algunas inmobiliarias aceptan otros tipos de garantías como recibos de sueldo o un garante con un empleo estable.</span>
                </div>
                <div className={`respuesta-container ${pregunta === 'respuestacuatro' ? 'visible' : 'hidden'}`} id='respuestacuatro'>
                    <h3>Duración De Contrato</h3>
                    <span>Los contratos de alquiler en Argentina tienen una duración mínima de 3 años, según la Ley de Alquileres vigente.<br/><br/> Durante ese tiempo, el precio del alquiler puede ajustarse anualmente utilizando el índice de ajuste legal (Índice de Contratos de Locación).</span>
                </div>
                <div className={`respuesta-container ${pregunta === 'respuestacinco' ? 'visible' : 'hidden'}`} id='respuestacinco'>
                    <h3>Comprar Con Financiación</h3>
                    <span>Sí, algunas propiedades ofrecen planes de financiación, aunque la disponibilidad y las condiciones varían según el propietario o la constructora.<br/><br/> Además, algunos bancos ofrecen créditos hipotecarios, aunque las condiciones pueden ser estrictas y varían según la entidad financiera.</span>
                </div>
                <div className={`respuesta-container ${pregunta === 'respuestaseis' ? 'visible' : 'hidden'}`} id='respuestaseis'>
                    <h3>Expensas</h3>
                    <span>El valor de las expensas cubre el mantenimiento de los espacios comunes del edificio, como el ascensor, la limpieza, la luz de las áreas comunes y el salario del encargado.<br/><br/> En algunos casos, las expensas pueden incluir servicios como agua o calefacción central.</span>
                </div>
            </div>

        </section>
    )
}