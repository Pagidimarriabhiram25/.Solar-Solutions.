/**
 * SHOURYA INFRA - SMART SOLAR WEB APPLICATION
 * Features: Solar ROI Calculator, PM Surya Ghar Subsidy Engine,
 *           Multi-Language Support (English / Telugu), Lightbox Gallery & WhatsApp Dispatch.
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initCalculator();
  initGallery();
  initContactForm();
  initFaqAccordion();
  initMobileNav();
  initQuickInquiryModal();
});

/* ==========================================================================
   1. MULTI-LANGUAGE SYSTEM (English & Telugu for complete local reach)
   ========================================================================== */
const translations = {
  en: {
    topBadge: "PM Surya Ghar Approved",
    topOffer: "Get up to ₹78,000 Government Subsidy on Rooftop Solar!",
    callNow: "Call: 98666 78887",
    navHome: "Home",
    navSubsidy: "PM Subsidy",
    navCalc: "Savings Calculator",
    navProjects: "Real Projects",
    navWhyUs: "Why Us",
    navContact: "Contact",
    btnSurvey: "Free Site Survey",
    heroBadge: "Serving All Over Telangana • Trusted Solar EPC Specialist",
    heroTitle: "Slash Electricity Bills up to 90% with Shourya Infra",
    heroDesc: "Turn your rooftop into a clean, green powerhouse. 100% usable elevated terrace sheds, Tier-1 bifacial panels, certified Polycab inverters, and instant PM Surya Ghar subsidy assistance.",
    btnCalcSavings: "Calculate Savings",
    btnWhatsApp: "WhatsApp Us: 9866678887",
    statSubsidy: "₹78,000+",
    statSubsidyLabel: "Direct Central Subsidy",
    statWarranty: "25 Years",
    statWarrantyLabel: "Panel Performance Warranty",
    statStructure: "100% Usable",
    statStructureLabel: "Elevated Terrace Sheds",
    liveGenLabel: "Live Clean Energy",
    billLabel: "Your Monthly Electricity Bill:",
    propRes: "Residential Home",
    propApt: "Apartment / Society",
    propCom: "Commercial / Office",
    recSystem: "Recommended System Size",
    genMonthly: "Est. Monthly Units",
    spaceNeeded: "Roof Space Needed",
    govtSubsidy: "PM Surya Ghar Subsidy",
    netInvestment: "Est. Net Investment",
    yearlySavings: "Yearly Electricity Savings",
    paybackPeriod: "Est. Payback Period",
    treesEquiv: "Equivalent Trees Planted",
    btnClaimCalc: "Claim This Subsidy on WhatsApp",
    galleryTitle: "Real Installations in Hyderabad & Across Telangana",
    gallerySub: "Explore our genuine rooftop projects across Hasthinapuram, Mehdipatnam, Almasguda, and districts across Telangana.",
    filterAll: "All Installations",
    filterElevated: "Elevated Rooftop Sheds",
    filterBifacial: "Bifacial Panels",
    filterInverters: "Inverters & Switchgear",
    filterSafety: "Safety & Chemical Earthing",
    contactHeading: "Ready to Cut Your Power Bills to Zero?",
    contactSub: "Book a 100% free rooftop survey anywhere across Telangana (All 33 Districts). Our solar engineers will analyze your shadow patterns, terrace structure, and provide an instant custom proposal.",
    formTitle: "Book Free Rooftop Survey",
    formSub: "Serving All Over Telangana. Fill out the form below or chat on WhatsApp.",
    nameLabel: "Your Full Name *",
    phoneLabel: "Mobile / WhatsApp Number *",
    areaLabel: "District / City / Town in Telangana *",
    billInputLabel: "Current Monthly Electricity Bill (₹) *",
    dateLabel: "Preferred Survey Date",
    btnSubmitForm: "Request Free Site Visit",
    faqTitle: "Frequently Asked Questions",
    faqSub: "Everything you need to know about rooftop solar, government subsidies, and elevated terrace structures."
  },
  te: {
    topBadge: "పీఎం సూర్య ఘర్ ఆమోదితం",
    topOffer: "తెలంగాణ వ్యాప్తంగా రూఫ్టాప్ సోలార్ పై ₹78,000 వరకు కేంద్ర ప్రభుత్వ సబ్సిడీ పొందండి!",
    callNow: "కాల్ చేయండి: 98666 78887",
    navHome: "హోమ్",
    navSubsidy: "పీఎం సబ్సిడీ",
    navCalc: "పొదుపు కాలిక్యులేటర్",
    navProjects: "మా ప్రాజెక్టులు",
    navWhyUs: "ఎందుకు శౌర్య ఇన్ఫ్రా?",
    navContact: "సంప్రదించండి",
    btnSurvey: "ఉచిత సైట్ సర్వే",
    heroBadge: "తెలంగాణ వ్యాప్తంగా అన్ని జిల్లాలలో విశ్వసనీయ రూఫ్‌టాప్ సోలార్ నిపుణులు",
    heroTitle: "శౌర్య ఇన్ఫ్రాతో కరెంట్ బిల్లులను 90% వరకు ఆదా చేసుకోండి",
    heroDesc: "మీ డాబాపై ఎలివేటెడ్ షెడ్లతో స్థలం వృధా కాకుండా ఉచిత విద్యుత్ ఉత్పత్తి చేయండి. బైఫేషియల్ ప్యానెల్స్, పాలీక్యాబ్ ఇన్వర్టర్లు మరియు పీఎం సూర్య ఘర్ సబ్సిడీ సదుపాయం.",
    btnCalcSavings: "పొదుపును లెక్కించండి",
    btnWhatsApp: "వాట్సాప్ చేయండి: 9866678887",
    statSubsidy: "₹78,000+",
    statSubsidyLabel: "ప్రత్యక్ష ప్రభుత్వ సబ్సిడీ",
    statWarranty: "25 సంవత్సరాలు",
    statWarrantyLabel: "ప్యానెల్ పనితీరు వారంటీ",
    statStructure: "100% ఉపయోగకరం",
    statStructureLabel: "ఎత్తైన డాబా షెడ్లు",
    liveGenLabel: "క్లీన్ సోలార్ ఎనర్జీ",
    billLabel: "మీ నెలవారీ విద్యుత్ బిల్లు:",
    propRes: "వ్యక్తిగత ఇల్లు / విల్లా",
    propApt: "అపార్ట్మెంట్ / సొసైటీ",
    propCom: "వాణిజ్య / ఆఫీస్",
    recSystem: "సిఫార్సు చేయబడిన సోలార్ ప్లాంట్",
    genMonthly: "నెలవారీ యూనిట్లు",
    spaceNeeded: "కావలసిన డాబా స్థలం",
    govtSubsidy: "ప్రభుత్వ సబ్సిడీ",
    netInvestment: "అంచనా నికర ఖర్చు",
    yearlySavings: "వార్షిక కరెంట్ బిల్లు పొదుపు",
    paybackPeriod: "పెట్టుబడి తిరిగి వచ్చే సమయం",
    treesEquiv: "నాటిన చెట్లతో సమానం",
    btnClaimCalc: "ఈ సబ్సిడీని వాట్సాప్‌లో పొందండి",
    galleryTitle: "తెలంగాణ వ్యాప్తంగా మా అసలైన ప్రాజెక్టులు",
    gallerySub: "హైదరాబాద్, హస్తినాపురం, మెహిదీపట్నం మరియు తెలంగాణ వ్యాప్తంగా మేము విజయవంతంగా ఏర్పాటు చేసిన సోలార్ ప్రాజెక్టులు.",
    filterAll: "అన్ని ప్రాజెక్టులు",
    filterElevated: "ఎలివేటెడ్ డాబా షెడ్లు",
    filterBifacial: "బైఫేషియల్ ప్యానెల్స్",
    filterInverters: "ఇన్వర్టర్లు & ప్యానెల్ బాక్సులు",
    filterSafety: "కెమికల్ ఎర్తింగ్ & రక్షణ",
    contactHeading: "మీ కరెంట్ బిల్లును జీరో చేయాలనుకుంటున్నారా?",
    contactSub: "తెలంగాణ వ్యాప్తంగా అన్ని జిల్లాలలో ఉచిత రూఫ్‌టాప్ సైట్ సర్వేను బుక్ చేసుకోండి. మా ఇంజనీర్లు మీ ఇంటికి వచ్చి పూర్తి నివేదిక అందిస్తారు.",
    formTitle: "ఉచిత సైట్ విజిట్ బుక్ చేయండి",
    formSub: "తెలంగాణ అంతటా సేవలు అందుబాటులో ఉన్నాయి. ఫారమ్ నింపండి లేదా వాట్సాప్‌లో మాట్లాడండి.",
    nameLabel: "మీ పూర్తి పేరు *",
    phoneLabel: "మొబైల్ / వాట్సాప్ నంబర్ *",
    areaLabel: "తెలంగాణలోని మీ జిల్లా / నగరం / గ్రామం *",
    billInputLabel: "ప్రస్తుత నెలవారీ విద్యుత్ బిల్లు (₹) *",
    dateLabel: "సర్వే కోరుకునే తేదీ",
    btnSubmitForm: "ఉచిత సర్వే బుక్ చేయండి",
    faqTitle: "తరచుగా అడిగే ప్రశ్నలు (FAQs)",
    faqSub: "సోలార్ ప్యానెల్స్, ప్రభుత్వ సబ్సిడీ మరియు ఎలివేటెడ్ షెడ్ల గురించి సమగ్ర సమాచారం."
  }
};

