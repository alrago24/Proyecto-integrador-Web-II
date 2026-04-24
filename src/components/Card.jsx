/**
 * Contenedor tipo tarjeta reutilizable.
 * @param {string} [title] - Título del encabezado.
 * @param {React.ReactNode} [badge] - Badge junto al título.
 * @param {boolean} [accent=false] - Acento naranja lateral.
 * @param {boolean} [noPadding=false] - Sin padding en el cuerpo.
 * @param {string} [className=''] - Clases extra.
 * @param {React.ReactNode} children - Contenido principal.
 */

import React from 'react';

export default function Card({ title, badge, accent = false, noPadding = false, className = '', children }) {
    return (
        /* Contenedor principal de la tarjeta */
        <div className={`bg-white rounded-2xl border border-slate-100
            shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] relative overflow-hidden ${className}`}>

            {/* Acento lateral naranja */}
            {accent && <div className="absolute top-0 left-0 w-1 h-full bg-[#e99b63]" />}

            {/* Encabezado con título y badge */}
            {title && (
                <div className={`flex items-center justify-between border-b border-slate-100 px-6 py-5`}>
                    <h3 className="text-base font-bold text-slate-800">{title}</h3>
                    {/* Badge opcional */}
                    {badge && <div>{badge}</div>}
                </div>
            )}

            {/* Cuerpo de la tarjeta */}
            <div className={noPadding ? '' : 'p-6'}>
                {children}
            </div>
        </div>
    );
}
