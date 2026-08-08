# Jinesh K J — Personal Portfolio

Personal portfolio site for Jinesh K J, Assistant Professor, Mechatronics
Engineering, Jyothi Engineering College (JEC).

Static site — plain HTML, CSS, and JavaScript, no build step.

## Structure

- `index.html` — page content and sections
- `style.css` — styling and responsive layout
- `script.js` — nav interactions and the certifications table (kept in sync
  with the Certificates & Proof sheet of the work tracker)

## Run locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

Push to a GitHub repo, then in **Settings → Pages** select the `main`
branch / root folder. The site publishes at
`https://<username>.github.io/<repo>/`.

## Updating content

The certifications table is generated from the `certifications` array in
`script.js` — add a row there when a new `CERT-YYYY-NNN` entry is filed in
the tracker. Publications, patents, and projects are edited directly in
`index.html`.
