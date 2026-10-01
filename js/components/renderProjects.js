export function renderProjects(projects, targetElementId) {
  const container = document.getElementById(targetElementId);
  if (!container) return;

  const defaultProjectCover = "assets/images/thumbnails/default-project.jpg";

  container.innerHTML = projects.map(project => {
    // 16:9 beautifully rounded cover image matching competition cards, with default fallback
    const imageSrc = project.media || defaultProjectCover;
    const mediaBlock = `
      <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-800 flex items-center justify-center">
        <img 
          src="${imageSrc}" 
          alt="${project.mediaAlt || project.title}" 
          loading="lazy"
          onerror="this.src='${defaultProjectCover}'"
          class="w-full h-full object-cover"
        />
      </div>
    `;

    // Title links to dedicated case study if available
    const titleHeader = project.caseStudyUrl
      ? `<a href="${project.caseStudyUrl}" class="group-hover:text-brand-600 transition inline-block">
           <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 font-display flex items-center gap-2">
             ${project.title} <i class="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition"></i>
           </h3>
         </a>`
      : `<h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">${project.title}</h3>`;

    // Action button links: View Repo + Case Study
    const primaryLink = project.caseStudyUrl
      ? `<span class="font-semibold text-brand-600 dark:text-brand-400 group-hover:text-brand-500 flex items-center gap-1.5 transition">
           Case Study <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition"></i>
         </span>`
      : `<span class="font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
           <i class="fa-solid fa-circle-check"></i> Complete
         </span>`;

    const repoLink = project.githubUrl
      ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="relative z-20 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition" title="GitHub Repository">
           <i class="fa-brands fa-github text-base"></i>
         </a>`
      : "";

    const tagPills = project.tags
      .map(tag => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300">${tag}</span>`)
      .join("");

    const cursorClass = project.caseStudyUrl ? "cursor-pointer" : "cursor-default";
    const dataUrlAttr = project.caseStudyUrl ? `data-url="${project.caseStudyUrl}"` : "";

    // Entire card lifts up smoothly on hover and indicates clickability
    return `
      <div class="project-card group bg-white/30 dark:bg-slate-900/30 backdrop-blur-2xl rounded-2xl border border-white/40 dark:border-white/[0.08] ring-1 ring-white/20 dark:ring-white/[0.05] p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_32px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgb(0,0,0,0.35)] hover:bg-white/40 dark:hover:bg-slate-900/40 hover:border-brand-500/50 hover:shadow-[0_12px_36px_0_rgba(234,88,12,0.12)] hover:-translate-y-1.5 transition-all duration-300 ${cursorClass}" ${dataUrlAttr}>
        <div>
          ${mediaBlock}
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-500/10 dark:bg-brand-950/60 px-2.5 py-0.5 rounded border border-brand-300/40 dark:border-brand-800/40 shadow-sm">
              ${project.category}
            </span>
            <span class="text-xs font-mono text-slate-400">${project.year}</span>
          </div>

          ${titleHeader}

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            ${project.description}
          </p>

          <div class="flex flex-wrap gap-1.5 mb-6">
            ${tagPills}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between text-xs">
          <div class="flex items-center gap-3">
            ${primaryLink}
            ${repoLink}
          </div>
          <span class="text-slate-400 font-mono text-[11px]">${project.badgeText}</span>
        </div>
      </div>
    `;
  }).join("");

  // Attach card-level click handler so clicking anywhere on the card navigates to the detailed page
  container.querySelectorAll(".project-card").forEach(card => {
    const url = card.dataset.url;
    if (url) {
      card.addEventListener("click", (e) => {
        // If clicking secondary interactive elements like GitHub repository link, allow it without navigating card
        const clickedAnchor = e.target.closest("a");
        if (clickedAnchor && clickedAnchor.getAttribute("href") !== url) {
          return;
        }

        // Support opening in new tab via Cmd/Ctrl + Click
        if (e.metaKey || e.ctrlKey) {
          window.open(url, "_blank");
        } else {
          window.location.href = url;
        }
      });
    }
  });
}
