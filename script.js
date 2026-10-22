const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const revealItems = document.querySelectorAll('.reveal');
const yearEl = document.getElementById('year');

const renderCards = () => {
  const ventureContainer = document.getElementById('ventureCards');
  const industryContainer = document.getElementById('industryCards');
  const caseContainer = document.getElementById('caseStudyCards');
  const newsContainer = document.getElementById('newsCards');

  if (ventureContainer) {
    ventureContainer.innerHTML = siteContent.ventures
      .map(
        (venture) => `
          <article class="venture-card reveal">
            <div class="venture-top">
              <div class="logo-mark">${venture.logo}</div>
              <span class="venture-badge">${venture.category}</span>
            </div>
            <h3>${venture.name}</h3>
            <p><strong>${venture.position}</strong></p>
            <p>${venture.description}</p>
            <ul>
              ${venture.highlights.map((item) => `<li>${item}</li>`).join('')}
            </ul>
            <a href="#contact" class="button button-secondary">Learn More</a>
          </article>
        `
      )
      .join('');
  }

  if (industryContainer) {
    industryContainer.innerHTML = siteContent.industries
      .map(
        (industry) => `
          <article class="industry-card reveal">
            <div class="icon-block">${industry.icon}</div>
            <h3>${industry.name}</h3>
            <p>${industry.description}</p>
            <ul>
              ${industry.bullets.map((item) => `<li>${item}</li>`).join('')}
            </ul>
            <p><strong>Relevant ventures:</strong> ${industry.ventures}</p>
          </article>
        `
      )
      .join('');
  }

  if (caseContainer) {
    caseContainer.innerHTML = siteContent.caseStudies
      .map(
        (item) => `
          <article class="case-card reveal">
            <div class="case-top">
              <h3>${item.name}</h3>
              <span class="case-badge">${item.label}</span>
            </div>
            <p><strong>Problem:</strong> ${item.problem}</p>
            <p><strong>Solution:</strong> ${item.solution}</p>
            <p><strong>Target user:</strong> ${item.user}</p>
            <ul>
              ${item.features.map((feature) => `<li>${feature}</li>`).join('')}
            </ul>
            <p><strong>Business model:</strong> ${item.model}</p>
          </article>
        `
      )
      .join('');
  }

  if (newsContainer) {
    newsContainer.innerHTML = siteContent.news
      .map(
        (story) => `
          <article class="news-card reveal">
            <div class="news-top">
              <span class="venture-badge">${story.category}</span>
            </div>
            <h3>${story.title}</h3>
            <p>${story.summary}</p>
          </article>
        `
      )
      .join('');
  }
};

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = form.querySelectorAll('input, select, textarea');
    let valid = true;

    fields.forEach((field) => {
      const isRequired = field.required;
      if (isRequired && !field.value.trim()) {
        valid = false;
        field.setAttribute('aria-invalid', 'true');
      } else {
        field.setAttribute('aria-invalid', 'false');
      }
    });

    const status = form.querySelector('.form-status');
    if (valid) {
      form.reset();
      if (status) {
        status.textContent = 'Thanks — your message has been captured.';
      }
    } else {
      if (status) {
        status.textContent = 'Please complete the required fields before submitting.';
      }
    }
  });
});

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

renderCards();