let currentLang = 'en';

function initLanguageSwitcher() {
  const langBtn = document.getElementById('langToggleBtn');
  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'te' : 'en';
    applyTranslations();
    langBtn.innerHTML = currentLang === 'en' 
      ? `🌐 తెలుగు (TE)` 
      : `🌐 English (EN)`;
  });
}

function applyTranslations() {
  const langData = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (langData[key]) {
      el.textContent = langData[key];
    }
  });
  // Recalculate text inside dynamic elements
  updateCalculatorUI();
}

/* ==========================================================================
   2. INTERACTIVE SOLAR CALCULATOR (PM Surya Ghar Subsidy Engine)
   ========================================================================== */
const calcState = {
  bill: 3500,
  propType: 'residential'
};

function initCalculator() {
  const slider = document.getElementById('billRangeSlider');
  const billValDisplay = document.getElementById('billValDisplay');
  const propBtns = document.querySelectorAll('.prop-btn');
  const claimBtn = document.getElementById('claimSubsidyBtn');

  if (slider && billValDisplay) {
    slider.addEventListener('input', (e) => {
      calcState.bill = parseInt(e.target.value, 10);
      billValDisplay.textContent = `₹${calcState.bill.toLocaleString('en-IN')}`;
      updateCalculatorUI();
    });
  }

  propBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      propBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calcState.propType = btn.getAttribute('data-prop');
      updateCalculatorUI();
    });
  });

  if (claimBtn) {
    claimBtn.addEventListener('click', () => {
      const calcData = calculateSolar(calcState.bill, calcState.propType);
      const text = encodeURIComponent(
        `Hi Shourya Infra, I calculated my solar savings on your website!\n\n` +
        `• Monthly Electricity Bill: ₹${calcState.bill.toLocaleString('en-IN')}\n` +
        `• Recommended Solar System: ${calcData.kW} kW\n` +
        `• Eligible Central Subsidy: ₹${calcData.subsidy.toLocaleString('en-IN')}\n` +
        `• Est. Monthly Savings: ₹${calcData.monthlySavings.toLocaleString('en-IN')}\n\n` +
        `Please schedule a FREE site survey for my property in Hyderabad/Telangana.`
      );
      window.open(`https://wa.me/919866678887?text=${text}`, '_blank');
    });
  }

  updateCalculatorUI();
}

