/**
 * @file Badge.jsx
 * @description Chip/etiqueta compacta para mostrar estados, categorías o contadores.
 *
 * Se usa como indicador visual de estado dentro de Cards, tablas u otros elementos.
 * La variante determina la paleta de colores (fondo + texto).
 *
 * Props:
 * @param {React.ReactNode} children         - Texto o contenido del badge.
 * @param {'orange'|'blue'|'green'|'red'|'slate'|'amber'} [variant='slate']
 *   - Paleta de colores. Si no se reconoce la variante, usa 'slate' como fallback.
 *
 * Ejemplos de uso:
 *   <Badge variant="green">Aprobado</Badge>
 *   <Badge variant="red">3 pendientes</Badge>
 *   <Badge variant="orange">5 Cursos</Badge>
 */

import React from 'react';

// ── Mapa de variantes: clave → clases Tailwind de fondo y texto ──
// Cada par usa colores con opacidad reducida en el fondo para un look suave
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
        /* inline-flex para alinear el contenido verticalmente;
           rounded-full para la forma de píldora característica de los badges */
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold
            ${STYLES[variant] ?? STYLES.slate}`}>  {/* fallback a slate si la variante no existe */}
            {children}
        </span>
    );
}
