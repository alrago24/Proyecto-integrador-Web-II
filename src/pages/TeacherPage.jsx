/**
 * @file TeacherPage.jsx
 * @description Panel principal para usuarios con rol de Docente.
 *
 * Características:
 *  - Barra lateral (Sidebar) retráctil (colapsable) con enlaces.
 *  - Sistema CRUD básico en memoria para gestionar cursos (Crear, Leer, Actualizar, Eliminar).
 *  - Mini calendario interactivo calculado dinámicamente con eventos fijados.
 *  - Diseño responsive y uso de componentes modulares (Card, Button, Badge).
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card   from '../components/Card';
import Badge  from '../components/Badge';

// ── Datos Iniciales (Mocks) ──
const INITIAL_COURSES = [
    { id: 1, name: 'Matemáticas Avanzadas', description: 'Curso de cálculo diferencial para ingenierías.' },
    { id: 2, name: 'Programación Web',      description: 'Desarrollo de SPA con React y Tailwind.' },
];

const MONTH_NAMES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

export default function TeacherPage() {
    // ── Estados de la Vista ──
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Controla el sidebar colapsable
    
    // ── Estados del CRUD de Cursos ──
    const [items, setItems]                  = useState(INITIAL_COURSES); // Lista de cursos
    const [formData, setFormData]            = useState({ name: '', description: '' }); // Formulario actual
    const [editingId, setEditingId]          = useState(null); // ID del curso en edición (null = crear modo)

    // ── Cálculos del Calendario ──
    const today           = new Date();
    const daysInMonth     = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); // Días del mes actual
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay(); // Día de la semana en que inicia el mes

    // ── Funciones manejadoras del CRUD ──

    // Actualiza el estado del formulario mientras se escribe
    const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Maneja la creación y actualización de cursos
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            // Actualizar curso existente
            setItems(items.map(i => i.id === editingId ? { ...i, ...formData } : i));
            setEditingId(null);
        } else {
            // Crear nuevo curso (usa Date.now() como ID temporal único)
            setItems([...items, { id: Date.now(), ...formData }]);
        }
        setFormData({ name: '', description: '' }); // Limpiar formulario
    };

    // Prepara el formulario para editar un curso existente
    const handleEdit   = (item) => { setFormData({ name: item.name, description: item.description }); setEditingId(item.id); };
    
    // Elimina un curso por su ID
    const handleDelete = (id)   => setItems(items.filter(i => i.id !== id));
    
    // Cancela la edición y limpia el formulario
    const cancelEdit   = ()     => { setEditingId(null); setFormData({ name: '', description: '' }); };

    return (
        <div className="flex h-screen bg-slate-50 font-sans text-slate-800">

            {/* ── BARRA LATERAL (SIDEBAR) ── */}
            <aside className={`bg-zinc-950 text-slate-300 flex flex-col shadow-2xl z-20
                transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>

                {/* Header del Sidebar */}
                <div className="flex items-center justify-between p-5 border-b border-zinc-800 h-20">
                    {isSidebarOpen ? (
                        <div className="flex items-center gap-3 overflow-hidden">
                            <img src="/sinfondo.png" alt="logo"
                                 className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(233,155,99,0.5)]" />
                            <span className="font-bold text-lg tracking-wide text-white">DOCENTES</span>
                        </div>
                    ) : (
                        <div className="flex justify-center w-full">
                            <img src="/sinfondo.png" alt="logo" className="w-8 h-8 object-contain" />
                        </div>
                    )}
                </div>

                {/* Navegación Principal */}
                <nav className="flex-1 py-6">
                    <ul className="space-y-3 px-3">
                        <li>
                            <Link to="/" className="flex items-center p-3 rounded-lg hover:bg-zinc-800 hover:text-white transition-all">
                                <span className="text-xl">🏠</span>
                                {isSidebarOpen && <span className="ml-4 font-medium">Inicio</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/docente" className="flex items-center p-3 rounded-lg bg-zinc-800/80 text-white
                                shadow-md border-l-4 border-[#e99b63] transition-all">
                                <span className="text-xl">📚</span>
                                {isSidebarOpen && <span className="ml-4 font-medium">Panel Docente</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Botón de Salida (Logout) */}
                <div className="p-4 border-t border-zinc-800">
                    <Link to="/login" className="flex items-center p-3 rounded-lg text-red-400
                        hover:bg-red-500/10 hover:text-red-300 transition-colors w-full">
                        <span className="text-xl">🚪</span>
                        {isSidebarOpen && <span className="ml-4 font-medium">Cerrar Sesión</span>}
                    </Link>
                </div>
            </aside>

            {/* ── CONTENIDO PRINCIPAL ── */}
            <div className="flex-1 flex flex-col overflow-hidden relative bg-[#f8fafc]">
                {/* Elemento decorativo de fondo: mancha difuminada */}
                <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[20rem] bg-[#e99b63]
                                opacity-10 blur-[100px] rounded-full pointer-events-none -z-0" />

                {/* ── ENCABEZADO SUPERIOR (TOPBAR) ── */}
                <header className="bg-white/80 backdrop-blur-md shadow-sm h-20 flex justify-between
                                items-center z-10 border-b border-slate-200 px-8">
                    <div className="flex items-center gap-4">
                        {/* Botón Hamburguesa para el Sidebar */}
                        <button onClick={() => setIsSidebarOpen(p => !p)}
                                className="p-2 rounded-md hover:bg-slate-100 text-slate-600 transition-colors focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <h1 className="text-2xl font-bold text-slate-800">Vista Docente</h1>
                    </div>
                    {/* Perfil del Usuario */}
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-bold text-slate-800">Profesor Titular</p>
                            <p className="text-xs text-slate-500">Docente@cesde.net</p>
                        </div>
                        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#e99b63] to-orange-400
                                        flex items-center justify-center text-white font-bold shadow-md border-2 border-white">P</div>
                    </div>
                </header>

                {/* ── ÁREA DE TRABAJO (MAIN) ── */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-8 z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                            {/* ── SECCIÓN DE GESTIÓN (CRUD) — Ocupa 2/3 columnas ── */}
                            <div className="xl:col-span-2 space-y-8">

                                {/* 1. Formulario de Creación/Edición */}
                                <Card accent title={editingId ? '✏️ Editar Curso' : '✨ Nuevo Curso'}>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-600 mb-1.5">Nombre del Curso</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                                                placeholder="Ej. Diseño de Interfaces..."
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl
                                                    focus:ring-2 focus:ring-[#e99b63] focus:border-[#e99b63] outline-none text-slate-700 transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-600 mb-1.5">Descripción</label>
                                            <textarea name="description" value={formData.description} onChange={handleInputChange} required
                                                placeholder="Detalles sobre el contenido del curso..."
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl
                                                    focus:ring-2 focus:ring-[#e99b63] focus:border-[#e99b63] outline-none resize-none text-slate-700 transition-all"
                                                rows="2" />
                                        </div>
                                        <div className="flex items-center gap-3 pt-2">
                                            <Button type="submit" variant="dark">
                                                {editingId ? 'Actualizar Curso' : 'Guardar Curso'}
                                            </Button>
                                            {editingId && (
                                                <Button type="button" variant="secondary" onClick={cancelEdit}>Cancelar</Button>
                                            )}
                                        </div>
                                    </form>
                                </Card>

                                {/* 2. Tabla de Lista de Cursos */}
                                <Card
                                    title="Cursos Asignados"
                                    noPadding
                                    badge={<Badge variant="orange">{items.length} Cursos</Badge>}
                                >
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-slate-100">
                                            <thead className="bg-slate-50">
                                                <tr>
                                                    {['Curso', 'Descripción', 'Acciones'].map((h, i) => (
                                                        <th key={h} className={`px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider
                                                            ${i === 2 ? 'text-right' : 'text-left'}`}>{h}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-slate-50">
                                                {items.map((item) => (
                                                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                                        <td className="px-6 py-4 text-sm font-bold text-slate-800 whitespace-nowrap">{item.name}</td>
                                                        <td className="px-6 py-4 text-sm text-slate-500 max-w-xs truncate">{item.description}</td>
                                                        {/* Acciones: Editar y Eliminar (Se muestran completas en hover usando group-hover) */}
                                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                <Button size="sm" variant="secondary" onClick={() => handleEdit(item)}>Editar</Button>
                                                                <Button size="sm" variant="danger"    onClick={() => handleDelete(item.id)}>Eliminar</Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {/* Estado vacío */}
                                                {items.length === 0 && (
                                                    <tr>
                                                        <td colSpan="3" className="px-10 py-12 text-center">
                                                            <span className="text-4xl block mb-3 opacity-50">📭</span>
                                                            <p className="text-base font-medium text-slate-600">No hay cursos registrados</p>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </Card>
                            </div>

                            {/* ── SECCIÓN DE CALENDARIO Y EVENTOS — Ocupa 1/3 columnas ── */
                            <div className="xl:col-span-1">
                                <Card noPadding className="sticky top-8">
                                    <div className="bg-zinc-950 px-6 py-5 flex items-center justify-between text-white">
                                        <h3 className="font-bold text-lg">{MONTH_NAMES[today.getMonth()]} {today.getFullYear()}</h3>
                                        <div className="flex gap-2">
                                            <button className="p-1 hover:bg-zinc-800 rounded transition-colors text-sm">◀</button>
                                            <button className="p-1 hover:bg-zinc-800 rounded transition-colors text-sm">▶</button>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        {/* Días de la semana */}
                                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                            {['Do','Lu','Ma','Mi','Ju','Vi','Sa'].map(d => (
                                                <div key={d} className="text-xs font-bold text-slate-400 py-1">{d}</div>
                                            ))}
                                        </div>
                                        {/* Cuadrícula de fechas generada dinámicamente */}
                                        <div className="grid grid-cols-7 gap-1 text-center">
                                            {/* Espacios vacíos antes del primer día */}
                                            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                                                <div key={`b${i}`} className="p-2 text-transparent">0</div>
                                            ))}
                                            {/* Días del mes */}
                                            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                                                const isToday = day === today.getDate();
                                                return (
                                                    <div key={day} className="p-1 aspect-square flex items-center justify-center">
                                                        <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm
                                                            ${isToday
                                                                ? 'bg-[#e99b63] text-white font-bold shadow-md shadow-orange-500/30'
                                                                : 'text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors font-medium'}`}>
                                                            {day}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        
                                        {/* Lista de Próximos Eventos */}
                                        <div className="mt-6 pt-5 border-t border-slate-100">
                                            <h4 className="text-sm font-bold text-slate-800 mb-3">Próximos Eventos</h4>
                                            <div className="space-y-3">
                                                {[
                                                    { label: 'Entrega de Notas', color: 'bg-[#e99b63]', day: 15 },
                                                    { label: 'Reunión de Docentes', color: 'bg-blue-500', day: 22 },
                                                ].map(ev => (
                                                    <div key={ev.label} className="flex items-start gap-3">
                                                        <div className={`w-2 h-2 mt-1.5 rounded-full ${ev.color}`} />
                                                        <div>
                                                            <p className="text-sm font-bold text-slate-700">{ev.label}</p>
                                                            <p className="text-xs text-slate-500">{ev.day} de {MONTH_NAMES[today.getMonth()]}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
