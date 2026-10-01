# ALÉA Club — App de clientas

## 1. Project Description
Aplicación móvil (mobile-first) de ALÉA Aesthetic House enfocada en conversión: vender productos de skincare, ofrecer promociones y permitir que las clientas agenden citas desde el celular.
- **Público objetivo:** clientas actuales y nuevas de ALÉA.
- **Propuesta de valor:** agendar en segundos, acceder a promociones exclusivas de club y comprar la línea ALÉA Skin sin fricción.
- **Fase actual:** experiencia completa con datos simulados locales (sin backend real, sin contraseñas, sin panel admin).

## 2. Page Structure
- `/register` — Registro inicial (nombre, teléfono, correo)
- `/` — Inicio (comercial, enfocado a conversión)
- `/promociones` — Promociones del club
- `/agenda` — Agendar cita (selector de fecha y horario)
- `/productos` — Catálogo ALÉA Skin
- `/productos/:id` — Detalle de producto
- `/servicios/:id` — Detalle de servicio
- `/perfil` — Perfil de la clienta
- `/beneficios` — Mis beneficios (wallet de cupones, recompensas y dinámicas ALÉA Club)

## 3. Core Features
- [x] Registro inicial simple (nombre, teléfono, correo) con persistencia local
- [x] Saludo personalizado "Hola, [nombre]"
- [x] Navegación inferior de 5 secciones con botón "Agenda" destacado
- [x] Inicio comercial: hero promocional, CTAs, acceso rápido a beneficios, destacados y tips
- [x] Pantalla "Mis beneficios" tipo wallet (cupón de bienvenida, segunda visita, dinámica activa, cashback) con acceso desde Inicio y Perfil
- [x] Promociones con tarjetas, detalle en modal y solicitud por WhatsApp
- [x] Servicios con tarjetas, detalle y botón "Solicitar cita"
- [x] Flujo de agendado: fecha + horarios (10:00–19:00, citas de 1h), resumen y confirmación
- [x] Horarios ocupados bloqueados y mensaje de día lleno
- [x] Catálogo de productos con categorías, detalle y compra por WhatsApp
- [x] Perfil con datos, citas solicitadas, promociones solicitadas y edición de datos
- [ ] Conexión a backend real (Readdy Backend / SaaS Supabase) para citas, promociones y clientas
- [ ] Pago en línea de productos (Stripe / Toss / PayPal / Square)

## 4. Data Model Design
Actualmente los datos son simulados (`src/mocks`). Cuando se conecte backend, las tablas previstas son:

### Table: clients
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| name | text | Nombre de la clienta |
| phone | text | Teléfono |
| email | text | Correo |
| created_at | timestamptz | Fecha de registro |

### Table: appointments
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| client_id | uuid | FK a clients |
| service_id | text | Servicio solicitado |
| date | date | Día de la cita |
| slot | text | Horario solicitado |
| status | text | solicitada / confirmada |
| created_at | timestamptz | Fecha de solicitud |

### Table: promo_requests
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| client_id | uuid | FK a clients |
| promo_id | text | Promoción solicitada |
| created_at | timestamptz | Fecha de solicitud |

### Table: client_benefits (prevista)
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| client_id | uuid | FK a clients |
| benefit_key | text | Identificador del beneficio (cupón, segunda visita, dinámica, cashback) |
| status | text | available / next / active / soon |
| activated_at | timestamptz | Fecha de activación |

## 5. Backend / Third-party Integration Plan
- Database: **no conectada** — datos de demostración (localStorage + mocks). Se puede conectar Readdy Backend o SaaS Supabase cuando la clienta quiera guardar citas de forma permanente.
- Payments: no conectado. Los productos se compran vía WhatsApp.
- Shopify: no necesario por ahora.
- Otros: enlaces directos a WhatsApp para confirmación de citas y compra de productos.

## 6. Development Phase Plan

### Phase 1: Base + pantallas principales navegables
- Goal: sistema de diseño, marco de app, navegación inferior, registro y guard, Inicio, Promociones, Agenda, Productos, Perfil con datos locales.
- Deliverable: app completa y navegable con todas las secciones.

### Phase 2: Detalles + flujo de agendado completo
- Goal: detalle de producto, detalle de servicio, modal de promoción, selector de fecha/horario con resumen y confirmación.
- Deliverable: flujo de conversión end-to-end (ver → solicitar → confirmar).

### Phase 3 (futura): Backend y pagos
- Goal: guardar clientas, citas y solicitudes de forma permanente; pago en línea.
- Deliverable: integración con Readdy Backend / SaaS Supabase y pasarela de pago.