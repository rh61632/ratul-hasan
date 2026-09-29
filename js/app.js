import { initThemeToggle } from './theme.js';
import { projectsData } from './data/projects.js';
import { renderProjects } from './components/renderProjects.js';
import { experienceData } from './data/experience.js';
import { auditData, trainingCourses, industrialVisits } from './data/training.js';

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  initThemeToggle();

  // Render Projects (Cards with Image/GIF Support)
  renderProjects(projectsData, 'projects-grid');

  // Render Experience
  const expContainer = document.getElementById('experience-list');
  if (expContainer) {
    expContainer.innerHTML = experienceData.map(exp => `
      <div class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-start justify-between gap-5 shadow-subtle hover:border-brand-500/40 transition">
        <div class="space-y-2.5 max-w-3xl">
          <div>
            <h3 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">${exp.title}</h3>
            <p class="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400">${exp.organization}</p>
          </div>
          <ul class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
            ${exp.highlights.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <span class="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 whitespace-nowrap self-start">
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
          <div class="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/50 flex items-center justify-center text-brand-600 dark:text-brand-400 text-xl shrink-0">
            <i class="fa-solid fa-leaf"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-xl">${auditData.title}</h3>
              <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/40">${auditData.badge}</span>
            </div>
            <p class="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400">${auditData.organization}</p>
          </div>
        </div>
        <span class="text-xs font-mono text-slate-400 shrink-0">${auditData.focus}</span>
      </div>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${auditData.description}</p>
      <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
        ${auditData.tags.map(t => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">${t}</span>`).join('')}
      </div>
    `;
  }

  // Render Technical Training
  const trainingContainer = document.getElementById('training-courses');
  if (trainingContainer) {
    trainingContainer.innerHTML = trainingCourses.map(course => `
      <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-800 shadow-subtle hover:border-brand-500/40 transition">
        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
          <div>
            <h4 class="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">${course.title}</h4>
            <p class="text-xs font-semibold text-brand-600 dark:text-brand-400">${course.institution}</p>
          </div>
          <span class="text-xs font-mono text-slate-400 whitespace-nowrap self-start">${course.period}</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">${course.description}</p>
        <div class="flex flex-wrap gap-1.5">
          <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/40">${course.durationTag}</span>
          ${course.tags.map(tag => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render Industrial Visits
  const visitsContainer = document.getElementById('field-visits');
  if (visitsContainer) {
    visitsContainer.innerHTML = industrialVisits.map((visit, index) => `
      <div class="${index < industrialVisits.length - 1 ? 'pb-3 border-b border-slate-100 dark:border-slate-800/80' : ''}">
        <div class="flex items-center justify-between text-xs sm:text-sm mb-1">
          <span class="font-bold text-slate-900 dark:text-white font-display">${visit.name}</span>
          <span class="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold">${visit.period}</span>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400">${visit.type}</p>
        <p class="text-[11px] font-mono text-slate-400 mt-1">${visit.organizer}</p>
      </div>
    `).join('');
  }
});