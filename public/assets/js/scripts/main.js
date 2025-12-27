/**
 * NineKeys Landing Page - Main Script
 *
 * Handles content injection and interactive behaviors.
 */
import { CASES, CASES_CONTENT, CONTACT_CONTENT, CONTENT, FOOTER_CONTENT, FORM_ENDPOINT, LINKS, MANIFESTO_CONTENT, METHOD_CONTENT, METHOD_POINTS, buildWhatsappUrl } from "../config/content.js";
/**
 * Set text content of an element by selector
 */
function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) {
        el.textContent = text;
    }
    else {
        console.warn(`Element not found: ${selector}`);
    }
}
/**
 * Set href attribute of an element by selector
 */
function setHref(selector, url) {
    const el = document.querySelector(selector);
    if (el) {
        el.href = url;
    }
    else {
        console.warn(`Element not found: ${selector}`);
    }
}
/**
 * Initialize hero section content
 */
function initHero() {
    // Set hero text content
    setText('[data-content="hero.h1"]', CONTENT.hero.h1);
    setText('[data-content="hero.h2"]', CONTENT.hero.h2);
    setText('[data-content="hero.subheadline"]', CONTENT.hero.subheadline);
    // Configure primary CTA (WhatsApp)
    const primaryCta = document.querySelector('[data-whatsapp="primary"]');
    if (primaryCta) {
        primaryCta.textContent = CONTENT.hero.ctaPrimary;
        primaryCta.href = buildWhatsappUrl();
        primaryCta.target = "_blank";
        primaryCta.rel = "noopener noreferrer";
    }
    // Configure secondary CTA (WhatsApp)
    const secondaryCta = document.querySelector('[data-whatsapp="secondary"]');
    if (secondaryCta) {
        secondaryCta.textContent = CONTENT.hero.ctaSecondary;
        secondaryCta.href = buildWhatsappUrl();
        secondaryCta.target = "_blank";
        secondaryCta.rel = "noopener noreferrer";
    }
}
/**
 * Initialize smooth scroll for navigation links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = anchor.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}
/**
 * Create a method card element (desktop view)
 */
function createMethodCard(point) {
    const card = document.createElement("article");
    card.className = "card method-card";
    card.setAttribute("data-method-card", "");
    card.setAttribute("data-open-modal", point.id);
    card.style.cursor = "pointer";
    card.innerHTML = `
    <img src="${point.image}" alt="${point.title}" class="method-card-image" loading="lazy" />
    <h3 class="method-card-title">${point.title}</h3>
    <p class="method-card-summary">${point.summary}</p>
  `;
    return card;
}
/**
 * Create an accordion item element (mobile view)
 */
function createAccordionItem(point) {
    const item = document.createElement("div");
    item.className = "accordion-item";
    item.innerHTML = `
    <button class="accordion-header" aria-expanded="false" aria-controls="accordion-body-${point.id}">
      <span class="accordion-title">${point.title}</span>
      <span class="accordion-icon" aria-hidden="true">+</span>
    </button>
    <div class="accordion-body" id="accordion-body-${point.id}" hidden>
      <p>${point.description}</p>
    </div>
  `;
    return item;
}
/**
 * Initialize método section
 */
function initMethod() {
    // Set method section content
    setText('[data-content="method.title"]', METHOD_CONTENT.title);
    setText('[data-content="method.intro"]', METHOD_CONTENT.intro);
    // Render cards and accordion items
    const methodGrid = document.querySelector('[data-method-grid]');
    console.log('Method grid element:', methodGrid);
    console.log('Method points:', METHOD_POINTS.length);
    if (methodGrid) {
        METHOD_POINTS.forEach((point) => {
            // Add card (visible on desktop)
            const card = createMethodCard(point);
            console.log('Created method card:', card);
            methodGrid.appendChild(card);
            // Add accordion item (visible on mobile)
            methodGrid.appendChild(createAccordionItem(point));
        });
    }
    // Setup accordion functionality
    initAccordion();
}
/**
 * Initialize accordion expand/collapse
 */
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach((header) => {
        header.addEventListener('click', () => {
            const expanded = header.getAttribute('aria-expanded') === 'true';
            const bodyId = header.getAttribute('aria-controls');
            const body = bodyId ? document.getElementById(bodyId) : null;
            const icon = header.querySelector('.accordion-icon');
            // Toggle expanded state
            header.setAttribute('aria-expanded', String(!expanded));
            // Toggle body visibility
            if (body) {
                body.hidden = expanded;
            }
            // Toggle icon
            if (icon) {
                icon.textContent = expanded ? '+' : '−';
            }
        });
    });
}
/**
 * Open modal with method point details
 */
