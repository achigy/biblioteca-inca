import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, ExternalLink, Send, Newspaper, AlertCircle, CheckCircle } from 'lucide-react';
import { libraryData } from '../data/libraryData';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    interes: 'visita',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Información y Ubicación */}
          <div className="contact-info">
            <div className="section-tag">
              <MapPin size={14} />
              <span>Visítanos y Conecta</span>
            </div>
            <h2 className="section-title">Encuéntranos en Cochabamba</h2>
            <p className="contact-desc">
              Un rincón histórico de encuentro con las letras andinas en el corazón de Bolivia.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <MapPin size={22} />
                </div>
                <div className="info-details">
                  <span className="info-label">Dirección</span>
                  <p className="info-val">{libraryData.address}</p>
                  <span className="info-sub">{libraryData.location}</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Globe size={22} />
                </div>
                <div className="info-details">
                  <span className="info-label">Canales Oficiales y Redes</span>
                  <a
                    href={libraryData.linktree}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    <span>linktr.ee/bibliotecainca</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Nota sobre horarios */}
              <div className="schedule-alert">
                <AlertCircle size={20} className="alert-icon" />
                <div>
                  <strong>Modalidad de Visita y Horarios:</strong>
                  <p>
                    Las visitas a las salas y colecciones se gestionan con modalidades especiales y eventos programados.
                    Recomendamos consultar previamente a través de sus canales oficiales para coordinar su visita.
                  </p>
                </div>
              </div>

              {/* Fuentes de prensa */}
              <div className="press-links-box">
                <span className="press-title font-display">COBERTURA PERIODÍSTICA:</span>
                <div className="press-links">
                  <a
                    href="https://www.lostiempos.com/oh/actualidad/20251117/biblioteca-inca-mas-300-mil-libros-seis-paises-y-un-legado-historico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press-tag"
                  >
                    <Newspaper size={14} />
                    <span>Reportaje Los Tiempos</span>
                  </a>
                  <a
                    href="https://www.opinion.com.bo/cultura/biblioteca-inca-abre-puertas-visitas-ventas/20251006140116981218.amp.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press-tag"
                  >
                    <Newspaper size={14} />
                    <span>Artículo Diario Opinión</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto / Consulta */}
          <div className="contact-form-card">
            <h3 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Envíanos un mensaje
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Para coordinar visitas académicas, consultas bibliográficas, propuestas de donación o alianzas culturales.
            </p>

            {submitted ? (
              <div className="form-success">
                <CheckCircle size={48} color="#16a34a" />
                <h4 className="font-serif" style={{ fontSize: '1.35rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
                  ¡Mensaje Enviado!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Gracias por tu interés en la Biblioteca Inca. También puedes contactar directamente a través del enlace de Linktree.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline"
                  style={{ marginTop: '1.5rem' }}
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="actual-form">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    placeholder="Ej. Dra. Carmen Mendoza"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="ejemplo@universidad.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="interes">Motivo de Contacto</label>
                  <select
                    id="interes"
                    value={formData.interes}
                    onChange={(e) => setFormData({ ...formData, interes: e.target.value })}
                  >
                    <option value="visita">Coordinar Visita / Lectura</option>
                    <option value="investigacion">Investigación Académica / Tesis</option>
                    <option value="alianza">Alianza Institucional o Donación</option>
                    <option value="libreria">Consulta sobre Librería y Ejemplares</option>
                    <option value="otro">Otro Motivo</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje o Detalle</label>
                  <textarea
                    id="mensaje"
                    rows="4"
                    required
                    placeholder="Escribe brevemente tu consulta o interés institucional..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={18} />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: #ffffff;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: flex-start;
        }
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .contact-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          background: #fdfaf7;
          border: 1px solid var(--border-subtle);
          padding: 1.5rem;
          border-radius: var(--radius-md);
        }
        .info-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(153, 59, 29, 0.1);
          color: var(--primary-andina);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-details {
          display: flex;
          flex-direction: column;
        }
        .info-label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary-andina);
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .info-val {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-dark);
          line-height: 1.4;
        }
        .info-sub {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .info-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--primary-andina);
          font-weight: 600;
          margin-top: 0.25rem;
        }
        .info-link:hover {
          text-decoration: underline;
        }
        .schedule-alert {
          background: #fffbeb;
          border-left: 4px solid #f59e0b;
          padding: 1.25rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          display: flex;
          gap: 1rem;
          font-size: 0.92rem;
          color: #92400e;
          line-height: 1.55;
        }
        .alert-icon {
          flex-shrink: 0;
          color: #d97706;
          margin-top: 0.1rem;
        }
        .schedule-alert strong {
          display: block;
          margin-bottom: 0.35rem;
        }
        .press-links-box {
          margin-top: 1rem;
        }
        .press-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.75rem;
        }
        .press-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .press-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #f5f5f4;
          border: 1px solid #e7e5e4;
          padding: 0.45rem 0.9rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          color: var(--text-dark);
          transition: background 0.2s ease;
        }
        .press-tag:hover {
          background: #e7e5e4;
          color: var(--primary-andina);
        }
        .contact-form-card {
          background: #fdfaf7;
          border: 1px solid var(--border-subtle);
          padding: 2.75rem 2.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }
        .actual-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-group label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #374151;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-family: inherit;
          font-size: 0.95rem;
          background: #ffffff;
          transition: border-color 0.2s ease;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-andina);
        }
        .form-success {
          text-align: center;
          padding: 2.5rem 1rem;
        }
      `}</style>
    </section>
  );
}
