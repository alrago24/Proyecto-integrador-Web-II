/**
 * @file Button.jsx
 * @description Componente de botón reutilizable con variantes de estilo y tamaño.
 *
 * Diseñado para usarse en cualquier parte de la aplicación en lugar de
 * crear botones ad-hoc con clases Tailwind repetidas. Centraliza el diseño
 * y facilita cambios globales de estilo desde un solo lugar.
 *
 * Props:
 * @param {React.ReactNode} children  - Texto o contenido dentro del botón.
 * @param {'primary'|'success'|'danger'|'warning'|'secondary'|'ghost'|'dark'} [variant='primary']
 *   - Paleta de colores del botón.
 * @param {'sm'|'md'|'lg'} [size='md'] - Tamaño del botón (padding + texto).
 * @param {boolean} [fullWidth=false]  - Si true, ocupa todo el ancho disponible.
 * @param {boolean} [disabled=false]   - Desactiva el botón (opacidad + cursor bloqueado).
 * @param {React.ReactNode} [icon]     - Icono opcional que se renderiza antes del texto.
 * @param {'button'|'submit'|'reset'} [type='button'] - Tipo HTML del botón.
 * @param {Function} [onClick]         - Manejador del evento click.
 * @param {string} [className='']      - Clases Tailwind adicionales para extensibilidad.
 *
 * Ejemplos de uso:
 *   <Button variant="primary" size="lg" icon="🚀" onClick={handleClick}>Enviar</Button>
 *   <Button type="submit" fullWidth variant="success">Guardar</Button>
 *   <Button variant="danger" size="sm" onClick={() => handleDelete(id)}>Eliminar</Button>
 */

import React from 'react';

// ── Mapa de variantes: cada clave define el gradiente, color de texto y sombra ──
const VARIANTS = {
    primary: 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-500 text-white shadow-md shadow-blue-200 focus:ring-blue-300',
    success: 'bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400 hover:from-emerald-800 hover:to-teal-500 text-white shadow-md shadow-emerald-200 focus:ring-emerald-300',
    danger: 'bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white shadow-md shadow-red-200 focus:ring-red-300',
    warning: 'bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-white shadow-md shadow-orange-200 focus:ring-orange-300',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 focus:ring-slate-300',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 border border-slate-200 focus:ring-slate-200',
    dark: 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-md focus:ring-zinc-300',
};

// ── Mapa de tamaños: controla el padding y el tamaño de fuente ──
const SIZES = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-5 py-2.5 text-sm rounded-xl',
    lg: 'px-7 py-3.5 text-base rounded-xl',
};

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    icon,                   // Icono opcional (emoji o componente SVG)
    type = 'button',
    onClick,
    className = '',
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        inline-flex items-center justify-center gap-2 font-semibold
        transition-all duration-200 focus:outline-none focus:ring-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${VARIANTS[variant] ?? VARIANTS.primary}   /* Variante de color, fallback a primary */
        ${SIZES[size] ?? SIZES.md}            /* Tamaño del botón, fallback a md */
        ${fullWidth ? 'w-full' : ''}               /* Ancho completo si se especifica */
        ${className}                               /* Clases adicionales del consumidor */
      `}
        >
            {/* Icono opcional — se muestra solo si se pasa la prop icon */}
            {icon && <span className="text-base leading-none">{icon}</span>}
            {children}
        </button>
    );
}
