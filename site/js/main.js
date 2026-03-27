// ============================================
// PITSTOP - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileNav();
  initScrollAnimations();
  initReviewsCarousel();
  initLanguageSwitch();
});

// ============================================
// Navbar scroll effect
// ============================================

function initNavbar() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ============================================
// Mobile navigation
// ============================================

function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const backdrop = document.getElementById('navBackdrop');

  if (!toggle || !menu) return;

  function openNav() {
    menu.classList.add('open');
    toggle.classList.add('active');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    menu.classList.remove('open');
    toggle.classList.remove('active');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('open')) closeNav();
    else openNav();
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeNav);
  }

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeNav();
    }
  });
}

// ============================================
// Language switching
// ============================================

function initLanguageSwitch() {
  const langButtons = document.querySelectorAll('.lang-option');

  const savedLang = localStorage.getItem('pitstop-lang') || 'fi';
  setLanguage(savedLang);

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
      localStorage.setItem('pitstop-lang', lang);
    });
  });
}

function setLanguage(lang) {
  const langButtons = document.querySelectorAll('.lang-option');

  if (lang === 'en') {
    document.body.classList.add('en');
  } else {
    document.body.classList.remove('en');
  }

  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ============================================
// Scroll-triggered fade-in animations
// ============================================

function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ============================================
// Reviews Carousel — simple and reliable
// ============================================

function initReviewsCarousel() {
  const track = document.getElementById('reviewsTrack');
  const dotsContainer = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  if (!track || !dotsContainer) return;

  const cards = Array.from(track.children);
  const totalCards = cards.length;
  let currentPage = 0;
  let autoplayInterval;

  function getPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  let perView = getPerView();

  function getTotalPages() {
    return Math.ceil(totalCards / perView);
  }

  function getGap() {
    return 16; // 1rem gap between cards
  }

  function render() {
    const containerWidth = track.parentElement.offsetWidth;
    const gap = getGap();
    const cardWidth = (containerWidth - gap * (perView - 1)) / perView;

    // Size each card
    cards.forEach(card => {
      card.style.minWidth = cardWidth + 'px';
      card.style.maxWidth = cardWidth + 'px';
      card.style.flex = 'none';
    });

    // Set gap on track
    track.style.gap = gap + 'px';
    track.style.display = 'flex';
    track.style.transition = 'transform 0.45s ease';

    // Slide to current page
    slideTo(currentPage, false);

    // Rebuild dots
    buildDots();
  }

  function slideTo(page, animate) {
    const totalPages = getTotalPages();
    if (page < 0) page = totalPages - 1;
    if (page >= totalPages) page = 0;
    currentPage = page;

    const containerWidth = track.parentElement.offsetWidth;
    const gap = getGap();
    const cardWidth = (containerWidth - gap * (perView - 1)) / perView;
    const offset = page * perView * (cardWidth + gap);

    if (animate === false) {
      track.style.transition = 'none';
    } else {
      track.style.transition = 'transform 0.45s ease';
    }
    track.style.transform = `translateX(-${offset}px)`;

    // Force reflow if no animation
    if (animate === false) {
      track.offsetHeight;
      track.style.transition = 'transform 0.45s ease';
    }

    // Update dots
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentPage);
    });
  }

  function buildDots() {
    const totalPages = getTotalPages();
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (i === currentPage) dot.classList.add('active');
      dot.setAttribute('aria-label', `Sivu ${i + 1}`);
      dot.addEventListener('click', () => {
        slideTo(i, true);
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function next() {
    slideTo(currentPage + 1, true);
  }

  function prev() {
    slideTo(currentPage - 1, true);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(next, 5000);
  }

  // Init
  render();

  // Controls
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });

  // Touch/swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next(); else prev();
      resetAutoplay();
    }
  }, { passive: true });

  // Autoplay
  resetAutoplay();
  track.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  track.addEventListener('mouseleave', resetAutoplay);

  // Resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newPerView = getPerView();
      if (newPerView !== perView) {
        perView = newPerView;
        currentPage = 0;
      }
      render();
    }, 150);
  });
}
