import React from 'react';
import { HeartHandshake, ShieldCheck, Sparkles, Building2, HelpCircle, ArrowRight } from 'lucide-react';
import { libraryData } from '../data/libraryData';

export default function Collaborate() {
  const pillars = [
    {
      title: "Patrimonio que merece preservarse",
      desc: "Protección física, catalogación moderna y conservación preventiva de una colección única de +300.000 ejemplares.",
      icon: "ShieldCheck"
    },
    {
      title: "Cultura que merece difundirse",
      desc: "Digitalización de archivos raros y fomento del conocimiento andino hacia colegios, universidades y la sociedad civil.",
      icon: "Sparkles"
    },
    {
      title: "Alianzas Internacionales",
      desc: "Convenios con fundaciones, universidades e institutos de investigación interesados en la memoria andina.",
      icon: "Building2"
    },
    {
      title: "Hacia la Autosustentabilidad",
      desc: "Construcción de un modelo institucional sólido que garantice el futuro del legado a largo plazo.",
      icon: "HeartHandshake"
    }
  ];

  return (
    <section id="colabora" className="section collaborate-section">
      <div className="container">
        <div className="collaborate-box">
          <div className="text-center">
            <div className="section-tag" style={{ background: 'rgba(201, 130, 43, 0.15)', color: 'var(--gold-inca)' }}>
              <HeartHandshake size={14} />
              <span>Colaboración y Futuro</span>
            </div>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              Sé parte de nuestro legado
            </h2>
            <p className="collaborate-intro mx-auto">
              La conservación del patrimonio cultural es una responsabilidad compartida. Buscamos establecer
              alianzas estratégicas y vínculos institucionales con entidades, fundaciones y personas que valoren la riqueza intelectual de América Latina.
            </p>
          </div>

          {/* Pilares estratégicos */}
          <div className="pillars-grid">
            {pillars.map((p, idx) => (
              <div key={idx} className="pillar-item">
                <div className="pillar-badge">0{idx + 1}</div>
                <h3 className="pillar-title font-serif">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Llamado institucional y formulario rápido de contacto */}
          <div className="collaborate-action-card">
            <div className="action-text">
              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#1c1917', marginBottom: '0.6rem' }}>
                ¿Representas a una universidad, fundación o deseas colaborar?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Estamos abiertos a iniciativas de conservación, investigación conjunta, pasantías académicas y apoyo institucional.
              </p>
            </div>
            <div className="action-button-wrap">
              <a
                href="#contacto"
                className="btn btn-primary"
                style={{ padding: '0.95rem 2rem' }}
              >
                <span>Iniciar Diálogo Institucional</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .collaborate-section {
          background-color: #f7f3ed;
        }
        .text-center {
          text-align: center;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .collaborate-box {
          background: linear-gradient(145deg, #1c1917 0%, #291c14 100%);
          border-radius: var(--radius-lg);
          padding: 4.5rem 2.5rem;
          color: #ffffff;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        @media (max-width: 640px) {
          .collaborate-box {
            padding: 3rem 1.5rem;
          }
        }
        .collaborate-intro {
          font-size: 1.12rem;
          color: #d6d3d1;
          max-width: 720px;
          line-height: 1.7;
          margin-bottom: 3.5rem;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }
        @media (min-width: 640px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .pillar-item {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 1.5rem;
          border-radius: var(--radius-md);
          position: relative;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .pillar-item:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.07);
          border-color: var(--gold-inca);
        }
        .pillar-badge {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--gold-inca);
          margin-bottom: 1rem;
          font-family: var(--font-display);
        }
        .pillar-title {
          font-size: 1.2rem;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }
        .pillar-desc {
          font-size: 0.92rem;
          color: #a8a29e;
          line-height: 1.6;
        }
        .collaborate-action-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          justify-content: space-between;
          align-items: center;
        }
        @media (min-width: 768px) {
          .collaborate-action-card {
            flex-direction: row;
          }
        }
        .action-text {
          max-width: 620px;
        }
      `}</style>
    </section>
  );
}
