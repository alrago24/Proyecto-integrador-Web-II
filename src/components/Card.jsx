/**
 * @file Card.jsx
 * @description Contenedor tipo tarjeta reutilizable con soporte para título,
 * badge, acento visual lateral y padding configurable.
 *
 * Uso típico:
 *   <Card title="Mi sección" badge={<Badge>3</Badge>} accent>
 *     <p>Contenido aquí</p>
 *   </Card>
 *
 * Props:
 * @param {string}          [title]        - Título en el encabezado de la tarjeta.
 * @param {React.ReactNode} [badge]        - Elemento badge/chip que se muestra junto al título.
 * @param {boolean}         [accent=false] - Si true, agrega una barra naranja de acento en el borde izquierdo.
 * @param {boolean}         [noPadding=false] - Si true, elimina el padding del cuerpo (útil para tablas o imágenes a sangre).
 * @param {string}          [className=''] - Clases Tailwind adicionales para personalización extra.
 * @param {React.ReactNode} children       - Contenido principal de la tarjeta.
 */

import React from 'react';

export default function Card({ title, badge, accent = false, noPadding = false, className = '', children }) {
    return (
        /* Contenedor principal de la tarjeta: fondo blanco, bordes redondeados,
           sombra sutil y overflow hidden para que el acento no se salga */
        <div className={`bg-white rounded-2xl border border-slate-100
            shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] relative overflow-hidden ${className}`}>

            {/* ── Acento lateral naranja (solo si accent=true) ── */}
            {accent && <div className="absolute top-0 left-0 w-1 h-full bg-[#e99b63]" />}

            {/* ── Encabezado con título y badge (solo si se pasa title) ── */}
            {title && (
                <div className={`flex items-center justify-between border-b border-slate-100 px-6 py-5`}>
                    <h3 className="text-base font-bold text-slate-800">{title}</h3>
                    {/* Badge opcional (p.ej. contador de elementos) */}
                    {badge && <div>{badge}</div>}
                </div>
            )}

            {/* ── Cuerpo de la tarjeta: con o sin padding según la prop noPadding ── */}
            <div className={noPadding ? '' : 'p-6'}>
                {children}
            </div>
        </div>
    );
}
