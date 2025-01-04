import { Favoritos } from '../../components/perfil/favoritos/favoritos'
import { PanelPrincipal } from '../../components/perfil/panelprincipal/panelprincipal'
import './perfil.css'

export function Perfil (){

    return(
        <>
            <PanelPrincipal />
            <Favoritos />
        </>
    )
}