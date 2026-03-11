<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 7a0c1c337d854af83f95b9ed406c281b8e88d154
import logo from "../assets/logo.png";
import Foto from "../assets/left-photo.jpg";


export default function Login() {
<<<<<<< HEAD
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

=======
>>>>>>> 7a0c1c337d854af83f95b9ed406c281b8e88d154
    return (
        <div className="min-h-screen flex">
            {/* Izquierda: imagen + texto (oculta en móviles) */}
            <div className="hidden md:flex w-1/2 bg-cover bg-center relative" style={{ backgroundImage: `url(${Foto})` }}>
                <div className="bg-black/10 w-full h-full flex items-end p-8">
                    <div className="text-white max-w-md">
                        <h1 className="text-4xl font-semibold">Impulsando a la próxima generación.</h1>
                        <p className="mt-4 text-2xl">Accede a tus registros académicos, horarios y recursos de aprendizaje en un espacio de trabajo moderno.</p>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
=======
            
>>>>>>> 7a0c1c337d854af83f95b9ed406c281b8e88d154

           {/* Derecha: tarjeta de login*/}
            <div className="flex flex-1 item-center justify-center">
                <div className="w-full max-w-sm p-4">
                    <div className="flex flex-col items-center gap-4">
                        <img src={logo} alt="logo" className="h-[200px] w-auto mb-6 mt-6" />
                        <h1 className="text-4xl font-semibold">EduPerformance</h1>
                        <p className="text-lg text-gray-500 mt-2 mb-6">¡Bienvenido de nuevo! Introduce tus datos.</p>
                    </div>

<<<<<<< HEAD
                    <form className="mt-6" onSubmit={handleSubmit}>
=======
                    <form className="mt-6">
>>>>>>> 7a0c1c337d854af83f95b9ed406c281b8e88d154
                        <label className="block text-sm font-medium text-gray-700">Correo institucional</label>
                        <input
                            name="email"
                            placeholder="ej. satehortuaal@cesde.net"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
<<<<<<< HEAD
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
=======
>>>>>>> 7a0c1c337d854af83f95b9ed406c281b8e88d154
                        />

                        <label className="block text-sm font-medium text-gray-700 mt-4">Contraseña</label>
                        <div className="relative mt-1">
                            <input
                                name="password"
<<<<<<< HEAD
                                type={showPassword ? "text" : "password"}
                                placeholder="Ingrese su contraseña"
                                className="w-full px-4 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
=======
                                type="password"
                                placeholder="Ingrese su contraseña"
                                className="w-full px-4 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> 7a0c1c337d854af83f95b9ed406c281b8e88d154
                            />

                            <button
                                type="button"
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
                                aria-label="toggle password visibility"
<<<<<<< HEAD
                                onClick={togglePasswordVisibility}
=======
>>>>>>> 7a0c1c337d854af83f95b9ed406c281b8e88d154
                            >
                                👁
                            </button>
                        </div>

                        <div className="flex items-center justify-between mt-8">
                            <label className="flex items-center text-sm">
                                <input name="remember" type="checkbox" className="mr-2 " />
                                Recuerdame
                            </label>
                            <a href="#" className="text-sm text-blue-400">¿Olvidó la contraseña?</a>
                        </div>
                        <button
                            type="submit"
                            className="mt-8 w-full h-12 bg-blue-800 text-white rounded-md bg-gradient-to-r
                            from-blue-800 via-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-500 focus:outline-none
                            focus:ring-2 focus:ring-blue-300 shadow-md"
                        >
                            Acceso
                        </button>
                        <p className="text-center text-sm text-gray-600 mt-4">
                            ¿No tienes una cuenta? <a href="#" className="text-blue-400">Registrate</a>
                        </p>
                        <div className="flex justify-center gap-6 mt-6 text xs text-gray-500">
                            <a href="#" className="hover:underline">CENTRO DE AYUDA</a>
                            <a href="#" className="hover:underline">POLITICAS</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )

}