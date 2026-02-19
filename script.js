// ════════════════════════════════════════
// PRODUCT SVG ILLUSTRATIONS — Premium style
// ════════════════════════════════════════
const SVG = {
  // 1 — Sunset Vibes Tee (coral/red tee, clean shape, front print)
  tee_sunset: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#fff5f5"/>
    <defs><linearGradient id="g1a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff7675"/><stop offset="100%" stop-color="#e84040"/></linearGradient>
    <filter id="f1"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#c0392b" flood-opacity="0.25"/></filter></defs>
    <g filter="url(#f1)">
      <path d="M138,95 L90,148 L126,162 L118,305 L282,305 L274,162 L310,148 L262,95 Q230,115 200,115 Q170,115 138,95Z" fill="url(#g1a)" rx="8"/>
      <path d="M170,115 Q200,135 230,115 L234,162 L166,162Z" fill="#c0392b" opacity="0.45"/>
    </g>
    <circle cx="200" cy="210" r="32" fill="rgba(255,255,255,0.18)"/>
    <ellipse cx="200" cy="210" rx="18" ry="9" fill="rgba(255,255,255,0.28)"/>
    <text x="200" y="262" font-family="sans-serif" font-size="11" font-weight="700" fill="rgba(255,255,255,0.65)" text-anchor="middle" letter-spacing="3">SUNSET VIBES</text>
  </svg>`,

  // 2 — Urban Chill Hoodie (navy, boxy silhouette, kangaroo pocket visible)
  hoodie_urban: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f0f4ff"/>
    <defs><linearGradient id="g2a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4a5fc0"/><stop offset="100%" stop-color="#3040a0"/></linearGradient>
    <linearGradient id="g2b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3a4fa0"/><stop offset="100%" stop-color="#1a2560"/></linearGradient>
    <filter id="f2"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#1a2560" flood-opacity="0.28"/></filter></defs>
    <g filter="url(#f2)">
      <path d="M128,80 C104,80 74,112 70,150 L106,164 L100,310 L300,310 L294,164 L330,150 C326,112 296,80 272,80 L238,100 Q200,122 162,100Z" fill="url(#g2a)"/>
      <path d="M162,100 Q200,128 238,100 L242,165 L158,165Z" fill="url(#g2b)"/>
      <rect x="178" y="168" width="44" height="5" rx="2.5" fill="rgba(255,255,255,0.25)"/>
      <rect x="150" y="240" width="100" height="52" rx="8" fill="rgba(0,0,0,0.2)"/>
    </g>
    <text x="200" y="250" font-family="sans-serif" font-weight="700" font-size="17" fill="rgba(255,255,255,0.85)" text-anchor="middle">URBAN</text>
    <text x="200" y="268" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.45)" text-anchor="middle" letter-spacing="2">CHILL COLLECTION</text>
  </svg>`,

  // 3 — Classic Snapback (black cap, clean 3/4 view with red panel)
  cap_snap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#fffaf0"/>
    <defs><linearGradient id="g3a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2c2c2c"/><stop offset="100%" stop-color="#111"/></linearGradient>
    <linearGradient id="g3b" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e84040"/><stop offset="100%" stop-color="#c0392b"/></linearGradient>
    <filter id="f3"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#000" flood-opacity="0.3"/></filter></defs>
    <g filter="url(#f3)">
      <path d="M75,220 Q82,140 200,134 Q318,140 325,220Z" fill="url(#g3a)"/>
      <path d="M160,134 Q200,130 240,134 L240,220 Q200,224 160,220Z" fill="url(#g3b)"/>
      <path d="M75,220 Q130,240 200,244 Q270,240 325,220 L315,232 Q260,252 200,255 Q140,252 85,232Z" fill="#1a1a1a"/>
      <rect x="62" y="214" width="100" height="16" rx="8" fill="#333"/>
      <circle cx="200" cy="168" r="10" fill="white" opacity="0.15"/>
    </g>
  </svg>`,

  // 4 — Morning Brew Mug (white ceramic, proper mug shape, printed design)
  mug_morning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f0fff4"/>
    <defs><linearGradient id="g4a" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#e8e8e8"/><stop offset="30%" stop-color="#ffffff"/><stop offset="100%" stop-color="#f0f0f0"/></linearGradient>
    <filter id="f4"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-opacity="0.14"/></filter></defs>
    <g filter="url(#f4)">
      <path d="M122,155 Q118,308 126,314 L262,314 Q270,308 266,155Z" fill="url(#g4a)" stroke="#ddd" stroke-width="2"/>
      <path d="M266,195 Q302,195 302,228 Q302,261 266,261" fill="none" stroke="#ddd" stroke-width="16" stroke-linecap="round"/>
      <path d="M266,206 Q290,206 290,228 Q290,250 266,250" fill="none" stroke="#f5f5f5" stroke-width="7" stroke-linecap="round"/>
    </g>
    <circle cx="194" cy="230" r="46" fill="#22c55e" opacity="0.1"/>
    <circle cx="194" cy="230" r="36" fill="none" stroke="#22c55e" stroke-width="1.5" opacity="0.3"/>
    <text x="194" y="218" font-family="serif" font-style="italic" font-size="12" fill="#16a34a" text-anchor="middle">morning</text>
    <text x="194" y="238" font-family="serif" font-weight="800" font-size="24" fill="#15803d" text-anchor="middle">BREW</text>
    <path x="180" y="248" d="M176,250 Q194,244 212,250" stroke="#16a34a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M178,120 Q178,100 186,94 Q189,110 186,126" stroke="#ccc" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M194,116 Q194,96 202,90 Q205,106 202,122" stroke="#ccc" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M210,120 Q210,100 218,94 Q221,110 218,126" stroke="#ccc" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
  </svg>`,

  // 5 — Minimalist Wave Tee (white tee, clean outline, wave lines)
  tee_wave: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#fdf5ff"/>
    <defs><filter id="f5"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-opacity="0.1"/></filter></defs>
    <g filter="url(#f5)">
      <path d="M138,95 L90,148 L126,162 L118,305 L282,305 L274,162 L310,148 L262,95 Q230,115 200,115 Q170,115 138,95Z" fill="white" stroke="#e4d8f8" stroke-width="2.5"/>
      <path d="M170,115 Q200,135 230,115 L234,162 L166,162Z" fill="#f0e8ff" opacity="0.8"/>
    </g>
    <path d="M148,200 Q168,183 188,200 Q208,217 228,200 Q248,183 268,200" fill="none" stroke="#9b59b6" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M150,218 Q170,201 190,218 Q210,235 230,218 Q250,201 270,218" fill="none" stroke="#9b59b6" stroke-width="2.5" stroke-linecap="round" opacity="0.55"/>
    <path d="M152,236 Q172,219 192,236 Q212,253 232,236 Q252,219 272,236" fill="none" stroke="#9b59b6" stroke-width="1.8" stroke-linecap="round" opacity="0.3"/>
    <text x="200" y="275" font-family="sans-serif" font-size="10" fill="#9b59b6" text-anchor="middle" letter-spacing="4" font-weight="600">MINIMALIST</text>
  </svg>`,

  // 6 — Cozy Nights Hoodie (dark brown/charcoal, warm tones)
  hoodie_cozy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#fff8f0"/>
    <defs><linearGradient id="g6a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3d2b1f"/><stop offset="100%" stop-color="#2c1f14"/></linearGradient>
    <linearGradient id="g6b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#2a1e13"/><stop offset="100%" stop-color="#1a1208"/></linearGradient>
    <filter id="f6"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#1a0a00" flood-opacity="0.3"/></filter></defs>
    <g filter="url(#f6)">
      <path d="M128,80 C104,80 74,112 70,150 L106,164 L100,310 L300,310 L294,164 L330,150 C326,112 296,80 272,80 L238,100 Q200,122 162,100Z" fill="url(#g6a)"/>
      <path d="M162,100 Q200,128 238,100 L242,165 L158,165Z" fill="url(#g6b)"/>
      <rect x="180" y="168" width="40" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
    </g>
    <circle cx="200" cy="228" r="32" fill="none" stroke="#f5a623" stroke-width="2" opacity="0.75"/>
    <text x="200" y="224" font-family="sans-serif" font-weight="700" font-size="11" fill="#f5a623" text-anchor="middle">COZY</text>
    <text x="200" y="239" font-family="sans-serif" font-weight="700" font-size="11" fill="#f5a623" text-anchor="middle">NIGHTS</text>
  </svg>`,

  // 7 — Adventure Cap (olive/green unstructured dad cap)
  cap_adventure: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f5fff5"/>
    <defs><linearGradient id="g7a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6a8c50"/><stop offset="100%" stop-color="#4a6c30"/></linearGradient>
    <linearGradient id="g7b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3d5c25"/><stop offset="100%" stop-color="#2c4518"/></linearGradient>
    <filter id="f7"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#1a2a08" flood-opacity="0.28"/></filter></defs>
    <g filter="url(#f7)">
      <path d="M80,218 Q88,142 200,136 Q312,142 320,218Z" fill="url(#g7a)"/>
      <path d="M80,218 Q136,240 200,244 Q264,240 320,218 L310,230 Q256,252 200,256 Q144,252 90,230Z" fill="url(#g7b)"/>
      <rect x="65" y="212" width="96" height="14" rx="7" fill="#4a6a30"/>
      <rect x="68" y="215" width="90" height="8" rx="4" fill="#5a7a40" opacity="0.6"/>
    </g>
    <circle cx="200" cy="175" r="14" fill="rgba(255,255,255,0.18)"/>
    <path d="M194,175 L200,167 L206,175 L200,183Z" fill="white" opacity="0.55"/>
  </svg>`,

  // 8 — Retro Grid Mug (white mug, retro red grid pattern)
  mug_retro: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#fff0f0"/>
    <defs><linearGradient id="g8a" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#e8e8e8"/><stop offset="35%" stop-color="#fff"/><stop offset="100%" stop-color="#f2f2f2"/></linearGradient>
    <filter id="f8"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-opacity="0.13"/></filter></defs>
    <g filter="url(#f8)">
      <path d="M122,155 Q118,308 126,314 L274,314 Q282,308 278,155Z" fill="url(#g8a)" stroke="#eee" stroke-width="2"/>
      <path d="M278,195 Q314,195 314,228 Q314,261 278,261" fill="none" stroke="#eee" stroke-width="16" stroke-linecap="round"/>
      <path d="M278,206 Q302,206 302,228 Q302,250 278,250" fill="none" stroke="#f8f8f8" stroke-width="7" stroke-linecap="round"/>
    </g>
    <line x1="138" y1="178" x2="262" y2="178" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <line x1="138" y1="198" x2="262" y2="198" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <line x1="138" y1="218" x2="262" y2="218" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <line x1="138" y1="238" x2="262" y2="238" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <line x1="138" y1="258" x2="262" y2="258" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <line x1="138" y1="278" x2="262" y2="278" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <line x1="158" y1="165" x2="158" y2="312" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <line x1="178" y1="162" x2="178" y2="314" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <line x1="198" y1="161" x2="198" y2="315" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <line x1="218" y1="162" x2="218" y2="314" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <line x1="238" y1="162" x2="238" y2="314" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <line x1="258" y1="165" x2="258" y2="312" stroke="#e84040" stroke-width="1.5" opacity="0.5"/>
    <text x="200" y="302" font-family="monospace" font-weight="700" font-size="11" fill="#e84040" text-anchor="middle" opacity="0.8" letter-spacing="2">RETRO GRID</text>
  </svg>`,

  // 9 — Galaxy Print Tee (dark indigo, stars + nebula)
  tee_galaxy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f0f0ff"/>
    <defs>
      <linearGradient id="g9a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a1040"/><stop offset="100%" stop-color="#0d0820"/></linearGradient>
      <radialGradient id="g9b" cx="55%" cy="42%" r="45%"><stop offset="0%" stop-color="#7c3aed" stop-opacity="0.7"/><stop offset="100%" stop-color="transparent"/></radialGradient>
      <filter id="f9"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#0d0820" flood-opacity="0.38"/></filter>
    </defs>
    <g filter="url(#f9)">
      <path d="M138,95 L90,148 L126,162 L118,305 L282,305 L274,162 L310,148 L262,95 Q230,115 200,115 Q170,115 138,95Z" fill="url(#g9a)"/>
      <path d="M138,95 L90,148 L126,162 L118,305 L282,305 L274,162 L310,148 L262,95 Q230,115 200,115 Q170,115 138,95Z" fill="url(#g9b)"/>
      <path d="M170,115 Q200,135 230,115 L234,162 L166,162Z" fill="#0d0820" opacity="0.7"/>
    </g>
    <circle cx="152" cy="178" r="2" fill="white" opacity="0.9"/>
    <circle cx="172" cy="200" r="1.5" fill="white" opacity="0.75"/>
    <circle cx="225" cy="168" r="2.5" fill="white" opacity="0.95"/>
    <circle cx="248" cy="195" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="162" cy="235" r="1.5" fill="white" opacity="0.65"/>
    <circle cx="238" cy="248" r="2" fill="white" opacity="0.85"/>
    <circle cx="195" cy="215" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="260" cy="228" r="1" fill="white" opacity="0.6"/>
    <circle cx="178" cy="262" r="1" fill="white" opacity="0.5"/>
    <circle cx="200" cy="215" r="22" fill="rgba(124,58,237,0.35)"/>
    <text x="200" y="276" font-family="sans-serif" font-size="10" fill="rgba(196,181,253,0.7)" text-anchor="middle" letter-spacing="3" font-weight="600">GALAXY</text>
  </svg>`,

  // 10 — Eco Canvas Tote (natural canvas, clean bag shape)
  tote_eco: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#fef9ee"/>
    <defs><linearGradient id="g10a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#c8a06a"/><stop offset="100%" stop-color="#a07840"/></linearGradient>
    <linearGradient id="g10b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#b89058"/><stop offset="100%" stop-color="#987038"/></linearGradient>
    <filter id="f10"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#6a4820" flood-opacity="0.22"/></filter></defs>
    <g filter="url(#f10)">
      <path d="M125,148 L108,318 L292,318 L275,148Z" fill="url(#g10a)" rx="6"/>
      <path d="M152,148 Q152,102 200,102 Q248,102 248,148" fill="none" stroke="url(#g10b)" stroke-width="14" stroke-linecap="round"/>
      <path d="M152,150 Q152,108 200,108 Q248,108 248,150" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="5" stroke-linecap="round"/>
      <line x1="125" y1="152" x2="275" y2="152" stroke="#986830" stroke-width="2.5" opacity="0.5"/>
    </g>
    <circle cx="200" cy="226" r="46" fill="rgba(255,255,255,0.32)"/>
    <path d="M186,212 Q194,198 202,212 Q210,226 218,212" fill="none" stroke="#5a8a3a" stroke-width="3" stroke-linecap="round"/>
    <circle cx="202" cy="228" r="6" fill="#5a8a3a" opacity="0.75"/>
    <text x="200" y="278" font-family="sans-serif" font-size="10" font-weight="700" fill="rgba(100,70,30,0.6)" text-anchor="middle" letter-spacing="2">ECO CANVAS</text>
  </svg>`,

  // 11 — Neon Dreams Hoodie (deep purple, zip front, neon accents)
  hoodie_neon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#fff0ff"/>
    <defs><linearGradient id="g11a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2d0d5c"/><stop offset="100%" stop-color="#1a0838"/></linearGradient>
    <filter id="f11"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#1a0838" flood-opacity="0.35"/></filter></defs>
    <g filter="url(#f11)">
      <path d="M128,80 C104,80 74,112 70,150 L106,164 L100,310 L300,310 L294,164 L330,150 C326,112 296,80 272,80 L238,100 Q200,122 162,100Z" fill="url(#g11a)"/>
      <line x1="200" y1="110" x2="200" y2="310" stroke="#a855f7" stroke-width="3" opacity="0.85"/>
      <rect x="196" y="108" width="8" height="16" rx="3" fill="#7c3aed"/>
      <path d="M162,100 Q200,126 238,100 L236,115 Q200,140 164,115Z" fill="#120425"/>
    </g>
    <path d="M120,192 Q150,182 170,198" stroke="#d8b4fe" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M230,192 Q250,182 280,198" stroke="#d8b4fe" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <circle cx="200" cy="250" r="28" fill="none" stroke="#e879f9" stroke-width="1.5" opacity="0.6"/>
    <circle cx="200" cy="250" r="18" fill="none" stroke="#e879f9" stroke-width="1" opacity="0.35"/>
  </svg>`,

  // 12 — Vintage Trucker Cap (cream/beige with mesh panels)
  cap_trucker: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f0faff"/>
    <defs>
      <linearGradient id="g12a" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#eeddb0"/><stop offset="52%" stop-color="#e8d5a0"/><stop offset="53%" stop-color="#d8d8d8"/><stop offset="100%" stop-color="#c8c8c8"/></linearGradient>
      <linearGradient id="g12b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#c8a870"/><stop offset="100%" stop-color="#a88850"/></linearGradient>
      <filter id="f12"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#6a4820" flood-opacity="0.22"/></filter>
    </defs>
    <g filter="url(#f12)">
      <path d="M80,224 Q88,144 200,136 Q312,144 320,224Z" fill="url(#g12a)"/>
      <path d="M80,224 Q136,246 200,250 Q264,246 320,224 L310,236 Q256,258 200,262 Q144,258 90,236Z" fill="url(#g12b)"/>
      <rect x="64" y="218" width="102" height="15" rx="7.5" fill="#c8a870"/>
    </g>
    <line x1="262" y1="142" x2="262" y2="225" stroke="#bbb" stroke-width="1.5" opacity="0.6"/>
    <line x1="280" y1="146" x2="280" y2="224" stroke="#bbb" stroke-width="1.5" opacity="0.6"/>
    <line x1="298" y1="156" x2="298" y2="222" stroke="#bbb" stroke-width="1.5" opacity="0.6"/>
    <line x1="314" y1="172" x2="314" y2="222" stroke="#bbb" stroke-width="1.5" opacity="0.5"/>
    <text x="158" y="185" font-family="sans-serif" font-weight="700" font-size="14" fill="#8a6a30" text-anchor="middle">ADV</text>
  </svg>`,

  // 13 — Travel Tumbler (metallic silver cylinder, proper proportions)
  tumbler: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f0fff9"/>
    <defs>
      <linearGradient id="g13a" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#8a8a8a"/><stop offset="18%" stop-color="#d8d8d8"/><stop offset="50%" stop-color="#f4f4f4"/><stop offset="82%" stop-color="#c8c8c8"/><stop offset="100%" stop-color="#909090"/></linearGradient>
      <linearGradient id="g13b" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#606060"/><stop offset="50%" stop-color="#a8a8a8"/><stop offset="100%" stop-color="#606060"/></linearGradient>
      <filter id="f13"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-opacity="0.2"/></filter>
    </defs>
    <g filter="url(#f13)">
      <rect x="155" y="95" width="80" height="24" rx="8" fill="url(#g13b)"/>
      <rect x="148" y="116" width="94" height="196" rx="14" fill="url(#g13a)" stroke="#b0b0b0" stroke-width="1.5"/>
      <rect x="152" y="120" width="18" height="188" rx="7" fill="rgba(255,255,255,0.18)"/>
      <rect x="150" y="188" width="90" height="3" fill="rgba(0,0,0,0.08)"/>
      <rect x="150" y="228" width="90" height="3" fill="rgba(0,0,0,0.08)"/>
      <rect x="152" y="296" width="86" height="24" rx="12" fill="url(#g13b)"/>
    </g>
    <text x="220" y="175" font-family="sans-serif" font-size="8" fill="#555" text-anchor="middle" transform="rotate(90 220 175)" letter-spacing="1.5" font-weight="600">TRAVEL TUMBLER</text>
  </svg>`,

  // 14 — Art Deco Poster (framed, gold accent, decorative)
  poster: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#fff8f0"/>
    <defs><filter id="f14"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-opacity="0.2"/></filter></defs>
    <g filter="url(#f14)">
      <rect x="108" y="72" width="184" height="256" rx="5" fill="#1a1008" stroke="#9a7428" stroke-width="3.5"/>
      <rect x="116" y="80" width="168" height="240" fill="#f5e8c0"/>
      <rect x="124" y="88" width="152" height="224" fill="#faf4dc" stroke="#c8a840" stroke-width="2"/>
    </g>
    <polygon points="200,108 212,142 248,142 220,162 230,196 200,178 170,196 180,162 152,142 188,142" fill="#c8a840" opacity="0.95"/>
    <line x1="140" y1="208" x2="260" y2="208" stroke="#c8a840" stroke-width="1.5" opacity="0.6"/>
    <text x="200" y="228" font-family="serif" font-style="italic" font-size="15" fill="#5a3a10" text-anchor="middle">Art Deco</text>
    <line x1="140" y1="238" x2="260" y2="238" stroke="#c8a840" stroke-width="1.5" opacity="0.6"/>
    <text x="200" y="258" font-family="serif" font-size="9" fill="#8a6a30" text-anchor="middle" letter-spacing="4">COLLECTION</text>
    <rect x="108" y="322" width="184" height="16" rx="3" fill="#9a7428" opacity="0.25"/>
  </svg>`,

  // 15 — Sticker Pack (colourful stickers scattered on white card)
  stickers: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#fffbf0"/>
    <defs><filter id="f15"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-opacity="0.12"/></filter></defs>
    <g filter="url(#f15)">
      <rect x="88" y="105" width="224" height="196" rx="14" fill="white" stroke="#f0ece0" stroke-width="2"/>
    </g>
    <text x="200" y="136" font-family="sans-serif" font-weight="700" font-size="11" fill="#ccc" text-anchor="middle" letter-spacing="2">STICKER PACK · VOL.1</text>
    <circle cx="148" cy="194" r="34" fill="#fde68a" stroke="white" stroke-width="4"/>
    <text x="148" y="201" font-size="28" text-anchor="middle" font-family="sans-serif">⭐</text>
    <circle cx="220" cy="180" r="28" fill="#fca5a5" stroke="white" stroke-width="4"/>
    <text x="220" y="187" font-size="22" text-anchor="middle" font-family="sans-serif">💕</text>
    <circle cx="280" cy="198" r="30" fill="#a5f3fc" stroke="white" stroke-width="4"/>
    <text x="280" y="205" font-size="24" text-anchor="middle" font-family="sans-serif">🌊</text>
    <circle cx="162" cy="256" r="26" fill="#bbf7d0" stroke="white" stroke-width="4"/>
    <text x="162" y="263" font-size="20" text-anchor="middle" font-family="sans-serif">🌿</text>
    <circle cx="244" cy="260" r="30" fill="#e9d5ff" stroke="white" stroke-width="4"/>
    <text x="244" y="267" font-size="24" text-anchor="middle" font-family="sans-serif">🦋</text>
    <text x="200" y="324" font-family="sans-serif" font-size="10" fill="#bbb" text-anchor="middle" letter-spacing="1">50 PREMIUM VINYL STICKERS</text>
  </svg>`,

  // 16 — Custom Phone Case (slim, purple gradient, screen detail)
  phonecase: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f5f0ff"/>
    <defs><linearGradient id="g16a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#5b21b6"/></linearGradient>
    <filter id="f16"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#3b0764" flood-opacity="0.32"/></filter></defs>
    <g filter="url(#f16)">
      <rect x="144" y="62" width="112" height="280" rx="24" fill="url(#g16a)" stroke="#6d28d9" stroke-width="2.5"/>
      <rect x="152" y="70" width="96" height="264" rx="20" fill="#1e1b4b"/>
      <rect x="158" y="76" width="84" height="150" rx="10" fill="#1e1b4b"/>
    </g>
    <rect x="158" y="76" width="84" height="150" rx="10" fill="url(#g16a)" opacity="0.28"/>
    <circle cx="188" cy="80" r="4" fill="#0f172a"/>
    <rect x="196" y="77" width="18" height="6" rx="3" fill="#0f172a"/>
    <circle cx="200" cy="257" r="18" fill="#1e1b4b" stroke="#7c3aed" stroke-width="2.5"/>
    <circle cx="200" cy="257" r="10" fill="#2d2060"/>
    <path d="M164,100 L236,100 M164,114 L220,114 M164,128 L228,128" stroke="rgba(167,139,250,0.3)" stroke-width="2"/>
    <circle cx="200" cy="160" r="24" fill="rgba(167,139,250,0.2)"/>
    <text x="200" y="165" font-family="sans-serif" font-size="9" fill="#a78bfa" text-anchor="middle" font-weight="700">CUSTOM</text>
  </svg>`,

  // 17 — Mountain Peak Tee (light blue, mountain graphic)
  tee_mountain: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f0f7ff"/>
    <defs><linearGradient id="g17a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e8f4ff"/><stop offset="100%" stop-color="#d0e8ff"/></linearGradient>
    <filter id="f17"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-opacity="0.1"/></filter></defs>
    <g filter="url(#f17)">
      <path d="M138,95 L90,148 L126,162 L118,305 L282,305 L274,162 L310,148 L262,95 Q230,115 200,115 Q170,115 138,95Z" fill="url(#g17a)" stroke="#c0d8f0" stroke-width="2"/>
      <path d="M170,115 Q200,135 230,115 L234,162 L166,162Z" fill="#c0d8f0" opacity="0.7"/>
    </g>
    <polygon points="200,170 162,248 238,248" fill="#5a8fbf" opacity="0.85"/>
    <polygon points="232,192 206,248 258,248" fill="#4a7aaa" opacity="0.9"/>
    <polygon points="172,205 148,248 196,248" fill="#3a6a9a" opacity="0.88"/>
    <rect x="143" y="248" width="114" height="9" rx="2" fill="#4a7aaa" opacity="0.25"/>
    <text x="200" y="278" font-family="sans-serif" font-size="9" fill="#4a7aaa" text-anchor="middle" letter-spacing="2.5" font-weight="600">MOUNTAIN PEAK</text>
  </svg>`,

  // 18 — Groovy Vibes Hoodie (burnt orange retro hoodie)
  hoodie_groovy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f5fff0"/>
    <defs><linearGradient id="g18a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#c2410c"/><stop offset="100%" stop-color="#9a3412"/></linearGradient>
    <linearGradient id="g18b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#9a3412"/><stop offset="100%" stop-color="#7c2d12"/></linearGradient>
    <filter id="f18"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#7c2d12" flood-opacity="0.3"/></filter></defs>
    <g filter="url(#f18)">
      <path d="M128,80 C104,80 74,112 70,150 L106,164 L100,310 L300,310 L294,164 L330,150 C326,112 296,80 272,80 L238,100 Q200,122 162,100Z" fill="url(#g18a)"/>
      <path d="M162,100 Q200,128 238,100 L242,165 L158,165Z" fill="url(#g18b)"/>
      <rect x="182" y="168" width="36" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
    </g>
    <path d="M142,196 Q200,174 258,196" fill="none" stroke="#fbbf24" stroke-width="3.5" stroke-linecap="round" opacity="0.8"/>
    <path d="M145,218 Q200,238 255,218" fill="none" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
    <circle cx="200" cy="258" r="20" fill="rgba(251,191,36,0.18)" stroke="#fbbf24" stroke-width="1.5" opacity="0.7"/>
    <text x="200" y="263" font-family="sans-serif" font-size="8" fill="#fbbf24" text-anchor="middle" font-weight="700">GROOVY</text>
  </svg>`,
};

