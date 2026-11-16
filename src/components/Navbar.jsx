import React, { useState } from 'react';
import { Menu, X, BookOpen, Compass, HeartHandshake, Phone, ArrowRight } from 'lucide-react';
import { libraryData } from '../data/libraryData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Patrimonio', href: '#patrimonio' },
    { name: 'Cultura', href: '#cultura' },
    { name: 'Impacto Social', href: '#impacto' },
    { name: 'Librería', href: '#libreria' },
    { name: 'Colabora', href: '#colabora' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="navbar-wrapper">
      <div className="inca-pattern-border"></div>
      <div className="container nav-content">
        <a href="#inicio" className="brand-logo">
          <div className="brand-icon">
            <BookOpen size={24} color="#fff" />
          </div>
          <div className="brand-texts">
            <span className="brand-title font-display">BIBLIOTECA INCA</span>
            <span className="brand-sub">Instituto de Cultura Andina</span>
          </div>
        </a>

        {/* Menú Desktop */}
        <nav className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#colabora" className="btn btn-primary nav-cta">
            <HeartHandshake size={16} />
            <span>Apoyar Legado</span>
          </a>
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú Móvil desplegable */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#colabora"
              className="btn btn-primary"
              style={{ marginTop: '1rem', width: '100%' }}
              onClick={() => setIsOpen(false)}
            >
              <HeartHandshake size={18} />
              <span>Colaborar con la Biblioteca</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(252, 250, 247, 0.96);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border-subtle);
        }
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .brand-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--primary-andina) 0%, #b45309 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(153, 59, 29, 0.25);
        }
        .brand-texts {
          display: flex;
          flex-direction: column;
        }
        .brand-title {
          font-weight: 800;
          font-size: 1.15rem;
          color: #1a1614;
          letter-spacing: 0.08em;
          line-height: 1.1;
        }
        .brand-sub {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 500;
        }
        .desktop-menu {
          display: none;
          align-items: center;
          gap: 1.35rem;
        }
        @media (min-width: 1024px) {
          .desktop-menu {
            display: flex;
          }
          .mobile-toggle {
            display: none;
          }
        }
        .nav-link {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-dark);
          transition: color 0.2s ease;
          position: relative;
          padding: 0.25rem 0;
        }
        .nav-link:hover {
          color: var(--primary-andina);
        }
        .nav-cta {
          padding: 0.65rem 1.25rem;
          font-size: 0.88rem;
          margin-left: 0.5rem;
        }
        .mobile-toggle {
          color: var(--text-dark);
          padding: 0.5rem;
        }
        .mobile-menu {
          background: #ffffff;
          border-bottom: 1px solid var(--border-subtle);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }
        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .mobile-link {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-dark);
          padding: 0.5rem 0;
          border-bottom: 1px solid #f3f0ea;
        }
      `}</style>
    </header>
  );
}
