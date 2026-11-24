// English lives in the HTML (it is the default, and what shows without JavaScript).
// On load it is read from the DOM, so only Indonesian is written here.
// Indonesian is picked when the browser's first preferred language is Indonesian.
(function () {
  var ID = {
    meta: {
      title: "PT Jipraks Digital Indonesia · Aplikasi, game, otomasi, AI, dan pelatihan",
      description: "PT Jipraks Digital Indonesia mengembangkan aplikasi, otomasi, dan AI untuk bisnis di Indonesia, melatih tim untuk memakainya, dan membuat game mobile di studio sendiri. Pembuat FreeKasir, Ceritopia, dan Bang Kurir."
    },
    text: {
      skip: "Langsung ke konten",
      navServices: "Layanan",
      navProducts: "Produk",
      navContact: "Kontak",
      heroLede: "PT Jipraks Digital Indonesia mengembangkan perangkat lunak untuk bisnis dan keluarga di Indonesia, membuat game mobile di studio sendiri, dan melatih tim agar bisa memakai perangkat lunaknya sendiri.",
      ctaProject: "Diskusikan proyek Anda",
      ctaProducts: "Lihat produk kami",
      stripLabel: "Produk kami",
      servicesTitle: "Yang kami kerjakan",
      servicesIntro: "Kami merancang dan membangun perangkat lunaknya, lalu mengajari tim Anda menjalankannya.",
      s1Title: "Pengembangan aplikasi",
      s1Body: "Aplikasi mobile dan web, dari rancangan sampai rilis dan pemeliharaan.",
      s2Title: "Otomasi",
      s2Body: "Input data, laporan, dan notifikasi yang berulang dijalankan otomatis di sistem yang sudah Anda pakai.",
      s3Body: "AI dipasang ke proses kerja nyata, misalnya membaca dokumen atau membalas pertanyaan pelanggan.",
      s4Title: "Pelatihan",
      s4Body: "Pelatihan agar tim Anda bisa memakai dan merawat aplikasi, otomasi, dan AI sendiri.",
      s5Title: "Game",
      s5Body: "Studio kami sendiri membuat game mobile yang dekat dengan keseharian di Indonesia, dari aset 3D dan gameplay sampai rilis dan pembaruan rutin.",
      productsKicker: "Produk kami",
      productsTitle: "Aplikasi dan game yang kami bangun dan jalankan sendiri.",
      fkTag: "Aplikasi kasir untuk toko kecil",
      fkBody: "Aplikasi kasir Android gratis untuk warung, toko kelontong, kedai kopi, dan toko pakaian. Mencatat penjualan, stok, dan keuangan, dan tetap jalan tanpa internet.",
      fk1: "Fitur kasir inti gratis selamanya di satu perangkat",
      fk2: "Tunai, transfer bank, e-wallet, dan QRIS",
      fk3: "Struk lewat WhatsApp atau printer Bluetooth",
      fkCta: "Kunjungi FreeKasir.com",
      fkPlay: "Unduh di Google Play",
      ctTag: "Buku cerita bergambar, dibacakan untuk anak",
      ctStatus: "Segera hadir di Google Play",
      ctBody: "Cerita bergambar untuk anak usia 3 sampai 8 tahun, dibacakan narator dengan musik lembut dan efek suara. Anak membalik halamannya sendiri di perpustakaan kecil milik Jimmy.",
      ct1: "Setiap profil anak bisa membaca dalam Bahasa Indonesia atau Inggris",
      ct2: "Rak untuk fabel, petualangan, kebiasaan baik, pengetahuan, dan cerita Nusantara",
      ct3: "Gratis, tanpa iklan, tanpa pembelian dalam aplikasi, dan tanpa chat",
      ctCta: "Kunjungi Ceritopia.com",
      bkTag: "Dari kurir motor matic jadi juragan ekspedisi",
      bkBody: "Game simulasi kurir di kota Indonesia yang hidup. Ambil paket di depo, ikuti GPS ke tiap rumah, tembus lalu lintas, hujan, sampai malam, dan gajian tiap pagi. Naik kelas dari motor matic sampai blind van, lalu bangun perusahaan ekspedisi sendiri lengkap dengan depo dan kurir rekrutan.",
      bk1: "Gratis di Google Play, ada iklan dan langganan VIP opsional",
      bk2: "Main sendiri dan bisa offline, masuk Google untuk simpan progres di cloud",
      bk3: "Empat kendaraan, perusahaan sendiri sampai empat depo, siang, malam, dan hujan",
      bkPlay: "Dapatkan di Google Play",
      contactTitle: "Punya proyek, atau ingin pelatihan untuk tim Anda?",
      contactAddress: "Alamat",
      contactSupport: "Dukungan aplikasi",
      contactHelp: "Pengguna Ceritopia dan pemain Bang Kurir bisa menulis ke help@jipraks.id. Pengguna FreeKasir bisa menghubungi layanan pelanggan lewat WhatsApp dari dalam aplikasi."
    },
    html: {
      heroTitle: 'Kami membangun aplikasi, game, otomasi, dan <span class="gradient-text">AI</span>.'
    },
    aria: {
      navLabel: "Navigasi utama",
      stageLabel: "Tampilan FreeKasir, Ceritopia, dan Bang Kurir"
    },
    alt: {
      altFkHome: "Beranda FreeKasir dengan total pesanan, penjualan hari ini, dan transaksi terakhir",
      altFkHomeShort: "Beranda aplikasi FreeKasir",
      altCtLibrary: "Ceritopia: selamat datang di perpustakaan Jimmy, setiap anak punya profilnya sendiri",
      altCtBooks: "Rak buku Ceritopia dengan sampul buku cerita bergambar yang penuh warna",
      altCtJimmy: "Jimmy, maskot Ceritopia, sedang membaca buku",
      altBkRide: "Gameplay Bang Kurir: mengendarai motor kurir di jalan kota dengan petunjuk GPS, peta mini, dan speedometer",
      altBkCourier: "Kurir Bang Kurir di atas motor biru dengan boks pengiriman oranye"
    }
  };

  var EN = { meta: {}, text: {}, html: {}, aria: {}, alt: {} };
  var descTag = document.querySelector('meta[name="description"]');
  EN.meta.title = document.title;
  EN.meta.description = descTag ? descTag.getAttribute("content") : "";

  var textEls = document.querySelectorAll("[data-i18n]");
  var htmlEls = document.querySelectorAll("[data-i18n-html]");
  var ariaEls = document.querySelectorAll("[data-i18n-aria]");
  var altEls = document.querySelectorAll("[data-i18n-alt]");
  textEls.forEach(function (el) { EN.text[el.dataset.i18n] = el.textContent; });
  htmlEls.forEach(function (el) { EN.html[el.dataset.i18nHtml] = el.innerHTML; });
  ariaEls.forEach(function (el) { EN.aria[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
  altEls.forEach(function (el) { EN.alt[el.dataset.i18nAlt] = el.getAttribute("alt"); });

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
    altEls.forEach(function (el) {
      var v = d.alt[el.dataset.i18nAlt];
      if (v != null) el.setAttribute("alt", v);
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
