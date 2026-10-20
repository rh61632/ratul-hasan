import { initThemeToggle } from './theme.js';
import { projectsData } from './data/projects.js';
import { renderProjects } from './components/renderProjects.js';
import { awardsData } from './data/awards.js';
import { experienceData } from './data/experience.js';
import { auditData, trainingCourses, industrialVisits } from './data/training.js';

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  initThemeToggle();

  // Render Projects (Cards with Image/GIF Support)
  renderProjects(projectsData, 'projects-grid');

  // Render Awards & Competitions (Cards with Picture/Media Support and default placeholder)
  const awardsContainer = document.getElementById('awards-grid');
  if (awardsContainer) {
    awardsContainer.innerHTML = awardsData.map(award => {
      const defaultAwardCover = 'assets/images/thumbnails/default-award.jpg';
      const imageSrc = award.media || defaultAwardCover;
      const mediaBlock = `
        <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-800 flex items-center justify-center">
          <img 
            src="${imageSrc}" 
            alt="${award.mediaAlt || award.title}" 
            loading="lazy"
            onerror="this.src='assets/images/thumbnails/default-award.jpg'"
            class="w-full h-full object-cover"
          />
        </div>
      `;

      const championDecoration = award.isChampion
        ? `<div class="absolute top-0 right-0 w-20 h-20 bg-brand-500/10 rounded-bl-full pointer-events-none"></div>`
        : '';

      const borderStyle = award.isChampion
        ? 'border-brand-200/50 dark:border-brand-900/40'
        : 'border-white/40 dark:border-white/[0.08]';

      const cursorClass = award.caseStudyUrl ? 'cursor-pointer' : '';
      const dataUrlAttr = award.caseStudyUrl ? `data-url="${award.caseStudyUrl}"` : '';

      const titleMarkup = award.caseStudyUrl
        ? `<h3 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-2">
             ${award.title} <i class="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition"></i>
           </h3>`
        : `<h3 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">${award.title}</h3>`;

      const footerExtra = award.caseStudyUrl
        ? `<span class="font-semibold text-brand-600 dark:text-brand-400 group-hover:text-brand-500 flex items-center gap-1.5 text-xs transition">
             Details <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition"></i>
           </span>`
        : '';

      return `
        <div class="award-card group p-6 rounded-2xl bg-white/30 dark:bg-slate-900/30 backdrop-blur-2xl border ${borderStyle} ring-1 ring-white/20 dark:ring-white/[0.05] shadow-[0_8px_32px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgb(0,0,0,0.35)] hover:bg-white/40 dark:hover:bg-slate-900/40 hover:border-brand-500/50 hover:shadow-[0_12px_36px_0_rgba(234,88,12,0.12)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${cursorClass}" ${dataUrlAttr}>
          ${championDecoration}
          <div>
            ${mediaBlock}
            <div class="flex items-center gap-2 text-brand-600 dark:text-brand-400 mb-2">
              <i class="${award.icon} text-base"></i>
              <span class="text-xs font-mono font-bold uppercase tracking-wider">${award.rank}</span>
            </div>
            ${titleMarkup}
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              ${award.event}
            </p>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              ${award.description}
            </p>
          </div>
          <div class="mt-5 pt-3 border-t border-slate-200/70 dark:border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
            <span>${award.date}</span>
            ${footerExtra}
          </div>
        </div>
      `;
    }).join('');

    // Attach click handlers for award cards with case study URLs
    awardsContainer.querySelectorAll('.award-card').forEach(card => {
      const url = card.dataset.url;
      if (url) {
        card.addEventListener('click', (e) => {
          const clickedAnchor = e.target.closest('a');
          if (clickedAnchor) return;
          if (e.metaKey || e.ctrlKey) {
            window.open(url, '_blank');
          } else {
            window.location.href = url;
          }
        });
      }
    });
  }

  // Render Experience
  const expContainer = document.getElementById('experience-list');
  if (expContainer) {
    expContainer.innerHTML = experienceData.map(exp => `
      <div class="p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-surface-card/60 backdrop-blur-xl border border-white/80 dark:border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-brand-500/40 hover:-translate-y-0.5 transition-all duration-300">
        <div class="space-y-2.5 max-w-3xl">
          <div>
            <h3 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">${exp.title}</h3>
            <p class="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400">${exp.organization}</p>
          </div>
          <ul class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
            ${exp.highlights.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <span class="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300 whitespace-nowrap self-start shadow-sm">
          ${exp.period}
        </span>
      </div>
    `).join('');
  }

  // Render Energy Audit Feature Card
  const auditContainer = document.getElementById('audit-card');
  if (auditContainer) {
    auditContainer.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl bg-brand-500/10 dark:bg-brand-950/60 border border-brand-300/40 dark:border-brand-800/50 flex items-center justify-center text-brand-600 dark:text-brand-400 text-xl shrink-0 shadow-sm">
            <i class="fa-solid fa-leaf"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-xl">${auditData.title}</h3>
              <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-500/10 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-300/40 dark:border-brand-800/40 shadow-sm">${auditData.badge}</span>
            </div>
            <p class="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400">${auditData.organization}</p>
          </div>
        </div>
        <span class="text-xs font-mono text-slate-400 shrink-0">${auditData.focus}</span>
      </div>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${auditData.description}</p>
      <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
        ${auditData.tags.map(t => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300">${t}</span>`).join('')}
      </div>
    `;
  }

  // Render Technical Training
  const trainingContainer = document.getElementById('training-courses');
  if (trainingContainer) {
    trainingContainer.innerHTML = trainingCourses.map(course => `
      <div class="p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-surface-card/60 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
            <div>
              <h4 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">${course.title}</h4>
              <p class="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-0.5">${course.institution}</p>
            </div>
            <span class="text-xs font-mono text-slate-400 whitespace-nowrap self-start mt-1 sm:mt-0">${course.period}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${course.description}</p>
        </div>
        <div class="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-800/80">
          <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-500/10 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-300/40 dark:border-brand-800/40 shadow-sm">${course.durationTag}</span>
          ${course.tags.map(tag => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render Industrial Visits as Full-Fledged Cards
  const visitsContainer = document.getElementById('field-visits');
  if (visitsContainer) {
    const defaultVisitCover = 'assets/images/thumbnails/default-visit.jpg';
    visitsContainer.innerHTML = industrialVisits.map(visit => {
      const imageSrc = visit.media || defaultVisitCover;
      const mediaBlock = `
        <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-800 flex items-center justify-center">
          <img 
            src="${imageSrc}" 
            alt="${visit.mediaAlt || visit.name}" 
            loading="lazy"
            onerror="this.src='${defaultVisitCover}'"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      `;

      const tagPills = (visit.tags || [])
        .map(tag => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300">${tag}</span>`)
        .join('');

      const cursorClass = visit.caseStudyUrl ? 'cursor-pointer' : '';
      const dataUrlAttr = visit.caseStudyUrl ? `data-url="${visit.caseStudyUrl}"` : '';

      const titleMarkup = visit.caseStudyUrl
        ? `<h3 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-1 flex items-center gap-2">
             ${visit.name} <i class="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition text-brand-600 dark:text-brand-400"></i>
           </h3>`
        : `<h3 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-1">${visit.name}</h3>`;

      const footerExtra = visit.caseStudyUrl
        ? `<span class="font-semibold text-brand-600 dark:text-brand-400 group-hover:text-brand-500 flex items-center gap-1.5 text-xs transition">
             Details <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition"></i>
           </span>`
        : '';

      return `
        <div class="visit-card group p-6 sm:p-7 rounded-2xl bg-white/30 dark:bg-slate-900/30 backdrop-blur-2xl border border-white/40 dark:border-white/[0.08] ring-1 ring-white/20 dark:ring-white/[0.05] shadow-[0_8px_32px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgb(0,0,0,0.35)] hover:bg-white/40 dark:hover:bg-slate-900/40 hover:border-brand-500/50 hover:shadow-[0_12px_36px_0_rgba(234,88,12,0.12)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${cursorClass}" ${dataUrlAttr}>
          <div>
            ${mediaBlock}
            <div class="flex items-center justify-between mb-2.5">
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-500/10 dark:bg-brand-950/60 px-2.5 py-0.5 rounded border border-brand-300/40 dark:border-brand-800/40 shadow-sm">
                ${visit.badge || 'Field Study'}
              </span>
              <span class="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold">${visit.period}</span>
            </div>

            ${titleMarkup}

            <p class="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-brand-500 text-[11px] shrink-0"></i>
              <span>${visit.type}</span>
            </p>

            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              ${visit.description}
            </p>

            <div class="flex flex-wrap gap-1.5 mb-5">
              ${tagPills}
            </div>
          </div>

          <div class="pt-3 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span class="text-[11px] font-mono flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <i class="fa-solid fa-users-gear text-brand-500/80 shrink-0"></i> ${visit.organizer}
            </span>
            ${footerExtra}
          </div>
        </div>
      `;
    }).join('');

    // Attach click handlers for visit cards with case study URLs
    visitsContainer.querySelectorAll('.visit-card').forEach(card => {
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
});