// Map product id → SVG key
// ════════════════════════════════════════
// REAL PRODUCT PHOTOS
// Primary: Unsplash (best quality, matched per product)
// Fallback: picsum.photos (always works)
// Both load in any normal browser with internet
// ════════════════════════════════════════
const PRODUCT_PHOTOS = {
  // T-Shirts
  1:  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=85&fit=crop&crop=center', // orange/coral tee flat lay
  5:  'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=85&fit=crop&crop=center', // white minimalist tee
  9:  'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=85&fit=crop&crop=center', // dark graphic tee
  17: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=85&fit=crop&crop=center', // outdoor/mountain tee

  // Hoodies
  2:  'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=85&fit=crop&crop=center', // navy pullover hoodie
  6:  'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600&q=85&fit=crop&crop=center', // dark charcoal hoodie
  11: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?w=600&q=85&fit=crop&crop=center', // purple zip hoodie
  18: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=85&fit=crop&crop=center', // colourful retro hoodie

  // Caps
  3:  'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=85&fit=crop&crop=center', // black snapback
  7:  'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&q=85&fit=crop&crop=center', // olive dad cap
  12: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=85&fit=crop&crop=center', // beige trucker cap

  // Mugs & Drinkware
  4:  'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=85&fit=crop&crop=center', // white ceramic mug
  8:  'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=600&q=85&fit=crop&crop=center', // patterned mug
  13: 'https://images.unsplash.com/photo-1610824352934-c10d87b700cc?w=600&q=85&fit=crop&crop=center', // steel tumbler

  // Other categories
  10: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=85&fit=crop&crop=center', // canvas tote bag
  14: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=85&fit=crop&crop=center', // framed wall poster
  15: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&fit=crop&crop=center', // vinyl sticker pack
  16: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=85&fit=crop&crop=center', // phone case
};