function openModal(pointId) {
    const point = METHOD_POINTS.find((p) => p.id === pointId);
    const modal = document.querySelector('[data-method-modal]');
    const modalTitle = document.getElementById('modal-title');
    const modalVideo = document.getElementById('modal-video');
    const modalVideoSource = document.getElementById('modal-video-source');
    const modalBody = document.getElementById('modal-body');
    if (!point || !modal || !modalTitle || !modalVideo || !modalVideoSource || !modalBody)
        return;
    // Set modal content
    modalTitle.textContent = point.title;
    // Convert image path to video path (replace .png with .mp4)
    const videoUrl = point.image.replace('.png', '.mp4');
    modalVideoSource.src = videoUrl;
    modalVideo.load(); // Reload video with new source
    modalBody.textContent = point.description;
    // Show modal
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus on modal
    modal.focus();
}
/**
 * Close modal dialog
 */
function closeModal() {
    const modal = document.querySelector('[data-method-modal]');
    if (!modal)
        return;
    // Hide modal
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}
/**
 * Initialize modal functionality
 */
function initModal() {
    // Setup card click handlers
    document.addEventListener('click', (event) => {
        const target = event.target;
        const openButton = target.closest('[data-open-modal]');
        if (openButton) {
            const pointId = openButton.getAttribute('data-open-modal');
            console.log('Clicked on card with id:', pointId);
            if (pointId) {
                event.preventDefault();
                openModal(pointId);
            }
        }
    });
    // Setup close button handlers
    document.querySelectorAll('[data-modal-close]').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            closeModal();
        });
    });
    // Close on ESC key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const modal = document.querySelector('[data-method-modal]');
            if (modal && modal.getAttribute('aria-hidden') === 'false') {
                closeModal();
            }
        }
    });
}
/**
 * Create a case card element
 */
function createCaseCard(caseItem) {
    const card = document.createElement("article");
    card.className = "case-card";
    card.setAttribute("data-case-id", caseItem.id);
    card.innerHTML = `
    <div class="case-video">
      <video
        autoplay
        loop
        muted
        playsinline
        class="case-video-player">
        <source src="${caseItem.videoUrl}" type="video/mp4">
      </video>
    </div>

    <div class="case-content">
      <div class="case-header">
        <h3 class="case-title">${caseItem.title}</h3>
        <span class="case-location">${caseItem.location}</span>
      </div>

      <p class="case-description">${caseItem.description}</p>

      <div class="case-results">
        <h4 class="case-results-title">Resultados:</h4>
        <ul class="case-results-list">
          ${caseItem.results.map((result) => `<li class="case-result-item">${result}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
    return card;
}
/**
 * Initialize cases section
 */
function initCases() {
    // Set cases section content
    setText('[data-content="cases.title"]', CASES_CONTENT.title);
    setText('[data-content="cases.subtitle"]', CASES_CONTENT.subtitle);
    setText('[data-content="cases.cta"]', CASES_CONTENT.cta);
    // Render case cards
    const carouselTrack = document.querySelector('[data-carousel-track]');
    console.log('Carousel track element:', carouselTrack);
    console.log('Cases:', CASES.length);
    if (carouselTrack) {
        CASES.forEach((caseItem) => {
            const card = createCaseCard(caseItem);
            console.log('Created case card:', card);
            carouselTrack.appendChild(card);
        });
    }
    // Create carousel dots
    const dotsContainer = document.querySelector('[data-carousel-dots]');
    if (dotsContainer) {
        CASES.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.setAttribute('data-carousel-dot', String(index));
            dot.setAttribute('aria-label', `Ir para caso ${index + 1}`);
            if (index === 0)
                dot.classList.add('active');
            dotsContainer.appendChild(dot);
        });
    }
    // Initialize carousel functionality
    initCarousel();
}
/**
 * Initialize carousel functionality
 */
function initCarousel() {
    const carousel = document.querySelector('[data-carousel]');
    const track = document.querySelector('[data-carousel-track]');
    const prevBtn = document.querySelector('[data-carousel-prev]');
    const nextBtn = document.querySelector('[data-carousel-next]');
    const dots = document.querySelectorAll('[data-carousel-dot]');
    if (!carousel || !track)
        return;
    let currentIndex = 0;
    const totalSlides = CASES.length;
    /**
     * Update carousel position and active states
     */
    const updateCarousel = (index) => {
        currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
        // Scroll to current card
        const cards = track.children;
        const currentCard = cards[currentIndex];
        if (currentCard) {
            track.scrollTo({
                left: currentCard.offsetLeft - track.offsetLeft,
                behavior: 'smooth'
            });
        }
        // Update dots
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('active');
                dot.setAttribute('aria-current', 'true');
            }
            else {
                dot.classList.remove('active');
                dot.removeAttribute('aria-current');
            }
        });
        // Update arrow button states
        if (prevBtn) {
            prevBtn.disabled = currentIndex === 0;
        }
        if (nextBtn) {
            nextBtn.disabled = currentIndex === totalSlides - 1;
        }
    };
    // Arrow navigation
    prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
    });
    nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
    });
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });
    // Keyboard navigation
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            updateCarousel(currentIndex - 1);
        }
        else if (e.key === 'ArrowRight') {
            updateCarousel(currentIndex + 1);
        }
    });
    // Initialize first state
    updateCarousel(0);
}
/**
 * Initialize manifesto section
 */
