# Pruebas Técnicas y Hallazgos Detallados

## 1. Enumeración de Directorios y Archivos
- Se recomienda el uso de herramientas como gobuster, dirb o feroxbuster para detectar directorios ocultos y archivos sensibles.
- Ejemplo de rutas a probar: /admin/, /login/, /backup/, /config/, /uploads/, /private/
- Hallazgos iniciales: No se detectan directorios sensibles en la navegación pública. Se requiere escaneo técnico.

## 2. Pruebas de Formularios Públicos
- Se identifican formularios de comentarios en varias páginas.
- Pruebas realizadas:
  - Inyección de SQL: No se observa respuesta directa, pero se recomienda revisar el backend.
  - XSS: Se recomienda probar con payloads simples (ej: <script>alert(1)</script>)
  - Spam: No hay protección CAPTCHA.
- Recomendación: Implementar validaciones y protección anti-spam.

## 3. Exposición de Datos Personales
- Teléfonos, direcciones y nombres publicados en varias páginas.
- Riesgo: Exposición innecesaria de datos personales.
- Recomendación: Limitar la información pública y cumplir con normativas de protección de datos.

## 4. Configuración de Servidores
- El sitio principal no utiliza HTTPS.
- Riesgo: Interceptación de datos y ataques Man-in-the-Middle.
- Recomendación: Implementar certificados SSL/TLS.

## 5. Subdominios y Enlaces Externos
- Enlaces detectados: hospital-ntra-sra-de-fatima, salon-cultural-mandove-pedrozo, hotel-selva-de-garupa, convento-parroquia-ntra-sra-de-fatima, proyectogarupa.net
- Proyectogarupa.net no responde, posible riesgo de "domain takeover".
- Recomendación: Recuperar o dar de baja el dominio.

## 6. Recomendaciones Técnicas
- Realizar escaneo de vulnerabilidades con herramientas como OWASP ZAP, Nessus, Nikto.
- Revisar configuraciones de servidores y permisos de archivos.
- Implementar políticas de backup y recuperación.

---
**Este documento será ampliado con los resultados de los escaneos técnicos y pruebas de penetración.**