// Picsum fallbacks keyed by product id (always-on backup)
const PICSUM_FALLBACKS = {
  1:'1040',2:'1055',3:'1041',4:'1060',5:'1042',6:'1056',7:'1043',8:'1061',
  9:'1044',10:'1057',11:'1045',12:'1062',13:'1046',14:'1058',15:'1047',16:'1063',17:'1048',18:'1059'
};

function getProductSVG(id) {
  return PRODUCT_PHOTOS[id] || `https://picsum.photos/seed/product${id}/600/600`;
}

// ════════════════════════════════════════
// SVG EMOJI FALLBACK (shown while photo loads / if it fails)
// ════════════════════════════════════════
const EMOJI_MAP = {
  1:'👕',2:'🧥',3:'🧢',4:'☕',5:'👕',6:'🧥',7:'🧢',8:'☕',9:'🌌',
  10:'👜',11:'🧥',12:'🧢',13:'🥤',14:'🖼️',15:'🎨',16:'📱',17:'⛰️',18:'🧥'
};
function getSVGFallback(id) {
  return `<span style="font-size:72px;line-height:1">${EMOJI_MAP[id]||'📦'}</span>`;
}


const PRODUCTS = [
  {id:1, name:'Sunset Vibes Tee',      category:'T-Shirt',  price:29.99,old:39.99,emoji:'👕',bg:'#fff5f5',badge:'Bestseller',rating:147,isNew:false,desc:'Soft 100% organic cotton tee with a relaxed fit. Pre-shrunk and machine washable.',sizes:['XS','S','M','L','XL','2XL']},
  {id:2, name:'Urban Chill Hoodie',    category:'Hoodie',   price:54.99,old:69.99,emoji:'🧥',bg:'#f0f4ff',badge:'Hot',      rating:98, isNew:false,desc:'Heavyweight fleece hoodie, kangaroo pocket, ribbed cuffs. Perfect for any weather.',sizes:['S','M','L','XL','2XL']},
  {id:3, name:'Classic Snapback',      category:'Cap',      price:24.99,old:null, emoji:'🧢',bg:'#fffaf0',badge:null,        rating:63, isNew:false,desc:'Structured 6-panel cap with flat brim and adjustable snapback closure.',sizes:['One Size']},
  {id:4, name:'Morning Brew Mug',      category:'Mug',      price:18.99,old:24.99,emoji:'☕',bg:'#f0fff4',badge:'New',       rating:212,isNew:true, desc:'11oz ceramic mug with vibrant dishwasher-safe print. Microwave safe.',sizes:['11oz','15oz']},
  {id:5, name:'Minimalist Wave Tee',   category:'T-Shirt',  price:26.99,old:null, emoji:'👕',bg:'#fdf5ff',badge:null,        rating:54, isNew:false,desc:'Ultra-soft tri-blend fabric with a vintage feel. Slightly fitted cut.',sizes:['XS','S','M','L','XL']},
  {id:6, name:'Cozy Nights Hoodie',    category:'Hoodie',   price:59.99,old:74.99,emoji:'🧥',bg:'#fff8f0',badge:'Sale',      rating:87, isNew:false,desc:'Premium brushed fleece inside for extra warmth. Double-lined hood.',sizes:['S','M','L','XL','2XL','3XL']},
  {id:7, name:'Adventure Cap',         category:'Cap',      price:22.99,old:null, emoji:'🧢',bg:'#f5fff5',badge:null,        rating:41, isNew:false,desc:'Unstructured dad cap with a curved brim and subtle embroidered logo.',sizes:['One Size']},
  {id:8, name:'Retro Grid Mug',        category:'Mug',      price:16.99,old:21.99,emoji:'☕',bg:'#fff0f0',badge:'New',       rating:76, isNew:true, desc:'Bold retro grid design on a matte white ceramic mug. Holds 11oz.',sizes:['11oz','15oz']},
  {id:9, name:'Galaxy Print Tee',      category:'T-Shirt',  price:31.99,old:null, emoji:'🌌',bg:'#f0f0ff',badge:'New',       rating:38, isNew:true, desc:'All-over galaxy sublimation print on a breathable polyester-cotton blend tee.',sizes:['XS','S','M','L','XL','2XL']},
  {id:10,name:'Eco Canvas Tote',       category:'Tote Bag', price:19.99,old:24.99,emoji:'👜',bg:'#fef9ee',badge:'New',       rating:89, isNew:true, desc:'100% natural cotton canvas tote with reinforced handles. Holds up to 20 lbs.',sizes:['One Size']},
  {id:11,name:'Neon Dreams Hoodie',    category:'Hoodie',   price:62.99,old:79.99,emoji:'🧥',bg:'#fff0ff',badge:'Hot',       rating:61, isNew:true, desc:'Neon-accented zip-up hoodie with front kangaroo pocket. Slim athletic fit.',sizes:['S','M','L','XL','2XL']},
  {id:12,name:'Vintage Trucker Cap',   category:'Cap',      price:27.99,old:null, emoji:'🧢',bg:'#f0faff',badge:null,        rating:55, isNew:true, desc:'Foam trucker cap with mesh back panel and pre-curved brim. Adjustable snapback.',sizes:['One Size']},
  {id:13,name:'Travel Tumbler',        category:'Mug',      price:32.99,old:39.99,emoji:'🥤',bg:'#f0fff9',badge:'New',       rating:103,isNew:true, desc:'20oz double-walled stainless steel tumbler. Keeps drinks hot 8hrs, cold 24hrs.',sizes:['20oz','30oz']},
  {id:14,name:'Art Deco Poster',       category:'Poster',   price:22.99,old:null, emoji:'🖼️',bg:'#fff8f0',badge:'New',      rating:47, isNew:true, desc:'High-resolution giclée print on 200gsm matte paper. Arrives ready to frame.',sizes:['A4','A3','A2']},
  {id:15,name:'Sticker Pack — Vol.1',  category:'Sticker',  price:12.99,old:16.99,emoji:'🎨',bg:'#fffbf0',badge:'Sale',      rating:194,isNew:false,desc:'50 individually cut vinyl stickers. Weatherproof, UV-resistant, and dishwasher safe.',sizes:['One Pack']},
  {id:16,name:'Custom Phone Case',     category:'Accessory',price:24.99,old:29.99,emoji:'📱',bg:'#f5f0ff',badge:'New',       rating:72, isNew:true, desc:'Slim hardshell case compatible with iPhone 14/15 and Samsung Galaxy. Precise cutouts.',sizes:['iPhone 14','iPhone 15','Galaxy S23','Galaxy S24']},
  {id:17,name:'Mountain Peak Tee',     category:'T-Shirt',  price:27.99,old:null, emoji:'⛰️',bg:'#f0f7ff',badge:null,       rating:66, isNew:true, desc:'Lightweight performance tee perfect for outdoor adventures. Moisture-wicking fabric.',sizes:['XS','S','M','L','XL']},
  {id:18,name:'Groovy Vibes Hoodie',   category:'Hoodie',   price:56.99,old:69.99,emoji:'🧥',bg:'#f5fff0',badge:'Sale',      rating:44, isNew:false,desc:'70s-inspired retro print pullover hoodie. Brushed fleece interior, ribbed hem.',sizes:['S','M','L','XL','2XL']},
];

