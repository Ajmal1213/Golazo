'use strict';

/* =============================================================
   1. SHOP SETTINGS - YOUR MAIN EDITING AREA
   =============================================================
   The brief uses Golazo for the main site and Bluebell for the
   footer/contact greeting. Both are retained explicitly below.
   For consistent branding, set footerName and whatsappGreeting
   to empty strings: they will then inherit SHOP.name.

   Do not put a made-up phone number here. Until you add your real
   international number, contact buttons show a helpful notice.
   Example FORMAT ONLY: 971 followed by your actual UAE number,
   with no leading local zero. A leading + is accepted too.
   ============================================================= */

const SHOP = {
  name: 'Golazo Cakes',
  footerName: 'Golazo Cakes',

  // Your real international phone number.
  phoneNumber: '+91 79075 77611',
  phoneDisplay: '+91 79075 77611',

  // Your real WhatsApp number, including country code.
  whatsappNumber: '++91 79075 77611',
  whatsappDisplay: '+91 79075 77611',

  email: 'hello@Golazocakes.com',
  address: 'Kerala, India',
  mapUrl:'https://maps.app.goo.gl/DMfnUgaZwfSSz4UR9',
  currency: 'INR',
  locale: 'en-IN',
  timeZone: 'Asia/Kolkata',
  copyrightYear: 2026,

  whatsappGreeting:
    'Hello Golazo Cakes, I would like to enquire about a cake.',

  social: {
    // Paste actual profile URLs.
    // Otherwise, the icons remain non-clickable.
    instagram: 'https://www.instagram.com/golazo_cakes_in',
    facebook: ''
  }
};

/* =============================================================
   2. IMAGES
   =============================================================
   Stock photos are hosted remotely and need an internet connection.
   Replace any src with 'images/your-photo.webp' to use a local file.
   The included SVG fallback is local.
   Credits are in images/SOURCES.md.
   Update descriptions when photographs are replaced.
   ============================================================= */

const IMAGES = {
  birthday: {
    src: 'https://images.unsplash.com/photo-1604413191066-4dd20bedf486',
    alt:
      'Pastel blue birthday cake with pink buttercream swirls and colourful sprinkles'
  },

  wedding: {
    src: 'https://images.unsplash.com/photo-1764269710986-0b69be00d7ca',
    alt:
      'Elegant three-tier white wedding cake decorated with delicate white flowers'
  },

  anniversary: {
    src: 'https://images.unsplash.com/photo-1692640848099-325af9b3f75f',
    alt:
      'Vintage-style white buttercream cake finished with two cherries'
  },

  chocolate: {
    src: 'https://unsplash.com/photos/LRIQuZyxKRM/download?force=true',
    alt:
      'Chocolate birthday cake with ganache drips and piped chocolate roses'
  },

  'red-velvet': {
    src: 'https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg',
    alt:
      'Slice of red velvet cake with cream cheese frosting and fresh berries'
  },

  'black-forest': {
    src: 'https://unsplash.com/photos/6jHpcBPw7i8/download?force=true',
    alt:
      'Black Forest cake with chocolate sponge, cream and glossy cherries'
  },

  custom: {
    src: 'https://unsplash.com/photos/QNyRp21hb5I/download?force=true',
    alt:
      'Playful pink drip cake with sprinkles and an ice-cream-cone decoration'
  },

  signature: {
    src: 'https://images.unsplash.com/photo-1690292892715-4130ddae52e8',
    alt:
      'White celebration cake topped with strawberries, blueberries and blackberries'
  },

  story: {
    src: 'https://images.pexels.com/photos/8478181/pexels-photo-8478181.jpeg',
    alt:
      'Close-up of a baker carefully piping pink icing onto a fresh cake'
  },

  floral: {
    src: 'https://images.unsplash.com/photo-1704450987070-b5d39c845d5c',
    alt:
      'Tiered white cake decorated with fresh white and pink roses and green leaves'
  }
};

/* =============================================================
   3. CAKE NAMES / DESCRIPTIONS / STARTING PRICES
   =============================================================
   All prices are illustrative numeric values in SHOP.currency.
   Edit, reorder, add or remove entries here.
   Product cards and the form update automatically.
   index.html contains the original static fallback for visitors
   with JavaScript disabled.
   ============================================================= */

