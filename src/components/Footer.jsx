import React from 'react';

const Footer = () => {
    return (
    <footer className="text-white py-10 px-6 mt-20 fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm ">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 m">

    
    <div className='left-0 flex flex-col gap-4 justify-around'>
        <h2 className="text-xl font-bold mb-3 text-center">EDUPERFORMANCE</h2>
        <p className="text-gray-400 text-sm leading-relaxed text-center">
        Una plataforma diseñada para optimizar la experiencia de aprendizaje
        con herramientas modernas, intuitivas y eficientes que te permiten visualizar tu progreso.
        </p>
    </div>

    <div className=''>
        <h3 className="font-semibold text-center mb-3">Navegación</h3>
        <ul className="flex flex-col items-center gap-2 text-gray-300 text-sm">

        <li><a href="" className="hover:text-white">Inicio</a></li>

        <li><a href="" className="hover:text-white">Nosotros</a></li>

        <li><a href="" className="hover:text-white">Servicios</a></li>

        </ul>
    </div>

    <div className=''>
        <h3 className="font-semibold text-center mb-3 ">Soporte</h3>
        <ul className="flex flex-col items-center gap-2 text-gray-300 text-sm">

        <li><a href="" className="hover:text-white">Ayuda</a></li>

        <li><a href="" className="hover:text-white">Preguntas frecuentes</a></li>

        <li><a href="" className="hover:text-white">Contacto</a></li>
        
        </ul>
    </div>


    <div>
        <h3 className="font-semibold text-center mb-3">Conecta con nosotros</h3>
        <ul className="flex flex-col items-center gap-2 text-gray-300 text-sm">
        <li><a href="" className="hover:text-white">Instagram</a></li>
        <li><a href="" className="hover:text-white">Facebook</a></li>
        <li><a href="" className="hover:text-white">LinkedIn</a></li>
        </ul>
    </div>
    </div>

    <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm flex justify-center">
    © {new Date().getFullYear()} EDUPERFORMANCE — Todos los derechos reservados.
    </div>
</footer>
    )
}

export default Footer