const PROMO_CODES = {
  'WELCOME30': {discount:30, type:'percent', label:'30% off applied!'},
  'SAVE10':    {discount:10, type:'fixed',   label:'$10 off applied!'},
  'FREESHIP':  {discount:0,  type:'ship',    label:'Free shipping applied!'},
};

// ════════════════════════════════════════
// STATE
// ════════════════════════════════════════
let cart = [];          // [{product, qty, size}]
let wishlist = [];      // [product ids]
let activeFilter = 'All';
let activeSort = 'default';
let appliedPromo = null;
let promoOpen = false;
let checkoutStep = 1;
let toastTimer = null;

// ════════════════════════════════════════
// RENDER PRODUCTS
// ════════════════════════════════════════
function getFilteredProducts() {
  let list = activeFilter === 'All' ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === activeFilter);
  if (activeSort === 'price-asc')  list.sort((a,b) => a.price - b.price);
  if (activeSort === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (activeSort === 'rating')     list.sort((a,b) => b.rating - a.rating);
  return list;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const list = getFilteredProducts();
  if (!list.length) {
    grid.innerHTML = '<div class="no-products">No products found in this category.</div>';
    return;
  }
  grid.innerHTML = list.map(p => {
    const inWish = wishlist.includes(p.id);
    const photoUrl = getProductSVG(p.id);
    const svgFallback = getSVGFallback(p.id);
    return `
    <div class="product-card">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      <button class="product-wishlist${inWish?' liked':''}" onclick="toggleWishItem(${p.id},this)" aria-label="Wishlist">
        <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <div class="product-img" id="pimg-${p.id}" style="background:${p.bg}" onclick="openModal(${p.id})">
        <div class="img-fallback" id="pfb-${p.id}">${svgFallback}</div>
        <img src="${photoUrl}" alt="${p.name}" loading="lazy"
          onload="this.classList.add('loaded');document.getElementById('pimg-${p.id}').classList.add('img-done');document.getElementById('pfb-${p.id}').classList.add('hidden')"
          onerror="if(!this.dataset.tried){this.dataset.tried=1;this.src='https://picsum.photos/seed/pc${p.id}/600/600'}else{this.style.display='none';document.getElementById('pimg-${p.id}').classList.add('img-done')}"
        />
      </div>
      <div class="product-body">
        <div class="product-category">${p.category}</div>
        <div class="product-name" onclick="openModal(${p.id})">${p.name}</div>
        <div class="product-rating"><span class="stars">★★★★★</span><span>(${p.rating})</span></div>
        <div class="product-footer">
          <div>
            <span class="product-price">$${p.price.toFixed(2)}</span>
            ${p.old ? `<span class="product-price-old">$${p.old.toFixed(2)}</span>` : ''}
          </div>
          <button class="btn-add" onclick="addToCart(${p.id})">
            <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Add
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function onImgLoad(img, id) {
  img.classList.add('loaded');
  const wrap = document.getElementById('pimg-' + id);
  const fb   = document.getElementById('pfb-' + id);
  if (wrap) wrap.classList.add('img-done');
  if (fb)   fb.classList.add('hidden');
}

function onImgError(img, id) {
  img.style.display = 'none';
  const wrap = document.getElementById('pimg-' + id);
  if (wrap) wrap.classList.add('img-done');
}

// ════════════════════════════════════════
// FILTER & SORT
// ════════════════════════════════════════
function filterByCategory(cat) {
  activeFilter = cat;
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });
  renderProducts();
}

document.getElementById('filterTabs').addEventListener('click', e => {
  const btn = e.target.closest('.filter-tab');
  if (!btn) return;
  filterByCategory(btn.dataset.cat);
});

document.getElementById('sortSelect').addEventListener('change', e => {
  activeSort = e.target.value;
  renderProducts();
});

// ════════════════════════════════════════
// CART
// ════════════════════════════════════════
function addToCart(id, size = null) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const sz = size || p.sizes[0];
  const existing = cart.find(c => c.product.id === id && c.size === sz);
  if (existing) existing.qty++;
  else cart.push({product: p, qty: 1, size: sz});
  updateCartUI();
  showToast(p.emoji + ' ' + p.name + ' added to cart!');
}

function removeFromCart(id, size) {
  cart = cart.filter(c => !(c.product.id === id && c.size === size));
  updateCartUI();
}

function changeQty(id, size, delta) {
  const item = cart.find(c => c.product.id === id && c.size === size);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartUI();
}

function getCartTotals() {
  const subtotal = cart.reduce((s, c) => s + c.product.price * c.qty, 0);
  const shipping = subtotal >= 50 ? 0 : 4.99;
  let discount = 0;
  if (appliedPromo) {
    const code = PROMO_CODES[appliedPromo];
    if (code.type === 'percent') discount = subtotal * code.discount / 100;
    else if (code.type === 'fixed') discount = Math.min(code.discount, subtotal);
  }
  const total = Math.max(0, subtotal - discount + shipping);
  return {subtotal, shipping, discount, total};
}

function updateCartUI() {
  const total = cart.reduce((s,c) => s + c.qty, 0);
  const countEl = document.getElementById('cartCount');
  countEl.textContent = total;
  countEl.classList.remove('bump');
  void countEl.offsetWidth;
  countEl.classList.add('bump');
  setTimeout(() => countEl.classList.remove('bump'), 400);
  document.getElementById('cartItemCount').textContent = total + ' item' + (total !== 1 ? 's' : '');
  renderCartBody();
}

function renderCartBody() {
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');
  const promoBox = document.getElementById('promoBox');

  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty"><span class="big-icon">🛒</span><p>Your cart is empty.</p><button class="btn-primary" onclick="closeCart()" style="margin:0 auto">Start Shopping</button></div>`;
    foot.innerHTML = '';
    promoBox.style.display = 'none';
    return;
  }

  promoBox.style.display = 'block';
  body.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="ci-img" style="background:${c.product.bg}">${c.product.emoji}</div>
      <div class="ci-info">
        <div class="ci-cat">${c.product.category}</div>
        <div class="ci-name">${c.product.name}</div>
        <div class="ci-price">$${(c.product.price * c.qty).toFixed(2)}</div>
        <div class="ci-controls">
          <button class="qty-btn" onclick="changeQty(${c.product.id},'${c.size}',-1)">−</button>
          <span class="qty-val">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${c.product.id},'${c.size}',1)">+</button>
          <span style="font-size:.75rem;color:#aaa;margin-left:4px">${c.size}</span>
          <button class="ci-remove" onclick="removeFromCart(${c.product.id},'${c.size}')">✕ Remove</button>
        </div>
      </div>
    </div>`).join('');

  const {subtotal, shipping, discount, total} = getCartTotals();
  foot.innerHTML = `
    <div class="cart-totals">
      <div class="cart-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      ${discount > 0 ? `<div class="cart-row discount-row"><span>Discount (${appliedPromo})</span><span>−$${discount.toFixed(2)}</span></div>` : ''}
      <div class="cart-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--green);font-weight:700">Free</span>' : '$'+shipping.toFixed(2)}</span></div>
      <div class="cart-row total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
    </div>
    <button class="btn-checkout" onclick="openCheckout()">
      Checkout — $${total.toFixed(2)}
      <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </button>
    <button class="btn-continue" onclick="closeCart()">← Continue Shopping</button>`;
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  document.body.style.overflow = '';
}

// ════════════════════════════════════════
// PROMO CODE
// ════════════════════════════════════════
function togglePromo() {
  promoOpen = !promoOpen;
  document.getElementById('promoForm').classList.toggle('hidden', !promoOpen);
  document.getElementById('promoToggle').classList.toggle('open', promoOpen);
}

function applyPromo() {
  const code = document.getElementById('promoInput').value.trim().toUpperCase();
  const msg = document.getElementById('promoMsg');
  const applied = document.getElementById('promoApplied');
  if (!code) { showPromoMsg('Please enter a code.', 'error'); return; }
  if (!PROMO_CODES[code]) { showPromoMsg('Invalid promo code.', 'error'); return; }
  appliedPromo = code;
  document.getElementById('promoForm').classList.add('hidden');
  document.getElementById('promoToggle').style.display = 'none';
  msg.textContent = '';
  applied.classList.remove('hidden');
  document.getElementById('promoAppliedText').textContent = PROMO_CODES[code].label;
  renderCartBody();
  showToast('🎉 Promo code ' + code + ' applied!');
}

function removePromo() {
  appliedPromo = null;
  document.getElementById('promoApplied').classList.add('hidden');
  document.getElementById('promoToggle').style.display = '';
  document.getElementById('promoInput').value = '';
  document.getElementById('promoMsg').textContent = '';
  renderCartBody();
}

function showPromoMsg(text, type) {
  const el = document.getElementById('promoMsg');
  el.textContent = text;
  el.className = 'promo-msg ' + type;
}

// ════════════════════════════════════════
// WISHLIST
// ════════════════════════════════════════
function toggleWishItem(id, btn) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    btn && btn.classList.remove('liked');
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    btn && btn.classList.add('liked');
    showToast('❤️ Added to wishlist!');
  }
  updateWishCount();
  renderWishlist();
  renderProducts();
}

function updateWishCount() {
  const el = document.getElementById('wishCount');
  el.textContent = wishlist.length;
  el.style.display = wishlist.length ? 'flex' : 'none';
  document.getElementById('wishItemCount').textContent = wishlist.length + ' item' + (wishlist.length !== 1 ? 's' : '');
}

function renderWishlist() {
  const body = document.getElementById('wishlistBody');
  if (!wishlist.length) {
    body.innerHTML = `<div class="cart-empty"><span class="big-icon">❤️</span><p>Your wishlist is empty.</p></div>`;
    return;
  }
  body.innerHTML = wishlist.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    return `<div class="wishlist-item">
      <div class="wi-img" style="background:${p.bg}">${p.emoji}</div>
      <div class="wi-info"><div class="wi-name">${p.name}</div><div class="wi-price">$${p.price.toFixed(2)}</div></div>
      <div class="wi-actions">
        <button class="wi-add" onclick="addToCart(${p.id});closeWishlist();openCart()">Add to Cart</button>
        <button class="wi-del" onclick="toggleWishItem(${p.id},null)">✕</button>
      </div>
    </div>`;
  }).join('');
}

function openWishlist() {
  document.getElementById('wishlistDrawer').classList.add('open');
  document.getElementById('overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeWishlist() {
  document.getElementById('wishlistDrawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  document.body.style.overflow = '';
}

// ════════════════════════════════════════
// QUICK-VIEW MODAL
// ════════════════════════════════════════
let modalSize = null;

function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  modalSize = p.sizes[0];
  const photoUrl = getProductSVG(p.id);
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-img-wrap" id="mwrap-${p.id}" style="background:${p.bg}">
      ${p.badge ? `<div class="modal-badge">${p.badge}</div>` : ''}
      <div class="img-fallback" id="mfb-${p.id}" style="font-size:100px">${EMOJI_MAP[p.id]||p.emoji}</div>
      <img src="${photoUrl}" alt="${p.name}"
        style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .35s"
        onload="this.style.opacity='1';document.getElementById('mfb-${p.id}').classList.add('hidden');document.getElementById('mwrap-${p.id}').classList.add('img-done')"
        onerror="if(!this.dataset.tried){this.dataset.tried=1;this.src='https://picsum.photos/seed/pc${p.id}/600/600'}else{this.style.display='none';document.getElementById('mwrap-${p.id}').classList.add('img-done')}"
      />
    </div>
    <div class="modal-info">
      <div class="modal-cat">${p.category}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-rating"><span class="modal-stars">★★★★★</span><span>${p.rating} reviews</span></div>
      <div class="modal-price-row">
        <span class="modal-price">$${p.price.toFixed(2)}</span>
        ${p.old ? `<span class="modal-old">$${p.old.toFixed(2)}</span>` : ''}
      </div>
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-label">${p.category === 'Mug' ? 'Size' : p.category === 'Cap' ? 'Size' : 'Size'}</div>
      <div class="size-btns" id="modalSizes">
        ${p.sizes.map((s,i) => `<button class="size-btn${i===0?' active':''}" onclick="selectSize(this,'${s}')">${s}</button>`).join('')}
      </div>
      <div class="modal-actions">
        <button class="btn-atc" onclick="addToCart(${p.id},modalSize);closeModal();openCart()">Add to Cart</button>
        <button class="btn-wish" onclick="toggleWishItem(${p.id},null);this.textContent=wishlist.includes(${p.id})?'❤️':'🤍'">${wishlist.includes(p.id)?'❤️':'🤍'}</button>
      </div>
    </div>`;
  document.getElementById('modalWrap').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectSize(btn, size) {
  modalSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function closeModal() {
  document.getElementById('modalWrap').classList.remove('open');
  document.body.style.overflow = '';
}

// ════════════════════════════════════════
// CHECKOUT
// ════════════════════════════════════════
const STEPS = ['Shipping','Payment','Review'];

function openCheckout() {
  if (!cart.length) return;
  checkoutStep = 1;
  renderCheckout();
  document.getElementById('checkoutWrap').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutWrap').classList.remove('open');
  document.body.style.overflow = '';
}

function renderCheckoutSteps() {
  return STEPS.map((s,i) => {
    const n = i+1;
    let cls = n < checkoutStep ? 'step done' : n === checkoutStep ? 'step active' : 'step';
    return `${i > 0 ? '<div class="step-line"></div>' : ''}
    <div class="${cls}">
      <div class="step-num">${n < checkoutStep ? '✓' : n}</div>${s}
    </div>`;
  }).join('');
}

function renderCheckoutSidebar() {
  const {subtotal, shipping, discount, total} = getCartTotals();
  return `<div class="checkout-sidebar">
    <h3>Order Summary</h3>
    <div class="co-items">
      ${cart.map(c => `<div class="co-item">
        <div class="co-img" style="background:${c.product.bg}">${c.product.emoji}</div>
        <div class="co-info"><div class="co-name">${c.product.name}</div><div class="co-meta">${c.size} × ${c.qty}</div></div>
        <div class="co-price">$${(c.product.price*c.qty).toFixed(2)}</div>
      </div>`).join('')}
    </div>
    <hr class="co-divider"/>
    <div class="co-total-rows">
      <div class="co-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      ${discount > 0 ? `<div class="co-row discount"><span>Discount</span><span>−$${discount.toFixed(2)}</span></div>` : ''}
      <div class="co-row"><span>Shipping</span><span>${shipping === 0 ? 'Free' : '$'+shipping.toFixed(2)}</span></div>
      <div class="co-row total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
    </div>
  </div>`;
}

function renderCheckout() {
  document.getElementById('checkoutSteps').innerHTML = renderCheckoutSteps();
  const inner = document.getElementById('checkoutInner');

  if (checkoutStep === 1) {
    inner.innerHTML = `<div class="checkout-content">
      <div class="checkout-form">
        <h3>Contact Information</h3>
        <div class="form-grid two">
          <div class="field" id="f-first"><label>First Name</label><input id="firstName" placeholder="John"/><span class="field-error">Required</span></div>
          <div class="field" id="f-last"><label>Last Name</label><input id="lastName" placeholder="Doe"/><span class="field-error">Required</span></div>
        </div>
        <div class="form-grid" style="margin-top:14px">
          <div class="field" id="f-email"><label>Email</label><input id="email" type="email" placeholder="john@example.com"/><span class="field-error">Valid email required</span></div>
          <div class="field" id="f-phone" style="margin-top:14px"><label>Phone (optional)</label><input id="phone" placeholder="+1 555 000 0000"/></div>
        </div>
        <h3>Shipping Address</h3>
        <div class="form-grid">
          <div class="field" id="f-addr"><label>Address</label><input id="address" placeholder="123 Main Street"/><span class="field-error">Required</span></div>
          <div class="form-grid two" style="margin-top:14px">
            <div class="field" id="f-city"><label>City</label><input id="city" placeholder="New York"/><span class="field-error">Required</span></div>
            <div class="field" id="f-zip"><label>ZIP Code</label><input id="zip" placeholder="10001"/><span class="field-error">Required</span></div>
          </div>
          <div class="field" style="margin-top:14px" id="f-country"><label>Country</label>
            <select id="country"><option value="">Select country…</option><option value="US">United States</option><option value="GB">United Kingdom</option><option value="CA">Canada</option><option value="AU">Australia</option><option value="DE">Germany</option><option value="FR">France</option></select>
            <span class="field-error">Required</span>
          </div>
        </div>
      </div>
      ${renderCheckoutSidebar()}
    </div>
    <div class="checkout-nav">
      <button class="btn-back" onclick="closeCheckout()">← Back to Cart</button>
      <button class="btn-next" onclick="validateStep1()">Continue to Payment <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
    </div>`;

  } else if (checkoutStep === 2) {
    inner.innerHTML = `<div class="checkout-content">
      <div class="checkout-form">
        <h3>Payment Method</h3>
        <div class="payment-icons"><span class="pay-icon">VISA</span><span class="pay-icon">MC</span><span class="pay-icon">AMEX</span><span class="pay-icon">PayPal</span></div>
        <div class="form-grid" style="margin-top:18px">
          <div class="field" id="f-card"><label>Card Number</label><input id="cardNum" placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCard(this)"/><span class="field-error">Valid card number required</span></div>
          <div class="form-grid two" style="margin-top:14px">
            <div class="field" id="f-exp"><label>Expiry Date</label><input id="expiry" placeholder="MM / YY" maxlength="7" oninput="formatExpiry(this)"/><span class="field-error">Required</span></div>
            <div class="field" id="f-cvv"><label>CVV</label><input id="cvv" placeholder="123" maxlength="4"/><span class="field-error">Required</span></div>
          </div>
          <div class="field" style="margin-top:14px" id="f-cname"><label>Name on Card</label><input id="cardName" placeholder="John Doe"/><span class="field-error">Required</span></div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:1.5rem;font-size:.82rem;color:var(--ink-soft)">
          🔒 Your payment details are encrypted and secure.
        </div>
      </div>
      ${renderCheckoutSidebar()}
    </div>
    <div class="checkout-nav">
      <button class="btn-back" onclick="checkoutStep=1;renderCheckout()">← Back</button>
      <button class="btn-next" onclick="validateStep2()">Review Order <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
    </div>`;

  } else if (checkoutStep === 3) {
    const {subtotal,shipping,discount,total} = getCartTotals();
    inner.innerHTML = `<div class="checkout-content">
      <div class="checkout-form">
        <h3>Review Your Order</h3>
        <p style="font-size:.88rem;color:var(--ink-soft);line-height:1.7;margin-bottom:1.5rem">Please confirm all details are correct before placing your order.</p>
        <div style="background:#f7f6f3;border-radius:12px;padding:1rem 1.25rem;margin-bottom:1rem;font-size:.85rem;line-height:1.9">
          <div style="font-weight:700;margin-bottom:4px">Shipping To</div>
          <div style="color:var(--ink-soft)">${document.getElementById('firstName')?.value||''} ${document.getElementById('lastName')?.value||''}<br>${document.getElementById('address')?.value||''}, ${document.getElementById('city')?.value||''} ${document.getElementById('zip')?.value||''}<br>${document.getElementById('email')?.value||''}</div>
        </div>
        <div style="background:#f7f6f3;border-radius:12px;padding:1rem 1.25rem;font-size:.85rem;line-height:1.9">
          <div style="font-weight:700;margin-bottom:4px">Payment</div>
          <div style="color:var(--ink-soft)">•••• •••• •••• ${(document.getElementById('cardNum')?.value||'').slice(-4)||'****'}<br>Expires ${document.getElementById('expiry')?.value||'--/--'}</div>
        </div>
      </div>
      ${renderCheckoutSidebar()}
    </div>
    <div class="checkout-nav">
      <button class="btn-back" onclick="checkoutStep=2;renderCheckout()">← Back</button>
      <button class="btn-next" style="background:var(--green)" onclick="placeOrder()">🎉 Place Order — $${total.toFixed(2)}</button>
    </div>`;

  } else if (checkoutStep === 4) {
    const orderNum = 'PC-' + Math.floor(100000 + Math.random() * 900000);
    inner.innerHTML = `<div class="order-success">
      <div class="success-icon">✅</div>
      <h2>Order Confirmed!</h2>
      <div class="order-num">${orderNum}</div>
      <p>Thank you for your order! We've sent a confirmation to your email. Your custom items will be printed and shipped within 2–3 business days.</p>
      <button class="btn-primary" onclick="closeCheckout();cart=[];appliedPromo=null;updateCartUI();" style="margin:0 auto">Continue Shopping</button>
    </div>`;
    document.getElementById('checkoutSteps').innerHTML = '';
  }
}

function validateStep1() {
  const fields = [
    {id:'firstName', el:'f-first', check: v => v.trim().length > 0},
    {id:'lastName',  el:'f-last',  check: v => v.trim().length > 0},
    {id:'email',     el:'f-email', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)},
    {id:'address',   el:'f-addr',  check: v => v.trim().length > 0},
    {id:'city',      el:'f-city',  check: v => v.trim().length > 0},
    {id:'zip',       el:'f-zip',   check: v => v.trim().length > 0},
    {id:'country',   el:'f-country',check: v => v !== ''},
  ];
  let ok = true;
  fields.forEach(f => {
    const inp = document.getElementById(f.id);
    const wrap = document.getElementById(f.el);
    if (!inp || !wrap) return;
    if (!f.check(inp.value)) {
      wrap.classList.add('has-error'); inp.classList.add('error'); ok = false;
    } else {
      wrap.classList.remove('has-error'); inp.classList.remove('error');
    }
  });
  if (ok) { checkoutStep = 2; renderCheckout(); }
}

function validateStep2() {
  const fields = [
    {id:'cardNum',  el:'f-card', check: v => v.replace(/\s/g,'').length === 16},
    {id:'expiry',   el:'f-exp',  check: v => /^\d{2}\s?\/\s?\d{2}$/.test(v)},
    {id:'cvv',      el:'f-cvv',  check: v => /^\d{3,4}$/.test(v)},
    {id:'cardName', el:'f-cname',check: v => v.trim().length > 0},
  ];
  let ok = true;
  fields.forEach(f => {
    const inp = document.getElementById(f.id);
    const wrap = document.getElementById(f.el);
    if (!inp || !wrap) return;
    if (!f.check(inp.value)) {
      wrap.classList.add('has-error'); inp.classList.add('error'); ok = false;
    } else {
      wrap.classList.remove('has-error'); inp.classList.remove('error');
    }
  });
  if (ok) { checkoutStep = 3; renderCheckout(); }
}

function placeOrder() {
  checkoutStep = 4;
  renderCheckout();
}

function formatCard(inp) {
  let v = inp.value.replace(/\D/g,'').substring(0,16);
  inp.value = v.replace(/(.{4})/g,'$1 ').trim();
}
function formatExpiry(inp) {
  let v = inp.value.replace(/\D/g,'');
  if (v.length >= 2) v = v.substring(0,2) + ' / ' + v.substring(2,4);
  inp.value = v;
}

// ════════════════════════════════════════
// SEARCH
// ════════════════════════════════════════
let searchDebounce = null;

function performSearch(query) {
  const results = document.getElementById('searchResults');
  if (!query.trim()) { results.classList.remove('show'); return; }
  const q = query.toLowerCase();
  const hits = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  );
  if (!hits.length) {
    results.innerHTML = '<div class="no-results">No products found for "' + query + '"</div>';
  } else {
    results.innerHTML = '<div class="search-results-grid">' +
      hits.map(p => `<div class="search-hit" onclick="closeSearch();openModal(${p.id})">
        <div class="search-hit-img" style="background:${p.bg}">${p.emoji}</div>
        <div class="search-hit-info"><div class="name">${p.name}</div><div class="price">$${p.price.toFixed(2)}</div></div>
      </div>`).join('') + '</div>';
  }
  results.classList.add('show');
}

