/**
 * @file ProgressBar.jsx
 * @description Barra de progreso animada con gradiente configurable, etiqueta y porcentaje.
 *
 * Usada en StudentPage para visualizar el avance en cada curso y en la
 * pestaña "Mis Notas" para el reporte de progreso por materia.
 *
 * Características:
 *  - El valor se normaliza automáticamente entre 0 y 100 (Math.min/max).
 *  - Animación suave de relleno con transition-all duration-700.
 *  - Etiqueta y porcentaje opcionales y configurables.
 *  - Tres alturas predefinidas: sm, md, lg.
 *
 * Props:
 * @param {number}  [value=0]          - Porcentaje de progreso (0–100). Se normaliza automáticamente.
 * @param {string}  [gradient='from-cyan-500 to-blue-600']
 *   - Clases Tailwind del gradiente de la barra rellena.
 * @param {string}  [label]            - Texto de etiqueta sobre la barra (ej. nombre del curso).
 * @param {boolean} [showValue=true]   - Si true, muestra el porcentaje numérico a la derecha.
 * @param {'sm'|'md'|'lg'} [height='md'] - Altura de la barra.
 *
 * Ejemplo de uso:
 *   <ProgressBar value={72} gradient="from-violet-500 to-purple-600" label="Matemáticas" height="lg" />
 */

import React from 'react';

// ── Mapa de alturas: controla el grosor visual de la barra ──
const HEIGHTS = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-3' };

export default function ProgressBar({
    value     = 0,
    gradient  = 'from-cyan-500 to-blue-600',
    label,
    showValue = true,
    height    = 'md',
}) {
    // Normalizar el valor entre 0 y 100 para evitar barras desbordadas o negativas
    const pct = Math.min(100, Math.max(0, value));
    // Obtener la clase de altura; si la clave no existe, usar 'md' como fallback
    const h   = HEIGHTS[height] ?? HEIGHTS.md;

    return (
        <div className="w-full">
            {/* ── Fila superior: etiqueta a la izquierda, porcentaje a la derecha ── */}
            {(label || showValue) && (
                <div className="flex justify-between text-xs mb-1.5">
                    {label     && <span className="font-semibold text-slate-700">{label}</span>}
                    {showValue && <span className="font-bold text-slate-500">{pct}%</span>}
                </div>
            )}

            {/* ── Pista (track): fondo gris claro ── */}
            <div className={`w-full bg-slate-100 rounded-full ${h}`}>
                {/* ── Relleno animado: ancho dinámico según el porcentaje calculado ── */}
                <div
                    className={`${h} rounded-full bg-gradient-to-r ${gradient} transition-all duration-700 shadow-sm`}
                    style={{ width: `${pct}%` }} // Inline style necesario para valores dinámicos
                />
            </div>
        </div>
    );
}
