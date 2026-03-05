const Footer = () => {
    return (
    <footer className="bg-[#111] text-white py-10 px-6 mt-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    
    <div>
        <h2 className="text-xl font-bold mb-3">EDUPERFORMANCE</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
        Una plataforma diseñada para optimizar la experiencia de aprendizaje
        con herramientas modernas, intuitivas y eficientes que te permiten visualizar tu progreso.
        </p>
    </div>

    <div>
        <h3 className="font-semibold mb-3">Navegación</h3>
        <ul className="flex flex-col gap-2 text-gray-300 text-sm">

        <li><a href="" className="hover:text-white">Inicio</a></li>

        <li><a href="" className="hover:text-white">Nosotros</a></li>

        <li><a href="" className="hover:text-white">Servicios</a></li>

        </ul>
    </div>


    <div>
        <h3 className="font-semibold mb-3">Soporte</h3>
        <ul className="flex flex-col gap-2 text-gray-300 text-sm">

        <li><a href="" className="hover:text-white">Ayuda</a></li>

        <li><a href="" className="hover:text-white">Preguntas frecuentes</a></li>

        <li><a href="" className="hover:text-white">Contacto</a></li>
        
        </ul>
    </div>


    <div>
        <h3 className="font-semibold mb-3">Conecta con nosotros</h3>
        <ul className="flex flex-col gap-2 text-gray-300 text-sm">
        <li><a href="" className="hover:text-white">Instagram</a></li>
        <li><a href="" className="hover:text-white">Facebook</a></li>
        <li><a href="" className="hover:text-white">LinkedIn</a></li>
        </ul>
    </div>

    </div>
    <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} EDUPERFORMANCE — Todos los derechos reservados.
    </div>
</footer>
    )
}

export default Footer