function closeSearch() {
  document.getElementById('searchResults').classList.remove('show');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').classList.remove('show');
}

document.getElementById('searchInput').addEventListener('input', function() {
  clearTimeout(searchDebounce);
  document.getElementById('searchClear').classList.toggle('show', this.value.length > 0);
  searchDebounce = setTimeout(() => performSearch(this.value), 200);
});

document.getElementById('searchClear').addEventListener('click', closeSearch);

document.getElementById('mobileSearchInput').addEventListener('input', function() {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => performSearch(this.value), 200);
});

// Close search on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-search') && !e.target.closest('#mobileSearchInput') && !e.target.closest('#searchResults')) {
    document.getElementById('searchResults').classList.remove('show');
  }
});

// ════════════════════════════════════════
// NEWSLETTER
// ════════════════════════════════════════
document.getElementById('nlForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const inp = document.getElementById('nlEmail');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value)) {
    inp.style.borderColor = 'var(--accent)';
    setTimeout(() => inp.style.borderColor = '', 1500);
    return;
  }
  document.getElementById('nlSuccess').classList.add('show');
  this.style.display = 'none';
  showToast('🎁 Code WELCOME30 sent to ' + inp.value + '!');
});

// ════════════════════════════════════════
// MOBILE NAV
// ════════════════════════════════════════
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