function initManifesto() {
    // Set manifesto title
    setText('[data-content="manifesto.title"]', MANIFESTO_CONTENT.title);
    // Render manifesto paragraphs
    const manifestoBody = document.querySelector('[data-manifesto-body]');
    if (manifestoBody) {
        MANIFESTO_CONTENT.paragraphs.forEach((paragraph) => {
            const p = document.createElement('p');
            p.className = 'manifesto-text';
            // Replace \n with <br> for line breaks
            p.innerHTML = paragraph.replace(/\n/g, '<br>');
            manifestoBody.appendChild(p);
        });
    }
}
/**
 * Initialize contact section
 */
function initContact() {
    // Set contact text content
    setText('[data-content="contact.title"]', CONTACT_CONTENT.title);
    setText('[data-content="contact.text"]', CONTACT_CONTENT.text);
    // Form labels
    setText('[data-content="contact.formLabels.name"]', CONTACT_CONTENT.formLabels.name);
    setText('[data-content="contact.formLabels.email"]', CONTACT_CONTENT.formLabels.email);
    setText('[data-content="contact.formLabels.phone"]', CONTACT_CONTENT.formLabels.phone);
    setText('[data-content="contact.formLabels.city"]', CONTACT_CONTENT.formLabels.city);
    // Form messages
    setText('[data-content="contact.formMessages.submit"]', CONTACT_CONTENT.formMessages.submit);
    // Configure WhatsApp CTA
    const contactWhatsapp = document.querySelector('[data-whatsapp="contact"]');
    if (contactWhatsapp) {
        contactWhatsapp.textContent = CONTACT_CONTENT.ctaWhatsapp;
        contactWhatsapp.href = buildWhatsappUrl();
    }
}
/**
 * Initialize contact form submission
 */
function initContactForm() {
    const form = document.querySelector('[data-contact-form]');
    const formMessage = document.querySelector('[data-form-message]');
    if (!form)
        return;
    /**
     * Set form feedback message
     */
    const setFormMessage = (text, isError = false) => {
        if (formMessage) {
            formMessage.textContent = text;
            formMessage.style.color = isError ? 'var(--color-error)' : 'var(--color-success)';
        }
    };
    /**
     * Clear form feedback message
     */
    const clearFormMessage = () => {
        if (formMessage) {
            formMessage.textContent = '';
        }
    };
    // Handle form submission
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        // Clear previous messages
        clearFormMessage();
        // Disable submit button during request
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
        }
        try {
            const formData = new FormData(form);
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Form submission failed');
            }
            // Success
            setFormMessage(CONTACT_CONTENT.formMessages.success, false);
            form.reset();
        }
        catch (error) {
            // Error
            console.error('Form submission error:', error);
            setFormMessage(CONTACT_CONTENT.formMessages.error, true);
        }
        finally {
            // Re-enable submit button
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = CONTACT_CONTENT.formMessages.submit;
            }
        }
    });
}
/**
 * Initialize footer section
 */
function initFooter() {
    // Set footer text content
    setText('[data-content="footer.tagline"]', FOOTER_CONTENT.tagline);
    setText('[data-content="footer.email"]', FOOTER_CONTENT.email);
    setText('[data-content="footer.phone"]', FOOTER_CONTENT.phone);
    setText('[data-content="footer.privacy"]', FOOTER_CONTENT.privacy);
    setText('[data-content="footer.copyright"]', FOOTER_CONTENT.copyright);
}
/**
 * Initialize floating WhatsApp button
 */
function initFloatingWhatsApp() {
    const floating = document.querySelector('[data-whatsapp="floating"]');
    if (floating) {
        floating.href = `https://web.whatsapp.com/send?phone=${LINKS.whatsappNumber}`;
    }
}
/**
 * Main initialization
 */
function init() {
    initHero();
    initMethod();
    initModal();
    initCases();
    initManifesto();
    initContact();
    initContactForm();
    initFooter();
    initFloatingWhatsApp();
    initSmoothScroll();
    console.log('NineKeys Landing Page initialized');
}
// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
}
else {
    init();
}
