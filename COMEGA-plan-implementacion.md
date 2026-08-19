# COMEGA — Landing Page — Plan de Implementación (contexto para Claude Code)

## 1. Resumen del proyecto

Landing page premium para el **Edificio COMEGA**, ícono racionalista/art déco de Buenos Aires (Corrientes y Alem, 1934). Hoy funciona como edificio de oficinas/coworking con marcas propias adentro (Trade SkyBar, Animal Studio, Proteína, Office One). El sitio debe transmitir la misma majestuosidad que un ícono como el Empire State Building: elegancia, historia, prestigio — no una landing genérica de real estate.

**Referencia visual:** estilo Empire State Building oficial — art déco premium, oscuro y elegante, con acentos dorados, tipografía serif de autor en titulares, fotografía cinematográfica a pantalla completa, mucho aire, geometría art déco sutil (chevrones, sunbursts, líneas rectas) en separadores/iconografía, sin saturar de color.

**Referencia de estructura/funcionalidad:** tema Spaciaz (ThemeForest, real estate/construction) — pero el resultado final debe verse mucho más premium/editorial que un theme genérico, priorizando fotografía y storytelling sobre bloques de "features" tipo corporativo.

---

## 2. Stack técnico

- **Framework:** Next.js (App Router) + TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion (fade-ins, reveals on scroll, parallax sutil en hero, transiciones prolijas — sin abusar, deben sentirse "caras" no "juguetonas")
- **Deploy:** GitHub Pages → requiere **static export**
  - `next.config.js` con `output: 'export'`
  - `images: { unoptimized: true }` (GitHub Pages no soporta el image optimizer de Next)
  - `basePath` / `assetPrefix` configurados según el nombre del repo (a definir: ¿repo de usuario `usuario.github.io` o repo de proyecto con subpath?)
  - Sin API routes, sin server actions, sin ISR/SSR — todo debe resolverse client-side o en build time
  - Slider antes/después: librería liviana tipo `react-compare-slider` (compatible con export estático)
  - Google Maps: iframe embed simple (no requiere API key para embed básico) o Maps Embed API si se quiere estilizado
  - Reseñas de Google: **mock estático**, no widget ni API (decisión tomada)
  - Instagram: **mock estático con imágenes**, no API real (decisión tomada)

## 3. Dirección visual

**Referencia de layout/estructura:** tema Spaciaz (screenshot de referencia) — se reutilizan varios de sus patrones de sección, pero reinterpretados en clave oscura + art déco (ver mapeo en punto 3.3).

### 3.1 Paleta
- Base oscura: negro/carbón profundo (`#0B0B0B` – `#141414`)
- Base clara (para secciones que lo requieran, tipo hero/historia): blanco hueso tono travertino (`#F5F1E8` aprox)
- Acento: dorado/bronce apagado (`#C9A15A` / `#B08D45` — metálico tipo champagne, nunca dorado "casino")
- **Glassmorphism:** cards de vidrio esmerilado — fondo semi-transparente (`rgba(255,255,255,0.06–0.1)` sobre oscuro), `backdrop-blur`, borde de 1px sutil (`rgba(255,255,255,0.12)` o dorado al 20% opacidad), esquinas suaves. Usar en: stat blocks, cards de "Aquí puedes encontrar COMEGA", overlays sobre imágenes (hero, vistas icónicas), cards de reseñas.
- Uso de color mínimo en general, casi monocromo + dorado como firma + vidrio como textura

### 3.2 Tipografía
- Titulares: **Fredoka** (Google Font, peso Bold/SemiBold) — sans-serif geométrica redondeada, fiel a la tipografía identificada en la captura de referencia de Spaciaz (terminales curvas, "g" de trazo simple, muy circular). Si en la implementación Fredoka no da el resultado esperado, usar **Baloo 2** como alternativa directa (mismo estilo).
- Aplicar Fredoka Bold/SemiBold en TODOS los titulares (H1, H2, H3), igual que en la referencia — no solo en detalles puntuales
- Cuerpo: sans neutra complementaria para texto largo/legibilidad (ej. Inter o Plus Jakarta Sans) — Fredoka solo para titulares y elementos de énfasis (botones, eyebrows, stats), no para párrafos largos
- Eyebrows/labels: Fredoka en caps pequeñas con tracking, + numeración editorial (ej. "01 — HISTORIA", "02 — VISTAS ICÓNICAS")

