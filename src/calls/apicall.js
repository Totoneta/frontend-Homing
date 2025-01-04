const API_URL = 'http://127.0.0.1:8000';

/* Datos de propiedades */
export const obtenerInmuebles = async () => {
    try {
        const response = await fetch(`${API_URL}/Inmueble/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });


        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los inmuebles:', error);
        throw error;
    }
};


export const crearInmueble = async (inmuebleData) => {
    try {
        const response = await fetch(`${API_URL}/api/Inmueble/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inmuebleData),
        });

        if (!response.ok) {
            throw new Error('Error al agregar el inmueble');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al agregar un inmueble:', error);
        throw error;
    }
};


/* Datos del user para interfaz */
export const datosUser = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/Users/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        throw error;
    }
};