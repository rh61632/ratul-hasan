export function renderPosters(posters, targetElementId) {
  const container = document.getElementById(targetElementId);
  if (!container) return;

  container.innerHTML = posters.map(poster => {
    const isLandscape = poster.orientation === 'landscape';
    const aspectClass = isLandscape ? 'aspect-[4/3] sm:aspect-[16/10]' : 'aspect-[3/4] sm:aspect-[4/5]';

    const cardBorder = poster.isWinner
      ? 'border-amber-400/40 dark:border-amber-500/30 ring-amber-400/20 dark:ring-amber-500/10 hover:border-amber-500/60 shadow-[0_8px_32px_rgba(245,158,11,0.08)] dark:shadow-[0_8px_32px_rgba(245,158,11,0.15)]'
      : 'border-white/40 dark:border-white/[0.08] ring-white/20 dark:ring-white/[0.05] hover:border-brand-500/50 shadow-[0_8px_32px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgb(0,0,0,0.35)]';

    const awardBadge = poster.isWinner && poster.awardUrl
      ? `<div class="mb-3">
           <a href="${poster.awardUrl}" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/50 hover:bg-amber-500/20 transition shadow-sm group/award">
             <i class="fa-solid fa-trophy text-amber-500 text-xs"></i>
             <span>${poster.awardWon}</span>
             <i class="fa-solid fa-arrow-right text-[10px] group-hover/award:translate-x-0.5 transition"></i>
           </a>
         </div>`
      : '';

    const awardBtn = poster.awardUrl
      ? `<a href="${poster.awardUrl}" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-amber-800 dark:text-amber-200 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 dark:border-amber-700/40 transition flex items-center gap-1.5 shadow-sm" title="View Competition Win Case Study">
           <i class="fa-solid fa-trophy text-amber-500 text-xs"></i>
           <span>Competition Win</span>
         </a>`
      : '';

    const caseStudyBtn = poster.caseStudyUrl
      ? `<a href="${poster.caseStudyUrl}" class="px-3 py-1.5 rounded-xl text-xs font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-50/60 dark:hover:bg-brand-950/40 border border-brand-300/40 dark:border-brand-800/40 transition flex items-center gap-1.5 shadow-sm">
           <span>Case Study</span>
           <i class="fa-solid fa-arrow-right text-[10px]"></i>
         </a>`
      : '';

    const tagPills = poster.tags
      .slice(0, 5)
      .map(tag => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300">${tag}</span>`)
      .join('');

    const highlightsList = poster.highlights
      .map(item => `
        <li class="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <i class="fa-solid fa-circle-check text-brand-500 text-[11px] mt-0.5 shrink-0"></i>
          <span>${item}</span>
        </li>
      `)
      .join('');

    return `
      <div class="poster-card group bg-white/30 dark:bg-slate-900/30 backdrop-blur-2xl rounded-3xl border ${cardBorder} ring-1 p-6 sm:p-7 flex flex-col justify-between hover:bg-white/40 dark:hover:bg-slate-900/40 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
        ${poster.isWinner ? '<div class="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none"></div>' : ''}
        <div>
          <!-- Poster Preview Thumbnail with Expand Trigger -->
          <div class="relative w-full ${aspectClass} rounded-2xl overflow-hidden mb-5 bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-center justify-center group/preview cursor-pointer" data-poster-id="${poster.id}" title="Click to view full poster">
            <img 
              src="${poster.thumbUrl}" 
              alt="${poster.shortTitle}" 
              loading="lazy"
              class="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover/preview:scale-[1.02]"
            />
            <!-- Ambient Overlay Pill -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <span class="px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-semibold font-display shadow-lg flex items-center gap-2 transform translate-y-2 group-hover/preview:translate-y-0 transition-transform">
                <i class="fa-solid fa-expand text-brand-500"></i> View Full Poster
              </span>
            </div>
            <!-- Format Badge -->
            <div class="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white uppercase tracking-wider">
              ${isLandscape ? 'Landscape' : 'Portrait'}
            </div>
          </div>

          ${awardBadge}

          <!-- Metadata Header -->
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-500/10 dark:bg-brand-950/60 px-2.5 py-0.5 rounded border border-brand-300/40 dark:border-brand-800/40 shadow-sm">
              ${poster.category}
            </span>
            <span class="text-xs font-mono text-slate-400">${poster.year}</span>
          </div>

          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5 font-display leading-snug">
            ${poster.title}
          </h3>

          <div class="text-xs text-slate-500 dark:text-slate-400 font-mono mb-3 flex items-center gap-1.5">
            <i class="fa-solid fa-user-pen text-brand-500 text-[10px]"></i>
            <span>${poster.authors} &bull; ${poster.affiliation}</span>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-justify">
            ${poster.summary}
          </p>

          <!-- Core Innovations Bullet Points -->
          <div class="mb-5 p-4 rounded-xl bg-white/40 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/10 space-y-2">
            <span class="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider block">KEY HIGHLIGHTS</span>
            <ul class="space-y-1.5">
              ${highlightsList}
            </ul>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${tagPills}
          </div>
        </div>

        <!-- Footer Action Buttons -->
        <div class="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-2">
            <button class="open-poster-btn px-3.5 py-1.5 rounded-xl font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-brand-600 dark:hover:bg-brand-600 transition flex items-center gap-1.5 shadow-sm" data-poster-id="${poster.id}">
              <i class="fa-solid fa-expand text-xs"></i> View Full
            </button>
            <a href="${poster.pdfUrl}" target="_blank" rel="noopener noreferrer" download class="px-3.5 py-1.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition flex items-center gap-1.5 shadow-sm" title="Download original PDF">
              <i class="fa-solid fa-file-pdf text-rose-500"></i> PDF
            </a>
          </div>
          <div class="flex items-center gap-2">
            ${awardBtn}
            ${caseStudyBtn}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach Lightbox Modal Trigger Handlers
  container.querySelectorAll('[data-poster-id]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      // Don't trigger if clicked on download anchor or case study anchor
      if (e.target.closest('a')) return;
      const posterId = elem.getAttribute('data-poster-id');
      const poster = posters.find(p => p.id === posterId);
      if (poster) {
        openPosterModal(poster);
      }
    });
  });
}

// Global Poster Lightbox Modal Management
function openPosterModal(poster) {
  let modal = document.getElementById('posterModal');
  if (!modal) {
    modal = createPosterModal();
  }

  const modalImg = document.getElementById('posterModalImg');
  const modalTitle = document.getElementById('posterModalTitle');
  const modalAuthors = document.getElementById('posterModalAuthors');
  const modalDownload = document.getElementById('posterModalDownload');

  modalImg.src = poster.fullImageUrl;
  modalImg.alt = poster.title;
  modalTitle.textContent = poster.title;
  modalAuthors.textContent = `${poster.authors} • ${poster.affiliation} (${poster.year})`;
  modalDownload.href = poster.pdfUrl;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function createPosterModal() {
  const modal = document.createElement('div');
  modal.id = 'posterModal';
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-xl transition-all duration-300';
  modal.innerHTML = `
    <div class="relative w-full max-w-7xl h-[94vh] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <!-- Modal Header Bar -->
      <div class="px-5 py-3.5 border-b border-white/10 flex items-center justify-between gap-4 bg-slate-950/80 backdrop-blur-md">
        <div class="min-w-0">
          <h4 id="posterModalTitle" class="text-sm sm:text-base font-bold font-display text-white truncate"></h4>
          <p id="posterModalAuthors" class="text-xs font-mono text-slate-400 truncate"></p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <a id="posterModalDownload" href="#" target="_blank" rel="noopener noreferrer" download class="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition flex items-center gap-1.5">
            <i class="fa-solid fa-download"></i> Download PDF
          </a>
          <button id="closePosterModalBtn" aria-label="Close Poster View" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-rose-600 hover:text-white transition flex items-center justify-center text-slate-300">
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>
      </div>

      <!-- Poster Image Display Container -->
      <div class="flex-1 w-full overflow-auto p-4 flex items-center justify-center bg-black/50 select-none">
        <img id="posterModalImg" src="" alt="Poster Full" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-200">
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close handlers
  const closeBtn = modal.querySelector('#closePosterModalBtn');
  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  return modal;
}
