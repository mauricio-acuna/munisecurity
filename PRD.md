# PRD: Auditoría de Seguridad - Municipalidad de Garupá

## Objetivo
Realizar una auditoría integral de seguridad para la Municipalidad de Garupá, identificando riesgos, vulnerabilidades y recomendaciones de mejora en sus activos digitales y procesos asociados.

## Alcance
- Sitio web principal: [municipalidad-de-garupa](http://garupa.com.ar/municipalidad-de-garupa/)
- Dominio principal: garupa.com.ar
- Subdominios y servicios relacionados (ej: proyectogarupa.net, hospital, salón cultural, instituciones, etc.)
- Infraestructura de correo electrónico y redes sociales oficiales
- Procesos internos de gestión digital y publicación de información

## Requerimientos Funcionales
1. **Identificación de Activos**
   - Listar todos los dominios, subdominios y servicios web relacionados.
   - Identificar sistemas de gestión interna, portales de empleados, y servicios de terceros.
2. **Evaluación de Vulnerabilidades**
   - Análisis de seguridad web (OWASP Top 10, escaneo de vulnerabilidades).
   - Revisión de formularios públicos (ej: comentarios, contacto) para evitar inyecciones y spam.
   - Verificación de seguridad en el manejo de datos personales y cumplimiento de normativas.
3. **Testing de Penetración**
   - **Reconocimiento y Enumeración**
     - Reconocimiento pasivo: OSINT, búsqueda de subdominios, información pública
     - Reconocimiento activo: escaneo de puertos, servicios y tecnologías
     - Enumeración de directorios y archivos sensibles
   - **Pruebas de Aplicaciones Web**
     - Inyección SQL, XSS, CSRF y otras vulnerabilidades OWASP Top 10
     - Bypass de autenticación y autorización
     - Pruebas de lógica de negocio y manejo de sesiones
   - **Pruebas de Infraestructura**
     - Análisis de servicios de red expuestos
     - Configuraciones inseguras de servidores web
     - Pruebas de escalación de privilegios
   - **Ingeniería Social (Limitada)**
     - Análisis de información expuesta en redes sociales
     - Verificación de políticas de divulgación de información
   - **Metodología**
     - Seguimiento de PTES (Penetration Testing Execution Standard)
     - Documentación detallada de cada vulnerabilidad encontrada
     - Pruebas de concepto (PoC) cuando sea apropiado
4. **Revisión de Infraestructura**
   - Análisis de servidores, hosting, DNS y certificados SSL.
   - Evaluación de la seguridad en el correo electrónico institucional.
5. **Redes Sociales y Exposición Pública**
   - Identificación de cuentas oficiales y revisión de buenas prácticas de seguridad.
6. **Procesos y Políticas**
   - Revisión de políticas de publicación, gestión de usuarios y contraseñas.
   - Evaluación de procedimientos de backup y recuperación ante incidentes.

## Requerimientos No Funcionales
- Confidencialidad y protección de la información recolectada.
- Reportes claros y ejecutivos para autoridades municipales.
- Recomendaciones priorizadas según criticidad y factibilidad.

## Entregables
- Informe de auditoría con hallazgos y riesgos identificados.
- Listado de activos y servicios evaluados.
- Recomendaciones técnicas y de gestión.
- Plan de remediación y mejora.

## Cronograma Tentativo
1. Relevamiento inicial y reconocimiento: 1 semana
2. Testing de penetración y pruebas técnicas: 2-3 semanas
3. Análisis de procesos y políticas: 1 semana
4. Redacción de informe y presentación: 1 semana

## Consideraciones Especiales
- Incluir activos relacionados como [proyectogarupa.net](http://proyectogarupa.net), hospital, salón cultural, y cualquier otro subdominio o servicio público detectado.
- Realizar búsquedas OSINT para identificar posibles puntos de riesgo externos.
- Validar cumplimiento de normativas locales y nacionales sobre protección de datos.

---
**Este PRD puede ser ajustado según el relevamiento inicial y los activos detectados.**
