(function () {
  // GitHub star count: the HTML holds a recent number; refresh it from the API, cached per session.
  var el = document.querySelector("[data-stars]");
  if (!el || !window.fetch) return;
  var locale = document.documentElement.lang === "en" ? "en-US" : "id-ID";
  var key = "cuplik-stars";

  function show(n) {
    var hidden = el.querySelector(".visually-hidden");
    el.firstChild.nodeValue = new Intl.NumberFormat(locale).format(n);
    if (hidden) el.appendChild(hidden);
  }

  try {
    var cached = sessionStorage.getItem(key);
    if (cached) { show(Number(cached)); return; }
  } catch (e) {}

  fetch("https://api.github.com/repos/jipraks/yt-short-clipper", { headers: { Accept: "application/vnd.github+json" } })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      if (!d || typeof d.stargazers_count !== "number") return;
      show(d.stargazers_count);
      try { sessionStorage.setItem(key, String(d.stargazers_count)); } catch (e) {}
    })
    .catch(function () {});
})();
