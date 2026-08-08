// Portfolio interactions

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close menu after clicking a link (mobile)
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Optional: certifications data source kept in sync with the work tracker.
// To add a certificate, push a row here and it renders into the table.
const certifications = [
  {
    ref: "CERT-2026-001",
    date: "2026-07-25",
    category: "Research & Proposals",
    title: "Certificate of Presentation — IJCACI 2026",
  },
];

const tbody = document.getElementById("cert-tbody");
if (tbody && certifications.length) {
  tbody.innerHTML = certifications
    .map(
      (c) =>
        `<tr><td>${c.ref}</td><td>${c.date}</td><td>${c.category}</td><td>${c.title}</td></tr>`
    )
    .join("");
}
