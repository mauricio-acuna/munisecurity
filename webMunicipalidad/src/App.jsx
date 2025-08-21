      <section className="improvements">
        <h2>Propuestas de Mejora y Modernización</h2>
        <ul>
          <li><b>Digitalización de Trámites:</b> Portales web y apps móviles para trámites, gestión documental y firma digital, automatización de procesos internos.</li>
          <li><b>Atención Ciudadana Omnicanal:</b> Chatbots, integración con WhatsApp y redes sociales, mesas de ayuda digital y seguimiento de trámites.</li>
          <li><b>Seguridad Informática Avanzada:</b> Autenticación multifactor, encriptación de datos, auditorías periódicas y simulacros de ciberincidentes.</li>
          <li><b>Interoperabilidad y Gobierno Abierto:</b> APIs públicas, datos abiertos y transparencia en la gestión.</li>
          <li><b>Ejemplos de Municipios Avanzados:</b> CABA, Córdoba, Rosario: portales de trámites, apps móviles, automatización y seguridad avanzada.</li>
          <li><b>Propuesta para Municipios en Desarrollo:</b> Diagnóstico de madurez digital, plan progresivo de digitalización, capacitación, infraestructura y mejora continua.</li>
        </ul>
      </section>


import logoSG from './assets/logo-sg.svg'

function App() {
  return (
    <div className="container">

      <header className="hero">
        <img src={logoSG} alt="Seguridad Garupá" style={{height: '90px', marginBottom: '1em'}} />
        <h1>Consultoría y Auditoría en Seguridad Informática</h1>
        <p className="subtitle">Soluciones profesionales para municipios y sistemas críticos</p>
      </header>

      <section className="report">
        <h2>Reporte de Auditoría</h2>
        <p>
          Se realizó una auditoría exhaustiva sobre los activos digitales del municipio de Garupá, identificando riesgos, vulnerabilidades y oportunidades de mejora. El informe incluye hallazgos técnicos, recomendaciones y un plan de remediación.
        </p>
        <ul>
          <li>Falta de HTTPS y cabeceras de seguridad</li>
          <li>Formularios públicos vulnerables a inyección y XSS</li>
          <li>Exposición de datos personales y enlaces inseguros</li>
          <li>Dominio secundario sin respuesta (riesgo de takeover)</li>
        </ul>
        <a href="../InformeAuditoriaGarupa.md" target="_blank" className="btn">Ver informe completo</a>
      </section>

      <section className="proposal">
        <h2>Propuesta Comercial</h2>
        <p>
          Ofrecemos servicios de asesoría, consultoría y mejora continua en seguridad informática, adaptados a las necesidades del municipio:
        </p>
        <ul>
          <li>Auditoría técnica y de procesos</li>
          <li>Implementación de buenas prácticas y normativas</li>
          <li>Capacitación y simulacros de incidentes</li>
          <li>Soporte y acompañamiento permanente</li>
        </ul>
        <p className="price">Solicite una cotización personalizada</p>
      </section>

      <section className="services">
        <h2>Servicios</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Auditoría de Seguridad</h3>
            <p>Evaluación integral de sistemas, aplicaciones y procesos.</p>
          </div>
          <div className="service-item">
            <h3>Consultoría Estratégica</h3>
            <p>Diseño de políticas, procedimientos y planes de contingencia.</p>
          </div>
          <div className="service-item">
            <h3>Capacitación</h3>
            <p>Formación en ciberseguridad para empleados y funcionarios.</p>
          </div>
          <div className="service-item">
            <h3>Soporte y Monitoreo</h3>
            <p>Supervisión continua y respuesta ante incidentes.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contacto</h2>
        <p>Para consultas y propuestas, complete el siguiente formulario o escriba a <a href="mailto:info@seguridadgarupa.com">info@seguridadgarupa.com</a></p>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" required></textarea>
          <button type="submit" className="btn">Enviar</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Seguridad Garupá. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
