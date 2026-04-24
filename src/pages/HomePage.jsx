/**
 * @file HomePage.jsx
 * @description Página de inicio / landing page de EduPerformance.
 *
 * Es la primera vista que ve un visitante al acceder a la raíz "/" de la app.
 * Actualmente es una página introductoria compuesta por:
 *  - Un gradiente de fondo decorativo (imagen PNG con opacidad).
 *  - Una mancha de luz naranja con box-shadow para profundidad visual.
 *  - El Header con navegación global.
 *  - El Footer fijo en la parte inferior.
 *
 * Nota: el contenido central (hero, features, etc.) puede expandirse aquí
 * entre el <Header /> y el <Footer /> a medida que crezca el proyecto.
 */

import Header from '../components/Header'; // Barra de navegación superior
import Footer from '../components/Footer'; // Pie de página fijo en el bottom

export default function HomePage() {
    return (
        /* <main> semántico: contenedor de toda la página de inicio.
           Sin overflow-hidden para que el gradiente de fondo pueda sobresalir */
        <main>
            {/* ── Imagen de gradiente decorativa (esquina superior derecha) ── */}
            <img
                className="absolute top-0 right-0 opacity-60 -z-1"
                src="/gradient.png"
                alt="Gradient-img"
            />

            {/* ── Mancha de luz naranja con blur enorme para dar profundidad y calor ──
          Técnica: div sin tamaño + box-shadow gigante + rotación = halo suave */}
            <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] rotate-[30deg] -z-10" />

            {/* ── Componentes estructurales ── */}
            <Header />
            {/* TODO: Añadir sección Hero, Features, CTA entre Header y Footer */}
            <Footer />
        </main>
    );
}