const CAKES = [
  {
    id: 'birthday',
    name: 'Birthday Cakes',
    description:
      'Beautiful and delicious cakes made specially for birthdays.',
    price: 180,
    image: 'birthday',
    tag: 'Make a wish'
  },
  {
    id: 'wedding',
    name: 'Wedding Cakes',
    description:
      'Elegant multi-tier cakes designed for your special day.',
    price: 650,
    image: 'wedding',
    tag: 'The big day'
  },
  {
    id: 'anniversary',
    name: 'Anniversary Cakes',
    description:
      'Romantic cakes perfect for celebrating your journey together.',
    price: 220,
    image: 'anniversary',
    tag: ''
  },
  {
    id: 'chocolate',
    name: 'Chocolate Cakes',
    description:
      'Rich, moist and indulgent chocolate cakes for chocolate lovers.',
    price: 160,
    image: 'chocolate',
    tag: 'Chocolate bliss'
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet Cakes',
    description:
      'Soft red velvet sponge layered with smooth cream cheese frosting.',
    price: 190,
    image: 'red-velvet',
    tag: ''
  },
  {
    id: 'black-forest',
    name: 'Black Forest Cakes',
    description:
      'A classic combination of chocolate sponge, cream and cherries.',
    price: 180,
    image: 'black-forest',
    tag: ''
  },
  {
    id: 'custom',
    name: 'Custom Cakes',
    description:
      "Tell us your idea and we'll create a cake designed especially for you.",
    price: 250,
    image: 'custom',
    tag: 'Uniquely yours'
  }
];

/* =============================================================
   4. FEATURED CAKE
   ============================================================= */

const FEATURED = {
  id: 'signature',
  name: 'Signature Celebration Cake',
  description:
    'Soft vanilla sponge, silky buttercream and a beautiful berry finish. Our signature cake brings a little elegance to birthdays, gatherings and all the lovely moments in between.',
  price: 240,
  image: 'signature'
};

/* =============================================================
   5. GALLERY
   =============================================================
   Category IDs correspond to the filter buttons in index.html.
   ============================================================= */

const GALLERY = [
  {
    image: 'birthday',
    category: 'birthday',
    title: 'Blue-sky birthdays',
    label: 'Birthday'
  },
  {
    image: 'wedding',
    category: 'wedding',
    title: 'A beautiful beginning',
    label: 'Wedding'
  },
  {
    image: 'chocolate',
    category: 'chocolate',
    title: 'Chocolate, always',
    label: 'Chocolate'
  },
  {
    image: 'custom',
    category: 'custom',
    title: 'A little imagination',
    label: 'Custom Cakes'
  },
  {
    image: 'signature',
    category: 'celebration',
    title: 'Reasons to celebrate',
    label: 'Celebration Cakes'
  },
  {
    image: 'floral',
    category: 'wedding',
    title: 'Love in full bloom',
    label: 'Wedding'
  }
];

/* =============================================================
   APPLICATION
   =============================================================
   Normally, no changes are needed below this line.
   No backend, tracking, fetch requests, cookies or local storage.
   ============================================================= */

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

const motionPreference = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);

const mobileNavigation = window.matchMedia(
  '(max-width: 800px)'
);

const fallbackImage = 'images/image-unavailable.svg';

const imageListeners = new WeakSet();
const dialogTriggers = new WeakMap();

let toastTimer;
let currentGalleryItems = GALLERY.map((_, index) => index);
let currentGalleryIndex = 0;
let enquiryMessage = '';
let formHasBeenSubmitted = false;

/* =============================================================
   PRICE AND CONTACT HELPERS
   ============================================================= */

/**
 * Safely format a starting price without accepting HTML content.
 */
function price(amount) {
  return `${SHOP.currency} ${new Intl.NumberFormat(SHOP.locale, {
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2
  }).format(amount)}`;
}

/**
 * Normalise a configured international number.
 * Reject placeholder text and invalid number formats.
 */
function internationalNumber(value) {
  const source = String(value || '').trim();

  if (!/^\+?[\d\s().-]+$/.test(source)) {
    return '';
  }

  const digits = source.replace(/\D/g, '');

  return /^[1-9]\d{6,14}$/.test(digits) ? digits : '';
}

function greeting() {
  return (
    SHOP.whatsappGreeting.trim() ||
    `Hello ${SHOP.name}, I would like to enquire about a cake.`
  );
}

function getCake(id) {
  return id === FEATURED.id
    ? FEATURED
    : CAKES.find(cake => cake.id === id);
}

/**
 * Normal links ensure WhatsApp only opens on a deliberate click.
 */
function whatsappUrl(message = greeting()) {
  const number = internationalNumber(SHOP.whatsappNumber);

  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : '';
}

function messageForLink(link) {
  if (
    link.id === 'send-whatsapp-enquiry' &&
    enquiryMessage
  ) {
    return enquiryMessage;
  }

  const cake = getCake(link.dataset.orderCake);

  return cake
    ? `${greeting()}\n\nI am interested in: ${cake.name}.`
    : greeting();
}