function calculateSolar(bill, type) {
  // Average electricity unit cost in Telangana (TSSPDCL slabs) ~₹7.2 - ₹8.0
  const avgUnitRate = 7.5;
  const unitsConsumed = bill / avgUnitRate;
  
  // 1 kW rooftop solar generates ~120 units/month in Hyderabad sun conditions
  let recommendedKW = Math.ceil((unitsConsumed / 120) * 2) / 2; // round to nearest 0.5 kW
  if (recommendedKW < 1) recommendedKW = 1;
  if (recommendedKW > 15) recommendedKW = 15; // cap for residential slider

  // PM Surya Ghar Subsidy scheme:
  // 1 kW = ₹30,000
  // 2 kW = ₹60,000
  // 3 kW and above = ₹78,000 (flat maximum for residential)
  let subsidy = 0;
  if (type === 'residential') {
    if (recommendedKW === 1) subsidy = 30000;
    else if (recommendedKW <= 2) subsidy = 60000;
    else subsidy = 78000;
  } else {
    // Commercial gets accelerated depreciation (40%) and GST input tax credit
    subsidy = 0;
  }

  // High quality elevated structure + Tier-1 bifacial panels system cost estimation:
  const baseCostPerKW = 62000;
  const grossCost = Math.round(recommendedKW * baseCostPerKW);
  const netCost = Math.max(0, grossCost - subsidy);

  // Generation & Savings
  const monthlyUnits = Math.round(recommendedKW * 120);
  const monthlySavings = Math.min(bill, Math.round(monthlyUnits * avgUnitRate));
  const yearlySavings = monthlySavings * 12;

  // Payback period
  const paybackYears = (netCost / yearlySavings).toFixed(1);
  const lifetimeSavings = (yearlySavings * 25) - netCost;

  // Space & Eco Impact
  const roofSpaceSqFt = Math.round(recommendedKW * 75);
  const co2SavedTons = (recommendedKW * 1.2).toFixed(1);
  const treesPlanted = Math.round(recommendedKW * 45);

  return {
    kW: recommendedKW,
    monthlyUnits,
    roofSpaceSqFt,
    subsidy,
    grossCost,
    netCost,
    monthlySavings,
    yearlySavings,
    paybackYears,
    lifetimeSavings,
    co2SavedTons,
    treesPlanted
  };
}

