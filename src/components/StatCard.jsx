/**
 * @file StatCard.jsx
 * @description Tarjeta de estadística con gradiente de color, valor numérico grande e icono.
 *
 * Diseñada para mostrar métricas clave de un vistazo en los dashboards:
 * promedio general, progreso, tareas pendientes, etc.
 *
 * Características:
 *  - Gradiente de fondo configurable.
 *  - Animación de escala al pasar el cursor (hover:scale-[1.02]).
 *  - Sombra coloreada opcional que complementa el gradiente.
 *
 * Props:
 * @param {string}  label             - Etiqueta descriptiva de la métrica (ej. "Promedio General").
 * @param {string|number} value       - Valor principal que se muestra en grande (ej. 4.5 o "88%").
 * @param {string}  icon              - Emoji o símbolo que acompaña visualmente al valor.
 * @param {string}  [gradient='from-blue-500 to-blue-700']
 *   - Clases Tailwind del gradiente de fondo (debe empezar con 'from-' y 'to-').
 * @param {string}  [shadow='']       - Clase Tailwind de sombra coloreada (ej. 'shadow-violet-200').
 *
 * Ejemplo de uso:
 *   <StatCard
 *     label="Promedio General"
 *     value={4.5}
 *     icon="⭐"
 *     gradient="from-violet-500 to-purple-600"
 *     shadow="shadow-violet-200"
 *   />
 */


