/**
 * Tarjeta de estadística para dashboards.
 * @param {string} label - Etiqueta de la métrica.
 * @param {string|number} value - Valor principal.
 * @param {string} icon - Icono representativo.
 * @param {string} [gradient] - Clases para el gradiente de fondo.
 * @param {string} [shadow] - Clase para la sombra.
 */

import React from 'react';

export default function StatCard({ label, value, icon, gradient = 'from-blue-500 to-blue-700', shadow = '' }) {
    return (
        /* Tarjeta principal */
        <div className={`bg-gradient-to-br ${gradient} text-white rounded-2xl p-6
            shadow-lg ${shadow} hover:scale-[1.02] transition-transform duration-200`}>

            {/* Contenido flex */}
            <div className="flex justify-between items-start">
                <div>
                    {/* Etiqueta */}
                    <p className="text-sm font-medium text-white/80">{label}</p>
                    {/* Valor */}
                    <p className="text-4xl font-black mt-1">{value}</p>
                </div>
                {/* Icono */}
                <span className="text-3xl opacity-80">{icon}</span>
            </div>
        </div>
    );
}
