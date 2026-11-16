import React from 'react';
import { Sparkles, Film, BookOpen, MessageSquare, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { libraryData } from '../data/libraryData';

export default function Culture() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Film': return <Film size={24} />;
      case 'BookOpen': return <BookOpen size={24} />;
      case 'MessageSquare': return <MessageSquare size={24} />;
      case 'ShoppingBag': return <ShoppingBag size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  return (
    <section id="cultura" className="section culture-section">
      <div className="container">
        <div className="text-center culture-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Actividades y Encuentros</span>
          </div>
          <h2 className="section-title">Un espacio vivo para compartir conocimiento</h2>
          <p className="section-desc mx-auto">
            La Biblioteca Inca trasciende la consulta pasiva de libros: es una plataforma activa para la tertulia,
            la apreciación artística y el intercambio multidisciplinario.
          </p>
        </div>

        <div className="activities-grid">
          {libraryData.activities.map((act) => (
            <div key={act.id} className="activity-card">
              <div className="activity-img-wrapper">
                <img src={act.image} alt={act.title} className="activity-img" />
                <div className="activity-icon-badge">
                  {getIcon(act.icon)}
                </div>
              </div>
              <div className="activity-body">
                <h3 className="activity-title font-serif">{act.title}</h3>
                <p className="activity-text">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .culture-section {
          background-color: #ffffff;
        }
        .text-center {
          text-align: center;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .culture-header {
          margin-bottom: 3.5rem;
        }
        .activities-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .activities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .activities-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .activity-card {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .activity-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: #dfcfc2;
        }
        .activity-img-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .activity-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .activity-card:hover .activity-img {
          transform: scale(1.06);
        }
        .activity-icon-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 44px;
          height: 44px;
          background: rgba(28, 25, 23, 0.85);
          backdrop-filter: blur(6px);
          color: var(--gold-inca);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .activity-body {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .activity-title {
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
          color: #1c1917;
        }
        .activity-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
