import React from 'react';
import { BookMarked, Globe, Sparkles, Layers, Check } from 'lucide-react';
import { libraryData } from '../data/libraryData';

export default function Heritage() {
  return (
    <section id="patrimonio" className="section heritage-section">
      <div className="container">
        <div className="text-center heritage-header">
          <div className="section-tag">
            <BookMarked size={14} />
            <span>Patrimonio Bibliográfico</span>
          </div>
          <h2 className="section-title">Un legado de más de 300.000 ejemplares</h2>
          <p className="section-desc mx-auto">
            Una de las colecciones privadas y culturales más voluminosas e importantes de Sudamérica,
            dedicada a preservar el pensamiento crítico, la memoria histórica y la producción intelectual de los países andinos.
          </p>
        </div>

        {/* Banner visual con datos clave */}
        <div className="heritage-hero-card">
          <div className="heritage-card-content">
            <span className="heritage-badge font-display">COBERTURA REGIONAL ESPECIALIZADA</span>
            <h3 className="font-serif" style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>
              6 Países Andinos Conectados por la Memoria
            </h3>
            <p style={{ color: '#e7e5e4', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '680px' }}>
              La colección reúne libros, tesis, documentos inéditos, investigaciones académicas, publicaciones gubernamentales
              y folletos de valor histórico incalculable provenientes de las naciones que integraron o limitaron con el mundo andino.
            </p>
          </div>
          <div className="heritage-card-numbers">
            <div className="big-stat">
              <span className="big-num font-serif">+300.000</span>
              <span className="big-label">Ejemplares Registrados</span>
            </div>
            <div className="big-stat">
              <span className="big-num font-serif">6</span>
              <span className="big-label">Naciones Hermenadas</span>
            </div>
          </div>
        </div>

        {/* Grilla de países andinos */}
        <div className="countries-grid">
          {libraryData.countries.map((country, idx) => (
            <div key={idx} className="country-card">
              <div className="country-header">
                <span className="country-flag">{country.flag}</span>
                <h4 className="country-name font-serif">{country.name}</h4>
              </div>
              <p className="country-desc">{country.desc}</p>
            </div>
          ))}
        </div>

        {/* Áreas de conocimiento */}
        <div className="disciplines-box">
          <h3 className="font-serif text-center" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Principales Áreas y Disciplinas de Consulta
          </h3>
          <div className="disciplines-chips">
            {[
              "Historia Colonial y Republicana",
              "Arqueología y Culturas Originarias",
              "Filosofía y Ensayística Latinoamericana",
              "Literatura, Narrativa y Poesía Andina",
              "Sociología, Indigenismo y Movimientos Sociales",
              "Minería, Economía y Recursos Naturales",
              "Derecho, Geopolítica y Periodismo Histórico"
            ].map((disc, i) => (
              <div key={i} className="discipline-chip">
                <Check size={16} className="chip-icon" />
                <span>{disc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .heritage-section {
          background-color: #f7f3ed;
        }
        .text-center {
          text-align: center;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .heritage-header {
          margin-bottom: 3.5rem;
        }
        .heritage-hero-card {
          background: linear-gradient(135deg, #1c1917 0%, #3a2216 100%);
          border-radius: var(--radius-lg);
          padding: 3rem 2.5rem;
          margin-bottom: 3rem;
          box-shadow: var(--shadow-lg);
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
          border-left: 6px solid var(--gold-inca);
        }
        @media (min-width: 1024px) {
          .heritage-hero-card {
            grid-template-columns: 1.6fr 1fr;
          }
        }
        .heritage-badge {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--gold-inca);
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }
        .heritage-card-numbers {
          display: flex;
          gap: 2rem;
          justify-content: flex-start;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 1.5rem;
        }
        @media (min-width: 640px) {
          .heritage-card-numbers {
            border-top: none;
            border-left: 1px solid rgba(255, 255, 255, 0.15);
            padding-top: 0;
            padding-left: 2rem;
          }
        }
        .big-stat {
          display: flex;
          flex-direction: column;
        }
        .big-num {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--gold-inca);
          line-height: 1.1;
        }
        .big-label {
          color: #d6d3d1;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .countries-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }
        @media (min-width: 640px) {
          .countries-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .countries-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .country-card {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .country-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-andina);
        }
        .country-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.75rem;
        }
        .country-flag {
          font-size: 1.8rem;
          line-height: 1;
        }
        .country-name {
          font-size: 1.3rem;
          color: var(--text-dark);
        }
        .country-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .disciplines-box {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 2.5rem 2rem;
        }
        .disciplines-chips {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.85rem;
        }
        .discipline-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #fdfaf7;
          border: 1px solid #ebdcd2;
          padding: 0.6rem 1.15rem;
          border-radius: 9999px;
          font-size: 0.92rem;
          font-weight: 500;
          color: #382d27;
        }
        .chip-icon {
          color: var(--primary-andina);
        }
      `}</style>
    </section>
  );
}