### 3.3 Mapeo de patrones de la referencia → secciones de COMEGA
| Patrón en la captura (Spaciaz) | Se reutiliza para |
|---|---|
| Hero con headline bold + imagen full-width | Hero de COMEGA (con video en vez de imagen estática) |
| Bloque de stats (3 números grandes con ícono) | Datos del edificio: 88m de altura, 21 pisos, año 1934, 5 ascensores — dentro o cerca de "Historia" |
| Grid de "services" (cards con foto + título) | Sección "Aquí puedes encontrar COMEGA" (Trade SkyBar, Animal Studio, Proteína, Office One, Alquiler) — en formato glass card |
| **Fondo negro, lista sticky a la izquierda + scroll de fotos a la derecha** ("Innovative designs, lasting impressions") | **Vistas Icónicas** — lista sticky con nombres (Puerto Madero / Reserva Ecológica / Río de la Plata / Skyline) a la izquierda, fotos grandes scrolleando a la derecha |
| Quote/testimonio centrado | Puede usarse para destacar una reseña de Google especialmente buena, o una frase histórica sobre el edificio |
| Fila de logos de clientes | Fila de logos de las marcas del edificio (trust bar), complementaria al grid de "Aquí puedes encontrar COMEGA" |
| **Cards de "Global executive leadership" (foto + nombre + rol)** | **Personalidades que nos visitaron** — mismo formato de card, en slider horizontal |
| Card oscura con formulario centrado | Posible bloque de contacto/CTA antes del footer (opcional, a definir) |
| Footer teaser con imagen full-bleed oscura | Footer de COMEGA con ilustración/foto del edificio de fondo |

### 3.4 Detalles art déco (toques sutiles, no protagonismo)
- Líneas finas doradas como separadores de sección
- Motivo geométrico sutil (chevron o sunburst) de baja opacidad en fondos oscuros o como detalle en íconos
- Numeración editorial de secciones (01 / 02 / 03...) en estilo eyebrow, como en la captura

**Sensación general:** el layout y la limpieza de un sitio corporativo premium 2026 (como la captura), pero con paleta oscura, dorado como firma, y glassmorphism — logrando un resultado que se siente tan "landmark" como el Empire State sin caer en el art déco literal de museo.

---

## 4. Copy e información real (de Wikipedia — usar como base para historia)

- Edificio racionalista, esquina Av. Corrientes y Av. Leandro N. Alem, Buenos Aires
- Segunda torre del país construida en hormigón armado; primera de la ciudad totalmente revestida en travertino
- Construido 1931–1934. Ingeniero Alberto Stein, arquitectos Enrique Douillet y Alfredo Joselevich
- Encargado por la Compañía Mercantil y Ganadera S.A. (de ahí el nombre COMEGA), en el terreno que antes ocupó la residencia de Francisco Madero, luego Gran Hotel Nacional
- Rivalizó con el Edificio SAFICO (200m al oeste); en 1936 el Kavanagh los superó en altura a ambos
- Piso 19 albergó la confitería-restaurante "Comega Club" (hasta 1969), escenario de eventos históricos: llegada del dirigible Graf Zeppelin (1934), sepelio de Carlos Gardel (1936), ensanche de Av. Corrientes (1937)
- 5 ascensores, los más rápidos de Buenos Aires en su época (180 m/min)
- Tenía peluquería propia para las oficinas
- Declarado patrimonio arquitectónico de la Ciudad de Buenos Aires; reciclado recientemente con servicios de última generación
- Torre central de 21 pisos y 88 metros, dos volúmenes laterales, patio central sobre Av. Alem, dos subsuelos de cochera
- Interiores en granito y mostradores de acero inoxidable (muy novedoso/costoso para la época)
- Vistas desde el edificio: Puerto Madero, Reserva Ecológica, Río de la Plata, y en días claros, silueta de Colonia (Uruguay) y Quilmes

*(Nota: falta contenido de "antes y después" reciente — Mau debe aportar fotos y, si tiene, texto sobre la puesta en valor/reciclaje reciente del edificio)*

---

## 5. Estructura de secciones (orden final)

### 1. Hero
- Video full-bleed de presentación del edificio (placeholder de video por ahora)
- Overlay oscuro sutil para legibilidad
- Logo/nombre COMEGA + tagline corto
- Scroll indicator sutil (línea o flecha animada)

### 2. Historia
- Layout editorial: texto a un lado, imagen de época al otro (o imagen full con texto superpuesto en panel semi-transparente)
- Timeline opcional con hitos (1931 inicio construcción → 1934 inauguración → Zeppelin → Gardel → patrimonio → reciclaje reciente)
- Usar contenido de Wikipedia arriba como base de copy

### 3. Reseñas de Google Maps
- Mock estático: 5-6 reseñas con nombre, estrellas, texto breve, fecha
- Carrusel o grid de cards, con logo de Google discreto y rating promedio destacado (ej. "4.8 ★ — 120 reseñas")
- *(Mau: pasame las reseñas reales o texto de referencia para tipearlas, o dejo copys de placeholder realistas)*

