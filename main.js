// Interactive JavaScript for Surannavar Group of Institutions Website

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header elevation on scroll
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // 2. Search Drawer Toggle
  const searchToggleBtn = document.getElementById('search-toggle-btn');
  const searchDrawer = document.getElementById('search-drawer');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('quick-search-input');

  if (searchToggleBtn && searchDrawer && searchCloseBtn) {
    searchToggleBtn.addEventListener('click', () => {
      const isOpen = searchDrawer.classList.toggle('active');
      searchDrawer.setAttribute('aria-hidden', !isOpen);
      if (isOpen && searchInput) {
        setTimeout(() => searchInput.focus(), 150);
      }
    });

    searchCloseBtn.addEventListener('click', () => {
      searchDrawer.classList.remove('active');
      searchDrawer.setAttribute('aria-hidden', 'true');
    });

    // Tag chip clicks
    const tagChips = document.querySelectorAll('.search-tag-chip');
    tagChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        if (searchInput) {
          searchInput.value = query;
          // Jump to appropriate section based on tag
          if (query.includes('Nursing')) {
            document.getElementById('college-nursing')?.scrollIntoView({ behavior: 'smooth' });
          } else if (query.includes('Physiotherapy')) {
            document.getElementById('college-physio')?.scrollIntoView({ behavior: 'smooth' });
          } else if (query.includes('Allied')) {
            document.getElementById('college-allied')?.scrollIntoView({ behavior: 'smooth' });
          } else if (query.includes('Robotic')) {
            document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
          } else {
            openEnquiryModal();
          }
          searchDrawer.classList.remove('active');
        }
      });
    });
  }

  // 3. Mobile Navigation Drawer
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');

  if (mobileMenuToggle && mobileNavDrawer && mobileCloseBtn) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNavDrawer.classList.add('open');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    });

    mobileCloseBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('open');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    });

    // Close mobile drawer when clicking internal links
    const mobLinks = mobileNavDrawer.querySelectorAll('a');
    mobLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 4. Enquiry Modal Handling
  const enquiryModal = document.getElementById('enquiry-modal');
  const enquiryCloseBtn = document.getElementById('modal-enquire-close');
  const enquiryForm = document.getElementById('enquiry-form');
  const enquiryFeedback = document.getElementById('enquiry-feedback');
  const openEnquiryButtons = document.querySelectorAll('.open-enquiry');

  function openEnquiryModal(preselectedCollege = '') {
    if (enquiryModal) {
      enquiryModal.classList.add('active');
      enquiryModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (preselectedCollege) {
        const selectElem = document.getElementById('enq-college');
        if (selectElem) selectElem.value = preselectedCollege;
      }
    }
  }

  function closeEnquiryModal() {
    if (enquiryModal) {
      enquiryModal.classList.remove('active');
      enquiryModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  openEnquiryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openEnquiryModal();
    });
  });

  if (enquiryCloseBtn) {
    enquiryCloseBtn.addEventListener('click', closeEnquiryModal);
  }

  if (enquiryModal) {
    enquiryModal.addEventListener('click', (e) => {
      if (e.target === enquiryModal) {
        closeEnquiryModal();
      }
    });
  }

  // Enquiry form submit mock
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Submitted!';
        if (enquiryFeedback) {
          enquiryFeedback.className = 'form-feedback success';
          enquiryFeedback.textContent = 'Thank you! Your enquiry has been received. Our Admissions Counselors will contact you shortly.';
        }
        enquiryForm.reset();
        setTimeout(() => {
          closeEnquiryModal();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          if (enquiryFeedback) enquiryFeedback.style.display = 'none';
        }, 2200);
      }, 700);
    });
  }

  // 5. Hospital Story Modal Handling
  const storyModal = document.getElementById('story-modal');
  const storyCloseBtn = document.getElementById('story-modal-close');
  const openStoryButtons = document.querySelectorAll('.open-story-modal');

  function openStory() {
    if (storyModal) {
      storyModal.classList.add('active');
      storyModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeStory() {
    if (storyModal) {
      storyModal.classList.remove('active');
      storyModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  openStoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openStory();
    });
  });

  if (storyCloseBtn) {
    storyCloseBtn.addEventListener('click', closeStory);
  }

  if (storyModal) {
    storyModal.addEventListener('click', (e) => {
      if (e.target === storyModal) {
        closeStory();
      }
    });
  }

  // 6. College Card Exploration buttons
  const collegeModalButtons = document.querySelectorAll('.open-college-modal');
  collegeModalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const collegeType = btn.getAttribute('data-college');
      openEnquiryModal(collegeType);
    });
  });

  // 7. Find Out More About Us button
  const aboutBtn = document.getElementById('btn-about-more');
  if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
      document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 8. Contact Us buttons
  const contactButtons = document.querySelectorAll('.open-contact');
  contactButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 9. Back to top button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Keyboard accessibility: ESC key to close open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeEnquiryModal();
      closeStory();
      if (searchDrawer) searchDrawer.classList.remove('active');
      if (mobileNavDrawer) mobileNavDrawer.classList.remove('open');
    }
  });
});
