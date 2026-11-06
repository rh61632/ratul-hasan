import { getThemedHeaderMarkup } from './cardBanners.js';

export function renderSpeaking(speakingItems, targetElementId) {
  const container = document.getElementById(targetElementId);
  if (!container) return;

  container.className = "speaking-expand-container";

  container.innerHTML = speakingItems.map((item, idx) => {
    const numIndex = String(idx + 1).padStart(2, '0');

    // 16:9 full aspect ratio cover image that is always properly proportioned
    const mediaBlock = item.media
      ? `
        <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-white/10 shadow-sm mb-2 shrink-0">
          <img 
            src="${item.media}" 
            alt="${item.mediaAlt || item.title}" 
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-40"></div>
        </div>
      `
      : getThemedHeaderMarkup(item, 'speaking');

    // Action buttons for expanded view
    const primaryLink = item.caseStudyUrl
      ? `<a href="${item.caseStudyUrl}" class="speaking-action-link inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-sm transition">
           <span>Case Study</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
         </a>`
      : `<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400">
           <i class="fa-solid fa-circle-check"></i> Documented
         </span>`;

    // Tags
    const tagPills = (item.tags || [])
      .slice(0, 4)
      .map(tag => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300 whitespace-nowrap">${tag}</span>`)
      .join('');

    return `
      <div class="speaking-expand-card group relative rounded-3xl p-5 flex flex-col justify-between overflow-hidden cursor-pointer
                  bg-white/50 dark:bg-[#151824]/60 backdrop-blur-2xl
                  border border-slate-200/80 dark:border-white/[0.08]
                  hover:border-brand-500/50 dark:hover:border-brand-500/50
                  hover:bg-white/95 dark:hover:bg-[#181c2c]
                  shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
                  hover:shadow-[0_20px_50px_rgba(13,148,136,0.18)] dark:hover:shadow-[0_20px_50px_rgba(13,148,136,0.22)]
                  transition-all duration-500"
           data-url="${item.caseStudyUrl || ''}"
           data-index="${idx}">

        <!-- Subtle Ambient Glow -->
        <div class="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <!-- Upper Content Body: flex-1 flex flex-col justify-between min-h-0 overflow-hidden (Strictly quarantined from footer) -->
        <div class="relative z-10 flex flex-col flex-1 min-h-0 justify-between overflow-hidden">
          
          <!-- Top Area: Image, Badges, Title, Venue -->
          <div class="shrink-0">
            ${mediaBlock}

            <div class="flex items-center justify-between gap-2 mt-1 mb-1">
              <div class="flex items-center gap-1.5 min-w-0">
                <span class="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 shrink-0">${numIndex}</span>
                <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 font-semibold truncate flex items-center gap-1">
                  <i class="${item.icon} text-[10px]"></i> ${item.role}
                </span>
              </div>
              <span class="text-[11px] font-mono text-slate-400 shrink-0">${item.date}</span>
            </div>

            <h3 class="text-base font-bold font-display text-slate-900 dark:text-white leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2 mb-1">
              ${item.title}
            </h3>

            <p class="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-0.5 truncate flex items-center gap-1.5">
              <i class="fa-solid fa-chalkboard-user text-[11px] shrink-0"></i>
              <span class="truncate">${item.event}</span>
            </p>

            <p class="text-[11px] text-slate-500 dark:text-slate-400 mb-1 truncate flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-brand-500 text-[10px] shrink-0"></i>
              <span class="truncate">${item.venue}</span>
            </p>
          </div>

          <!-- Middle Area: Main Speaking Summary & Tags -->
          <div class="flex flex-col justify-start flex-1 min-h-0 overflow-hidden my-0.5">
            <!-- Collapsed summary -->
            <p class="speaking-summary-collapsed text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              ${item.shortSummary || item.description}
            </p>

            <!-- Expanded summary -->
            <p class="speaking-summary-expanded text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              ${item.description}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 shrink-0 mt-auto">
              ${tagPills}
            </div>
          </div>
        </div>

        <!-- Bottom Fixed Footer: Anchored with border-t, shrink-0, NEVER overlaps -->
        <div class="relative z-10 pt-3 border-t border-slate-200/70 dark:border-white/[0.08] shrink-0 mt-2">
          <!-- Collapsed Minimal Footer -->
          <div class="card-collapsed-footer flex items-center justify-between text-xs font-mono text-slate-400">
            <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <i class="fa-solid fa-camera-retro text-brand-500/80 shrink-0"></i> ${item.photoCount || 'Documented'}
            </span>
            <span class="flex items-center gap-1 text-brand-600 dark:text-brand-400 font-semibold text-[11px] group-hover:translate-x-1 transition-transform">
              <span>Explore</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </span>
          </div>

          <!-- Expanded Rich Footer with Buttons -->
          <div class="card-expanded-footer flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              ${primaryLink}
            </div>
            <span class="text-[11px] font-mono text-slate-400 hidden sm:inline flex items-center gap-1">
              <i class="fa-solid fa-camera-retro text-brand-500/80"></i> ${item.photoCount || item.date}
            </span>
          </div>
        </div>

      </div>
    `;
  }).join('');

  // Attach card-level click and touch handlers
  const cards = container.querySelectorAll(".speaking-expand-card");
  cards.forEach(card => {
    const url = card.dataset.url;
    card.addEventListener("click", (e) => {
      if (e.target.closest("a") || e.target.closest(".speaking-action-link")) {
        return;
      }
      if (window.innerWidth >= 1024) {
        if (url) {
          if (window.navigateToProject) {
            window.navigateToProject(url);
          } else {
            window.location.href = url;
          }
        }
      } else {
        const wasActive = card.classList.contains("is-active");
        cards.forEach(c => c.classList.remove("is-active"));
        if (!wasActive) {
          card.classList.add("is-active");
        } else if (url) {
          if (window.navigateToProject) {
            window.navigateToProject(url);
          } else {
            window.location.href = url;
          }
        }
      }
    });
  });
}
