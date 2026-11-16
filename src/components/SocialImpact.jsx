import React from 'react';
import { Heart, Globe, GraduationCap, Home, Users2, CheckCircle2 } from 'lucide-react';
import { libraryData } from '../data/libraryData';

export default function SocialImpact() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={24} />;
      case 'Globe': return <Globe size={24} />;
      case 'Home': return <Home size={24} />;
      case 'Heart': return <Heart size={24} />;
      default: return <Heart size={24} />;
    }
  };

  return (
    <section id="impacto" className="section impact-section">
      <div className="container">
        <div className="text-center impact-header">
          <div className="section-tag">
            <Heart size={14} />
            <span>Compromiso Comunitario</span>
          </div>
          <h2 className="section-title">El conocimiento también transforma vidas</h2>
          <p className="section-desc mx-auto">
            La trayectoria de la Biblioteca Inca ha demostrado que la cultura es una herramienta potente de desarrollo humano.
            Sus acciones han trascendido los anaqueles para tocar directamente a la comunidad y a la investigación global.
          </p>
        </div>

        {/* Grilla de antecedentes de impacto */}
        <div className="impact-grid">
          {libraryData.socialImpact.map((item, idx) => (
            <div key={idx} className="impact-card">
              <div className="impact-icon-box">
                {getIcon(item.icon)}
              </div>
              <h3 className="impact-card-title">{item.title}</h3>
              <p className="impact-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Sección de públicos */}
        <div className="audiences-banner">
          <div className="audiences-content">
            <div className="audiences-left">
              <span className="section-tag" style={{ background: 'rgba(255,255,255,0.12)', color: '#fed7aa' }}>
                <Users2 size={14} />
                <span>Comunidad Diversa</span>
              </span>
              <h3 className="font-serif" style={{ fontSize: '1.85rem', color: '#fff', margin: '0.75rem 0' }}>
                Un espacio de puertas abiertas
              </h3>
              <p style={{ color: '#e7e5e4', fontSize: '1rem', lineHeight: 1.6 }}>
                Diseñada para acoger y nutrir las inquietudes intelectuales de múltiples disciplinas, generando sinergia entre
                el saber académico riguroso y el amor ciudadano por los libros.
              </p>
            </div>
            <div className="audiences-list">
              {libraryData.audiences.map((aud, i) => (
                <div key={i} className="audience-item">
                  <CheckCircle2 size={18} color="#f59e0b" />
                  <span>{aud}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .impact-section {
          background-color: #fcfaf7;
        }
        .text-center {
          text-align: center;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .impact-header {
          margin-bottom: 3.5rem;
        }
        .impact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        @media (min-width: 640px) {
          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .impact-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .impact-card {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 2.25rem 1.75rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .impact-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-andina);
        }
        .impact-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(153, 59, 29, 0.08);
          color: var(--primary-andina);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .impact-card-title {
          font-size: 1.25rem;
          font-family: var(--font-serif);
          margin-bottom: 0.75rem;
          color: #1a1614;
        }
        .impact-card-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .audiences-banner {
          background: linear-gradient(135deg, #292524 0%, #1c1917 100%);
          border-radius: var(--radius-lg);
          padding: 3rem 2.5rem;
          box-shadow: var(--shadow-lg);
        }
        .audiences-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .audiences-content {
            grid-template-columns: 1fr 1.2fr;
          }
        }
        .audiences-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .audiences-list {
            grid-template-columns: 1fr 1fr;
          }
        }
        .audience-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #f5f5f4;
          font-size: 0.95rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}
