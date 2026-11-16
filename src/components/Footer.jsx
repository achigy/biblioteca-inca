import React from 'react';
import { BookOpen, Heart, ArrowUp, ExternalLink } from 'lucide-react';
import { libraryData } from '../data/libraryData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="inca-pattern-border"></div>
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-header">
              <div className="footer-icon">
                <BookOpen size={24} color="#fff" />
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: '1.25rem', color: '#fff', letterSpacing: '0.08em' }}>
                  BIBLIOTECA INCA
                </h3>
                <span style={{ fontSize: '0.75rem', color: '#a8a29e', textTransform: 'uppercase' }}>
                  Instituto de Cultura Andina
                </span>
              </div>
            </div>
            <p className="footer-motto">
              {libraryData.tagline}
            </p>
            <p className="footer-loc">
              Cochabamba, Bolivia · Desde 1985
            </p>
          </div>

          <div className="footer-links-group">
            <span className="footer-col-title font-display">SECCIONES</span>
            <div className="footer-nav">
              <a href="#inicio">Inicio</a>
              <a href="#nosotros">Nosotros e Historia</a>
              <a href="#patrimonio">Patrimonio (+300.000 libros)</a>
              <a href="#cultura">Actividades Culturales</a>
              <a href="#impacto">Impacto Social</a>
              <a href="#libreria">Librería</a>
              <a href="#colabora">Alianzas y Donaciones</a>
            </div>
          </div>

          <div className="footer-links-group">
            <span className="footer-col-title font-display">PAÍSES DE COLECCIÓN</span>
            <div className="footer-nav">
              <span>🇧🇴 Bolivia</span>
              <span>🇵🇪 Perú</span>
              <span>🇪🇨 Ecuador</span>
              <span>🇨🇴 Colombia</span>
              <span>🇻🇪 Venezuela</span>
              <span>🇨🇱 Chile</span>
            </div>
          </div>

          <div className="footer-links-group">
            <span className="footer-col-title font-display">OFICIAL</span>
            <div className="footer-nav">
              <a href={libraryData.linktree} target="_blank" rel="noopener noreferrer" className="external-item">
                <span>Linktree Institucional</span>
                <ExternalLink size={14} />
              </a>
              <a href="https://www.lostiempos.com/oh/actualidad/20251117/biblioteca-inca-mas-300-mil-libros-seis-paises-y-un-legado-historico" target="_blank" rel="noopener noreferrer" className="external-item">
                <span>Reportaje Los Tiempos</span>
                <ExternalLink size={14} />
              </a>
              <a href="https://www.opinion.com.bo/cultura/biblioteca-inca-abre-puertas-visitas-ventas/20251006140116981218.amp.html" target="_blank" rel="noopener noreferrer" className="external-item">
                <span>Nota Diario Opinión</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copy-text">
            © {new Date().getFullYear()} Biblioteca Inca — Instituto de Cultura Andina. Preservando el legado de Don Alfredo Montalvo.
          </p>
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Volver arriba">
            <span>Volver arriba</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: #171412;
          color: #a8a29e;
          padding-top: 0;
        }
        .footer-content {
          padding-top: 4.5rem;
          padding-bottom: 3rem;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }
        @media (min-width: 640px) {
          .footer-top {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .footer-top {
            grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          }
        }
        .brand-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .footer-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--primary-andina);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-motto {
          color: #e7e5e4;
          font-style: italic;
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }
        .footer-loc {
          font-size: 0.85rem;
          color: #78716c;
        }
        .footer-col-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #f5f5f4;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 1.25rem;
        }
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          font-size: 0.9rem;
        }
        .footer-nav a {
          transition: color 0.2s ease;
        }
        .footer-nav a:hover {
          color: #ffffff;
        }
        .external-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }
        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
          }
        }
        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #d6d3d1;
          font-size: 0.85rem;
          transition: color 0.2s ease;
        }
        .scroll-top-btn:hover {
          color: #ffffff;
        }
      `}</style>
    </footer>
  );
}