function updateWhatsAppLinks() {
  $$('[data-whatsapp]').forEach(link => {
    const href = whatsappUrl(messageForLink(link));

    link.setAttribute('href', href || '#contact');

    if (href) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.removeAttribute('target');
      link.removeAttribute('rel');
    }
  });
}

/* =============================================================
   RESPONSIVE IMAGES AND FALLBACKS
   ============================================================= */

/**
 * Generate responsive CDN URLs.
 * Local image paths pass through unchanged.
 */
function imageUrl(key, width = 800) {
  const image = IMAGES[key];

  if (!image) {
    return fallbackImage;
  }

  if (
    image.src.startsWith('https://images.unsplash.com/')
  ) {
    const url = new URL(image.src);

    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', 'max');
    url.searchParams.set('w', String(width));
    url.searchParams.set('q', '82');

    return url.href;
  }

  if (
    image.src.startsWith('https://images.pexels.com/')
  ) {
    const url = new URL(image.src);

    url.searchParams.set('auto', 'compress');
    url.searchParams.set('cs', 'tinysrgb');
    url.searchParams.set('w', String(width));

    return url.href;
  }

  return image.src;
}

/**
 * Replace unavailable photographs with the local fallback.
 */
function watchImage(img) {
  if (imageListeners.has(img)) {
    return;
  }

  imageListeners.add(img);

  const handleError = () => {
    if (img.dataset.fallbackApplied === 'true') {
      return;
    }

    img.dataset.fallbackApplied = 'true';
    img.removeAttribute('srcset');

    img.alt =
      'Photograph unavailable. Please check your internet connection or replace this image.';

    img.src = fallbackImage;
  };

  img.addEventListener('error', handleError);

  if (
    img.complete &&
    img.naturalWidth === 0 &&
    img.getAttribute('src')
  ) {
    handleError();
  }
}

function configureImage(img, key, width = 800) {
  const image = IMAGES[key];

  if (!image) {
    return;
  }

  img.dataset.image = key;
  delete img.dataset.fallbackApplied;

  img.alt = image.alt;

  if (
    /^https:\/\/images\.(unsplash|pexels)\.com\//.test(image.src)
  ) {
    const widths = Array.from(
      new Set([480, 800, 1200, width])
    ).sort((a, b) => a - b);

    img.srcset = widths
      .map(size => `${imageUrl(key, size)} ${size}w`)
      .join(', ');
  } else {
    img.removeAttribute('srcset');
  }

  img.src = imageUrl(key, width);
  watchImage(img);
}

/* =============================================================
   APPLY SHOP SETTINGS
   ============================================================= */

