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