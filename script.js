// ---- footer year ----
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- mobile nav toggle ----
var toggle = document.querySelector(".nav-toggle");
var links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---- hero typewriter ----
(function () {
  var el = document.getElementById("typed");
  if (!el) return;
  var phrases = [
    "· Mechatronics Engineer",
    "· IoT & Embedded Systems",
    "· Robotics & Automation",
    "· Researcher & Mentor",
  ];
  var pi = 0, ci = 0, deleting = false;
  function tick() {
    var word = phrases[pi];
    if (deleting) {
      ci--;
    } else {
      ci++;
    }
    el.textContent = word.slice(0, ci);
    var delay = deleting ? 45 : 90;
    if (!deleting && ci === word.length) {
      delay = 1600; deleting = true;
    } else if (deleting && ci === 0) {
      deleting = false; pi = (pi + 1) % phrases.length; delay = 400;
    }
    setTimeout(tick, delay);
  }
  tick();
})();