function applyShopSettings() {
  const textBindings = {
    '[data-shop-name]': SHOP.name,

    '[data-footer-name]':
      SHOP.footerName.trim() || SHOP.name,

    '[data-shop-address]': SHOP.address,

    '[data-shop-phone]':
      internationalNumber(SHOP.phoneNumber)
        ? `+${internationalNumber(SHOP.phoneNumber)}`
        : SHOP.phoneDisplay,

    '[data-shop-whatsapp]':
      internationalNumber(SHOP.whatsappNumber)
        ? `+${internationalNumber(SHOP.whatsappNumber)}`
        : SHOP.whatsappDisplay,

    '[data-copyright-year]':
      String(SHOP.copyrightYear),

    '[data-featured-name]': FEATURED.name,

    '[data-featured-description]':
      FEATURED.description,

    '[data-featured-price]':
      price(FEATURED.price)
  };

  Object.entries(textBindings).forEach(
    ([selector, text]) => {
      $$(selector).forEach(element => {
        element.textContent = text;
      });
    }
  );

  $$('[data-brand-link]').forEach(link => {
    link.setAttribute(
      'aria-label',
      `${SHOP.name} home`
    );
  });

  $$('[data-email]').forEach(link => {
    link.textContent = SHOP.email;
    link.href = `mailto:${SHOP.email}`;
  });

  $$('[data-phone]').forEach(link => {
    const number = internationalNumber(
      SHOP.phoneNumber
    );

    link.href = number
      ? `tel:+${number}`
      : '#contact';
  });

  $$('[data-location]').forEach(link => {
  link.href = SHOP.mapUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

  document.title =
    `${SHOP.name} | Beautifully Crafted Cakes in ${SHOP.address}`;

  $('meta[name="description"]').content =
    `Celebrate beautifully with ${SHOP.name} in ${SHOP.address}. Explore freshly baked birthday, wedding, chocolate and custom cakes, crafted with care for your special moments.`;

  $('meta[property="og:title"]').content =
    `${SHOP.name} | Freshly Baked. Beautifully Crafted.`;

  $('meta[property="og:description"]').content =
    `Delicious cakes made with love for every celebration in ${SHOP.address}.`;

  // Only configured HTTP(S) social profiles become links.
  Object.entries(SHOP.social).forEach(
    ([network, value]) => {
      const slot = $(
        `[data-social-slot="${network}"]`
      );

      if (!slot || !value) {
        return;
      }

      try {
        const url = new URL(value);

        if (
          !['https:', 'http:'].includes(url.protocol)
        ) {
          return;
        }

        const link = document.createElement('a');

        link.className = 'social-link';
        link.href = url.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        link.setAttribute(
          'aria-label',
          `${SHOP.name} on ${network}`
        );

        const svg = $('svg', slot);

        if (svg) {
          link.append(svg.cloneNode(true));
        }

        slot.replaceChildren(link);
      } catch {
        // Invalid URLs remain non-interactive placeholders.
      }
    }
  );
}

/* =============================================================
   PRODUCT CARDS
   ============================================================= */

/**
 * Clone the semantic static card and populate it with editable data.
 */
function renderCakes() {
  const grid = $('#product-grid');

  const template = $('.product-card', grid)
    .cloneNode(true);

  const fragment = document.createDocumentFragment();

  CAKES.forEach(cake => {
    const card = template.cloneNode(true);

    card.dataset.product = cake.id;

    $('[data-product-name]', card).textContent =
      cake.name;

    $('[data-product-description]', card).textContent =
      cake.description;

    $('[data-product-price]', card).textContent =
      price(cake.price);

    const tag = $('[data-product-tag]', card);

    tag.textContent = cake.tag || '';
    tag.hidden = !cake.tag;

    const link = $('[data-enquire]', card);

    link.dataset.enquire = cake.id;

    link.setAttribute(
      'aria-label',
      `Enquire about ${cake.name}`
    );

    const img = $('img', card);

    img.dataset.image = cake.image;
    img.loading = 'lazy';

    fragment.append(card);
  });

  $$('.product-card', grid).forEach(card => {
    card.remove();
  });

  grid.insertBefore(
    fragment,
    $('.custom-invite', grid)
  );

  const select = $('#cake-type');

  select.replaceChildren(
    new Option('Choose your cake', '')
  );

  CAKES.forEach(cake => {
    select.add(new Option(cake.name, cake.id));
  });

  select.add(
    new Option(FEATURED.name, FEATURED.id)
  );

  select.add(
    new Option('Help me choose', 'not-sure')
  );

  const featuredImage = $('.featured-visual img');

  featuredImage.dataset.image = FEATURED.image;
}

/* =============================================================
   GALLERY CARDS
   ============================================================= */

function renderGallery() {
  const grid = $('#gallery-grid');

  const template = $('.gallery-item', grid)
    .cloneNode(true);

  const fragment = document.createDocumentFragment();

  GALLERY.forEach((entry, index) => {
    const item = template.cloneNode(true);

    item.dataset.category = entry.category;
    item.dataset.galleryIndex = String(index);

    const link = $('a', item);

    link.href = imageUrl(entry.image, 1600);
    link.dataset.lightbox = String(index);

    link.setAttribute(
      'aria-label',
      `View ${entry.title.toLowerCase()}`
    );

    $('img', item).dataset.image = entry.image;

    $('figcaption > span', item).textContent =
      entry.label;

    $('figcaption h3', item).textContent =
      entry.title;

    fragment.append(item);
  });

  grid.replaceChildren(fragment);
}

/* =============================================================
   MOBILE NAVIGATION AND ACTIVE SECTION
   ============================================================= */

function initialiseNavigation() {
  const toggle = $('.menu-toggle');
  const nav = $('#primary-nav');
  const header = $('#site-header');

  const links = $$('.nav-link', nav);

  const sections = links
    .map(link => $(link.getAttribute('href')))
    .filter(Boolean);

  function setMenu(open, restoreFocus = false) {
    toggle.setAttribute(
      'aria-expanded',
      String(open)
    );

    toggle.setAttribute(
      'aria-label',
      open
        ? 'Close navigation'
        : 'Open navigation'
    );

    nav.classList.toggle('is-open', open);

    if (restoreFocus) {
      toggle.focus();
    }
  }

  toggle.addEventListener('click', () => {
    setMenu(
      toggle.getAttribute('aria-expanded') !== 'true'
    );
  });

  nav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      setMenu(false);
    }
  });

  document.addEventListener('click', event => {
    if (!header.contains(event.target)) {
      setMenu(false);
    }
  });

  document.addEventListener('keydown', event => {
    if (
      event.key === 'Escape' &&
      toggle.getAttribute('aria-expanded') === 'true'
    ) {
      setMenu(false, true);
    }
  });

  header.addEventListener('focusout', () => {
    setTimeout(() => {
      if (!header.contains(document.activeElement)) {
        setMenu(false);
      }
    }, 0);
  });

  mobileNavigation.addEventListener('change', () => {
    setMenu(false);
  });

  let scrollQueued = false;

  function updateScrollState() {
    header.classList.toggle(
      'is-scrolled',
      window.scrollY > 16
    );

    const marker =
      header.offsetHeight +
      Math.min(window.innerHeight * 0.25, 160);

    let currentId = sections[0].id;

    sections.forEach(section => {
      if (
        section.getBoundingClientRect().top <= marker
      ) {
        currentId = section.id;
      }
    });

    links.forEach(link => {
      const current =
        link.getAttribute('href') === `#${currentId}`;

      link.classList.toggle('is-active', current);

      if (current) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    scrollQueued = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!scrollQueued) {
        scrollQueued = true;

        window.requestAnimationFrame(
          updateScrollState
        );
      }
    },
    { passive: true }
  );

  window.addEventListener(
    'resize',
    updateScrollState,
    { passive: true }
  );

  updateScrollState();
}

