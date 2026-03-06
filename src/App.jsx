import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
  <main>
    <img className="absolute top-0 right-0 opacity-60 -z-1" 
      src="/gradient.png" 
      alt="Gradient-img"/>

      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] rotate-[30deg] -z-10"></div>
      <Header />
      <Footer />
  </main>
)
import React from "react";
import Login from "./components/Login"
import ListaUsuarios from "./components/ListaUsuarios";
import UsuarioCard from "./components/UsuarioCard";

export default function App() {
  return (
    <Login/>
  );
}