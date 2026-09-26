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
    category: "Publication",
    title: "Certificate of Presentation — IJCACI 2026",
  },
  {
    ref: "CERT-2026-002",
    date: "2026-07-30",
    category: "Resource Person",
    title: "Resource Person — DESIGNX 3D (3D Printing Design Workshop)",
  },
  {
    ref: "CERT-2026-003",
    date: "2026-07-23",
    category: "Outreach",
    title: "Letter of Appreciation — Chandrayaan Outreach Workshop, CKCLPS Rajagiri",
  },
  {
    ref: "CERT-2026-004",
    date: "2026-08-11",
    category: "Teaching & Mentoring",
    title: "Alumni Talk — Mr. Leen David (2017–21) for S5 Students",
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