/* =============================================================
   ACCESSIBLE DIALOGS
   ============================================================= */

function openDialog(
  dialog,
  trigger = document.activeElement
) {
  dialogTriggers.set(dialog, trigger);

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    // Fallback for browsers without native dialog support.
    dialog.setAttribute('open', '');
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');

    $('button, a, textarea', dialog)?.focus();
  }
}

function closeDialog(dialog) {
  if (!dialog) {
    return;
  }

  if (typeof dialog.close === 'function') {
    dialog.close();
  } else {
    dialog.removeAttribute('open');
    dialogTriggers.get(dialog)?.focus();
  }
}

function initialiseDialogs() {
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) {
        return;
      }

      const rect = dialog.getBoundingClientRect();

      const outside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

      if (outside) {
        closeDialog(dialog);
      }
    });

    dialog.addEventListener('close', () => {
      const trigger = dialogTriggers.get(dialog);

      if (trigger?.isConnected) {
        trigger.focus({ preventScroll: true });
      }
    });

    // Native dialogs already trap focus.
    // This handler applies only to the fallback.
    dialog.addEventListener('keydown', event => {
      if (
        typeof dialog.showModal === 'function'
      ) {
        return;
      }

      if (event.key === 'Escape') {
        closeDialog(dialog);
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusable = $$(
        'button:not(:disabled), a[href], input, textarea, select',
        dialog
      ).filter(element => !element.hidden);

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last?.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first?.focus();
      }
    });
  });

  document.addEventListener('click', event => {
    const close = event.target.closest(
      '[data-close-dialog]'
    );

    if (close) {
      closeDialog(close.closest('dialog'));
    }

    const story = event.target.closest(
      '[data-open-story]'
    );

    if (story) {
      openDialog($('#story-dialog'), story);
    }

    const contact = event.target.closest(
      '[data-close-and-contact]'
    );

    if (contact) {
      event.preventDefault();

      const dialog = contact.closest('dialog');

      // Continue into the form rather than returning focus
      // to the original dialog trigger.
      dialogTriggers.delete(dialog);

      closeDialog(dialog);
      focusEnquiryForm();
    }
  });
}

/* =============================================================
   TOAST NOTICES AND UNCONFIGURED CONTACT DETAILS
   ============================================================= */

function showToast(message) {
  const toast = $('#toast');

  window.clearTimeout(toastTimer);

  toast.textContent = message;
  toast.hidden = false;

  toastTimer = window.setTimeout(() => {
    toast.hidden = true;
  }, 5000);
}

function showMissingContact(
  kind,
  message = greeting(),
  trigger = document.activeElement
) {
  const isWhatsApp = kind === 'whatsapp';

  $('#setup-description').textContent = isWhatsApp
    ? 'This preview has no real WhatsApp number yet. Add your number to SHOP.whatsappNumber in script.js to enable direct ordering. No message has been sent.'
    : 'This preview has no real phone number yet. Add your number to SHOP.phoneNumber in script.js to enable click-to-call. No call has been placed.';

  $('#setup-message-wrap').hidden = !isWhatsApp;
  $('#prepared-message').value = message;

  openDialog($('#setup-dialog'), trigger);
}

