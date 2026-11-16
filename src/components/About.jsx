import React from 'react';
import { Award, Compass, Eye, Target, Landmark, CheckCircle2 } from 'lucide-react';
import { libraryData } from '../data/libraryData';

export default function About() {
  return (
    <section id="nosotros" className="section about-section">
      <div className="container">
        <div className="about-header text-center">
          <div className="section-tag">
            <Landmark size={14} />
            <span>Nuestra Identidad y Legado</span>
          </div>
          <h2 className="section-title">Una historia construida a través del conocimiento</h2>
          <p className="section-desc mx-auto">
            Fundada en 1985 por <strong>Don Alfredo Montalvo</strong>, la Biblioteca Inca nació de una pasión inquebrantable
            por recopilar la memoria viva del continente y proyectar iniciativas de impacto educativo y social.
          </p>
        </div>

        {/* Bloque historia y origen */}
        <div className="history-grid">
          <div className="history-text">
            <h3 className="history-subtitle">El legado de Don Alfredo Montalvo</h3>
            <p>
              Su trabajo no se limitó a reunir publicaciones: también estuvo íntimamente vinculado con iniciativas
              sociales y culturales que buscaban aportar al desarrollo de la sociedad cochabambina y boliviana.
            </p>
            <p>
              Esta dedicación tenaz durante décadas permitió construir un patrimonio bibliográfico de incalculable
              valor para quienes buscan conocer, estudiar y descubrir la historia profunda, el pensamiento crítico y la identidad latinoamericana.
            </p>

            <div className="meaning-box">
              <span className="meaning-title font-display">¿QUÉ SIGNIFICA "INCA"?</span>
              <p>
                Las siglas <strong>INCA</strong> corresponden a <strong>Instituto de Cultura Andina</strong>, en homenaje y
                referencia directa al patrimonio histórico y sabiduría milenaria del Tahuantinsuyo.
              </p>
            </div>
          </div>

          <div className="history-image-card">
            <img
              src="https://images.openai.com/static-rsc-4/NZ8Clz5Oi4m9ka7I8VSWYUFFnzkRHi_gkxItHUzgIHFcycUcE2XPWrpxy49E_QTKYiRgVHY0DFnBn74K7g03lCWHgCQw4V0FsAV5v_UN5NvbMGWNozlmqqQLuzHaTQOCp_E0DM_t9DGV2o3BTKtyhZW7Hqr2YCENnJ3VsJ6UhmM?purpose=inline"
              alt="Herencia y arquitectura colonial e histórica"
              className="about-img"
            />
            <div className="about-quote">
              <p>
                "El conocimiento y la memoria andina pertenecen a las futuras generaciones."
              </p>
              <cite>— Don Alfredo Montalvo, Ciudadano Meritorio de Cochabamba (2001)</cite>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="mv-cards-grid">
          <div className="mv-card">
            <div className="mv-icon-wrapper mission">
              <Target size={28} />
            </div>
            <h3 className="mv-title">Nuestra Misión</h3>
            <p className="mv-text">
              Aportar a la cultura mediante la <strong>preservación, promoción y difusión</strong> del conocimiento,
              los libros y las expresiones culturales latinoamericanas, asegurando el acceso libre a la investigación
              y el debate plural.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-icon-wrapper vision">
              <Eye size={28} />
            </div>
            <h3 className="mv-title">Nuestra Visión</h3>
            <p className="mv-text">
              Ser una <strong>institución autosustentable</strong>, capaz de proyectar y difundir la riqueza intelectual
              latinoamericana a todo el mundo, generando oportunidades de encuentro fraterno, aprendizaje continuo y participación cultural activa.
            </p>
          </div>
        </div>

        {/* Hitos Históricos */}
        <div className="milestones-section">
          <h3 className="text-center font-serif" style={{ fontSize: '1.6rem', marginBottom: '2rem' }}>
            Hitos y Reconocimientos
          </h3>
          <div className="timeline-grid">
            {libraryData.milestones.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-badge font-serif">{item.year}</div>
                <p className="timeline-content">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: #ffffff;
        }
        .text-center {
          text-align: center;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .about-header {
          margin-bottom: 3.5rem;
        }
        .history-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        @media (min-width: 1024px) {
          .history-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        .history-subtitle {
          font-size: 1.85rem;
          margin-bottom: 1.25rem;
          color: var(--primary-andina);
        }
        .history-text p {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          line-height: 1.7;
        }
        .meaning-box {
          background: #fcfaf7;
          border-left: 4px solid var(--gold-inca);
          padding: 1.25rem 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-top: 1.5rem;
        }
        .meaning-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-andina);
          display: block;
          margin-bottom: 0.4rem;
        }
        .meaning-box p {
          font-size: 0.95rem;
          margin-bottom: 0;
        }
        .history-image-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .about-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
        }
        .about-quote {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(20, 15, 12, 0.9) 100%);
          color: #ffffff;
          padding: 2.5rem 1.5rem 1.5rem 1.5rem;
        }
        .about-quote p {
          font-style: italic;
          font-family: var(--font-serif);
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
        }
        .about-quote cite {
          font-size: 0.82rem;
          color: #d6d3d1;
          display: block;
        }
        .mv-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        @media (min-width: 768px) {
          .mv-cards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .mv-card {
          background: #fdfaf7;
          border: 1px solid var(--border-subtle);
          padding: 2.5rem 2rem;
          border-radius: var(--radius-lg);
          transition: transform 0.3s ease;
        }
        .mv-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .mv-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .mv-icon-wrapper.mission {
          background: rgba(153, 59, 29, 0.12);
          color: var(--primary-andina);
        }
        .mv-icon-wrapper.vision {
          background: rgba(201, 130, 43, 0.15);
          color: var(--gold-inca);
        }
        .mv-title {
          font-size: 1.5rem;
          margin-bottom: 0.85rem;
        }
        .mv-text {
          color: var(--text-muted);
          font-size: 1.02rem;
          line-height: 1.7;
        }
        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .timeline-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .timeline-item {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          position: relative;
        }
        .timeline-badge {
          display: inline-block;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-andina);
          background: rgba(153, 59, 29, 0.08);
          padding: 0.2rem 0.75rem;
          border-radius: 6px;
          margin-bottom: 0.75rem;
        }
        .timeline-content {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
