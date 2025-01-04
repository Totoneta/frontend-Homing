import { useState } from 'react'
import './filtros.css'

export function Filtros() {

    const [filtrosactivos, setFiltrosActivos] = useState(false)

    const ShowFiltros = () => {
        setFiltrosActivos(!filtrosactivos)
    }

    return (

        <section className='filtrosybtnvaciar'>


            {filtrosactivos ? <aside className='filtros-container'>

                {/* Filtro Rango Precio */}
                <div className="filtro-precio">
                    <label htmlFor="rango-precio">Precio: </label>
                    <input
                        type="range"
                        id="rango-precio"
                        min="150"
                        max="1000000"
                        step="1000"
                        value="0"
                    />
                    <span>$50,000</span>
                </div>

                {/* Filtro Compra/Alquiler */}
                <div className="filtro-inmueble">
                    <label htmlFor="compraralquilar">Comprar/Alquilar</label>
                    <select name="" id="compraralquilar">
                        <option value="Todos">Todo</option>
                        <option value="Local">Alquilar</option>
                        <option value="Garage">Comprar</option>
                    </select>
                </div>

                {/* Filtro Tipo Inmueble */}
                <div className="filtro-inmueble">
                    <label htmlFor="tipoinmueble">Tipo de Inmueble</label>
                    <select name="" id="tipoinmueble">
                        <option value="Todos">Todo</option>
                        <option value="Local">Local</option>
                        <option value="Garage">Garage</option>
                        <option value="Vivienda">Vivienda</option>
                    </select>
                </div>

                {/* Filtro Cantidad Ambientes */}
                <div className="filtro-ambientes">
                    <label htmlFor="cantidadambientes">Cantidad de Ambientes</label>
                    <select name="" id="cantidadambientes">
                        <option value='Todos'>Todo</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </div>

                {/* Filtro Pais */}
                <div className="filtro-pais">
                    <label htmlFor="pais">Pais</label>
                    <select name="" id="pais">
                        <option value='Todos'>Todo</option>
                        <option value='Argentina'>Argentina</option>
                        <option value='España'>España</option>
                        <option value='Brasil'>Brasil</option>
                        <option value='Chile'>Chile</option>
                    </select>
                </div>

                {/* Filtro Ciudad */}
                <div className="filtro-provincia">
                    <label htmlFor="provincia">Provincia</label>
                    <select name="" id="provincia">
                        <option value='Todos'>Todo</option>
                        <option value='Bs As'>Bs As</option>
                        <option value='Corrientes'>Corrientes</option>
                        <option value='Santa Fe'>Santa Fe</option>
                        <option value='Formosa'>Formosa</option>
                    </select>
                </div>

            </aside>: <aside className='filtros-container-vacio'></aside>}

            <div className='btns-filtros'>
                <button className='limpiarfiltros' onClick={ShowFiltros}>Mostrar Filtros</button>
                <button className='limpiarfiltros'>Limpiar</button>
                <button className='buscar'>Buscar</button>
            </div>

        </section>
    )
}