function initialiseContactLinks() {
  updateWhatsAppLinks();

  document.addEventListener('click', event => {
    const whatsApp = event.target.closest(
      '[data-whatsapp]'
    );

    if (
      whatsApp &&
      !internationalNumber(SHOP.whatsappNumber)
    ) {
      event.preventDefault();

      showMissingContact(
        'whatsapp',
        messageForLink(whatsApp),
        whatsApp
      );

      return;
    }

    const phone = event.target.closest(
      '[data-phone]'
    );

    if (
      phone &&
      !internationalNumber(SHOP.phoneNumber)
    ) {
      event.preventDefault();

      showMissingContact('phone', '', phone);
    }
  });

  $('#copy-message').addEventListener(
    'click',
    async () => {
      const field = $('#prepared-message');

      try {
        if (!navigator.clipboard?.writeText) {
          throw new Error('Clipboard unavailable');
        }

        await navigator.clipboard.writeText(
          field.value
        );

        // Status inside the modal is available to screen readers.
        let status = $('#copy-status');

        if (!status) {
          status = document.createElement('p');
          status.id = 'copy-status';
          status.setAttribute('role', 'status');

          $('#setup-message-wrap').append(status);
        }

        status.textContent =
          'Message copied. Nothing has been sent.';
      } catch {
        field.focus();
        field.select();

        let status = $('#copy-status');

        if (!status) {
          status = document.createElement('p');
          status.id = 'copy-status';
          status.setAttribute('role', 'status');

          $('#setup-message-wrap').append(status);
        }

        status.textContent =
          "Automatic copying is unavailable here. The message is selected; use your device's Copy command.";
      }
    }
  );
}

/* =============================================================
   GALLERY LIGHTBOX
   ============================================================= */

function renderLightbox() {
  const entry = GALLERY[currentGalleryIndex];

  if (!entry) {
    return;
  }

  const image = $('#lightbox-image');

  image.sizes =
    '(max-width: 900px) 95vw, 820px';

  configureImage(image, entry.image, 1600);

  $('#lightbox-title').textContent = entry.title;
  $('#lightbox-category').textContent = entry.label;

  const position =
    currentGalleryItems.indexOf(currentGalleryIndex) + 1;

  $('#lightbox-count').textContent =
    `${position} / ${currentGalleryItems.length}`;

  $('#gallery-previous').disabled =
    currentGalleryItems.length <= 1;

  $('#gallery-next').disabled =
    currentGalleryItems.length <= 1;
}

function moveLightbox(direction) {
  const index = currentGalleryItems.indexOf(
    currentGalleryIndex
  );

  const next =
    (
      index +
      direction +
      currentGalleryItems.length
    ) % currentGalleryItems.length;

  currentGalleryIndex = currentGalleryItems[next];

  renderLightbox();
}

function initialiseGallery() {
  const filters = $$('.filter-button');

  filters.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filters.forEach(other => {
        const active = other === button;

        other.classList.toggle(
          'is-active',
          active
        );

        other.setAttribute(
          'aria-pressed',
          String(active)
        );
      });

      currentGalleryItems = [];

      $$('.gallery-item').forEach((item, index) => {
        const visible =
          filter === 'all' ||
          item.dataset.category === filter;

        item.hidden = !visible;

        if (visible) {
          currentGalleryItems.push(index);
          item.classList.add('is-visible');
        }
      });

      const count = currentGalleryItems.length;

      $('#gallery-status').textContent =
        `${count} ${count === 1 ? 'design' : 'designs'} shown: ${button.textContent}.`;
    });
  });

  $('#gallery-grid').addEventListener(
    'click',
    event => {
      const link = event.target.closest(
        '[data-lightbox]'
      );

      if (!link) {
        return;
      }

      event.preventDefault();

      currentGalleryIndex = Number(
        link.dataset.lightbox
      );

      renderLightbox();

      openDialog($('#gallery-dialog'), link);
    }
  );

  $('#gallery-previous').addEventListener(
    'click',
    () => moveLightbox(-1)
  );

  $('#gallery-next').addEventListener(
    'click',
    () => moveLightbox(1)
  );

  $('#gallery-dialog').addEventListener(
    'keydown',
    event => {
      if (
        !['ArrowLeft', 'ArrowRight'].includes(event.key)
      ) {
        return;
      }

      event.preventDefault();

      moveLightbox(
        event.key === 'ArrowLeft' ? -1 : 1
      );
    }
  );
}

