export function renderProjects(projects, targetElementId) {
  const container = document.getElementById(targetElementId);
  if (!container) return;

  container.innerHTML = projects.map(project => {
    const mediaBlock = project.media 
      ? `
        <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-800">
          <img 
            src="${project.media}" 
            alt="${project.mediaAlt || project.title}" 
            loading="lazy"
            onerror="this.parentElement.style.display='none'"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      `
      : '';

    const actionLink = project.githubUrl 
      ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-500 flex items-center gap-1.5 transition">
          <i class="fa-brands fa-github"></i> View Repo <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      `
      : `
        <span class="font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
          <i class="fa-solid fa-circle-check"></i> Complete
        </span>
      `;

    const tagPills = project.tags
      .map(tag => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">${tag}</span>`)
      .join('');

    return `
      <div class="group bg-white dark:bg-surface-card rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-brand-500/50 hover:shadow-lg transition duration-300">
        <div>
          ${mediaBlock}
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2.5 py-0.5 rounded border border-brand-200 dark:border-brand-800/40">
              ${project.category}
            </span>
            <span class="text-xs font-mono text-slate-400">${project.year}</span>
          </div>

          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">
            ${project.title}
          </h3>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            ${project.description}
          </p>

          <div class="flex flex-wrap gap-1.5 mb-6">
            ${tagPills}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
          ${actionLink}
          <span class="text-slate-400 font-mono text-[11px]">${project.badgeText}</span>
        </div>
      </div>
    `;
  }).join('');
}