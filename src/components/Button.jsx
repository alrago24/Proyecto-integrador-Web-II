/**
 * Componente Button reutilizable.
 * @param {React.ReactNode} children - Contenido del botón.
 * @param {'primary'|'success'|'danger'|'warning'|'secondary'|'ghost'|'dark'} [variant='primary'] - Paleta de colores.
 * @param {'sm'|'md'|'lg'} [size='md'] - Tamaño del botón.
 * @param {boolean} [fullWidth=false] - Ocupar todo el ancho.
 * @param {boolean} [disabled=false] - Estado deshabilitado.
 * @param {React.ReactNode} [icon] - Icono opcional.
 * @param {'button'|'submit'|'reset'} [type='button'] - Tipo de botón HTML.
 * @param {Function} [onClick] - Evento click.
 * @param {string} [className=''] - Clases extra.
 */

import React from 'react';

// Mapa de variantes (gradientes, colores y sombras)
const VARIANTS = {
    primary: 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-500 text-white shadow-md shadow-blue-200 focus:ring-blue-300',
    success: 'bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400 hover:from-emerald-800 hover:to-teal-500 text-white shadow-md shadow-emerald-200 focus:ring-emerald-300',
    danger: 'bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white shadow-md shadow-red-200 focus:ring-red-300',
    warning: 'bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-white shadow-md shadow-orange-200 focus:ring-orange-300',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 focus:ring-slate-300',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 border border-slate-200 focus:ring-slate-200',
    dark: 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-md focus:ring-zinc-300',
};

// Mapa de tamaños (padding y fuente)
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
    icon,
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
        ${VARIANTS[variant] ?? VARIANTS.primary}
        ${SIZES[size] ?? SIZES.md}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
        >
            {icon && <span className="text-base leading-none">{icon}</span>}
            {children}
        </button>
    );
}
