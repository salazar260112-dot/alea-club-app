# ALÉA Club — App Cliente

## 1. Project Description
Aplicación móvil (mobile-first) para las clientas de **ALÉA Aesthetic House**. Permite registrarse rápido (solo nombre, WhatsApp y correo), consultar promociones, productos ALÉA Skin, tips de cuidado y solicitar citas por WhatsApp. Es **solo la experiencia de clienta**; el panel administrativo se construirá después como un proyecto separado.

- Posicionamiento: app premium clínica, moderna y de lujo.
- Usuarias: clientas de estética y belleza.
- Valor: acceso rápido a promos, productos, tips y solicitud de citas desde el celular.

## 2. Page Structure
- `/` — Pantalla inicial (hero) + registro (nombre, WhatsApp, correo)
- `/inicio` — Inicio con saludo personalizado, banner, promo destacada, tip y accesos rápidos
- `/promos` — Tarjetas de promociones + modal de detalle
- `/agendar` — Flujo de solicitud de cita (servicio → día → horario → confirmar)
- `/productos` — Productos ALÉA Skin + modal
- `/perfil` — Datos de la clienta, solicitudes simuladas y edición

Navegación inferior fija: Inicio · Promos · Agendar · Productos · Perfil.

## 3. Core Features
- [x] Registro rápido (nombre completo, teléfono WhatsApp, correo) sin contraseña
- [x] Sesión simulada en localStorage
- [x] Saludo personalizado "Hola, [nombre]"
- [x] Promociones con modal (imagen, nombre, precio, vigencia, incluye, condiciones, solicitar)
- [x] Flujo de agendar cita con horarios mock
- [x] Botón de WhatsApp con mensaje prellenado
- [x] Catálogo de productos ALÉA Skin con "Comprar por WhatsApp"
- [x] Tips cortos de cuidado
- [x] Perfil con datos editables y solicitudes simuladas
- [x] Preparación PWA (manifest + meta de instalación)

## 4. Data Model Design
Sin base de datos en esta fase. Los datos se simulan con `localStorage`.

### Objeto: client (localStorage)
| Campo | Tipo | Descripción |
|-------|------|-------------|
| nombre | string | Nombre completo |
| telefono | string | Teléfono WhatsApp |
| correo | string | Correo electrónico |
| createdAt | string | Fecha de registro |
| citas | array | Solicitudes de cita simuladas |
| promos | array | Promociones solicitadas simuladas |

## 5. Backend / Third-party Integration Plan
- Database: **no ahora** — datos simulados en localStorage.
- Shopify: no.
- Stripe / pagos online: no (compras y citas se cierran por WhatsApp).
- Otros: enlaces de WhatsApp (`wa.me`) con mensaje prellenado.

## 6. Development Phase Plan

### Phase 1: Base visual + registro + Inicio
- Goal: sistema de diseño ALÉA, pantalla inicial, registro y pantalla Inicio.
- Deliverable: flujo entrar → registrarse → ver "Hola, [nombre]" con accesos rápidos.

### Phase 2: Promociones
- Goal: tarjetas de promos y modal de detalle con solicitud.
- Deliverable: `/promos` con 6 promociones y botón dentro del modal.

### Phase 3: Agendar
- Goal: flujo de solicitud de cita con horarios mock y WhatsApp.
- Deliverable: `/agendar` con pasos y confirmación.

### Phase 4: Productos + Perfil + Tips
- Goal: catálogo ALÉA Skin, tips y perfil editable.
- Deliverable: `/productos`, `/perfil` y tips en Inicio.

### Phase 5: PWA
- Goal: preparación instalable (manifest, iconos, meta).
- Deliverable: experiencia instalable en móvil.