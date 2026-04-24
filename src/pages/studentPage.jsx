/**
 * @file StudentPage.jsx
 * @description Panel principal para usuarios con rol de Estudiante.
 *
 * Características:
 *  - Sistema de pestañas (Tabs): Alterna entre el Dashboard general y el Reporte de Notas.
 *  - Componentes gráficos enriquecidos: Tarjetas de progreso, barras de estadística, insignias y calendario.
 *  - Lista interactiva de tareas: permite marcar ítems como realizados y esto recalcula los pendientes.
 *  - Cálculos dinámicos de rendimiento general.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StatCard    from '../components/StatCard';
import Card        from '../components/Card';
import Badge       from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import Button      from '../components/Button';

// ── Mock Data (Datos de simulación) ──
const COURSES = [
    { id: 1, name: 'Matemáticas Avanzadas', teacher: 'Prof. García',    color: 'from-violet-500 to-purple-600', progress: 72, grade: 4.2 },
    { id: 2, name: 'Programación Web',      teacher: 'Prof. Martínez',  color: 'from-cyan-500 to-blue-600',     progress: 88, grade: 4.8 },
    { id: 3, name: 'Física Aplicada',       teacher: 'Prof. Rodríguez', color: 'from-orange-400 to-rose-500',   progress: 55, grade: 3.7 },
    { id: 4, name: 'Inglés Técnico',        teacher: 'Prof. López',     color: 'from-emerald-400 to-teal-600',  progress: 91, grade: 4.5 },
];

const GRADES = [
    { subject: 'Matemáticas Avanzadas', p1: 4.0, p2: 4.3, p3: 4.2, final: 4.2 },
    { subject: 'Programación Web',      p1: 4.7, p2: 4.9, p3: 4.8, final: 4.8 },
    { subject: 'Física Aplicada',       p1: 3.5, p2: 3.8, p3: 3.7, final: 3.7 },
    { subject: 'Inglés Técnico',        p1: 4.4, p2: 4.6, p3: 4.5, final: 4.5 },
];

const INITIAL_TASKS = [
    { id: 1, title: 'Parcial de Cálculo',   due: '25 Abr', dot: 'bg-rose-500',    done: false },
    { id: 2, title: 'Proyecto Final Web',   due: '30 Abr', dot: 'bg-cyan-500',    done: false },
    { id: 3, title: 'Laboratorio Física #3',due: '22 Abr', dot: 'bg-orange-400',  done: true  },
    { id: 4, title: 'Quiz Inglés Técnico',  due: '28 Abr', dot: 'bg-emerald-500', done: false },
];

const MONTH_NAMES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

// Función de utilidad para colorear el texto basado en la nota académica
const gradeColor = (g) => {
    if (g >= 4.5) return 'text-emerald-600 font-bold'; // Excelente
    if (g >= 3.5) return 'text-amber-500 font-bold';   // Regular/Aceptable
    return 'text-rose-500 font-bold';                  // Bajo
};

export default function StudentPage() {
    // ── Estados Locales ──
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Controla la barra lateral colapsable
    const [tasks, setTasks]                 = useState(INITIAL_TASKS); // Maneja la lista interactiva de tareas
    const [activeTab, setActiveTab]         = useState('dashboard'); // Controla la pestaña visible actual ('dashboard' o 'grades')

    // Alternar el estado de completado de una tarea
    const toggleTask = (id) => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));

    // ── Cálculos Dinámicos ──
    const avgGrade    = (GRADES.reduce((s, g) => s + g.final, 0) / GRADES.length).toFixed(1); // Promedio total (nota)
    const avgProgress = Math.round(COURSES.reduce((s, c) => s + c.progress, 0) / COURSES.length); // Avance general (%)
    const pending     = tasks.filter(t => !t.done).length; // Tareas aún pendientes

    // Cálculos de calendario (ídem a la TeacherPage, usado en un mini widget de calendario)
    const today           = new Date();
    const daysInMonth     = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

    // Estructura de navegación para renderizado dinámico del menú
    const NAV_ITEMS = [
        { key: 'dashboard', label: 'Dashboard', icon: '📊' },
        { key: 'grades',    label: 'Mis Notas',  icon: '📝' },
    ];

    return (
        <div className="flex h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden">

            {/* ── BARRA LATERAL (SIDEBAR) ── */}
            <aside className={`bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-300
                flex flex-col shadow-2xl z-20 transition-all duration-300
                ${isSidebarOpen ? 'w-64' : 'w-20'}`}>

                {/* Logo Superior */}
                <div className="flex items-center justify-between p-5 border-b border-slate-700 h-20">
                    {isSidebarOpen ? (
                        <div className="flex items-center gap-3 overflow-hidden">
                            <img src="/sinfondo.png" alt="logo"
                                className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                            <span className="font-bold text-lg tracking-wide text-white">ESTUDIANTES</span>
                        </div>
                    ) : (
                        <div className="flex justify-center w-full">
                            <img src="/sinfondo.png" alt="logo" className="w-8 h-8 object-contain" />
                        </div>
                    )}
                </div>

                {/* Tarjeta de Perfil en Sidebar */}
                {isSidebarOpen && (
                    <div className="mx-4 mt-5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-300
                                        flex items-center justify-center text-slate-900 font-bold text-sm shrink-0">E</div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-white truncate">Estudiante Demo</p>
                            <p className="text-xs text-emerald-400 truncate">est@cesde.net</p>
                        </div>
                    </div>
                )}

                {/* Menú de Navegación por Pestañas */}
                <nav className="flex-1 py-6">
                    <ul className="space-y-2 px-3">
                        {NAV_ITEMS.map(({ key, label, icon }) => (
                            <li key={key}>
                                {/* Usa setActiveTab para cambiar el contenido de la vista de forma condicional */}
                                <button onClick={() => setActiveTab(key)}
                                    className={`w-full flex items-center p-3 rounded-xl transition-all
                                        ${activeTab === key
                                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                            : 'hover:bg-slate-700/50 hover:text-white'}`}>
                                    <span className="text-xl">{icon}</span>
                                    {isSidebarOpen && <span className="ml-4 font-medium text-sm">{label}</span>}
                                </button>
                            </li>
                        ))}
                        <li>
                            <Link to="/" className="flex items-center p-3 rounded-xl hover:bg-slate-700/50 hover:text-white transition-all">
                                <span className="text-xl">🏠</span>
                                {isSidebarOpen && <span className="ml-4 font-medium text-sm">Inicio</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-slate-700">
                    <Link to="/login" className="flex items-center p-3 rounded-xl text-rose-400
                        hover:bg-rose-500/10 hover:text-rose-300 transition-colors w-full">
                        <span className="text-xl">🚪</span>
                        {isSidebarOpen && <span className="ml-4 font-medium text-sm">Cerrar Sesión</span>}
                    </Link>
                </div>
            </aside>

            {/* ── CONTENIDO PRINCIPAL ── */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
                {/* Elementos decorativos (orbes desenfocados) */}
                <div className="absolute top-[-5%] right-[-5%] w-[35rem] h-[20rem] bg-emerald-400 opacity-10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[25rem] h-[15rem] bg-cyan-400 opacity-10 blur-[100px] rounded-full pointer-events-none" />

                {/* ── ENCABEZADO (TOPBAR) ── */}
                <header className="bg-white/80 backdrop-blur-md shadow-sm h-20 flex justify-between items-center z-10 border-b border-slate-200 px-8">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(p => !p)}
                                className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <h1 className="text-2xl font-bold text-slate-800">
                            {/* El título cambia según la pestaña activa */}
                            {activeTab === 'dashboard' ? 'Panel Estudiante' : 'Mis Calificaciones'}
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full">
                            <span className="text-emerald-600 font-bold text-sm">⭐ Promedio: {avgGrade}</span>
                        </div>
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-bold text-slate-800">Estudiante Demo</p>
                            <p className="text-xs text-slate-500">est@cesde.net</p>
                        </div>
                        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-300
                                        flex items-center justify-center text-slate-900 font-bold shadow-md border-2 border-white">E</div>
                    </div>
                </header>

                {/* ── ÁREA DE TRABAJO (RENDER CONDICIONAL) ── */}
                <main className="flex-1 overflow-y-auto p-8 z-10">
                    <div className="max-w-7xl mx-auto">

                        {/* ══ VISTA 1: DASHBOARD (Resumen y métricas) ══ */}
                        {activeTab === 'dashboard' && (
                            <div className="space-y-8">
                                {/* Componentes de métricas clave */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                    <StatCard label="Promedio General"  value={avgGrade}        icon="⭐" gradient="from-violet-500 to-purple-600" shadow="shadow-violet-200" />
                                    <StatCard label="Progreso Promedio" value={`${avgProgress}%`} icon="📈" gradient="from-cyan-500 to-blue-600"     shadow="shadow-cyan-200"   />
                                    <StatCard label="Tareas Pendientes" value={pending}          icon="📋" gradient="from-orange-400 to-rose-500"    shadow="shadow-orange-200" />
                                </div>

                                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                                    {/* Lista de Cursos Avanzada (2 columnas en pantallas grandes) */}
                                    <div className="xl:col-span-2 space-y-5">
                                        <h2 className="text-lg font-bold text-slate-800">📚 Mis Cursos</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            {COURSES.map(course => (
                                                <Card key={course.id} noPadding
                                                    className="hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                                                    {/* Encabezado del curso (con gradiente) */}
                                                    <div className={`bg-gradient-to-r ${course.color} p-4`}>
                                                        <h3 className="text-white font-bold text-sm">{course.name}</h3>
                                                        <p className="text-white/70 text-xs mt-1">{course.teacher}</p>
                                                    </div>
                                                    {/* Cuerpo de la tarjeta del curso (Progreso y Nota) */}
                                                    <div className="p-4 space-y-3">
                                                        <ProgressBar value={course.progress} gradient={course.color} label="Progreso" />
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-xs text-slate-400">Nota actual</span>
                                                            <span className={`text-sm font-black ${gradeColor(course.grade)}`}>
                                                                {course.grade.toFixed(1)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Widgets de la derecha (Tareas y Mini Calendario) */}
                                    <div className="xl:col-span-1 space-y-6">
                                        {/* Tareas Interactivas */}
                                        <Card title="📋 Tareas y Eventos" badge={<Badge variant="red">{pending} pendientes</Badge>}>
                                            <ul className="space-y-3">
                                                {tasks.map(task => (
                                                    <li key={task.id} onClick={() => toggleTask(task.id)}
                                                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer
                                                            transition-all duration-200 border
                                                            ${task.done
                                                                ? 'bg-slate-50 border-slate-100 opacity-60'
                                                                : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-emerald-50'}`}>
                                                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${task.dot} ${task.done ? 'opacity-40' : ''}`} />
                                                        <div className="flex-1 min-w-0">
                                                            <p className={`text-sm font-medium truncate ${task.done ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                                                                {task.title}
                                                            </p>
                                                            <p className="text-xs text-slate-400">Vence: {task.due}</p>
                                                        </div>
                                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
                                                            ${task.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300'}`}>
                                                            {task.done && <span className="text-[10px]">✓</span>}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card>

                                        {/* Calendario Minificado */}
                                        <Card noPadding>
                                            <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-4 flex items-center justify-between">
                                                <h3 className="font-bold text-white text-sm">{MONTH_NAMES[today.getMonth()]} {today.getFullYear()}</h3>
                                                <div className="flex gap-1">
                                                    <button className="p-1 hover:bg-slate-600 rounded text-white/70 text-xs transition-colors">◀</button>
                                                    <button className="p-1 hover:bg-slate-600 rounded text-white/70 text-xs transition-colors">▶</button>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <div className="grid grid-cols-7 gap-0.5 text-center mb-1">
                                                    {['Do','Lu','Ma','Mi','Ju','Vi','Sa'].map(d => (
                                                        <div key={d} className="text-[10px] font-bold text-slate-400 py-1">{d}</div>
                                                    ))}
                                                </div>
                                                <div className="grid grid-cols-7 gap-0.5 text-center">
                                                    {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`b${i}`} />)}
                                                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                                                        const isToday = day === today.getDate();
                                                        return (
                                                            <div key={day} className="aspect-square flex items-center justify-center">
                                                                <span className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium cursor-pointer transition-all
                                                                    ${isToday ? 'bg-emerald-500 text-white font-bold shadow-md shadow-emerald-300' : 'text-slate-600 hover:bg-slate-100'}`}>
                                                                    {day}
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ══ VISTA 2: NOTAS Y CALIFICACIONES DETALLADAS ══ */}
                        {activeTab === 'grades' && (
                            <div className="space-y-6">
                                {/* Tabla Informativa */}
                                <Card noPadding title="Reporte de Calificaciones"
                                    badge={<Badge variant="green">Promedio: {avgGrade}</Badge>}>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-slate-100">
                                            <thead className="bg-slate-50">
                                                <tr>
                                                    {['Materia','Período 1','Período 2','Período 3','Nota Final'].map(h => (
                                                        <th key={h} className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-slate-50">
                                                {GRADES.map(row => (
                                                    <tr key={row.subject} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-4 text-sm font-bold text-slate-800 whitespace-nowrap">{row.subject}</td>
                                                        {[row.p1, row.p2, row.p3].map((g, i) => (
                                                            <td key={i} className={`px-6 py-4 text-sm ${gradeColor(g)}`}>{g.toFixed(1)}</td>
                                                        ))}
                                                        <td className="px-6 py-4">
                                                            <Badge variant={row.final >= 4.5 ? 'green' : row.final >= 3.5 ? 'amber' : 'red'}>
                                                                {row.final.toFixed(1)}
                                                            </Badge>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Card>

                                {/* Listado general del Progreso mediante barras anchas */}
                                <Card title="Progreso por Curso">
                                    <div className="space-y-5">
                                        {COURSES.map(course => (
                                            <ProgressBar key={course.id} label={course.name}
                                                value={course.progress} gradient={course.color} height="lg" />
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        )}

                    </div>
                </main>
            </div>
        </div>
    );
}