### 4. Vistas Icónicas
- **Patrón "sticky list + scroll gallery"** (tomado de la referencia Spaciaz, sección "Innovative designs, lasting impressions"): fondo negro, a la izquierda una lista sticky de nombres de vistas (Puerto Madero / Reserva Ecológica / Río de la Plata / Skyline porteño / Colonia, Uruguay en días claros), a la derecha las fotos correspondientes van scrolleando en columna, sincronizadas con el ítem activo de la lista (highlight dorado en el ítem activo)
- Fotos grandes, full-bleed dentro de su columna, sin recargar de texto

### 5. Antes y Después
- Slider interactivo con cursor (`react-compare-slider` o similar)
- Imagen histórica (fachada antigua / Gran Hotel Nacional / Comega años 30) vs. estado actual reciclado
- Placeholder por ahora, foto histórica se puede sacar de Wikimedia Commons (categoría "Comega building") citando fuente

### 6. "Aquí puedes encontrar COMEGA"
- Listado de marcas/usos dentro del edificio, en formato grid de cards premium (no lista simple):
  - Trade SkyBar
  - Animal Studio
  - Proteína
  - Office One
  - Alquiler de oficina/piso
- Cada card con ícono o foto placeholder + nombre + descripción corta (1 línea) + posible link

### 7. Posteos de Instagram
- Mock estático tipo grid (3-6 posteos), imagen + ícono de like/comentario decorativo
- CTA "Seguinos @comega..." (confirmar handle real)

### 8. Personalidades que nos visitaron
- **Patrón de card** tomado de la referencia Spaciaz ("Global executive leadership"): foto vertical + nombre + rol/mención breve debajo, en card de vidrio esmerilado sutil
- Se muestra como **slider horizontal** (no grid fijo), con controles de navegación discretos
- Placeholder por ahora — atención: verificar derechos de imagen antes de publicar fotos reales de figuras públicas

### 9. Google Map
- Embed de ubicación (Av. Corrientes y Av. Leandro N. Alem, CABA)
- Estilizado en dark mode si es posible, para mantener coherencia visual

### 10. Footer
- Datos de contacto (dirección, teléfono, email — placeholder)
- Ubicación
- Links útiles (secciones internas, redes sociales)
- Ilustración del edificio (line art art déco del perfil de COMEGA — placeholder, se puede encargar o generar como SVG simple más adelante)

---

## 6. Pendientes / definiciones para Mau antes de que Claude Code empiece a codear

1. **Nombre del repo de GitHub** → define si `basePath` es necesario y cómo queda la URL final
2. **Handle de Instagram real** de COMEGA (para el CTA de la sección de posteos)
3. **Texto real o de referencia** para las reseñas de Google (o confirmar que uso placeholders realistas)
4. **Confirmar** si "Personalidades que nos visitaron" va con fotos reales con derechos gestionados, o si por ahora son placeholders genéricos hasta tener el material definitivo
5. **Datos de contacto reales** para el footer (teléfono, email, horarios si aplica)
6. **Info adicional del "antes y después"** — si Mau tiene fotos/testimonio del proceso de reciclaje reciente del edificio

## 7. Estructura de carpetas sugerida (Next.js App Router)

```
comega-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Historia.tsx
│   │   ├── Resenas.tsx
│   │   ├── VistasIconicas.tsx
│   │   ├── AntesDespues.tsx
│   │   ├── EncontraComega.tsx
│   │   ├── InstagramFeed.tsx
│   │   ├── Personalidades.tsx
│   │   ├── MapaUbicacion.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── SectionHeading.tsx
│       ├── GoldDivider.tsx
│       └── AnimatedReveal.tsx
├── public/
│   ├── video/ (placeholder hero video)
│   ├── images/
│   │   ├── historia/
│   │   ├── vistas/
│   │   ├── antes-despues/
│   │   ├── marcas/
│   │   ├── instagram/
│   │   └── personalidades/
│   └── icons/
├── next.config.js
├── tailwind.config.ts
└── CLAUDE.md  (pegar este documento completo acá como contexto persistente)
```

---

## 8. Notas para Claude Code al ejecutar

- Priorizar performance: video del hero comprimido/lazy, imágenes en formato moderno (webp/avif), lazy loading en todas las secciones fuera del viewport inicial
- Mobile-first: el slider antes/después y el carrusel de personalidades deben funcionar bien táctil en mobile
- Accesibilidad: contraste AA mínimo entre dorado y negro (revisar, el dorado claro sobre negro suele fallar contraste en texto pequeño — usarlo en headlines grandes, no en body text)
- SEO: metadata completa (title, description, OG image) apuntando a "Edificio COMEGA, Buenos Aires"
- **Tipografía:** cargar Fredoka (y Baloo 2 como fallback) vía `next/font/google` — ambas son gratuitas y no requieren licencia adicional, a diferencia de Adobe Fonts que usa el theme original
- Todas las imágenes/video van con placeholders claramente marcados (ej. comentario `{/* PLACEHOLDER: reemplazar por video hero real */}`) para que Mau sepa exactamente qué reemplazar después
