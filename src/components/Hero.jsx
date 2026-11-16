import React from 'react';
import { BookOpen, Globe2, Sparkles, ChevronRight, ArrowDown } from 'lucide-react';
import { libraryData } from '../data/libraryData';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Fundada en 1985 · Cochabamba, Bolivia</span>
          </div>

          <h1 className="hero-title">
            Una puerta viva al <span className="text-highlight">conocimiento</span> y la cultura latinoamericana
          </h1>

          <p className="hero-subtitle">
            {libraryData.tagline}
          </p>

          <p className="hero-description">
            {libraryData.heroDesc}
          </p>

          <div className="hero-actions">
            <a href="#patrimonio" className="btn btn-primary">
              <BookOpen size={18} />
              <span>Explorar Patrimonio</span>
            </a>
            <a href="#colabora" className="btn btn-outline">
              <span>Alianzas y Donaciones</span>
              <ChevronRight size={18} />
            </a>
          </div>

          {/* Cifras destacadas / Stats */}
          <div className="hero-stats">
            {libraryData.stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-number font-serif">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-desc">{stat.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <img
              src="https://images.openai.com/static-rsc-4/zN-AqngVZl3YS1MUl-x-t-UaVNNmavMd4Bhm0TK8OXMDYQMH5-s2rtshEZQvm-YDGgYqppQMRlS1j-l8IkdGCMR0pqrAJAVX2RFYSl4c1PAbdfDa1AdI0R9TH9ZLespxXtrXRbI9izx745UNgK177BdMXSQ4xPmpR4_Ccuz6Bt8?purpose=inline"
              alt="Instalaciones y colecciones de la Biblioteca Inca"
              className="main-hero-img"
            />
            <div className="image-badge">
              <div className="badge-bullet"></div>
              <span>Custodia de la Memoria Andina</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 4rem 0 5rem 0;
          background: linear-gradient(180deg, #fcfaf7 0%, #f7f2ea 100%);
          position: relative;
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }
        .hero-title {
          font-size: clamp(2.4rem, 4.2vw, 3.6rem);
          line-height: 1.15;
          margin-bottom: 1.25rem;
          color: #1a1614;
        }
        .text-highlight {
          color: var(--primary-andina);
          font-style: italic;
          position: relative;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gold-inca);
          margin-bottom: 1rem;
          font-family: var(--font-serif);
        }
        .hero-description {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 620px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
        }
        @media (min-width: 640px) {
          .hero-stats {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .stat-card {
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--primary-andina);
          line-height: 1;
          margin-bottom: 0.35rem;
        }
        .stat-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.2rem;
        }
        .stat-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.35;
        }
        .hero-visual {
          position: relative;
        }
        .image-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 4px solid #ffffff;
        }
        .main-hero-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .image-frame:hover .main-hero-img {
          transform: scale(1.03);
        }
        .image-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          background: rgba(28, 25, 23, 0.88);
          backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 0.6rem 1.1rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.82rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .badge-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gold-inca);
        }
      `}</style>
    </section>
  );
}
