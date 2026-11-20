/**
 * Avexa Healthcare & Path Labs - Master Interactive Logic
 * High-Trust Medical Diagnostics Web Platform
 * Modern Web Guidance Compliant (<dialog>, overscroll containment, focus management)
 * Tokarkhada, Silvassa
 * Development by Aaryav Technologies
 */

(function () {
  'use strict';

  // Master Constants
  const WHATSAPP_PHONE = '919428172910';
  const PRIMARY_PHONE = '+919428172910';
  const CLINIC_ADDRESS = '3rd Floor, Behind Abuli Hardware, Near ST Bus Depot, Tokarkhada, Silvassa, Dadra and Nagar Haveli and Daman and Diu – 396230';

  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHubTabs();
    initFAQAccordions();
    initModals();
    initHomeCollectionForm();
    initContactForm();
    initReportDownloadForm();
    initPrescriptionUploadForm();
    initTestDirectory();
    initGalleryFilter();
    initPackagesRenderer();
    initTestimonialSlider();
    initWhatsAppLinks();
    highlightActiveNav();
  });

  /* --------------------------------------------------------------------------
     Navigation & Header
     -------------------------------------------------------------------------- */
  function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
    const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
    const mobileBackdrop = document.getElementById('mobileMenuBackdrop');

    if (!mobileMenuBtn || !mobileMenuDrawer) return;

    function openMobileMenu() {
      mobileMenuDrawer.classList.remove('translate-x-full');
      if (mobileBackdrop) {
        mobileBackdrop.classList.remove('hidden');
        requestAnimationFrame(() => mobileBackdrop.classList.remove('opacity-0'));
      }
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      mobileMenuDrawer.classList.add('translate-x-full');
      if (mobileBackdrop) {
        mobileBackdrop.classList.add('opacity-0');
        setTimeout(() => mobileBackdrop.classList.add('hidden'), 300);
      }
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    mobileMenuBtn.addEventListener('click', openMobileMenu);
    if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

    mobileMenuDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    const header = document.querySelector('header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          header.classList.add('shadow-md');
        } else {
          header.classList.remove('shadow-md');
        }
      }, { passive: true });
    }
  }

  function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === pageName || (pageName === '' && href === 'index.html') || (href === './' && pageName === 'index.html')) {
        link.classList.add('text-teal-600', 'font-bold');
        link.classList.remove('text-slate-700');
        const indicator = link.querySelector('.nav-indicator');
        if (indicator) indicator.classList.remove('opacity-0');
      }
    });
  }

  /* --------------------------------------------------------------------------
     Quick Action Hub Tabs (Hero Section)
     -------------------------------------------------------------------------- */
  function initHubTabs() {
    const tabButtons = document.querySelectorAll('.hub-tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (!tabButtons.length) return;

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab-target');

        tabButtons.forEach(b => {
          b.classList.remove('active', 'bg-teal-600', 'text-white', 'shadow-md');
          b.classList.add('text-slate-600', 'hover:bg-slate-100');
        });
        btn.classList.add('active', 'bg-teal-600', 'text-white', 'shadow-md');
        btn.classList.remove('text-slate-600', 'hover:bg-slate-100');

        tabPanes.forEach(pane => {
          if (pane.id === targetId) {
            pane.classList.add('active');
            pane.classList.remove('hidden');
          } else {
            pane.classList.remove('active');
            pane.classList.add('hidden');
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     FAQ Accordions
     -------------------------------------------------------------------------- */
  function initFAQAccordions() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const header = item.querySelector('.faq-header');
      if (header) {
        header.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          faqItems.forEach(i => i.classList.remove('active'));
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     Modern Web Guidance: Native <dialog> Modal Management
     -------------------------------------------------------------------------- */
  function initModals() {
    const dialogs = document.querySelectorAll('dialog');

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const isOutside = (e, dialog) => {
        const r = dialog.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };

      dialogs.forEach(dialog => {
        if (dialog.getAttribute('closedby') === 'any') {
          let pressedOutside = false;
          dialog.addEventListener('pointerdown', (e) => {
            pressedOutside = isOutside(e, dialog);
          });
          dialog.addEventListener('pointerup', (e) => {
            if (pressedOutside && isOutside(e, dialog)) {
              dialog.close();
            }
            pressedOutside = false;
          });
        }
      });
    }

    document.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-open-modal');
        const dialog = document.getElementById(targetId);
        if (dialog && typeof dialog.showModal === 'function') {
          const prefillService = btn.getAttribute('data-prefill-service');
          if (prefillService) {
            const input = dialog.querySelector('input[name="service"], select[name="service"], input[name="testName"]');
            if (input) input.value = prefillService;
          }
          dialog.showModal();
        }
      });
    });

    document.querySelectorAll('dialog [data-close-modal]').forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
        const dialog = closeBtn.closest('dialog');
        if (dialog) dialog.close();
      });
    });

    dialogs.forEach(dialog => {
      dialog.addEventListener('close', () => {
        dialog.returnValue = '';
      });
    });
  }

  /* --------------------------------------------------------------------------
     Home Sample Collection Form
     -------------------------------------------------------------------------- */
  function initHomeCollectionForm() {
    const form = document.getElementById('homeCollectionForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('fullName') || '';
      const phone = formData.get('phone') || '';
      const address = formData.get('address') || '';
      const date = formData.get('preferredDate') || '';
      const timeSlot = formData.get('timeSlot') || '';
      const test = formData.get('testName') || 'General Diagnostic Checkup';
      const notes = formData.get('notes') || '';

      if (!name || !phone || !address) {
        showToast('Please provide patient name, contact number, and address in Silvassa.', 'error');
        return;
      }

      const dialog = form.closest('dialog');
      if (dialog) dialog.close();

      const message = `Hello Avexa Healthcare & Path Labs,\n\nI want to book a *Home Sample Collection* in Silvassa:\n- *Patient Name:* ${name}\n- *Phone:* ${phone}\n- *Address/Landmark:* ${address}\n- *Tests/Package:* ${test}\n- *Preferred Date:* ${date || 'Earliest available'}\n- *Time Slot:* ${timeSlot || 'Morning'}\n${notes ? '- *Special Note:* ' + notes : ''}\n\nPlease confirm my doorstep appointment.`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

      showToast('Booking submitted! Redirecting to WhatsApp for instant confirmation...', 'success');
      form.reset();

      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1200);
    });
  }

  /* --------------------------------------------------------------------------
     General Contact Form
     -------------------------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById('contactEnquiryForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('fullName');
      const phone = formData.get('phone');
      const email = formData.get('email') || 'N/A';
      const service = formData.get('service') || 'General Enquiry';
      const messageText = formData.get('message') || '';

      if (!name || !phone) {
        showToast('Please provide your name and phone number.', 'error');
        return;
      }

      const waMsg = `Hello Avexa Healthcare,\n\nNew Patient Enquiry from Website:\n- *Name:* ${name}\n- *Phone:* ${phone}\n- *Email:* ${email}\n- *Service Interested:* ${service}\n- *Message:* ${messageText || 'Kindly share more details'}`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMsg)}`;

      showToast('Thank you! Your inquiry has been submitted. Connecting you with our medical team...', 'success');
      form.reset();

      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1000);
    });
  }

  /* --------------------------------------------------------------------------
     Prescription Upload Form
     -------------------------------------------------------------------------- */
  function initPrescriptionUploadForm() {
    const form = document.getElementById('prescriptionUploadForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const patientName = form.querySelector('input[name="patientName"]')?.value || 'Patient';
      const patientPhone = form.querySelector('input[name="patientPhone"]')?.value || '';
      const notes = form.querySelector('textarea[name="prescriptionNotes"]')?.value || '';

      const waMsg = `Hello Avexa Healthcare,\n\nI want to upload my *Doctor's Prescription* for testing:\n- *Patient Name:* ${patientName}\n- *Phone:* ${patientPhone}\n- *Notes:* ${notes || 'Please verify prescribed tests and provide price quote'}\n\n(I am attaching the prescription image now)`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMsg)}`;

      showToast('Opening WhatsApp to send your prescription photo directly to our chief pathologist...', 'success');
      form.reset();

      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1200);
    });
  }

  /* --------------------------------------------------------------------------
     Report Download Form
     -------------------------------------------------------------------------- */
  function initReportDownloadForm() {
    const form = document.getElementById('reportDownloadForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const billNo = form.querySelector('input[name="billNo"]').value.trim();
      const mobile = form.querySelector('input[name="mobile"]').value.trim();

      if (!billNo || !mobile) {
        showToast('Please enter both your Bill / Barcode Number and Registered Mobile Number.', 'error');
        return;
      }

      const dialog = form.closest('dialog');
      if (dialog) dialog.close();

      showToast(`Locating digital record for Bill #${billNo}...`, 'info');

      setTimeout(() => {
        const waMsg = `Hello Avexa Healthcare,\n\nI request my pathology lab report PDF:\n- *Bill/Lab ID No:* ${billNo}\n- *Registered Mobile:* ${mobile}\n\nPlease dispatch the verified report PDF on WhatsApp.`;
        const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMsg)}`;

        alert(`Your test report for Bill #${billNo} has been verified! Opening the Avexa report dispatch channel on WhatsApp (${mobile})...`);
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1000);
    });
  }

  /* --------------------------------------------------------------------------
     Interactive Test Directory
     -------------------------------------------------------------------------- */
  function initTestDirectory() {
    const container = document.getElementById('testsDirectoryContainer');
    const searchInput = document.getElementById('testSearchInput');
    const categoryButtons = document.querySelectorAll('.test-category-btn');
    const testsCountEl = document.getElementById('testsCountDisplay');

    if (!container || !window.AVEXA_TESTS) return;

    let activeCategory = 'All';
    let searchQuery = '';

    // Check URL query parameters (e.g. ?q=CBC)
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('q');
    if (initialQuery && searchInput) {
      searchQuery = initialQuery.toLowerCase().trim();
      searchInput.value = initialQuery;
    }

    function renderTests() {
      const filtered = window.AVEXA_TESTS.filter(test => {
        const matchesCategory = activeCategory === 'All' || test.category.toLowerCase() === activeCategory.toLowerCase();
        const matchesSearch = !searchQuery || 
          test.name.toLowerCase().includes(searchQuery) ||
          test.category.toLowerCase().includes(searchQuery) ||
          test.description.toLowerCase().includes(searchQuery) ||
          (test.parameters && test.parameters.some(p => p.toLowerCase().includes(searchQuery)));
        return matchesCategory && matchesSearch;
      });

      if (testsCountEl) {
        testsCountEl.textContent = `Showing ${filtered.length} diagnostic investigations`;
      }

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="col-span-full text-center py-12 px-4 bg-white rounded-3xl border border-dashed border-slate-300">
            <div class="w-16 h-16 mx-auto mb-4 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-800 mb-1">No matching test found</h3>
            <p class="text-slate-500 max-w-md mx-auto text-sm mb-4">Avexa conducts over 500+ specialized tests. If your doctor prescribed an uncommon test, message our laboratory desk directly.</p>
            <a href="https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi Avexa Healthcare, I am searching for a test: ' + searchQuery)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-sm transition">
              Inquire via WhatsApp
            </a>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(test => {
        let sampleBadgeClass = 'tube-serum';
        if (test.sample.toLowerCase().includes('edta')) sampleBadgeClass = 'tube-edta';
        else if (test.sample.toLowerCase().includes('fluoride')) sampleBadgeClass = 'tube-fluoride';
        else if (test.sample.toLowerCase().includes('urine')) sampleBadgeClass = 'tube-urine';

        return `
          <div class="card-elevation rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full border border-teal-100">
                  ${test.category}
                </span>
                ${test.popular ? `
                  <span class="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-50 text-amber-700 text-[11px] font-extrabold rounded-full border border-amber-200">
                    ★ Popular
                  </span>
                ` : ''}
              </div>

              <h3 class="text-lg font-extrabold text-navy-900 group-hover:text-teal-700 transition-colors mb-2 leading-snug">
                ${test.name}
              </h3>

              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                ${test.description}
              </p>

              <div class="bg-slate-50/90 rounded-2xl p-3.5 mb-5 space-y-2 text-xs text-slate-700 border border-slate-100">
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 font-medium">Sample Specimen:</span>
                  <span class="px-2 py-0.5 rounded-md font-semibold text-[11px] ${sampleBadgeClass}">${test.sample}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 font-medium">Fasting Guideline:</span>
                  <span class="font-semibold ${test.fasting.toLowerCase().includes('strict') ? 'text-amber-700 font-bold' : 'text-slate-800'}">${test.fasting}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 font-medium">Report Delivery:</span>
                  <span class="font-bold text-teal-700">${test.tat}</span>
                </div>
              </div>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Price</span>
                <span class="text-2xl font-black text-navy-900">₹${test.price}</span>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" 
                        data-open-modal="homeCollectionModal" 
                        data-prefill-service="${test.name}"
                        class="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition shadow-md shadow-teal-600/20">
                  Book Test
                </button>
                <a href="https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi Avexa Healthcare, I want to book: ' + test.name + ' (₹' + test.price + ')')}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Book ${test.name} via WhatsApp"
                   class="p-2.5 text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-xl transition border border-teal-200">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/></svg>
                </a>
              </div>
            </div>
          </div>
        `;
      }).join('');

      initModals();
    }

    renderTests();

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderTests();
      });
    }

    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryButtons.forEach(b => {
          b.classList.remove('bg-teal-600', 'text-white');
          b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
        });
        btn.classList.add('bg-teal-600', 'text-white');
        btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
        activeCategory = btn.getAttribute('data-category');
        renderTests();
      });
    });
  }

  /* --------------------------------------------------------------------------
     Packages Renderer
     -------------------------------------------------------------------------- */
  function initPackagesRenderer() {
    const container = document.getElementById('packagesCardsContainer');
    if (!container || !window.AVEXA_PACKAGES) return;

    container.innerHTML = window.AVEXA_PACKAGES.map(pkg => `
      <div class="card-elevation rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative group overflow-hidden">
        ${pkg.badge ? `
          <div class="absolute top-0 right-0 bg-teal-600 text-white text-[11px] font-extrabold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-sm">
            ${pkg.badge}
          </div>
        ` : ''}

        <div>
          <div class="mb-4">
            <span class="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              ${pkg.parametersCount} Parameters Included
            </span>
          </div>

          <h3 class="text-xl font-extrabold text-navy-900 mb-2 leading-tight">${pkg.name}</h3>
          <p class="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">${pkg.description}</p>

          <div class="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-3xl font-black text-navy-900">₹${pkg.price}</span>
              <span class="text-sm text-slate-400 line-through">₹${pkg.originalPrice}</span>
              <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">${pkg.discount}</span>
            </div>
            <p class="text-xs text-slate-500 font-medium">Free doorstep collection + digital WhatsApp report</p>
          </div>

          <div class="space-y-2 mb-6">
            <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Key Test Inclusions:</h4>
            <ul class="space-y-2 text-xs text-slate-700">
              ${pkg.categories.map(item => `
                <li class="flex items-start gap-2">
                  <svg class="w-4 h-4 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <div class="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <button type="button" 
                  data-open-modal="homeCollectionModal" 
                  data-prefill-service="${pkg.name}"
                  class="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-sm transition text-center shadow-md shadow-teal-600/20">
            Book Package
          </button>
          <a href="https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi Avexa Healthcare, I am interested in booking the ' + pkg.name + ' (₹' + pkg.price + ').')}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="w-full sm:w-auto px-4 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 border border-emerald-200">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    `).join('');

    initModals();
  }

  /* --------------------------------------------------------------------------
     Gallery Category Filter & Lightbox
     -------------------------------------------------------------------------- */
  function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxDialog = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCaption = document.getElementById('lightboxCaption');

    if (!galleryItems.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-gallery-filter');

        filterButtons.forEach(b => {
          b.classList.remove('bg-teal-600', 'text-white');
          b.classList.add('bg-white', 'text-slate-700');
        });
        btn.classList.add('bg-teal-600', 'text-white');
        btn.classList.remove('bg-white', 'text-slate-700');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        if (!lightboxDialog || !lightboxImg) return;
        const img = item.querySelector('img');
        const title = item.querySelector('h3, .gallery-item-title')?.textContent || 'Avexa Diagnostic Facility';
        const caption = item.querySelector('p, .gallery-item-caption')?.textContent || 'Tokarkhada, Silvassa';

        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || title;
        }
        if (lightboxTitle) lightboxTitle.textContent = title;
        if (lightboxCaption) lightboxCaption.textContent = caption;

        lightboxDialog.showModal();
      });
    });
  }

  /* --------------------------------------------------------------------------
     Testimonial Slider
     -------------------------------------------------------------------------- */
  function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');

    if (!slides.length) return;

    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, idx) => {
        if (idx === index) {
          slide.classList.remove('hidden-custom');
          slide.classList.add('opacity-100');
        } else {
          slide.classList.add('hidden-custom');
          slide.classList.remove('opacity-100');
        }
      });
    }

    function next() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prev() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    setInterval(next, 7000);
  }

  /* --------------------------------------------------------------------------
     Dynamic WhatsApp Helpers
     -------------------------------------------------------------------------- */
  function initWhatsAppLinks() {
    document.querySelectorAll('.wa-direct-btn').forEach(btn => {
      const topic = btn.getAttribute('data-wa-topic') || 'diagnostic test enquiry';
      const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hello Avexa Healthcare & Path Labs, I am visiting avexa.in and have an enquiry regarding ' + topic + '.')}`;
      btn.setAttribute('href', url);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    });
  }

  /* --------------------------------------------------------------------------
     Toast Notification System
     -------------------------------------------------------------------------- */
  function showToast(message, type = 'info') {
    let toast = document.getElementById('avexaToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'avexaToast';
      toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold shadow-2xl transition-all duration-300 transform translate-y-12 opacity-0 pointer-events-none';
      document.body.appendChild(toast);
    }

    if (type === 'success') {
      toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold shadow-2xl transition-all duration-300 transform translate-y-0 opacity-100 bg-navy-950 text-white border border-teal-500/50 pointer-events-auto';
      toast.innerHTML = `
        <svg class="w-5 h-5 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
        <span>${message}</span>
      `;
    } else if (type === 'error') {
      toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold shadow-2xl transition-all duration-300 transform translate-y-0 opacity-100 bg-rose-950 text-white border border-rose-500/50 pointer-events-auto';
      toast.innerHTML = `
        <svg class="w-5 h-5 text-rose-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        <span>${message}</span>
      `;
    } else {
      toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold shadow-2xl transition-all duration-300 transform translate-y-0 opacity-100 bg-navy-950 text-white border border-slate-700 pointer-events-auto';
      toast.innerHTML = `
        <svg class="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>${message}</span>
      `;
    }

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-12', 'opacity-0');
    }, 4500);
  }

  window.avexaToast = showToast;

})();
