/**
 * Barra de progreso animada.
 * @param {number} [value=0] - Porcentaje de progreso (0-100).
 * @param {string} [gradient] - Clases para el gradiente.
 * @param {string} [label] - Etiqueta sobre la barra.
 * @param {boolean} [showValue=true] - Mostrar porcentaje numérico.
 * @param {'sm'|'md'|'lg'} [height='md'] - Altura de la barra.
 */

import React from 'react';

// Mapa de alturas
const HEIGHTS = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-3' };

export default function ProgressBar({
    value     = 0,
    gradient  = 'from-cyan-500 to-blue-600',
    label,
    showValue = true,
    height    = 'md',
}) {
    // Normalizar valor entre 0 y 100
    const pct = Math.min(100, Math.max(0, value));
    // Obtener clase de altura
    const h   = HEIGHTS[height] ?? HEIGHTS.md;

    return (
        <div className="w-full">
            {/* Fila superior: etiqueta y porcentaje */}
            {(label || showValue) && (
                <div className="flex justify-between text-xs mb-1.5">
                    {label     && <span className="font-semibold text-slate-700">{label}</span>}
                    {showValue && <span className="font-bold text-slate-500">{pct}%</span>}
                </div>
            )}

            {/* Pista (track) */}
            <div className={`w-full bg-slate-100 rounded-full ${h}`}>
                {/* Relleno animado */}
                <div
                    className={`${h} rounded-full bg-gradient-to-r ${gradient} transition-all duration-700 shadow-sm`}
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}
