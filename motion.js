// Fades sections up as they scroll into view, once each.
// Content is only hidden after this script adds .motion, so a failed load never hides anything.
(function () {
  var items = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!items.length || reduce || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("motion");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  items.forEach(function (el) { observer.observe(el); });

  // Reveal everything at or above the bottom of the viewport: what is on screen at load,
  // and anything skipped by jumping to an anchor (nav link, #contact).
  function revealSeen() {
    items.forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
    });
  }
  requestAnimationFrame(revealSeen);
  window.addEventListener("hashchange", revealSeen);

  // Safety net: if the observer never fires (throttled background tab, odd browser), nothing stays hidden.
  setTimeout(function () {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }, 2500);
})();
