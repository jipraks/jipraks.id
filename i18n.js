// English lives in the HTML (it is the default, and what shows without JavaScript).
// On load it is read from the DOM, so only Indonesian is written here.
// Indonesian is picked when the browser's first preferred language is Indonesian.
(function () {
  var ID = {
    meta: {
      title: "PT Jipraks Digital Indonesia · Aplikasi, otomasi, AI, dan pelatihan",
      description: "PT Jipraks Digital Indonesia mengembangkan aplikasi, otomasi, dan solusi AI untuk bisnis di Indonesia, serta melatih tim untuk memakainya."
    },
    text: {
      skip: "Langsung ke konten",
      navServices: "Layanan",
      navProduct: "Produk",
      navContact: "Kontak",
      heroLede: "PT Jipraks Digital Indonesia mengembangkan perangkat lunak untuk bisnis di Indonesia, dan melatih tim agar bisa memakainya sendiri.",
      ctaProject: "Diskusikan proyek Anda",
      ctaProduct: "Lihat produk kami",
      servicesTitle: "Yang kami kerjakan",
      s1Title: "Pengembangan aplikasi",
      s1Body: "Aplikasi mobile dan web, dari rancangan sampai rilis dan pemeliharaan.",
      s2Title: "Otomasi",
      s2Body: "Input data, laporan, dan notifikasi yang berulang dijalankan otomatis di sistem yang sudah Anda pakai.",
      s3Body: "AI dipasang ke proses kerja nyata, misalnya membaca dokumen atau membalas pertanyaan pelanggan.",
      s4Title: "Pelatihan",
      s4Body: "Pelatihan agar tim Anda bisa memakai dan merawat aplikasi, otomasi, dan AI sendiri.",
      productKicker: "Produk kami",
      productBody: "Produk pertama kami, dan untuk saat ini satu-satunya: aplikasi kasir Android gratis untuk warung, toko kelontong, kedai kopi, dan toko pakaian.",
      productBody2: "Mencatat penjualan, stok, dan keuangan, dan tetap jalan tanpa internet.",
      productCta: "Kunjungi FreeKasir.com",
      rSub: "Fitur kasir inti",
      r1: "Transaksi & diskon",
      r2: "Stok otomatis",
      r3: "Laporan laba rugi",
      r4: "Struk via WhatsApp",
      r5: "Mode offline",
      rNote: "Gratis selamanya di satu perangkat. Tanpa iklan, tanpa batas transaksi.",
      contactTitle: "Punya proyek, atau ingin pelatihan untuk tim Anda?",
      contactAddress: "Alamat",
      contactHelp: "Pengguna FreeKasir bisa menghubungi layanan pelanggan lewat WhatsApp dari dalam aplikasi."
    },
    html: {
      heroTitle: 'Kami membangun aplikasi, otomasi, dan <span class="gradient-text">AI</span>.'
    },
    aria: {
      navLabel: "Navigasi utama"
    }
  };

  var EN = { meta: {}, text: {}, html: {}, aria: {} };
  var descTag = document.querySelector('meta[name="description"]');
  EN.meta.title = document.title;
  EN.meta.description = descTag ? descTag.getAttribute("content") : "";

  var textEls = document.querySelectorAll("[data-i18n]");
  var htmlEls = document.querySelectorAll("[data-i18n-html]");
  var ariaEls = document.querySelectorAll("[data-i18n-aria]");
  textEls.forEach(function (el) { EN.text[el.dataset.i18n] = el.textContent; });
  htmlEls.forEach(function (el) { EN.html[el.dataset.i18nHtml] = el.innerHTML; });
  ariaEls.forEach(function (el) { EN.aria[el.dataset.i18nAria] = el.getAttribute("aria-label"); });

  var DICTS = { en: EN, id: ID };
  var buttons = document.querySelectorAll(".lang-switch button");

  function apply(lang) {
    var d = DICTS[lang] || EN;
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

  // Order: ?lang= link, then the visitor's own earlier choice, then the browser language.
  function initialLang() {
    var param = new URLSearchParams(location.search).get("lang");
    if (param === "id" || param === "en") return param;
    try {
      var saved = localStorage.getItem("lang");
      if (saved === "id" || saved === "en") return saved;
    } catch (e) {}
    var first = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return /^(id|in)\b/i.test(first) ? "id" : "en";
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.dataset.lang);
      save(b.dataset.lang);
    });
  });

  apply(initialLang());
})();
