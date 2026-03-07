import { Link } from "react-router-dom";
import React from 'react';



const Header = () => {
return (
    <header className="relative flex justify-between items-center py-10 px-10 lg:px-20 bg-black/80 backdrop-blur-sm">

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
        <div>
            <img
        src="/sinfondo.png"
        alt="logo"
        style={{ width: "60px" }}
    />
        </div>
    <h1 style={{ margin: 0 }}>EDUPERFORMANCE</h1>
    </div>

    <nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2 align-items-end">
        <Link to="/">Inicio</Link>
        <Link to="/login">Login</Link>

        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="">Ingresa</a>

        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="">Contacto</a>

        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="">Nosotros</a>
    </nav>

    <button 
    className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50 absolute right-4 top-1/2 -translate-y-1/2"
>
    Registrate
    </button>
</header>
)
}



export default Header
