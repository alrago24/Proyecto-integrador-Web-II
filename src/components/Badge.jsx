/**
 * Componente Badge para mostrar estados o etiquetas.
 * @param {React.ReactNode} children - Contenido del badge.
 * @param {'orange'|'blue'|'green'|'red'|'slate'|'amber'} [variant='slate'] - Variante de color.
 */

import React from 'react';

// Mapa de variantes (colores con opacidad reducida)
const STYLES = {
    orange: 'bg-[#e99b63]/10 text-[#d87c3e]', // Naranja corporativo de EduPerformance
    blue:   'bg-blue-100    text-blue-700',
    green:  'bg-emerald-100 text-emerald-700',
    red:    'bg-rose-100    text-rose-600',
    slate:  'bg-slate-100   text-slate-600',    // Variante neutra por defecto
    amber:  'bg-amber-100   text-amber-700',
};

export default function Badge({ children, variant = 'slate' }) {
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold
            ${STYLES[variant] ?? STYLES.slate}`}>
            {children}
        </span>
    );
}
