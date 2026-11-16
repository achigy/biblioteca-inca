import React from 'react';
import { ShoppingBag, BookOpen, Compass, ExternalLink, Sparkles } from 'lucide-react';
import { libraryData } from '../data/libraryData';

export default function Bookstore() {
  return (
    <section id="libreria" className="section bookstore-section">
      <div className="container">
        <div className="bookstore-grid">
          <div className="bookstore-content">
            <div className="section-tag">
              <ShoppingBag size={14} />
              <span>Espacio de Circulación</span>
            </div>
            <h2 className="section-title">Descubre, encuentra y conserva conocimiento</h2>
            <p className="bookstore-desc">
              Además de ser un repositorio patrimonial para consulta e investigación, la Biblioteca Inca
              cuenta con un <strong>espacio de librería</strong> donde lectores, coleccionistas y estudiantes
              pueden adquirir obras selectas y títulos especializados.
            </p>

            <div className="bookstore-features">
              <div className="b-feature">
                <span className="b-dot"></span>
                <div>
                  <strong>Obras Especializadas:</strong> Títulos de historia, antropología, sociología y letras latinoamericanas.
                </div>
              </div>
              <div className="b-feature">
                <span className="b-dot"></span>
                <div>
                  <strong>Conservación y Fomento:</strong> Cada adquisición contribuye directamente a mantener activa la circulación de libros y el cuidado del acervo.
                </div>
              </div>
              <div className="b-feature">
                <span className="b-dot"></span>
                <div>
                  <strong>Visitas y Catálogo:</strong> Consulta las modalidades de visita y disponibilidad de títulos para coleccionistas.
                </div>
              </div>
            </div>

            <div className="bookstore-action">
              <a
                href={libraryData.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Consultar Obras y Novedades</span>
                <ExternalLink size={17} />
              </a>
            </div>
          </div>

          <div className="bookstore-visual">
            <div className="bookstore-img-box">
              <img
                src="https://images.openai.com/static-rsc-4/xG7hZm_uIfPeHmojshuvhgTR5zYNLWbGeGjM3JfoB0KT7nQeLrHvR9vLE1BuOAcoMihmh9OomRNW3DsTK-Vmm8lxsmLIMuBMmg2Acu13nUuC65jKnnXHLiANb2HMvbGlaBF-S5f9XCAuYLf8us2zvzPfIQNamhM5I4ScrDurNgU?purpose=inline"
                alt="Ambiente de librería y café literario"
                className="bookstore-img"
              />
              <div className="bookstore-badge">
                <Sparkles size={16} color="#c9822b" />
                <span>Libros de Ocasión y Joyas Editoriales</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bookstore-section {
          background-color: #ffffff;
        }
        .bookstore-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .bookstore-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }
        .bookstore-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .bookstore-features {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .b-feature {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.98rem;
          color: #374151;
        }
        .b-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gold-inca);
          margin-top: 0.5rem;
          flex-shrink: 0;
        }
        .bookstore-visual {
          position: relative;
        }
        .bookstore-img-box {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .bookstore-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
        }
        .bookstore-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          background: rgba(28, 25, 23, 0.9);
          backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 0.65rem 1.15rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
