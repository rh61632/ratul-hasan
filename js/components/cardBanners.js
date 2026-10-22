/**
 * cardBanners.js
 * Generates bespoke, themed dark glassmorphic engineering graphic headers
 * for project, award, and field visit cards that do not have dedicated photographic media.
 * Eliminates generic stock photos while preserving uniform 16:9 card proportions.
 */

export function getThemedHeaderMarkup(item, context = 'general') {
  const id = item.id || (item.name ? item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '') || (item.title ? item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '');

  // 0. TICI - Industrial Technology & Instrumentation
  if (id.includes('tici') || id.includes('industrial-technology')) {
    return `
      <div class="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-3.5 border border-slate-200/60 dark:border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/70 flex flex-col items-center justify-center select-none group-hover:border-brand-500/50 transition-all duration-300 shadow-inner">
        <!-- Ambient Glow -->
        <div class="absolute -top-10 -right-10 w-36 h-36 bg-teal-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <!-- Automation Schematic SVG -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-25" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-tici" width="22" height="22" patternUnits="userSpaceOnUse">
              <path d="M 22 0 L 0 0 0 22" fill="none" stroke="rgba(20, 184, 166, 0.3)" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-tici)" />
          <line x1="40" y1="80" x2="360" y2="80" stroke="rgba(20, 184, 166, 0.35)" stroke-width="1.5" stroke-dasharray="6 3"/>
          <circle cx="120" cy="80" r="10" stroke="rgba(20, 184, 166, 0.5)" stroke-width="1.5"/>
          <circle cx="280" cy="80" r="10" stroke="rgba(20, 184, 166, 0.5)" stroke-width="1.5"/>
        </svg>

        <!-- Technical Corner Annotations -->
        <div class="absolute top-2.5 left-3 text-[9px] font-mono text-teal-400/80 tracking-wider flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
          <span>TICI // POLASH</span>
        </div>
        <div class="absolute top-2.5 right-3 text-[9px] font-mono text-teal-400/80 tracking-wider">
          [ 56-HR INTENSIVE ]
        </div>

        <!-- Central Glyph & Telemetry Pill -->
        <div class="relative z-10 flex flex-col items-center">
          <div class="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-400/30 text-teal-400 flex items-center justify-center text-lg shadow-[0_0_20px_rgba(20,184,166,0.25)] group-hover:scale-110 transition-transform duration-300">
            <i class="fa-solid fa-industry"></i>
          </div>
          <span class="mt-2 text-[10px] font-mono tracking-wider uppercase font-semibold text-teal-200 px-2.5 py-0.5 rounded-full bg-teal-950/85 border border-teal-500/30 backdrop-blur-md shadow-sm">
            PLC, DCS & Factory Automation
          </span>
        </div>
      </div>
    `;
  }

  // 1. LIMITEYE - Computer Vision ALPR Pipeline
  if (id.includes('limiteye')) {
    return `
      <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border border-slate-200/60 dark:border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/80 flex flex-col items-center justify-center select-none group-hover:border-sky-500/50 transition-all duration-300 shadow-inner">
        <!-- Ambient Glow -->
        <div class="absolute -top-10 -right-10 w-36 h-36 bg-sky-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <!-- HUD & Calibrated Viewfinder SVG -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-limiteye" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(56, 189, 248, 0.08)" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-limiteye)" />
          
          <!-- Viewfinder HUD Corner Brackets -->
          <path d="M 30 50 L 30 30 L 50 30" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M 370 50 L 370 30 L 350 30" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M 30 175 L 30 195 L 50 195" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M 370 175 L 370 195 L 350 195" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5" stroke-linecap="round"/>

          <!-- Target Reticle & Calibration Axis -->
          <circle cx="200" cy="98" r="38" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1" stroke-dasharray="4 4"/>
          <circle cx="200" cy="98" r="48" stroke="rgba(56, 189, 248, 0.12)" stroke-width="1"/>
          <line x1="150" y1="98" x2="185" y2="98" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1"/>
          <line x1="215" y1="98" x2="250" y2="98" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1"/>
          <line x1="200" y1="48" x2="200" y2="83" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1"/>
          <line x1="200" y1="113" x2="200" y2="148" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1"/>
        </svg>

        <!-- Technical Corner Annotations -->
        <div class="absolute top-3 left-4 text-[9px] font-mono text-sky-400/70 tracking-wider flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>CV_CALIB // LIVE</span>
        </div>
        <div class="absolute top-3 right-4 text-[9px] font-mono text-sky-400/70 tracking-wider">
          [ ALPR_FPS: 30 ]
        </div>

        <!-- Central Glyph & Telemetry Pill -->
        <div class="relative z-10 flex flex-col items-center">
          <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(56,189,248,0.25)] group-hover:scale-110 transition-transform duration-300">
            <i class="fa-solid fa-crosshairs"></i>
          </div>
          <span class="mt-2.5 text-[10px] font-mono tracking-wider uppercase font-semibold text-sky-200 px-3 py-0.5 rounded-full bg-sky-950/80 border border-sky-500/30 backdrop-blur-md shadow-sm">
            ALPR • Velocity Pipeline
          </span>
        </div>
      </div>
    `;
  }

  // 2. 132/33 KV GRID SUB-STATION - High-Voltage Transmission Architecture
  if (id.includes('132-33-kv') || id.includes('sub-station') || id.includes('substation')) {
    return `
      <div class="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-3.5 border border-slate-200/60 dark:border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/70 flex flex-col items-center justify-center select-none group-hover:border-amber-500/50 transition-all duration-300 shadow-inner">
        <!-- Ambient Glow -->
        <div class="absolute -top-10 -left-10 w-36 h-36 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <!-- High-Voltage Grid & Transformer Single-Line Diagram SVG -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-substation" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(245, 158, 11, 0.08)" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-substation)" />

          <!-- High-Voltage Busbars -->
          <line x1="40" y1="45" x2="360" y2="45" stroke="rgba(245, 158, 11, 0.35)" stroke-width="2"/>
          <line x1="40" y1="180" x2="360" y2="180" stroke="rgba(245, 158, 11, 0.25)" stroke-width="1.5" stroke-dasharray="6 3"/>

          <!-- Step-down transformer schematic linkage -->
          <line x1="120" y1="45" x2="120" y2="180" stroke="rgba(245, 158, 11, 0.2)" stroke-width="1"/>
          <line x1="280" y1="45" x2="280" y2="180" stroke="rgba(245, 158, 11, 0.2)" stroke-width="1"/>
          <circle cx="120" cy="112" r="14" stroke="rgba(245, 158, 11, 0.3)" stroke-width="1.5"/>
          <circle cx="120" cy="126" r="14" stroke="rgba(245, 158, 11, 0.3)" stroke-width="1.5"/>
          <circle cx="280" cy="112" r="14" stroke="rgba(245, 158, 11, 0.3)" stroke-width="1.5"/>
          <circle cx="280" cy="126" r="14" stroke="rgba(245, 158, 11, 0.3)" stroke-width="1.5"/>
        </svg>

        <!-- Technical Corner Annotations -->
        <div class="absolute top-3 left-4 text-[9px] font-mono text-amber-400/70 tracking-wider flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span>WZPDCL // 132kV BUS</span>
        </div>
        <div class="absolute top-3 right-4 text-[9px] font-mono text-amber-400/70 tracking-wider">
          [ 50Hz • SF6 PROTECTION ]
        </div>

        <!-- Central Glyph & Telemetry Pill -->
        <div class="relative z-10 flex flex-col items-center">
          <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:scale-110 transition-transform duration-300">
            <i class="fa-solid fa-tower-broadcast"></i>
          </div>
          <span class="mt-2.5 text-[10px] font-mono tracking-wider uppercase font-semibold text-amber-200 px-3 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/30 backdrop-blur-md shadow-sm">
            132kV / 33kV Step-Down Grid
          </span>
        </div>
      </div>
    `;
  }

  // 3. BHERAMARA 410MW POWER PLANT - Combined Cycle Gas & Steam Block
  if (id.includes('bheramara') || id.includes('410mw')) {
    return `
      <div class="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-3.5 border border-slate-200/60 dark:border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950/70 flex flex-col items-center justify-center select-none group-hover:border-orange-500/50 transition-all duration-300 shadow-inner">
        <!-- Ambient Glow -->
        <div class="absolute -top-10 -right-10 w-36 h-36 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <!-- Multi-Shaft Combined Cycle Turbine Diagram SVG -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-bheramara" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="0.8" fill="rgba(249, 115, 22, 0.15)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-bheramara)" />

          <!-- Gas Turbine & Generator Schematic Orbit Lines -->
          <circle cx="200" cy="98" r="54" stroke="rgba(249, 115, 22, 0.2)" stroke-width="1.2" stroke-dasharray="6 4"/>
          <circle cx="200" cy="98" r="70" stroke="rgba(6, 182, 212, 0.15)" stroke-width="1" stroke-dasharray="2 4"/>

          <!-- Thermodynamic Flow Arrows -->
          <path d="M 60 98 L 130 98" stroke="rgba(249, 115, 22, 0.3)" stroke-width="1.5" stroke-dasharray="4 2"/>
          <path d="M 270 98 L 340 98" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1.5" stroke-dasharray="4 2"/>
        </svg>

        <!-- Technical Corner Annotations -->
        <div class="absolute top-3 left-4 text-[9px] font-mono text-orange-400/70 tracking-wider flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
          <span>CCPP // DUAL_SHAFT</span>
        </div>
        <div class="absolute top-3 right-4 text-[9px] font-mono text-cyan-400/70 tracking-wider">
          [ 230kV SYNC • HRSG ]
        </div>

        <!-- Central Glyph & Telemetry Pill -->
        <div class="relative z-10 flex flex-col items-center">
          <div class="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-400/30 text-orange-400 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(249,115,22,0.25)] group-hover:scale-110 transition-transform duration-300">
            <i class="fa-solid fa-gears"></i>
          </div>
          <span class="mt-2.5 text-[10px] font-mono tracking-wider uppercase font-semibold text-orange-200 px-3 py-0.5 rounded-full bg-orange-950/80 border border-orange-500/30 backdrop-blur-md shadow-sm">
            410MW Combined Cycle Block
          </span>
        </div>
      </div>
    `;
  }

  // 4. IEEE BD SECTION SYW IDEA PITCHING - National Champion Crest
  if (id.includes('ieee-syw') || id.includes('syw')) {
    return `
      <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border border-amber-300/40 dark:border-amber-500/20 bg-gradient-to-br from-slate-950 via-amber-950/50 to-slate-900 flex flex-col items-center justify-center select-none group-hover:border-amber-400/60 transition-all duration-300 shadow-inner">
        <!-- Ambient Gold Glow -->
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/25 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute -bottom-10 -left-10 w-36 h-36 bg-amber-600/15 rounded-full blur-2xl pointer-events-none"></div>

        <!-- Championship Diamond Mesh SVG -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-syw" width="26" height="26" patternUnits="userSpaceOnUse">
              <path d="M 13 0 L 26 13 L 13 26 L 0 13 Z" fill="none" stroke="rgba(251, 191, 36, 0.08)" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-syw)" />

          <!-- Laurel Radiance Halo -->
          <circle cx="200" cy="98" r="44" stroke="rgba(251, 191, 36, 0.25)" stroke-width="1.5" stroke-dasharray="4 4"/>
          <circle cx="200" cy="98" r="58" stroke="rgba(251, 191, 36, 0.12)" stroke-width="1"/>
        </svg>

        <!-- Technical Corner Annotations -->
        <div class="absolute top-3 left-4 text-[9px] font-mono text-amber-300/80 tracking-wider flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping"></span>
          <span>CHAMPION // BD SECTION</span>
        </div>
        <div class="absolute top-3 right-4 text-[9px] font-mono text-amber-300/80 tracking-wider">
          [ 1ST PLACE NATIONWIDE ]
        </div>

        <!-- Central Glyph & Championship Pill -->
        <div class="relative z-10 flex flex-col items-center">
          <div class="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-300/40 text-amber-300 flex items-center justify-center text-xl shadow-[0_0_25px_rgba(251,191,36,0.35)] group-hover:scale-110 transition-transform duration-300">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <span class="mt-2.5 text-[10px] font-mono tracking-wider uppercase font-bold text-amber-100 px-3 py-0.5 rounded-full bg-amber-950/85 border border-amber-400/50 backdrop-blur-md shadow-sm">
            National Champion • Team Dynamite
          </span>
        </div>
      </div>
    `;
  }

  // 5. INDCON 2025 - Technical Presentation Contest
  if (id.includes('indcon')) {
    return `
      <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border border-slate-200/60 dark:border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/70 flex flex-col items-center justify-center select-none group-hover:border-indigo-500/50 transition-all duration-300 shadow-inner">
        <!-- Ambient Glow -->
        <div class="absolute -top-10 -right-10 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <!-- Acoustic & Presentation Telemetry SVG -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-indcon" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 0 12 L 24 12" fill="none" stroke="rgba(129, 140, 248, 0.08)" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-indcon)" />

          <!-- Presentation Podium Soundwave Waveforms -->
          <path d="M 60 98 Q 100 68 140 98 T 200 98 T 260 98 T 340 98" fill="none" stroke="rgba(129, 140, 248, 0.25)" stroke-width="1.5"/>
          <path d="M 80 98 Q 120 128 160 98 T 240 98 T 320 98" fill="none" stroke="rgba(168, 85, 247, 0.2)" stroke-width="1"/>
        </svg>

        <!-- Technical Corner Annotations -->
        <div class="absolute top-3 left-4 text-[9px] font-mono text-indigo-400/70 tracking-wider flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          <span>PRESENTATION // DEFENSE</span>
        </div>
        <div class="absolute top-3 right-4 text-[9px] font-mono text-indigo-400/70 tracking-wider">
          [ 2ND RUNNER-UP ]
        </div>

        <!-- Central Glyph & Telemetry Pill -->
        <div class="relative z-10 flex flex-col items-center">
          <div class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-400/30 text-indigo-400 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(99,102,241,0.25)] group-hover:scale-110 transition-transform duration-300">
            <i class="fa-solid fa-microphone-lines"></i>
          </div>
          <span class="mt-2.5 text-[10px] font-mono tracking-wider uppercase font-semibold text-indigo-200 px-3 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 backdrop-blur-md shadow-sm">
            Technical Presentation Defense
          </span>
        </div>
      </div>
    `;
  }

  // 6. CANVA WORKSHOP - Honorary Speaker Masterclass
  if (id.includes('canva') || id.includes('skill-expedition')) {
    return `
      <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border border-slate-200/60 dark:border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/70 flex flex-col items-center justify-center select-none group-hover:border-teal-500/50 transition-all duration-300 shadow-inner">
        <!-- Ambient Glow -->
        <div class="absolute -top-10 -left-10 w-36 h-36 bg-teal-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <!-- Creative Vector Canvas & Layers SVG -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-canva" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="1" fill="rgba(20, 184, 166, 0.12)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-canva)" />

          <!-- Vector Anchor Points & Bezier Curves -->
          <path d="M 80 140 C 140 40, 260 40, 320 140" fill="none" stroke="rgba(20, 184, 166, 0.25)" stroke-width="1.5"/>
          <circle cx="80" cy="140" r="3" fill="rgba(20, 184, 166, 0.5)"/>
          <circle cx="200" cy="65" r="3" fill="rgba(6, 182, 212, 0.5)"/>
          <circle cx="320" cy="140" r="3" fill="rgba(20, 184, 166, 0.5)"/>
        </svg>

        <!-- Technical Corner Annotations -->
        <div class="absolute top-3 left-4 text-[9px] font-mono text-teal-400/70 tracking-wider flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
          <span>EXPEDITION // MASTERCLASS</span>
        </div>
        <div class="absolute top-3 right-4 text-[9px] font-mono text-teal-400/70 tracking-wider">
          [ HONORARY SPEAKER CREST ]
        </div>

        <!-- Central Glyph & Telemetry Pill -->
        <div class="relative z-10 flex flex-col items-center">
          <div class="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-400/30 text-teal-400 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(20,184,166,0.25)] group-hover:scale-110 transition-transform duration-300">
            <i class="fa-solid fa-palette"></i>
          </div>
          <span class="mt-2.5 text-[10px] font-mono tracking-wider uppercase font-semibold text-teal-200 px-3 py-0.5 rounded-full bg-teal-950/80 border border-teal-500/30 backdrop-blur-md shadow-sm">
            Graphic Design Masterclass
          </span>
        </div>
      </div>
    `;
  }

  // Generic High-Tech Blueprint Fallback (Safe guard for any future entries)
  return `
    <div class="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-3.5 border border-slate-200/60 dark:border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-950/70 flex flex-col items-center justify-center select-none group-hover:border-brand-500/50 transition-all duration-300 shadow-inner">
      <div class="absolute -top-10 -right-10 w-36 h-36 bg-brand-500/20 rounded-full blur-2xl pointer-events-none"></div>
      <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-default" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" stroke-width="0.5" class="text-brand-500"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-default)" />
      </svg>
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-400/30 text-brand-400 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(20,184,166,0.25)] group-hover:scale-110 transition-transform duration-300">
          <i class="${item.icon || 'fa-solid fa-microchip'}"></i>
        </div>
        <span class="mt-2.5 text-[10px] font-mono tracking-wider uppercase font-semibold text-brand-200 px-3 py-0.5 rounded-full bg-brand-950/80 border border-brand-500/30 backdrop-blur-md shadow-sm">
          ${item.badge || item.category || 'Technical Program'}
        </span>
      </div>
    </div>
  `;
}
