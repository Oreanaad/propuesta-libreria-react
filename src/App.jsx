import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import HomePage from './pages/HomePage';
import Tienda from './pages/Tienda';
import Header from './components/General/Header';
import Footer from './components/General/Footer';
import './App.css'


function App() {

 
return (
    // 1. Envuelve toda tu aplicación con BrowserRouter
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/tienda" element={<Tienda/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="*" element={<h2>404: Página no encontrada</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App
