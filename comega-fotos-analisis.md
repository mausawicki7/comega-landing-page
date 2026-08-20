# Análisis de fotos — carpeta "comega fotos"

81 imágenes + 1 video revisados. Se generaron miniaturas para el análisis (no se tocaron
los archivos originales). Antes de usar cualquiera en la web, **optimizar** (ver sección
final) — hoy hay archivos de hasta 34MB que no se pueden subir directo.

## ✅ Ya integradas en la web (2026-08-20)

Se optimizaron con `sharp` (resize + WebP, 34-228KB cada una) y se integraron en los
placeholders de imagen que ya existían en el código:

| Sección | Slot | Archivo original | Archivo final |
|---|---|---|---|
| Historia | Foto de época | office_one_edificio_comega_patrimonio_buenosaires_02.jpeg | `public/images/historia/epoca-construccion.webp` |
| Historia | Foto actual (bloque grande) | edificio_comega_patrimonio_buenosaires.jpg | `public/images/historia/fachada-actual.webp` |
| Historia | Detalle (bloque chico) | Comega-9824.jpg | `public/images/historia/escalera-caracol.webp` |
| Antes y Después | Circa 1934 | edificio_comega_patrimonio_buenos_aires_04.jpeg | `public/images/antes-despues/circa-1934.webp` |
| Antes y Después | Hoy | office_one_edificio_comega_patrimonio_buenosaires_04(1).jpeg | `public/images/antes-despues/hoy.webp` |
| Vistas Icónicas | Puerto Madero | edificio_comega_trade_sky_bar_11.jpg | `public/images/vistas/puerto-madero.webp` |
| Vistas Icónicas | Reserva Ecológica | edificio_comega_vueltaabajo_cigar_bar_07.jpg | `public/images/vistas/reserva-ecologica.webp` |
| Vistas Icónicas | Río de la Plata | WhatsApp Image 2022-08-26 at 10.36.27.jpeg | `public/images/vistas/rio-de-la-plata.webp` |
| Vistas Icónicas | Skyline porteño | edificio_comega_trade_sky_bar01.jpg | `public/images/vistas/skyline-porteno.webp` |
| Vistas Icónicas | Colonia, Uruguay | edificio_comega_trade_sky_bar_09.jpg | `public/images/vistas/colonia-uruguay.webp` |

Build (`npm run build`) verificado sin errores tras la integración.

**Pendiente / no integrado todavía:**
- **Aquí puedes encontrar COMEGA** (EncontraComega.tsx): las cards hoy solo tienen texto,
  no tienen slot de imagen — habría que rediseñar la card para sumar foto de fondo
  (tenemos material de sobra: gimnasio, cigar bar, Trade SkyBar, Office One).
- **Hero**: sigue con `hero.jpeg` original, no se tocó. Candidatas si se quiere cambiar:
  fachada nocturna (#75/hoy.webp ya usada en Antes y Después, o #76 la del atardecer
  dorado en el SkyBar) o el video de piso 19.
- **Personalidades / Reseñas / Instagram / Footer**: siguen con mocks/placeholders, no
  aplica material de esta carpeta.
- Fotos de personas reales entrenando (serie "Hongo Digital") **no se usaron** hasta
  confirmar derechos de imagen.

## Hallazgos destacados (las mejores piezas)

- **072, 073, 080** — Tres fotos históricas en blanco y negro distintas del edificio (una
  recién terminado con autos de los años 30, otra en construcción con andamios). Esto es
  oro para la sección **Antes y Después** e **Historia** — no lo teníamos.
- **077** — Foto sepia muy antigua de una esquina con galería de arcos (a confirmar si es
  el predio pre-COMEGA / Gran Hotel Nacional, o una imagen de archivo genérica de la
  cuadra). Vale la pena que la revises vos para confirmar qué es exactamente.
- **007 / Comega-9824.jpg** — toma cenital de la escalera caracol art déco, en espiral
  perfecta. Es la imagen más "icónica" de patrimonio que hay en toda la carpeta.
- **015/Comega-9871 y 014/Comega-9894** — puertas giratorias de bronce, una en blanco y
  negro y otra a color con mucha luz. Muy buen material para Hero o Vistas Icónicas.
- **063/064 (COMEGA...) — felpudo de entrada** con el texto "COMEGA — Patrimonio
  Arquitectónico" grabado. Detalle de marca que hoy no está aprovechado en el sitio.
- **076** — fachada completa de noche con estelas de luz de tránsito (larga exposición),
  muy cinematográfica — candidata fuerte a Hero alternativo o cierre de Historia.
- **070/tradesky.jpg** — barra del Trade SkyBar a la hora dorada, bartender trabajando,
  vitral art déco de fondo con skyline. La mejor foto individual del SkyBar.
