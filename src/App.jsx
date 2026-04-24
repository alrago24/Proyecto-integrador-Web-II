/**
 * @file App.jsx
 * @description Componente raíz de la aplicación EduPerformance.
 *
 * Configura el enrutamiento del lado del cliente usando React Router DOM v6.
 * Define las 4 rutas principales de la aplicación y asocia cada URL
 * con su página (componente de vista completa) correspondiente.
 *
 * Estructura de rutas:
 *  /             → HomePage     (página de bienvenida / landing)
 *  /login        → LoginPage    (formulario de inicio de sesión con selección de rol)
 *  /docente      → TeacherPage  (panel de administración para docentes)
 *  /estudiante   → StudentPage  (panel personal para estudiantes)
 *
 * Arquitectura de carpetas:
 *  src/
 *  ├── pages/       → Vistas completas (una por ruta)
 *  └── components/  → Componentes reutilizables (Header, Footer, Button, etc.)
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";

// ── Páginas (vistas completas, una por ruta) ─────────────────────────────────
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import TeacherPage from "./pages/TeacherPage.jsx";
import StudentPage from "./pages/StudentPage.jsx";

// ── Nota: los componentes reutilizables están en src/components/:
//    Header, Footer, Button, Card, StatCard, Badge, ProgressBar

/**
 * App — componente raíz que envuelve toda la aplicación con el enrutador.
 * BrowserRouter usa la History API del navegador para navegar sin recargar.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta raíz: página de inicio / landing */}
        <Route path="/" element={<HomePage />} />

        {/* Inicio de sesión con selector de rol (Docente / Estudiante) */}
        <Route path="/login" element={<LoginPage />} />

        {/* Panel exclusivo para docentes: CRUD de cursos + calendario */}
        <Route path="/docente" element={<TeacherPage />} />

        {/* Panel exclusivo para estudiantes: dashboard + notas + tareas */}
        <Route path="/estudiante" element={<StudentPage />} />
      </Routes>
    </BrowserRouter>
  );
}