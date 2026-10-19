// Indonesian lives in the HTML (it is what shows without JavaScript).
// On load it is read from the DOM, so only English is written here.
(function () {
  var EN = {
    meta: {
      title: "PT Jipraks Digital Indonesia · Apps, automation, AI, and training",
      description: "PT Jipraks Digital Indonesia builds apps, automation, and AI solutions for businesses in Indonesia, and trains teams to run them."
    },
    text: {
      skip: "Skip to content",
      navServices: "Services",
      navProduct: "Product",
      navContact: "Contact",
      heroLede: "PT Jipraks Digital Indonesia builds software for businesses in Indonesia, and trains teams to run it themselves.",
      ctaProject: "Discuss your project",
      ctaProduct: "See our product",
      servicesTitle: "What we do",
      s1Title: "App development",
      s1Body: "Mobile and web apps, from design through release and maintenance.",
      s2Title: "Automation",
      s2Body: "Repetitive data entry, reports, and notifications run on their own, inside the systems you already use.",
      s3Body: "AI built into real workflows, such as reading documents or answering customer questions.",
      s4Title: "Training",
      s4Body: "Training so your team can use and maintain apps, automation, and AI on their own.",
      productKicker: "Our product",
      productBody: "Our first product, and for now our only one: a free Android point-of-sale app for food stalls, grocery shops, coffee shops, and clothing stores.",
      productBody2: "It records sales, stock, and finances, and keeps working without internet.",
      productCta: "Visit FreeKasir.com",
      rSub: "Core cashier features",
      r1: "Sales & discounts",
      r2: "Automatic stock",
      r3: "Profit & loss report",
      r4: "WhatsApp receipts",
      r5: "Offline mode",
      rNote: "Free forever on one device. No ads, no transaction limits.",
      contactTitle: "Have a project, or want training for your team?",
      contactAddress: "Address",
      contactHelp: "FreeKasir users can reach customer support via WhatsApp from inside the app."
    },
    html: {
      heroTitle: 'We build apps, automation, and <span class="gradient-text">AI</span>.'
    },
    aria: {
      navLabel: "Main navigation"
    }
  };

  var ID = { meta: {}, text: {}, html: {}, aria: {} };
  var descTag = document.querySelector('meta[name="description"]');
  ID.meta.title = document.title;
  ID.meta.description = descTag ? descTag.getAttribute("content") : "";

  var textEls = document.querySelectorAll("[data-i18n]");
  var htmlEls = document.querySelectorAll("[data-i18n-html]");
  var ariaEls = document.querySelectorAll("[data-i18n-aria]");
  textEls.forEach(function (el) { ID.text[el.dataset.i18n] = el.textContent; });
  htmlEls.forEach(function (el) { ID.html[el.dataset.i18nHtml] = el.innerHTML; });
  ariaEls.forEach(function (el) { ID.aria[el.dataset.i18nAria] = el.getAttribute("aria-label"); });

  var DICTS = { id: ID, en: EN };
  var buttons = document.querySelectorAll(".lang-switch button");

  function apply(lang) {
    var d = DICTS[lang] || ID;
    document.documentElement.lang = lang;
    document.title = d.meta.title;
    if (descTag) descTag.setAttribute("content", d.meta.description);
    textEls.forEach(function (el) {
      var v = d.text[el.dataset.i18n];
      if (v != null) el.textContent = v;
    });
    htmlEls.forEach(function (el) {
      var v = d.html[el.dataset.i18nHtml];
      if (v != null) el.innerHTML = v;
    });
    ariaEls.forEach(function (el) {
      var v = d.aria[el.dataset.i18nAria];
      if (v != null) el.setAttribute("aria-label", v);
    });
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
  }

  function save(lang) {
    try { localStorage.setItem("lang", lang); } catch (e) {}
    // Keep a shared ?lang= link in step with the choice, so a reload does not undo it.
    var url = new URL(location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    }
  }

  function initialLang() {
    var param = new URLSearchParams(location.search).get("lang");
    if (param === "id" || param === "en") return param;
    try {
      var saved = localStorage.getItem("lang");
      if (saved === "id" || saved === "en") return saved;
    } catch (e) {}
    var nav = (navigator.language || "id").toLowerCase();
    return nav.indexOf("id") === 0 ? "id" : "en";
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.dataset.lang);
      save(b.dataset.lang);
    });
  });

  apply(initialLang());
})();
