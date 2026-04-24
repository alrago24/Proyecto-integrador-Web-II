/**
 * Barra de navegación principal de la landing page (HomePage).
 * Incluye logo, menú central y botón de registro.
 */

import { Link } from "react-router-dom"; // Link de React Router para navegar sin recargar la página
import React from 'react';

const Header = () => {
    return (
        /* Contenedor principal */
        <header className="relative flex justify-between items-center py-10 px-10 lg:px-20 bg-black/80 backdrop-blur-sm">

            {/* Logotipo y Nombre */}
            <div
                style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                }}
            >
                {/* Imagen del logo */}
                <div>
                    <img
                        src="/sinfondo.png"
                        alt="logo"
                        style={{ width: "60px" }}
                    />
                </div>
                {/* Nombre de la aplicación */}
                <h1 style={{ margin: 0, color: "white" }}>EDUPERFORMANCE</h1>
            </div>

            {/* Menú de navegación */}
            <nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2 align-items-end text-white">
                {/* Link interno usando React Router (sin recarga de página) */}
                <Link to="/" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Inicio</Link>
                <Link to="/login" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Login</Link>
                {/* Links externos / anclas (aún no tienen destino definido) */}
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">Contacto</a>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">Nosotros</a>
            </nav>

            {/* Botón Regístrate */}
            <button
                className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50 absolute right-4 top-1/2 -translate-y-1/2"
            >
                Registrate
            </button>
        </header>
    )
}

export default Header
