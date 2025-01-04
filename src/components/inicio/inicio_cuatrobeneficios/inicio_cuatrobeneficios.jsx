import './inicio_cuatrobeneficios.css'

export function InicioCuatroBeneficios() {

    return (
        <section className="container-beneficios">

            <div className="item-beneficios">
                <img src="/svg/cuatrobeneficios/corazon_mano.svg" alt="Atención personalizada" />
                <div className="text-beneficios">
                    <h3>Atención personalizada</h3>
                    <span>En cada paso, te acompañamos para encontrar el hogar perfecto que se ajuste a tus necesidades. Nuestro equipo está siempre listo para asesorarte de manera profesional y cercana.</span>
                </div>
            </div>

            <div className="item-beneficios">
                <img src="/svg/cuatrobeneficios/casa_heart.svg" alt="Variedad de opciones" />
                <div className="text-beneficios">
                    <h3>Variedad de opciones</h3>
                    <span>Explora una amplia gama de propiedades para alquilar o comprar. Contamos con inmuebles en las mejores ubicaciones y con diversas características para satisfacer todos los gustos.</span>
                </div>
            </div>

            <div className="item-beneficios">
                <img src="/svg/cuatrobeneficios/escudo.svg" alt="Transparencia en cada paso" />
                <div className="text-beneficios">
                    <h3>Transparencia en cada paso</h3>
                    <span>Nos comprometemos a ofrecerte información clara y sin sorpresas, para que el proceso de adquirir o alquilar tu vivienda sea lo más fluido y confiable posible.</span>
                </div>
            </div>

            <div className="item-beneficios">
                <img src="/svg/cuatrobeneficios/custom.svg" alt="Soluciones a medida" />
                <div className="text-beneficios">
                    <h3>Soluciones a medida</h3>
                    <span>Ya sea que busques una vivienda familiar o una propiedad para inversión, personalizamos nuestras soluciones para que siempre encuentres la mejor opción.</span>
                </div>
            </div>

        </section>
    )
}