function updateCalculatorUI() {
  const data = calculateSolar(calcState.bill, calcState.propType);

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl('resSystemKW', `${data.kW} kW Plant`);
  setEl('resMonthlyUnits', `${data.monthlyUnits} Units`);
  setEl('resRoofSpace', `${data.roofSpaceSqFt} sq. ft.`);
  setEl('resSubsidy', `₹${data.subsidy.toLocaleString('en-IN')}`);
  setEl('resNetCost', `₹${data.netCost.toLocaleString('en-IN')}`);
  setEl('resYearlySavings', `₹${data.yearlySavings.toLocaleString('en-IN')}/yr`);
  setEl('resPayback', `${data.paybackYears} Years`);
  setEl('resTrees', `${data.treesPlanted} Trees 🌳`);
}

/* ==========================================================================
   3. GALLERY FILTERING & LIGHTBOX
   ========================================================================== */
function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxLoc = document.getElementById('lightboxLoc');
  const closeBtn = document.getElementById('lightboxCloseBtn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category').includes(category)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lightbox click
  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('h4').textContent;
      const loc = card.querySelector('.gallery-location-badge').textContent;

      lightboxImg.src = img.src;
      lightboxTitle.textContent = title;
      lightboxLoc.textContent = loc;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   4. CONTACT & SITE SURVEY FORM
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('siteSurveyForm');
  const successModal = document.getElementById('formSuccessModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');

  let lastSubmittedPayload = null;

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('custName').value.trim();
      const phone = document.getElementById('custPhone').value.trim();
      const area = document.getElementById('custArea').value.trim();
      const bill = document.getElementById('custBill').value.trim();
      const date = document.getElementById('custDate').value.trim();

      if (!name || !phone || !area || !bill) {
        alert('Please fill out all required fields.');
        return;
      }

      lastSubmittedPayload = { name, phone, area, bill, date };

      if (successModal) {
        successModal.style.display = 'flex';
      }

      form.reset();
    });
  }

  if (modalCloseBtn && successModal) {
    modalCloseBtn.addEventListener('click', () => {
      successModal.style.display = 'none';
    });
  }

  if (modalWhatsappBtn) {
    modalWhatsappBtn.addEventListener('click', () => {
      if (!lastSubmittedPayload) return;
      const p = lastSubmittedPayload;
      const msg = encodeURIComponent(
        `Hello Shourya Infra! I would like to book a Free Rooftop Solar Survey:\n\n` +
        `• Name: ${p.name}\n` +
        `• Phone: ${p.phone}\n` +
        `• Location: ${p.area}, Hyderabad/Telangana\n` +
        `• Monthly Electric Bill: ₹${p.bill}\n` +
        `• Preferred Date: ${p.date || 'Earliest Available'}\n\n` +
        `Please confirm our site inspection schedule. Thank you!`
      );
      window.open(`https://wa.me/919866678887?text=${msg}`, '_blank');
      if (successModal) successModal.style.display = 'none';
    });
  }
}

