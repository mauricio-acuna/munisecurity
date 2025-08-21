# Informe de Auditoría de Seguridad - Municipalidad de Garupá

## 1. Relevamiento de Activos
### Dominio principal y subdominios
- garupa.com.ar
- Subdominios y rutas detectadas:
  - /municipalidad-de-garupa/
  - /hospital-ntra-sra-de-fatima/
  - /salon-cultural-mandove-pedrozo/
  - /instituciones/
  - /hotel-selva-de-garupa/
  - /convento-parroquia-ntra-sra-de-fatima/
- Enlace externo: https://sites.google.com/view/garupa-turismo/inicio
- Proyectogarupa.net (no responde, posible riesgo de abandono)

## 2. Enumeración de Directorios y Archivos Sensibles
- Se detectan rutas y directorios públicos, pero no se observa exposición directa de archivos sensibles en la navegación inicial.
- Recomendación: Realizar escaneo de directorios y archivos ocultos con herramientas como gobuster/dirb.

## 3. Formularios Públicos
- Formularios de comentarios presentes en varias páginas.
- Riesgos: Inyección de código, spam, XSS.
- Recomendación: Validar entradas, sanitizar datos y aplicar CAPTCHA.

## 4. Exposición de Datos Personales
- Publicación de teléfonos, direcciones y nombres de responsables.
- Riesgo: Exposición innecesaria de datos personales.
- Recomendación: Limitar la información pública y cumplir con normativas de protección de datos.

## 5. Configuración de Servidores y Certificados
- No se detecta HTTPS en el sitio principal, lo que expone la información a interceptación.
- Recomendación: Implementar certificados SSL/TLS en todos los servicios.

## 6. Enlaces Externos y Subdominios
- Enlaces a redes sociales y sitios externos.
- Riesgo: Redirección a sitios inseguros o abandonados.
- Recomendación: Revisar y mantener actualizados los enlaces externos.

## 7. Proyectogarupa.net
- El dominio no responde, lo que puede ser aprovechado para ataques de tipo "domain takeover".
- Recomendación: Recuperar o dar de baja el dominio si no se utiliza.

## 8. Recomendaciones Generales
- Realizar pruebas de penetración periódicas.
- Mantener actualizado el inventario de activos digitales.
- Capacitar al personal en buenas prácticas de seguridad.
- Implementar políticas de backup y recuperación ante incidentes.

---
**Este informe será actualizado a medida que se avancen las pruebas técnicas y se detecten nuevos hallazgos.**
