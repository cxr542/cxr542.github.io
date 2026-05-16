(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var reveals = document.querySelectorAll(".reveal");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function closeNav() {
    if (!navToggle || !nav) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "메뉴 열기");
    nav.classList.remove("is-open");
  }

  function openNav() {
    if (!navToggle || !nav) return;
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "메뉴 닫기");
    nav.classList.add("is-open");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeNav();
      } else {
        openNav();
      }
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window && reveals.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var portfolioCta = document.getElementById("portfolio-cta");
  var contactPortfolio = document.getElementById("contact-portfolio");

  if (portfolioCta && contactPortfolio) {
    var portfolioUrl = contactPortfolio.getAttribute("href");
    if (
      portfolioUrl &&
      portfolioUrl.indexOf("http") === 0 &&
      portfolioUrl.indexOf("example.com") === -1
    ) {
      portfolioCta.setAttribute("href", portfolioUrl);
      portfolioCta.setAttribute("target", "_blank");
      portfolioCta.setAttribute("rel", "noopener noreferrer");
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.replaceState) {
        history.replaceState(null, "", id);
      }
    });
  });
})();