document.getElementById('hamburger').addEventListener('click', function() {
  this.classList.toggle('open');
  document.getElementById('mobileNav').classList.toggle('open');
});

document.addEventListener('click', e => {
  const nav = document.getElementById('mobileNav');
  const burger = document.getElementById('hamburger');
  if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target))
    closeMobileNav();
});

// ════════════════════════════════════════
// OVERLAY CLICK
// ════════════════════════════════════════
document.getElementById('overlay').addEventListener('click', () => {
  closeCart(); closeWishlist();
});

// ════════════════════════════════════════
// BUTTON BINDINGS
// ════════════════════════════════════════
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('wishlistBtn').addEventListener('click', openWishlist);

// ════════════════════════════════════════
// SCROLL
// ════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
}, {passive: true});

// ════════════════════════════════════════
// TOAST
// ════════════════════════════════════════
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

// ════════════════════════════════════════
// REVEAL
// ════════════════════════════════════════
function setupReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, {threshold: 0, rootMargin: '0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ════════════════════════════════════════
// NEW ARRIVALS TICKER
// ════════════════════════════════════════
function renderTicker() {
  const ticker = document.getElementById('arrivalsTicker');
  if (!ticker) return;
  const newProds = PRODUCTS.filter(p => p.isNew);
  const items = newProds.map(p =>
    `<span class="arrivals-item"><span class="a-emoji">${p.emoji}</span><span>NEW: ${p.name} — $${p.price.toFixed(2)}</span><span class="a-dot"></span></span>`
  ).join('');
  // Duplicate for seamless loop
  ticker.innerHTML = `<div class="arrivals-track">${items}${items}${items}</div>`;
}

// ════════════════════════════════════════
// BESTSELLERS CAROUSEL
// ════════════════════════════════════════
let carouselIndex = 0;
let carouselVisible = 4;
let carouselProducts = [];

function getCarouselVisible() {
  return window.innerWidth < 640 ? 1 : window.innerWidth < 1100 ? 2 : 4;
}

function renderCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots = document.getElementById('carouselDots');
  if (!track || !dots) return;

  carouselProducts = [...PRODUCTS].sort((a,b) => b.rating - a.rating).slice(0, 8);
  carouselVisible = getCarouselVisible();

  track.innerHTML = carouselProducts.map(p => {
    const inWish = wishlist.includes(p.id);
    const photoUrl = getProductSVG(p.id);
    return `<div class="product-card">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      <button class="product-wishlist${inWish?' liked':''}" onclick="toggleWishItem(${p.id},this)" aria-label="Wishlist">
        <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <div class="product-img" id="cimg-${p.id}" style="background:${p.bg}" onclick="openModal(${p.id})">
        <div class="img-fallback" id="cfb-${p.id}">${getSVGFallback(p.id)}</div>
        <img src="${photoUrl}" alt="${p.name}" loading="lazy"
          onload="this.classList.add('loaded');document.getElementById('cimg-${p.id}').classList.add('img-done');document.getElementById('cfb-${p.id}').classList.add('hidden')"
          onerror="if(!this.dataset.tried){this.dataset.tried=1;this.src='https://picsum.photos/seed/pc${p.id}/600/600'}else{this.style.display='none';document.getElementById('cimg-${p.id}').classList.add('img-done')}"
        />
      </div>
      <div class="product-body">
        <div class="product-category">${p.category}</div>
        <div class="product-name" onclick="openModal(${p.id})">${p.name}</div>
        <div class="product-rating"><span class="stars">★★★★★</span><span>(${p.rating})</span></div>
        <div class="product-footer">
          <div><span class="product-price">$${p.price.toFixed(2)}</span>${p.old?`<span class="product-price-old">$${p.old.toFixed(2)}</span>`:''}</div>
          <button class="btn-add" onclick="addToCart(${p.id})">
            <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Add
          </button>
        </div>
      </div>
    </div>`;
  }).join('');

  const totalPages = Math.ceil(carouselProducts.length / carouselVisible);
  dots.innerHTML = Array.from({length: totalPages}, (_,i) =>
    `<button class="cdot${i===0?' active':''}" onclick="goToCarouselPage(${i})" aria-label="Page ${i+1}"></button>`
  ).join('');
  updateCarouselPosition();
}