/* =============================================================
   DATE HELPERS
   ============================================================= */

/**
 * Get today's date in the bakery's timezone.
 */
function todayInShopTimezone() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: SHOP.timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(new Date());

  const part = type =>
    parts.find(value => value.type === type).value;

  return `${part('year')}-${part('month')}-${part('day')}`;
}

function formattedDate(value) {
  const [year, month, day] = value
    .split('-')
    .map(Number);

  return new Intl.DateTimeFormat(SHOP.locale, {
    dateStyle: 'long',
    timeZone: 'UTC'
  }).format(
    new Date(
      Date.UTC(year, month - 1, day, 12)
    )
  );
}

/* =============================================================
   FORM VALIDATION
   ============================================================= */

function fieldError(field) {
  const value = field.value.trim();

  if (!value) {
    const messages = {
      name: 'Please enter your name.',
      phone: 'Please enter your phone number.',
      email: 'Please enter your email address.',
      cakeType: 'Please choose a cake type.',
      date: 'Please choose a preferred date.',
      message: 'Please tell us a little about your cake.'
    };

    return (
      messages[field.name] ||
      'Please complete this field.'
    );
  }

  switch (field.name) {
    case 'name':
      if (
        value.length < 2 ||
        value.length > 80
      ) {
        return 'Please enter a name between 2 and 80 characters.';
      }
      break;

    case 'phone': {
      const digits = value.replace(/\D/g, '');

      if (
        !/^\+?[\d\s().-]+$/.test(value) ||
        digits.length < 7 ||
        digits.length > 15
      ) {
        return 'Enter a valid phone number with 7 to 15 digits.';
      }
      break;
    }

    case 'email':
      if (
        field.validity.typeMismatch ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
        value.length > 254
      ) {
        return 'Please enter a valid email address.';
      }
      break;

    case 'cakeType':
      if (
        value !== 'not-sure' &&
        !getCake(value)
      ) {
        return 'Please choose one of the available cake types.';
      }
      break;

    case 'date': {
      const validPattern =
        /^\d{4}-\d{2}-\d{2}$/.test(value);

      const parsed = new Date(
        `${value}T12:00:00Z`
      );

      if (
        !validPattern ||
        Number.isNaN(parsed.getTime()) ||
        parsed.toISOString().slice(0, 10) !== value
      ) {
        return 'Please choose a valid date.';
      }

      if (value < todayInShopTimezone()) {
        return 'Please choose today or a future date (Dubai time).';
      }
      break;
    }

    case 'message':
      if (value.length < 10) {
        return 'Please add at least 10 characters about your cake.';
      }

      if (value.length > 1500) {
        return 'Please keep your message under 1,500 characters.';
      }
      break;

    default:
      break;
  }

  return '';
}

function validateField(field) {
  const error = fieldError(field);

  const message = $(
    `#${field.name}-error`
  );

  message.textContent = error;

  if (error) {
    field.setAttribute('aria-invalid', 'true');
  } else {
    field.removeAttribute('aria-invalid');
  }

  return !error;
}

function restoreEnquiry() {
  $('#form-success').hidden = true;
  $('#enquiry-form-content').hidden = false;
}

function focusEnquiryForm() {
  restoreEnquiry();

  $('.enquiry-panel').scrollIntoView({
    behavior: motionPreference.matches
      ? 'auto'
      : 'smooth',
    block: 'start'
  });

  $('#customer-name').focus({
    preventScroll: true
  });
}

/* =============================================================
   ENQUIRY FORM - FRONT-END ONLY
   ============================================================= */

