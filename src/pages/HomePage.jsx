/**
 * Página de inicio (Landing Page).
 * Vista principal con Header y Footer, preparada para contenido central.
 */

import Header from '../components/Header'; // Barra de navegación superior
import Footer from '../components/Footer'; // Pie de página fijo en el bottom

export default function HomePage() {
    return (
        /* Contenedor principal */
        <main>
            {/* Imagen de fondo decorativa */}
            <img
                className="absolute top-0 right-0 opacity-60 -z-1"
                src="/gradient.png"
                alt="Gradient-img"
            />

            {/* Mancha de luz decorativa */}
            <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] rotate-[30deg] -z-10" />

            {/* Componentes estructurales */}
            <Header />
            {/* TODO: Añadir sección Hero, Features, CTA entre Header y Footer */}
            <Footer />
        </main>
    );
}
