import { getThemedHeaderMarkup } from './cardBanners.js';

export function renderSpeaking(speakingItems, targetElementId) {
  const container = document.getElementById(targetElementId);
  if (!container) return;

  container.innerHTML = speakingItems.map((item, idx) => {
    const numIndex = String(idx + 1).padStart(2, '0');

    // 16:9 full aspect ratio cover image matching project-expand-card
    const mediaBlock = item.media
      ? `
        <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-white/10 shadow-sm mb-2.5 shrink-0">
          <img 
            src="${item.media}" 
            alt="${item.mediaAlt || item.title}" 
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
            <span class="text-[10px] font-mono font-semibold text-white/95 flex items-center gap-1.5 drop-shadow">
              <i class="fa-solid fa-camera-retro text-brand-400"></i> ${item.photoCount || 'Photos'}
            </span>
          </div>
        </div>
      `
      : getThemedHeaderMarkup(item, 'speaking');

    const tagPills = (item.tags || [])
      .slice(0, 4)
      .map(tag => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300 whitespace-nowrap">${tag}</span>`)
      .join('');

    const cursorClass = item.caseStudyUrl ? 'cursor-pointer group' : '';
    const dataUrlAttr = item.caseStudyUrl ? `data-url="${item.caseStudyUrl}"` : '';

    return `
      <div class="speaking-card ${cursorClass} relative rounded-3xl p-5 flex flex-col justify-between overflow-hidden
                  bg-white/50 dark:bg-[#151824]/60 backdrop-blur-2xl
                  border border-slate-200/80 dark:border-white/[0.08]
                  hover:border-brand-500/50 dark:hover:border-brand-500/50
                  hover:bg-white/95 dark:hover:bg-[#181c2c]
                  shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
                  hover:shadow-[0_20px_50px_rgba(13,148,136,0.18)] dark:hover:shadow-[0_20px_50px_rgba(13,148,136,0.22)]
                  hover:-translate-y-1 transition-all duration-300" ${dataUrlAttr}>
        
        <!-- Subtle Ambient Glow on Hover -->
        <div class="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div class="relative z-10 flex flex-col flex-1 min-h-0 justify-between">
          <div>
            ${mediaBlock}

            <div class="flex items-center justify-between gap-2 mt-1 mb-1.5">
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

            <p class="text-[11px] text-slate-500 dark:text-slate-400 mb-2 truncate flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-brand-500 text-[10px] shrink-0"></i>
              <span class="truncate">${item.venue}</span>
            </p>

            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3 line-clamp-3">
              ${item.shortSummary || item.description}
            </p>

            <div class="flex flex-wrap gap-1.5 mb-3">
              ${tagPills}
            </div>
          </div>

          <div class="pt-3 border-t border-slate-200/70 dark:border-white/[0.08] shrink-0 mt-auto flex items-center justify-between text-xs">
            <span class="text-[11px] font-mono flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <i class="fa-solid fa-camera-retro text-brand-500/80 shrink-0"></i> ${item.photoCount || 'Documented'}
            </span>
            <span class="font-semibold text-brand-600 dark:text-brand-400 group-hover:text-brand-500 flex items-center gap-1.5 text-xs transition shrink-0">
              Explore Case Study <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition"></i>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach card click handlers for navigation
  container.querySelectorAll('.speaking-card').forEach(card => {
    const url = card.dataset.url;
    if (url) {
      card.addEventListener('click', (e) => {
        const clickedAnchor = e.target.closest('a');
        if (clickedAnchor && clickedAnchor.getAttribute('href') !== url) return;
        if (e.metaKey || e.ctrlKey) {
          window.open(url, '_blank');
        } else if (window.navigateToProject) {
          window.navigateToProject(url);
        } else {
          window.location.href = url;
        }
      });
    }
  });
}
