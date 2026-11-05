import { getThemedHeaderMarkup } from './cardBanners.js';

export function renderSpeaking(speakingItems, targetElementId) {
  const container = document.getElementById(targetElementId);
  if (!container) return;

  container.innerHTML = speakingItems.map((item, idx) => {
    const numIndex = String(idx + 1).padStart(2, '0');

    // Media block: 16:9 image or bespoke themed engineering banner
    const mediaBlock = item.media
      ? `
        <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-200/60 dark:border-white/10 flex items-center justify-center">
          <img 
            src="${item.media}" 
            alt="${item.mediaAlt || item.title}" 
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end justify-between p-3 pointer-events-none">
            <span class="text-[10px] font-mono font-semibold text-white flex items-center gap-1.5 drop-shadow">
              <i class="fa-solid fa-camera-retro text-brand-400"></i> ${item.photoCount || 'Photos'}
            </span>
            <span class="text-[9px] font-mono text-white/95 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/20 flex items-center gap-1">
              <span>Case Study</span> <i class="fa-solid fa-arrow-right text-[8px]"></i>
            </span>
          </div>
        </div>
      `
      : getThemedHeaderMarkup(item, 'speaking');

    const tagPills = (item.tags || [])
      .map(tag => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300 whitespace-nowrap">${tag}</span>`)
      .join('');

    const cursorClass = item.caseStudyUrl ? 'cursor-pointer group' : '';
    const dataUrlAttr = item.caseStudyUrl ? `data-url="${item.caseStudyUrl}"` : '';

    return `
      <div class="speaking-card ${cursorClass} p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-surface-card/60 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between" ${dataUrlAttr}>
        <div>
          ${mediaBlock}

          <div class="flex items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-2 min-w-0">
              <span class="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 shrink-0">${numIndex}</span>
              <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border font-semibold truncate flex items-center gap-1.5 bg-brand-500/10 text-brand-700 dark:text-brand-300 border-brand-300/40 dark:border-brand-800/40 shadow-sm">
                <i class="${item.icon} text-[10px]"></i> ${item.role}
              </span>
            </div>
            <span class="text-xs font-mono text-slate-400 shrink-0">${item.date}</span>
          </div>

          <h3 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-1 flex items-center gap-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition leading-snug">
            ${item.title}
            <i class="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition text-brand-600 dark:text-brand-400"></i>
          </h3>

          <p class="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-chalkboard-user text-[11px] shrink-0"></i>
            <span>${item.event}</span>
          </p>

          <p class="text-xs text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
            <i class="fa-solid fa-location-dot text-brand-500 text-[11px] shrink-0"></i>
            <span class="truncate">${item.venue}</span>
          </p>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            ${item.description}
          </p>

          <div class="flex flex-wrap gap-1.5 mb-4">
            ${tagPills}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 gap-2">
          <span class="text-[11px] font-mono flex items-center gap-1.5 text-slate-500 dark:text-slate-400 truncate">
            <i class="fa-solid fa-camera-retro text-brand-500/80 shrink-0"></i> ${item.photoCount || 'Documented'}
          </span>
          <span class="font-semibold text-brand-600 dark:text-brand-400 group-hover:text-brand-500 flex items-center gap-1.5 text-xs transition shrink-0">
            Explore Study <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition"></i>
          </span>
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
        } else {
          window.location.href = url;
        }
      });
    }
  });
}
