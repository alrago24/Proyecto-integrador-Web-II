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