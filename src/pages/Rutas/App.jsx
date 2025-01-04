import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { Inicio } from '../inicio/inicio';
import { Propiedades } from '../propiedades/propiedades';
import { Tasaciones } from '../tasaciones/tasaciones';
import { FAQ } from '../faq/faq';
import { Ingresar } from '../ingresar/ingresar';
import { Registrarse } from '../registrarse/registrarse';
import { AuthProvider } from '../../contexto/contextauth';
import { FavoritosProvider } from '../../contexto/contextfavs';
import { Perfil } from '../perfil/perfil';
import PrivateRoute from './rutaprivada';

function App() {
    return (
        <FavoritosProvider>
            <AuthProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route
                            path="/propiedades"
                            element={
                                <PrivateRoute>
                                    <Propiedades />
                                </PrivateRoute>}/>
                        <Route path="/tasaciones" element={<Tasaciones />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/iniciarsesion" element={<Ingresar />} />
                        <Route path="/registrarse" element={<Registrarse />} />
                        <Route path="/perfil" element={<Perfil />} />
                    </Routes>
                    <Footer />
                </Router>
            </AuthProvider>
        </FavoritosProvider>
    );
}

export default App;