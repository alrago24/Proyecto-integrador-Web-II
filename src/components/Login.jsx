import React from "react";
import logo from "../assets/logo.png";
import Foto from "../assets/left-photo.jpg";


export default function Login() {
    return (
        <div className="min-h-screen flex">
            {/* Izquierda: imagen + texto (oculta en móviles) */}
            <div className="hidden md:flex w-1/2 bg-cover bg-center relative" style={{ backgroundImage: `url(${Foto})` }}>
                <div className="bg-black/10 w-full h-full flex items-end p-8">
                    <div className="text-white max-w-md">
                        <h1 className="text-4xl font-semibold">Impulsando a la próxima generación.</h1>
                        <p className="mt-4 text-2xl">Accede a tus registros académicos, horarios y recursos de aprendizaje en un espacio de tdrabajo moderno.</p>
                    </div>
                </div>
            </div>
            
        </div>

    )

}