- **078/079** — vistas nocturnas del skyline desde la terraza, muy fuertes para "Vistas
  Icónicas".
- **081** — foto artística de Av. Corrientes de noche, pero tiene marca de agua de un
  fotógrafo ("Javier Martinez") — **no usar sin permiso/licencia**.

## Tabla completa

| # | Archivo | Contenido | Sección sugerida |
|---|---|---|---|
| 1 | Comega 2.jpg | Fachada nocturna, esquina, cartel COMEGA, estelas de tránsito (larga exposición) | Hero (alternativa nocturna) |
| 2 | Comega 40.jpg | Pasillo hacia ascensores, piso de mármol con guardas | Interiores |
| 3 | Comega-9684.jpg | Escalera caracol art déco + glass block, vista lateral | Historia |
| 4 | Comega-9685.jpg | Escalera caracol, otro ángulo lateral | Historia |
| 5 | Comega-9782.jpg | Fachada exterior contrapicada, esquina | Hero / Historia |
| 6 | Comega-9784.jpg | Fachada exterior contrapicada, balcón semicircular | Hero / Historia |
| 7 | Comega-9824.jpg | Escalera caracol **vista cenital**, espiral completa — imagen ícono | Hero secundario / Historia |
| 8 | Comega-9871 2.jpg | Puerta giratoria bronce, hall de entrada, a color | Hero / Vistas Icónicas |
| 9 | Comega-9871.jpg | Misma puerta giratoria, en blanco y negro | Historia (efecto "época") |
| 10 | Comega-9876 2.jpg | Detalle: medallón/placa de bronce ornamentada | Historia (detalle patrimonial) |
| 11 | Comega-9883.jpg | Hall de ascensores en acero inoxidable | Interiores |
| 12 | Comega-9888.jpg | Lobby: cartelera de pisos, mostrador circular negro | Interiores / Contacto |
| 13 | Comega-9893.jpg | Escultura art déco tallada sobre pedestal negro, junto a escalera de acero | Historia / detalle arte |
| 14 | Comega-9894.jpg | Puerta giratoria dorada, hall de entrada, muy luminosa | Hero / Vistas Icónicas |
| 15 | edificio_comega_gimnasio_01.jpg | Gimnasio: cartel "RECEPCIÓN / FRONT DESK" con flechas doradas | Aquí puedes encontrar COMEGA (gimnasio) |
| 16 | edificio_comega_gimnasio_02.jpg | Gimnasio: sala de entrenamiento, neones geométricos, boxeo | Aquí puedes encontrar COMEGA (gimnasio) |
| 17 | edificio_comega_gimnasio_03.jpg | Gimnasio: sala de pesas/funcional, neón triangular | Aquí puedes encontrar COMEGA (gimnasio) |
| 18 | edificio_comega_gimnasio_04.jpg | Gimnasio: zona de mancuernas, fotos en B&N en pared, cintas | Aquí puedes encontrar COMEGA (gimnasio) |
| 19 | edificio_comega_patrimonio_buenosaires_10.jpg | Hall de ascensores en acero, tres puertas | Interiores |
| 20 | edificio_comega_patrimonio_buenosaires_3.jpg | Fachada completa desde la vereda de enfrente, con entorno urbano (Corrientes) | Hero / Historia |
| 21 | edificio_comega_patrimonio_buenosaires_5.jpg | Entrada principal, marco de piedra, rejas doradas, escalinata | Hero / Vistas Icónicas |
| 22 | edificio_comega_patrimonio_buenosaires_8.jpg | Lobby: mostrador negro, escalera de acero al fondo | Interiores / Contacto |
| 23 | edificio_comega_patrimonio_buenosaires_9.jpg | Cartelera de pisos con reloj, mostrador de recepción | Interiores / Contacto |
| 24 | edificio_comega_patrimonio_buenosaires.jpg | Fachada contrapicada, cartel COMEGA + cartel de calle "Av. L. N. Alem" legible | Hero / Historia |
| 25 | edificio_comega_sala_04.jpg | Sala de coworking/lounge chico: sillones, mesitas, tabique de madera | Office One / coworking |
| 26 | edificio_comega_sala_06.jpg | "Relax Room": sala de descanso con sillón reclinable, cartel en pared | Office One / coworking |
| 27 | edificio_comega_sala_09.jpg | Kitchenette/comedor de coworking: barra alta, sillas verdes, alacenas | Office One / coworking |
| 28 | edificio_comega_trade_sky_bar_02.jpg | Salón interior SkyBar, cielorraso de madera tallada geométrica, living | Trade SkyBar |
| 29 | edificio_comega_trade_sky_bar_03.jpg | Salón interior SkyBar, zona bar con cartel Chivas, mesas | Trade SkyBar |
| 30 | edificio_comega_trade_sky_bar_04.jpg | Salón SkyBar, barra dorada estilo art déco, sillones azules | Trade SkyBar |
| 31 | edificio_comega_trade_sky_bar_05.jpg | Comedor SkyBar, banquetas azules, vigas de madera talladas | Trade SkyBar |
| 32 | edificio_comega_trade_sky_bar_06.jpg | Comedor SkyBar oscuro, mesas puestas, luces cálidas | Trade SkyBar |
| 33 | edificio_comega_trade_sky_bar_08.jpg | Terraza SkyBar de día, mesas, skyline al fondo | Trade SkyBar / Vistas Icónicas |
| 34 | edificio_comega_trade_sky_bar_09.jpg | Terraza SkyBar de día, otro ángulo, skyline con Buenos Aires | Trade SkyBar / Vistas Icónicas |
| 35 | edificio_comega_trade_sky_bar_10.jpg | Terraza SkyBar de día, sector deck de madera, más edificios | Trade SkyBar / Vistas Icónicas |
| 36 | edificio_comega_trade_sky_bar_11.jpg | Interior en penumbra con ventanales, vista a torres de Puerto Madero | Vistas Icónicas |
| 37 | edificio_comega_trade_sky_bar01.jpg | Terraza SkyBar al atardecer, cielo con nubes doradas — muy potente | Hero / Vistas Icónicas |
| 38 | edificio_comega_vueltaabajo_cigar_bar_01.jpg | Entrada "Vuelta Abajo Social Club", cartel neón, fotos históricas de tabaco | Aquí puedes encontrar COMEGA (cigar bar) |
| 39 | edificio_comega_vueltaabajo_cigar_bar_02.jpg | Salón del cigar club, vitrinas de humidores, sillón de living | Cigar bar |
| 40 | edificio_comega_vueltaabajo_cigar_bar_03.jpg | Salón cigar club, estantería de bebidas, sillones de cuero negro | Cigar bar |
| 41 | edificio_comega_vueltaabajo_cigar_bar_04.jpg | Humidor: paredes enteras de estantes con cajas de puros | Cigar bar |
| 42 | edificio_comega_vueltaabajo_cigar_bar_05.jpg | Terraza SkyBar con toldo, mesas altas, skyline diurno | Trade SkyBar |
| 43 | edificio_comega_vueltaabajo_cigar_bar_06.jpg | Terraza SkyBar con toldo, otro ángulo con skyline | Trade SkyBar |
| 44 | edificio_comega_vueltaabajo_cigar_bar_07.jpg | Deck exterior, mesas de madera, plantas, skyline lejano | Trade SkyBar |
| 45 | edificio_comega_vueltaabajo_cigar_bar_08.jpg | Deck exterior, atardecer sobre el skyline | Trade SkyBar |
| 46 | Hongo Digital 309.jpg | Sala de reunión coworking, sillas turquesa, paredes tapizadas violeta | Office One |
| 47 | Hongo Digital 31.jpg | Gimnasio Animal Studio: zona de cardio, treadmill, cartel de marca | Gimnasio |
| 48 | Hongo Digital 310.jpg | Sala de reunión coworking (igual estilo que #46) | Office One |
| 49 | Hongo Digital 32.jpg | Gimnasio Animal Studio: zona de cardio (mismo ángulo que #47) | Gimnasio |
| 50 | Hongo Digital 320.jpg | Oficina individual con ventana y vista a la ciudad/río | Office One |
| 51-60, 63 | Hongo Digital 33/34/35/36/37/38/39/40/41/45.jpg | Clase grupal de entrenamiento funcional en Animal Studio, **con personas reales entrenando** | Gimnasio (⚠️ ver nota de derechos de imagen) |
| 61 | Hongo Digital 45.jpg | Clase grupal Animal Studio (ver nota arriba) | Gimnasio |
| 62 | Hongo Digital 51.jpg | Entrada principal, puerta giratoria dorada + felpudo **"COMEGA — Patrimonio Arquitectónico"** | Hero / Historia (pieza de marca) |
| 63 | Hongo Digital 52.jpg | Misma puerta/felpudo, otro ángulo | Hero / Historia |
| 64 | Hongo Digital 53.jpg | Lobby con cartel "Edificio COMEGA — por favor anúnciese en recepción" | Interiores / Contacto |
| 65 | oficinas_officeone_07.jpg | Pasillo de ascensores Office One, recepción con sillón de barbería visible al fondo | Office One |
| 66 | oficinas_officeone_buenosaires_08.jpg | Oficina abierta Office One, escritorios con Mac, iluminación colgante | Office One |
| 67 | oficinas_officeone_buenosaires_10.jpg | Pasillo hacia sala de reunión, cuadro de arte | Office One |
| 68 | sala_de_reunion_officeone_buenosaires_01.jpg | Sala de reunión Office One, mesa larga, pantalla proyector | Office One |
| 69 | sala_de_reunion_officeone_buenosaires_03.jpg | Sala de reunión Office One, otro ángulo, cuadro de arte abstracto | Office One |
| 70 | tradesky.jpg | Barra del SkyBar a la hora dorada, bartender, vitral art déco con skyline detrás — muy buena | Trade SkyBar / Hero |
| 71 | Comega 32.JPG | Hall de ascensores en acero, escultura al fondo junto a escalera | Interiores |
| 72 | edificio_comega_patrimonio_buenos_aires_04.jpeg | **Foto histórica B&N**: edificio recién terminado, autos años 30, calle empedrada | Antes y Después / Historia |
| 73 | office_one_edificio_comega_patrimonio_buenosaires_02.jpeg | **Foto histórica B&N**: edificio en construcción con andamios | Antes y Después / Historia |
| 74 | office_one_edificio_comega_patrimonio_buenosaires_04.jpeg | Entrada dorada, puerta giratoria, calle visible del otro lado | Hero / Vistas Icónicas |
| 75 | office_one_edificio_comega_patrimonio_buenosaires_04(1).jpeg | Fachada completa de noche, estelas de tránsito, muy cinematográfica | Hero (fuerte candidata) |
| 76 | office_one_edificio_comega_patrimonio_buenosaires_05.jpeg | Foto sepia muy antigua: esquina con galería de arcos — **confirmar con Mau qué es** | Historia (a confirmar) |
| 77 | WhatsApp Image 2022-08-26 at 10.36.27.jpeg | Vista nocturna del skyline desde la terraza (Puerto Madero) | Vistas Icónicas |
| 78 | WhatsApp Image 2022-08-26 at 10.37.27.jpeg | Vista nocturna del skyline, otro sector | Vistas Icónicas |
| 79 | WhatsApp Image 2022-08-26 at 10.37.28 (1).jpeg | **Foto de archivo B&N** (sello "Archivo General de la Nación"): edificio recién construido | Historia (con crédito de fuente) |
| 80 | WhatsApp Image 2022-08-26 at 10.39.19 (4).jpeg | Vista artística B&N de Av. Corrientes de noche, **marca de agua "Javier Martinez"** | ⚠️ No usar sin permiso del autor |

## Video
- `Av Corrientes 222, piso 19 Lunes a domingo, desde las 18hs#Touchthesky.mp4` — video
  promocional del Trade SkyBar (piso 19). Candidato para el Hero (reemplazando el
  placeholder de video) o como pieza central de la sección Trade SkyBar.

## Notas importantes antes de usar el material

1. **Derechos de imagen de personas**: las fotos de la serie "Hongo Digital" (#51-61)
   muestran gente real entrenando en Animal Studio. Antes de publicarlas hay que
   confirmar que existe autorización de esas personas (mismo tema que "Personalidades
   que nos visitaron" en el plan original).
2. **Foto #80 tiene marca de agua** de un fotógrafo — no usar sin licencia.
3. **Foto #79 tiene sello de Archivo General de la Nación** — usar con crédito de fuente.
4. **Foto #76 (sepia, galería de arcos)** — confirmar con vos qué edificio/lugar es
   antes de etiquetarla como "antes de COMEGA".
5. Varias fotos están duplicadas o son tomas casi idénticas desde el mismo ángulo
   (ej. #46/#48, #47/#49, la serie de clase grupal #51-61, las puertas giratorias
   doradas). Conviene elegir 1-2 por escena en vez de usarlas todas.

## Optimización pendiente antes de subir a la web

El repo hace **export estático** con `images: { unoptimized: true }` (ver CLAUDE.md,
sección 9.2) — Next no comprime nada en build. Los archivos hoy pesan hasta 34MB
("Hongo Digital"), inaceptable para web. Antes de integrarlas hay que:

1. Seleccionar las fotos finales de esta tabla (evitar duplicados).
2. Redimensionar a los anchos reales de uso (hero ~1920px, cards ~800px, thumbs ~400px).
3. Convertir a WebP/AVIF con compresión razonable (calidad ~75-80).
4. Recién ahí importarlas con `import` estático en los componentes (por el gotcha de
   `basePath` + `next/image` documentado en CLAUDE.md 9.2.1).

Puedo armar el script de optimización (`sips`/`squoosh`/`sharp`) y dejar las imágenes
listas en `public/images/...` en cuanto confirmes qué fotos de esta lista querés usar
en cada sección.
