/**
 * @file main.jsx
 * @description Punto de entrada principal de la aplicación React.
 *
 * Este archivo es el primero que ejecuta Vite al arrancar el servidor.
 * Su única responsabilidad es montar (renderizar) el componente raíz <App />
 * dentro del elemento HTML con id="root" definido en /index.html.
 *
 * React.StrictMode activa advertencias adicionales en desarrollo:
 *  - Detecta efectos secundarios inesperados
 *  - Advierte sobre APIs obsoletas
 *  - NO afecta el comportamiento en producción
 */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Estilos globales (incluye las directivas de Tailwind)

// Selecciona el nodo raíz del DOM y monta la aplicación React
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