function initialiseEnquiryForm() {
  const form = $('#enquiry-form');

  const fields = $$(
    'input, select, textarea',
    form
  );

  const summary = $('#form-error-summary');
  const date = $('#preferred-date');

  form.noValidate = true;
  date.min = todayInShopTimezone();

  date.addEventListener('focus', () => {
    date.min = todayInShopTimezone();
  });

  fields.forEach(field => {
    field.addEventListener('blur', () => {
      if (
        field.value.trim() ||
        formHasBeenSubmitted
      ) {
        validateField(field);
      }
    });

    const onEdit = () => {
      if (
        formHasBeenSubmitted ||
        field.hasAttribute('aria-invalid')
      ) {
        validateField(field);
      }

      if (
        !fields.some(
          input =>
            input.getAttribute('aria-invalid') === 'true'
        )
      ) {
        summary.hidden = true;
      }
    };

    field.addEventListener('input', onEdit);
    field.addEventListener('change', onEdit);
  });

  form.addEventListener('submit', event => {
    // Never submit to a server: this website has no backend.
    event.preventDefault();

    formHasBeenSubmitted = true;
    date.min = todayInShopTimezone();

    const invalidFields = fields.filter(
      field => !validateField(field)
    );

    if (invalidFields.length) {
      summary.hidden = false;

      summary.textContent =
        `Please check ${
          invalidFields.length === 1
            ? 'the highlighted field'
            : `the ${invalidFields.length} highlighted fields`
        } and try again.`;

      invalidFields[0].focus();
      return;
    }

    summary.hidden = true;

    const data = Object.fromEntries(
      new FormData(form)
    );

    Object.keys(data).forEach(key => {
      data[key] = String(data[key]).trim();
    });

    const cakeName =
      getCake(data.cakeType)?.name ||
      'Help me choose';

    const prettyDate = formattedDate(data.date);

    enquiryMessage = [
      greeting(),
      '',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Cake type: ${cakeName}`,
      `Preferred date: ${prettyDate}`,
      '',
      `Message: ${data.message}`
    ].join('\n');

    // Customer-controlled values use textContent, never innerHTML.
    $('#success-message').textContent =
      `Thank you, ${data.name}. Your cake details have been checked successfully. You can review them below or continue to WhatsApp.`;

    const details = $('#enquiry-summary');

    details.replaceChildren();

    [
      ['Cake', cakeName],
      ['Preferred date', prettyDate]
    ].forEach(([label, value]) => {
      const line = document.createElement('p');
      const strong = document.createElement('strong');

      strong.textContent = `${label}: `;

      line.append(
        strong,
        document.createTextNode(value)
      );

      details.append(line);
    });

    updateWhatsAppLinks();

    $('#enquiry-form-content').hidden = true;

    const success = $('#form-success');

    success.hidden = false;

    success.focus({
      preventScroll: true
    });

    $('.enquiry-panel').scrollIntoView({
      behavior: motionPreference.matches
        ? 'auto'
        : 'smooth',
      block: 'start'
    });
  });

  $('#edit-enquiry').addEventListener(
    'click',
    () => focusEnquiryForm()
  );

  document.addEventListener('click', event => {
    const link = event.target.closest(
      '[data-enquire]'
    );

    if (!link) {
      return;
    }

    event.preventDefault();

    const cake = getCake(
      link.dataset.enquire
    );

    if (!cake) {
      return;
    }

    restoreEnquiry();

    $('#cake-type').value = cake.id;
    validateField($('#cake-type'));

    let note = $('#selected-cake-note');

    if (!note) {
      note = document.createElement('p');

      note.id = 'selected-cake-note';
      note.className = 'selection-note';

      $('.form-heading').append(note);
    }

    note.textContent = `Your cake: ${cake.name}`;

    focusEnquiryForm();

    showToast(
      `${cake.name} selected. Tell us about your celebration.`
    );
  });

  $('#cake-type').addEventListener('change', () => {
    const note = $('#selected-cake-note');

    if (note) {
      const cake = getCake(
        $('#cake-type').value
      );

      note.textContent = cake
        ? `Your cake: ${cake.name}`
        : 'Let us help you choose your perfect cake.';
    }
  });

  // Enable only after the submit handler is installed.
  $('#submit-enquiry').disabled = false;
}

/* =============================================================
   SCROLL REVEAL ANIMATIONS
   ============================================================= */

function initialiseScrollReveals() {
  if (
    !('IntersectionObserver' in window) ||
    motionPreference.matches
  ) {
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add(
          'is-visible'
        );

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.07,
      rootMargin: '0px 0px -25px 0px'
    }
  );

  $$('.reveal').forEach(element => {
    element.classList.add('reveal-ready');
    observer.observe(element);
  });

  motionPreference.addEventListener(
    'change',
    event => {
      if (!event.matches) {
        return;
      }

      observer.disconnect();

      $$('.reveal-ready').forEach(element => {
        element.classList.add('is-visible');
      });
    }
  );
}

/* =============================================================
   INITIALISE THE WEBSITE
   =============================================================
   Load this file with the defer attribute in index.html:

   <script src="script.js" defer></script>

   This ensures the HTML is available before the script runs.
   ============================================================= */

applyShopSettings();

renderCakes();

renderGallery();

$$('img[data-image]').forEach(img => {
  configureImage(
    img,
    img.dataset.image,
    Number(img.getAttribute('width')) || 800
  );
});

initialiseNavigation();

initialiseDialogs();

initialiseGallery();

initialiseContactLinks();

initialiseEnquiryForm();

initialiseScrollReveals();

document.documentElement.classList.replace(
  'no-js',
  'js'
);