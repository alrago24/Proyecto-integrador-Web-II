/**
 * @file LoginPage.jsx
 * @description Vista de inicio de sesión de EduPerformance.
 *
 * Esta vista presenta un diseño dividido (split-screen):
 *  - Izquierda: Imagen de fondo decorativa con mensaje inspirador (oculta en móviles).
 *  - Derecha: Formulario interactivo de inicio de sesión.
 *
 * Características principales:
 *  - Selector dinámico de roles (Docente / Estudiante) con animación deslizante.
 *  - Manejo del estado del formulario (email, password, remember).
 *  - Visibilidad de contraseña alternable (👁/🙈).
 *  - Redirección condicional: envía a /docente o /estudiante según el rol seleccionado.
 */

import React, { useState } from "react";
import logo from "../assets/logo.png";
import Foto from "../assets/left-photo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function LoginPage() {
    const navigate = useNavigate(); // Hook de React Router para redirecciones programáticas

    // ── Estados locales ──
    const [role, setRole]                 = useState("docente"); // Rol activo seleccionado
    const [showPassword, setShowPassword] = useState(false);     // Controla si se ve la contraseña
    const [formData, setFormData]         = useState({ email: "", password: "", remember: false }); // Datos del formulario

    /**
     * Maneja los cambios en los inputs del formulario.
     * Soporta tanto inputs de texto/email como checkboxes.
     */
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    /**
     * Simula el proceso de inicio de sesión.
     * En un entorno real, aquí se llamaría a una API de autenticación.
     * Actualmente redirige al panel correspondiente según el rol.
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita la recarga de la página
        navigate(role === "docente" ? "/docente" : "/estudiante");
    };

    const isDocente = role === "docente"; // Variable auxiliar para aplicar estilos condicionales

    return (
        <div className="min-h-screen flex">
            {/* ── Panel Izquierdo: Imagen decorativa (Oculto en pantallas pequeñas md) ── */}
            <div
                className="hidden md:flex w-1/2 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${Foto})` }}
            >
                <div className="bg-black/20 w-full h-full flex items-end p-10">
                    <div className="text-white max-w-md">
                        <h1 className="text-4xl font-bold leading-tight">
                            Impulsando a la próxima generación.
                        </h1>
                        <p className="mt-4 text-lg text-white/80">
                            Accede a tus registros académicos, horarios y recursos de
                            aprendizaje en un espacio de trabajo moderno.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Panel Derecho: Formulario de Login ── */}
            <div className="flex flex-1 items-center justify-center bg-white px-6">
                <div className="w-full max-w-sm">
                    {/* Encabezado: Logo + Título */}
                    <div className="flex flex-col items-center mb-6">
                        <img src={logo} alt="logo" className="h-36 w-auto mb-4" />
                        <h2 className="text-3xl font-bold text-slate-800">EduPerformance</h2>
                        <p className="text-sm text-slate-500 mt-1">¡Bienvenido de nuevo! Introduce tus datos.</p>
                    </div>

                    {/* Selector interactivo de Rol (Toggle Switch) */}
                    <div className="relative flex bg-slate-100 rounded-xl p-1 gap-1 mb-6">
                        {/* Indicador deslizante de fondo con animación */}
                        <div
                            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg shadow-md
                                transition-all duration-300 ease-in-out
                                ${isDocente
                                    ? "left-1 bg-gradient-to-r from-blue-800 to-blue-500"
                                    : "left-[calc(50%+3px)] bg-gradient-to-r from-emerald-600 to-teal-400"}`}
                        />
                        {/* Botones del selector */}
                        {[
                            { key: "docente",    label: "🎓 Docente"    },
                            { key: "estudiante", label: "📖 Estudiante" },
                        ].map(({ key, label }) => (
                            <button
                                key={key}
                                type="button"
                                id={`role-${key}`}
                                onClick={() => setRole(key)} // Cambia el estado del rol
                                className={`relative z-10 flex-1 flex items-center justify-center py-2.5
                                    rounded-lg text-sm font-semibold transition-colors duration-200
                                    ${role === key ? "text-white" : "text-slate-500 hover:text-slate-700"}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                                        {/* Formulario principal */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Campo: Correo Institucional */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Correo institucional
                            </label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={isDocente ? "docente@cesde.net" : "estudiante@cesde.net"}
                                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50
                                    focus:outline-none focus:ring-2 focus:ring-blue-300 text-slate-800 transition-all"
                            />
                        </div>

                        {/* Campo: Contraseña (con visibilidad alternable) */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Contraseña
                            </label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"} // Cambia el tipo dinámicamente
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Ingrese su contraseña"
                                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 pr-10
                                        focus:outline-none focus:ring-2 focus:ring-blue-300 text-slate-800 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)} // Alternar estado
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    aria-label="Mostrar/ocultar contraseña"
                                >
                                    {showPassword ? "🙈" : "👁"}
                                </button>
                            </div>
                        </div>

                        {/* Opciones extra: Recuérdame / Olvidó contraseña */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                                <input
                                    name="remember"
                                    type="checkbox"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className="rounded border-slate-300"
                                />
                                Recuérdame
                            </label>
                            <a href="#" className="text-blue-500 hover:underline">¿Olvidó la contraseña?</a>
                        </div>

                        {/* Botón CTA reutilizable. Usa variante primaria para docente y verde para estudiante */}
                        <Button
                            type="submit"
                            fullWidth
                            size="lg"
                            variant={isDocente ? "primary" : "success"}
                        >
                            Acceder como {isDocente ? "Docente" : "Estudiante"}
                        </Button>
                    </form>

                    {/* Enlaces de registro y navegación secundaria */}
                    <p className="text-center text-sm text-slate-500 mt-5">
                        ¿No tienes una cuenta?{" "}
                        <a href="#" className="text-blue-500 hover:underline font-medium">Regístrate</a>
                    </p>

                    <div className="flex justify-center gap-6 mt-4 text-xs text-slate-400">
                        <Link to="/" className="hover:underline hover:text-slate-600 transition-colors">Volver a Inicio</Link>
                        <a href="#" className="hover:underline hover:text-slate-600 transition-colors">Centro de Ayuda</a>
                        <a href="#" className="hover:underline hover:text-slate-600 transition-colors">Políticas</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