/* ==========================================================================
   5. ACCORDION FAQS
   ========================================================================== */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const header = card.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      faqCards.forEach(c => c.classList.remove('open'));
      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });
}

/* ==========================================================================
   6. MOBILE NAVIGATION TOGGLE
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('mainNavMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* ==========================================================================
   7. QUICK INQUIRY MODAL & PERSISTENT LEAD CAPTURE
   ========================================================================== */
function initQuickInquiryModal() {
  const modal = document.getElementById('quickInquiryModal');
  const floatingBtn = document.getElementById('floatingInquiryBtn');
  const mobileBtn = document.getElementById('mobileInquiryBtn');
  const closeBtn = document.getElementById('closeInquiryModalBtn');
  const form = document.getElementById('quickInquiryForm');
  const successModal = document.getElementById('formSuccessModal');

  const openModal = () => {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  if (floatingBtn) floatingBtn.addEventListener('click', openModal);
  if (mobileBtn) mobileBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  document.querySelectorAll('.open-inquiry-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('qCustName').value.trim();
      const phone = document.getElementById('qCustPhone').value.trim();
      const district = document.getElementById('qCustDistrict').value.trim();
      const bill = document.getElementById('qCustBill').value.trim();
      const propType = document.getElementById('qCustPropType').value;
      const notes = document.getElementById('qCustNotes').value.trim();

      if (!name || !phone || !district || !bill) {
        alert('Please fill out all required fields.');
        return;
      }

      // Save to localStorage so leads are preserved on device
      try {
        const existingLeads = JSON.parse(localStorage.getItem('shourya_solar_leads') || '[]');
        existingLeads.unshift({
          name, phone, district, bill, propType, notes,
          timestamp: new Date().toLocaleString('en-IN')
        });
        localStorage.setItem('shourya_solar_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.warn('Could not save lead locally:', err);
      }

      // Pre-format WhatsApp message for Rama Rao
      const whatsappMsg = encodeURIComponent(
        `Hello Rama Rao garu (Shourya Infra)!\n` +
        `I am interested in installing rooftop solar on my property:\n\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Location: ${district}, Telangana\n` +
        `• Monthly Electric Bill: ₹${bill}\n` +
        `• Property: ${propType}\n` +
        (notes ? `• Specific Requirement: ${notes}\n\n` : `\n`) +
        `Please let me know the estimated solar system size and subsidy details. Thank you!`
      );

      closeModal();
      form.reset();

      // Show confirmation popup and trigger WhatsApp
      if (successModal) {
        successModal.style.display = 'flex';
      }
      
      // Also open WhatsApp directly
      window.open(`https://wa.me/919866678887?text=${whatsappMsg}`, '_blank');
    });
  }

  // Admin/Owner tool to check recorded leads on this browser
  const leadsBtn = document.getElementById('viewSavedLeadsBtn');
  if (leadsBtn) {
    leadsBtn.addEventListener('click', () => {
      const saved = JSON.parse(localStorage.getItem('shourya_solar_leads') || '[]');
      if (saved.length === 0) {
        alert('No inquiries recorded on this browser yet.\nWhen visitors fill the inquiry form, their details are stored here and sent to your WhatsApp (+91 98666 78887)!');
      } else {
        const listText = saved.map((s, idx) => 
          `${idx + 1}. [${s.timestamp}] ${s.name} (${s.phone}) - ${s.district} | Bill: ₹${s.bill} | ${s.propType}`
        ).join('\n\n');
        alert(`Recorded Customer Inquiries (${saved.length}):\n\n${listText}`);
      }
    });
  }
}


