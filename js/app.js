import { initThemeToggle } from './theme.js';
import { projectsData } from './data/projects.js';
import { renderProjects } from './components/renderProjects.js';
import { postersData } from './data/posters.js';
import { renderPosters } from './components/renderPosters.js';
import { awardsData } from './data/awards.js';
import { renderAwards } from './components/renderAwards.js';
import { speakingData } from './data/speaking.js';
import { renderSpeaking } from './components/renderSpeaking.js';
import { experienceData } from './data/experience.js';
import { auditData, trainingCourses, industrialVisits } from './data/training.js';
import { getThemedHeaderMarkup } from './components/cardBanners.js';

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  initThemeToggle();

  // Render Projects (Cards with Image/GIF Support or Themed Tech Headers)
  renderProjects(projectsData, 'projects-grid');

  // Render Awards & Competitions (Horizontal Expanding Accordion with Rich Media & Full Case Study Previews)
  renderAwards(awardsData, 'awards-grid');

  // Render Workshops & Speaking (Masterclasses, Capacity Building & Seminar Hosting)
  renderSpeaking(speakingData, 'speaking-grid');

  // Render Research & Engineering Posters
  renderPosters(postersData, 'posters-grid');

  // Render Experience
  const expContainer = document.getElementById('experience-list');
  if (expContainer) {
    expContainer.innerHTML = experienceData.map(exp => `
      <div class="p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-surface-card/60 backdrop-blur-xl border border-white/80 dark:border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-brand-500/40 hover:-translate-y-0.5 transition-all duration-300">
        <div class="space-y-2.5 flex-1 max-w-4xl lg:max-w-5xl">
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
    auditContainer.classList.add('group', 'cursor-pointer', 'hover:-translate-y-1', 'transition-all', 'duration-300');
    auditContainer.dataset.url = auditData.caseStudyUrl;

    const mediaMarkup = auditData.media ? `
      <div class="relative w-full aspect-[16/10] sm:aspect-video lg:aspect-auto lg:h-full min-h-[160px] rounded-xl overflow-hidden bg-slate-950 border border-slate-200/60 dark:border-slate-800 shadow-sm shrink-0">
        <img 
          src="${auditData.media}" 
          alt="${auditData.mediaAlt || auditData.title}" 
          loading="lazy"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3.5">
          <span class="text-xs font-mono font-semibold text-white flex items-center gap-1.5 drop-shadow">
            <i class="fa-solid fa-camera-retro text-brand-400"></i> ${auditData.photoCount || '45 Photos'}
          </span>
        </div>
      </div>
    ` : '';

    auditContainer.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div class="lg:col-span-4 flex">
          ${mediaMarkup}
        </div>
        <div class="lg:col-span-8 flex flex-col justify-between py-0.5">
          <div>
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300 bg-brand-500/10 dark:bg-brand-950/60 px-2.5 py-0.5 rounded border border-brand-300/40 dark:border-brand-800/40 shadow-sm">
                ${auditData.badge}
              </span>
              <span class="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold">${auditData.period}</span>
            </div>

            <h3 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-1 flex items-center gap-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition">
              ${auditData.title}
              <i class="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition text-brand-600 dark:text-brand-400"></i>
            </h3>

            <p class="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-industry text-[11px]"></i>
              ${auditData.organization}
            </p>

            <p class="text-xs text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-brand-500 text-[11px] shrink-0"></i>
              <span>${auditData.location} • ${auditData.team}</span>
            </p>

            <p class="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-chalkboard-user text-brand-500 text-[11px] shrink-0"></i>
              <span>${auditData.supervisor}</span>
            </p>

            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">${auditData.description}</p>
          </div>

          <div class="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
            <div class="flex flex-wrap gap-1.5">
              ${auditData.tags.map(t => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300">${t}</span>`).join('')}
            </div>
            <span class="font-semibold text-brand-600 dark:text-brand-400 group-hover:text-brand-500 flex items-center gap-1.5 text-xs transition">
              View Detailed Audit & Photos <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition"></i>
            </span>
          </div>
        </div>
      </div>
    `;

    auditContainer.addEventListener('click', (e) => {
      const clickedAnchor = e.target.closest('a');
      if (clickedAnchor) return;
      if (auditData.caseStudyUrl) {
        if (e.metaKey || e.ctrlKey) {
          window.open(auditData.caseStudyUrl, '_blank');
        } else if (window.navigateToProject) {
          window.navigateToProject(auditData.caseStudyUrl);
        } else {
          window.location.href = auditData.caseStudyUrl;
        }
      }
    });
  }

  // Render Technical Training
  const trainingContainer = document.getElementById('training-courses');
  if (trainingContainer) {
    trainingContainer.innerHTML = trainingCourses.map(course => {
      const mediaBlock = course.media ? `
        <div class="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-3.5 bg-slate-950 border border-slate-200/60 dark:border-white/10 flex items-center justify-center">
          <img 
            src="${course.media}" 
            alt="${course.mediaAlt || course.title}" 
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end justify-between p-3 pointer-events-none">
            ${course.photoCount ? `
              <span class="text-[10px] font-mono font-semibold text-white flex items-center gap-1.5 drop-shadow">
                <i class="fa-solid fa-camera-retro text-brand-400"></i> ${course.photoCount}
              </span>
            ` : '<span></span>'}
            ${course.caseStudyUrl ? `
              <span class="text-[9px] font-mono text-white/90 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                <span>Fieldwork & Photos</span> <i class="fa-solid fa-arrow-right text-[8px]"></i>
              </span>
            ` : ''}
          </div>
        </div>
      ` : getThemedHeaderMarkup(course, 'training');

      const cursorClass = course.caseStudyUrl ? 'cursor-pointer group' : '';
      const dataUrlAttr = course.caseStudyUrl ? `data-url="${course.caseStudyUrl}"` : '';

      return `
        <div ${dataUrlAttr} class="${cursorClass} p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-surface-card/60 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div class="flex-1 min-h-0 overflow-hidden flex flex-col justify-between">
            <div>
              ${mediaBlock}
              <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1.5">
                <div>
                  <h4 class="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg group-hover:text-brand-600 dark:group-hover:text-brand-400 transition leading-snug line-clamp-1 sm:line-clamp-2">${course.title}</h4>
                  <p class="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-0.5 truncate">${course.institution}</p>
                </div>
                <span class="text-xs font-mono text-slate-400 whitespace-nowrap self-start mt-1 sm:mt-0">${course.period}</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2 line-clamp-2">${course.description}</p>
            </div>
            <div class="flex flex-wrap items-center gap-1.5 shrink-0 mt-auto mb-1 overflow-hidden max-h-[24px]">
              <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-500/10 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-300/40 dark:border-brand-800/40 shadow-sm">${course.durationTag}</span>
              ${course.tags.map(tag => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300">${tag}</span>`).join('')}
            </div>
          </div>
          <div class="flex items-center justify-between gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800/80 shrink-0 mt-auto">
            <span class="text-[10px] font-mono text-slate-400 truncate min-w-0 flex-1">${course.period}</span>
            ${course.caseStudyUrl ? `
              <span class="font-semibold text-brand-600 dark:text-brand-400 group-hover:text-brand-500 flex items-center gap-1.5 text-xs transition whitespace-nowrap shrink-0">
                Explore <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition"></i>
              </span>
            ` : '<span></span>'}
          </div>
        </div>
      `;
    }).join('');

    trainingContainer.querySelectorAll('[data-url]').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
          if (e.metaKey || e.ctrlKey) {
            window.open(card.dataset.url, '_blank');
          } else if (window.navigateToProject) {
            window.navigateToProject(card.dataset.url);
          } else {
            window.location.href = card.dataset.url;
          }
        }
      });
    });
  }

  // Render Industrial Visits as Minimal, Sleek Cards
  const visitsContainer = document.getElementById('field-visits');
  if (visitsContainer) {
    visitsContainer.innerHTML = industrialVisits.map(visit => {
      const mediaBlock = visit.media
        ? `
          <div class="relative w-full h-36 sm:h-38 rounded-xl overflow-hidden mb-3.5 bg-slate-950 border border-slate-200/60 dark:border-white/10 flex items-center justify-center">
            <img 
              src="${visit.media}" 
              alt="${visit.mediaAlt || visit.name}" 
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end justify-between p-2.5 pointer-events-none">
              <span class="text-[10px] font-mono font-semibold text-white flex items-center gap-1.5 drop-shadow">
                <i class="fa-solid fa-camera-retro text-brand-400"></i> 18 Photos
              </span>
              ${visit.caseStudyUrl ? `
                <span class="text-[9px] font-mono text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                  <span>Visit Study</span> <i class="fa-solid fa-arrow-right text-[8px]"></i>
                </span>
              ` : ''}
            </div>
          </div>
        `
        : getThemedHeaderMarkup(visit, 'visit');

      const tagPills = (visit.tags || [])
        .map(tag => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300">${tag}</span>`)
        .join('');

      const cursorClass = visit.caseStudyUrl ? 'cursor-pointer group' : '';
      const dataUrlAttr = visit.caseStudyUrl ? `data-url="${visit.caseStudyUrl}"` : '';

      const titleMarkup = visit.caseStudyUrl
        ? `<h3 class="font-display font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition">
             ${visit.name} <i class="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition text-brand-600 dark:text-brand-400"></i>
           </h3>`
        : `<h3 class="font-display font-bold text-slate-900 dark:text-white text-base mb-1">${visit.name}</h3>`;

      const footerExtra = visit.caseStudyUrl
        ? `<span class="font-semibold text-brand-600 dark:text-brand-400 group-hover:text-brand-500 flex items-center gap-1.5 text-xs transition shrink-0">
             <span class="hidden sm:inline">Photos & </span>Study <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition"></i>
           </span>`
        : '';

      return `
        <div class="visit-card ${cursorClass} p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-surface-card/60 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between" ${dataUrlAttr}>
          <div class="flex-1 min-h-0 overflow-hidden flex flex-col justify-between">
            <div>
              ${mediaBlock}
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-500/10 dark:bg-brand-950/60 px-2 py-0.5 rounded border border-brand-300/40 dark:border-brand-800/40 shadow-sm">
                  ${visit.badge || 'Field Study'}
                </span>
                <span class="text-xs font-mono text-slate-400">${visit.period}</span>
              </div>

              ${titleMarkup}

              <p class="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5 truncate">
                <i class="fa-solid fa-location-dot text-brand-500 text-[11px] shrink-0"></i>
                <span class="truncate">${visit.type}</span>
              </p>

              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2 line-clamp-2">
                ${visit.description}
              </p>
            </div>

            <div class="flex flex-wrap gap-1.5 shrink-0 mt-auto mb-1 overflow-hidden max-h-[24px]">
              ${tagPills}
            </div>
          </div>

          <div class="pt-2 border-t border-slate-200/60 dark:border-slate-800/80 shrink-0 mt-auto flex items-center justify-between text-xs text-slate-400 gap-2">
            <span class="text-[11px] font-mono flex items-center gap-1.5 text-slate-500 dark:text-slate-400 truncate min-w-0 flex-1">
              <i class="fa-solid fa-users-gear text-brand-500/80 shrink-0"></i>
              <span class="truncate">${visit.organizer}</span>
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
          } else if (window.navigateToProject) {
            window.navigateToProject(url);
          } else {
            window.location.href = url;
          }
        });
      }
    });
  }

  // Universal helper for opening project detail pages with scroll preservation & hash cleanup
  window.navigateToProject = function(url, inNewTab = false) {
    if (!url) return;
    if (inNewTab) {
      window.open(url, '_blank');
      return;
    }
    sessionStorage.setItem('portfolio_scroll_y', String(window.scrollY));
    history.replaceState(null, '', window.location.pathname + window.location.search);
    window.location.href = url;
  };

  // Intercept all project links across the page (buttons, cards, text links)
  document.addEventListener('click', (e) => {
    const projectLink = e.target.closest('a[href^="projects/"]');
    if (projectLink && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      window.navigateToProject(projectLink.getAttribute('href'));
    }
  });

  // Intercept navigation links so clicking smoothly scrolls without sticking hashes to the address bar
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        if (typeof setActiveNavItem === 'function') {
          setActiveNavItem(hash.substring(1));
        }
        // Strip the hash from the address bar so it never sticks in history
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    });
  });

  // =========================================================================
  // Mobile 3D Touch Mac Dock Bottom Navigation (with Haptic Feedback)
  // =========================================================================
  const mobileNavTrack = document.getElementById('mobileBottomNavTrack');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  const mobileDockTooltip = document.getElementById('mobileDockTooltip');
  const mobileDockTooltipText = document.getElementById('mobileDockTooltipText');
  const mobileDockTooltipIcon = document.getElementById('mobileDockTooltipIcon');
  const mobileNavDock = document.querySelector('.mobile-nav-dock');

  function triggerHaptic(duration = 12) {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(duration);
      } catch (e) {}
    }
  }

  function setActiveNavItem(targetId) {
    if (!targetId) return;

    // Update mobile bottom bar items
    mobileNavItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === `#${targetId}`) {
        item.classList.add('active');
        item.classList.remove('text-slate-600', 'dark:text-slate-300');
      } else {
        item.classList.remove('active');
        item.classList.add('text-slate-600', 'dark:text-slate-300');
      }
    });

    // Update desktop top bar items
    document.querySelectorAll('a[href^="#"]:not(.mobile-nav-item)').forEach(item => {
      const href = item.getAttribute('href');
      if (href === `#${targetId}` && !item.classList.contains('group')) {
        item.classList.add('text-brand-600', 'dark:text-brand-400', 'bg-brand-50/80', 'dark:bg-brand-950/40');
      } else if (!item.classList.contains('group') && !item.getAttribute('href')?.includes('contact')) {
        item.classList.remove('text-brand-600', 'dark:text-brand-400', 'bg-brand-50/80', 'dark:bg-brand-950/40');
      }
    });
  }

  function initMobileMacDock() {
    if (!mobileNavTrack || !mobileNavDock || !mobileDockTooltip) return;

    const dockItems = Array.from(mobileNavTrack.querySelectorAll('.mobile-dock-item'));
    if (!dockItems.length) return;

    let activeHoverIndex = -1;
    let isInteracting = false;

    function resetDockState() {
      dockItems.forEach(item => {
        item.style.transform = '';
        item.style.zIndex = '';
      });
      mobileDockTooltip.classList.remove('is-visible');
      activeHoverIndex = -1;
      isInteracting = false;
    }

    function updateDockMagnification(clientX, clientY) {
      const trackRect = mobileNavTrack.getBoundingClientRect();
      const dockRect = mobileNavDock.getBoundingClientRect();

      // If finger moves too far above (cancelled peek) or below
      if (clientY < trackRect.top - 100 || clientY > trackRect.bottom + 60) {
        resetDockState();
        return;
      }

      const maxDist = 75; // Influence radius in px
      let closestIdx = -1;
      let minDistance = Infinity;

      dockItems.forEach((item, idx) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const dist = Math.abs(clientX - itemCenterX);

        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }

        if (dist < maxDist) {
          // Parabolic cosine curve for authentic macOS dock magnification
          const factor = Math.cos((dist / maxDist) * (Math.PI / 2));
          const scale = 1 + factor * 0.45;
          const translateY = -12 * factor;
          item.style.transform = `scale(${scale}) translateY(${translateY}px)`;
          item.style.zIndex = String(Math.round(10 + factor * 10));
        } else {
          item.style.transform = '';
          item.style.zIndex = '';
        }
      });

      if (closestIdx !== -1) {
        const targetItem = dockItems[closestIdx];
        const targetRect = targetItem.getBoundingClientRect();
        const targetCenterX = targetRect.left + targetRect.width / 2;

        // Position 3D Touch tooltip directly above the hovered icon
        const relativeLeft = targetCenterX - dockRect.left;
        mobileDockTooltip.style.left = `${relativeLeft}px`;
        mobileDockTooltip.style.transform = 'translateX(-50%) translateY(0)';
        mobileDockTooltip.classList.add('is-visible');

        if (mobileDockTooltipText) {
          mobileDockTooltipText.textContent = targetItem.dataset.title || '';
        }
        if (mobileDockTooltipIcon && targetItem.dataset.icon) {
          mobileDockTooltipIcon.className = `${targetItem.dataset.icon} text-[11px] text-brand-400`;
        }

        // Haptic pulse when scrubbing over a new icon
        if (closestIdx !== activeHoverIndex) {
          activeHoverIndex = closestIdx;
          triggerHaptic(12);
        }
      }
    }

    function navigateToDockIndex(idx) {
      if (idx >= 0 && idx < dockItems.length) {
        const item = dockItems[idx];
        const href = item.getAttribute('href');
        if (href && href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            triggerHaptic(20); // Confirmation haptic feedback
            target.scrollIntoView({ behavior: 'smooth' });
            setActiveNavItem(href.replace('#', ''));
          }
        }
      }
    }

    // Touch Interaction (Scrubbing / 3D Touch Press & Hold)
    mobileNavTrack.addEventListener('touchstart', (e) => {
      isInteracting = true;
      const t = e.touches[0];
      updateDockMagnification(t.clientX, t.clientY);
    }, { passive: true });

    mobileNavTrack.addEventListener('touchmove', (e) => {
      if (!isInteracting) return;
      if (e.cancelable) e.preventDefault();
      const t = e.touches[0];
      updateDockMagnification(t.clientX, t.clientY);
    }, { passive: false });

    mobileNavTrack.addEventListener('touchend', (e) => {
      if (isInteracting && activeHoverIndex !== -1) {
        if (e.cancelable) e.preventDefault();
        const finalIdx = activeHoverIndex;
        resetDockState();
        navigateToDockIndex(finalIdx);
      } else {
        resetDockState();
      }
    }, { passive: false });

    mobileNavTrack.addEventListener('touchcancel', () => {
      resetDockState();
    });

    // Tap fallback (mouse or quick click)
    dockItems.forEach((item, idx) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        triggerHaptic(15);
        navigateToDockIndex(idx);
      });
    });
  }

  initMobileMacDock();

  // Smooth Touch & Drag-to-Scroll support for horizontal tracks on mobile
  function enableDragScroll(selector) {
    document.querySelectorAll(selector).forEach(track => {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;
      let hasDragged = false;

      track.addEventListener('mousedown', (e) => {
        if (track.scrollWidth <= track.clientWidth) return;
        isDown = true;
        hasDragged = false;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
      });

      track.addEventListener('mouseleave', () => {
        isDown = false;
      });

      track.addEventListener('mouseup', () => {
        isDown = false;
      });

      track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 6) {
          hasDragged = true;
        }
        track.scrollLeft = scrollLeft - walk;
      });

      track.addEventListener('click', (e) => {
        if (hasDragged) {
          e.preventDefault();
          e.stopPropagation();
          hasDragged = false;
        }
      }, true);
    });
  }

  enableDragScroll('.projects-expand-container');
  enableDragScroll('.awards-expand-container');
  enableDragScroll('#focus .grid');
  enableDragScroll('#speaking-grid');
  enableDragScroll('#posters-grid');
  enableDragScroll('#field-visits');
  enableDragScroll('#training-courses');

  // ScrollSpy with IntersectionObserver
  const sectionIds = [
    'about', 'focus', 'projects', 'awards', 'speaking', 
    'posters', 'experience', 'training', 'education', 'contact'
  ];

  let scrollSpyTimer;
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        clearTimeout(scrollSpyTimer);
        scrollSpyTimer = setTimeout(() => {
          setActiveNavItem(entry.target.id);
        }, 60);
      }
    });
  }, {
    rootMargin: '-15% 0px -55% 0px',
    threshold: 0
  });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  });

  // Continuously record scroll position and clear any lingering hash so back navigation is never hijacked
  window.addEventListener('scroll', () => {
    sessionStorage.setItem('portfolio_scroll_y', String(window.scrollY));
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, { passive: true });

  // Restore exact scroll position if returning via browser back or history.back()
  const isBackNav = window.performance && 
    window.performance.getEntriesByType && 
    window.performance.getEntriesByType('navigation')[0] && 
    window.performance.getEntriesByType('navigation')[0].type === 'back_forward';

  if (isBackNav) {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    const savedScrollY = sessionStorage.getItem('portfolio_scroll_y');
    if (savedScrollY !== null) {
      const targetY = parseInt(savedScrollY, 10);
      window.scrollTo({ top: targetY, behavior: 'instant' });
      requestAnimationFrame(() => {
        window.scrollTo({ top: targetY, behavior: 'instant' });
      });
    }
  }
});