function updateCarouselPosition() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  carouselVisible = getCarouselVisible();
  const gap = 20;
  const cardW = (track.parentElement.offsetWidth - gap * (carouselVisible - 1)) / carouselVisible;
  const offset = carouselIndex * (cardW + gap);
  track.style.transform = `translateX(-${offset}px)`;
  document.querySelectorAll('.cdot').forEach((d,i) => {
    const page = Math.floor(carouselIndex / carouselVisible);
    d.classList.toggle('active', i === page);
  });
}

function goToCarouselPage(page) {
  carouselVisible = getCarouselVisible();
  carouselIndex = page * carouselVisible;
  const maxIndex = Math.max(0, carouselProducts.length - carouselVisible);
  carouselIndex = Math.min(carouselIndex, maxIndex);
  updateCarouselPosition();
}

document.getElementById('carouselPrev').addEventListener('click', () => {
  carouselVisible = getCarouselVisible();
  carouselIndex = Math.max(0, carouselIndex - carouselVisible);
  updateCarouselPosition();
});

document.getElementById('carouselNext').addEventListener('click', () => {
  carouselVisible = getCarouselVisible();
  const max = Math.max(0, carouselProducts.length - carouselVisible);
  carouselIndex = Math.min(carouselIndex + carouselVisible, max);
  updateCarouselPosition();
});

window.addEventListener('resize', () => {
  carouselVisible = getCarouselVisible();
  carouselIndex = 0;
  updateCarouselPosition();
});

// ════════════════════════════════════════
// BUNDLE ADD TO CART
// ════════════════════════════════════════
function addBundleToCart(ids) {
  ids.forEach(id => addToCart(id));
  showToast('🎁 Bundle added to cart! Open cart to review.');
  setTimeout(() => openCart(), 600);
}

// ════════════════════════════════════════
// INIT
// ════════════════════════════════════════
document.body.classList.add('js-ready');
renderProducts();
renderCartBody();
renderTicker();
requestAnimationFrame(() => requestAnimationFrame(() => {
  renderCarousel();
  setupReveal();
}));


// ════════════════════════════════════════
// FOOTER MODAL
// ════════════════════════════════════════
function showFooterModal(title, body) {
  document.getElementById('footerModalTitle').textContent = title;
  document.getElementById('footerModalBody').innerHTML = body;
  const modal = document.getElementById('footerModal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeFooterModal() {
  document.getElementById('footerModal').style.display = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeFooterModal(); });