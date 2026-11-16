import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Heritage from './components/Heritage';
import Culture from './components/Culture';
import SocialImpact from './components/SocialImpact';
import Bookstore from './components/Bookstore';
import Collaborate from './components/Collaborate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* 00 - Barra de navegación sticky */}
      <Navbar />

      <main>
        {/* 01 · Inicio */}
        <Hero />

        {/* 02 · Nosotros e Historia */}
        <About />

        {/* 03 · Patrimonio (+300.000 ejemplares y 6 países) */}
        <Heritage />

        {/* 04 · Cultura y Actividades */}
        <Culture />

        {/* 05 · Impacto Social y Público */}
        <SocialImpact />

        {/* 06 · Librería y Publicaciones */}
        <Bookstore />

        {/* 07 · Colabora / Alianzas / Proyección */}
        <Collaborate />

        {/* 08 · Contacto y Ubicación */}
        <Contact />
      </main>

      {/* Pie de página institucional */}
      <Footer />
    </div>
  );
}

export default App;
