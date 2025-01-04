import { createContext, useContext, useState, useEffect } from 'react';

const FavoritosContext = createContext();

export const useFavoritos = () => {
    return useContext(FavoritosContext);
};

export const FavoritosProvider = ({ children }) => {
    const [listafavs, setListaFavs] = useState(() => {
        const favoritosGuardados = localStorage.getItem('favoritos');
        return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
    });

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(listafavs));
    }, [listafavs]);

    const AgregarAFavoritos = (inmueble) => {
        setListaFavs((prevFavs) => {
            const existe = prevFavs.some(fav => fav.id === inmueble.id);
            if (!existe) {
                return [...prevFavs, inmueble];
            }
            return prevFavs;
        });
    };

    const EliminarFavoritos = (id) => {
        setListaFavs((i) => i.filter(item => item.id !== id));
    };

    return (
        <FavoritosContext.Provider value={{ listafavs, AgregarAFavoritos, EliminarFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    );
};