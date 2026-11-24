# SSK Exports — Official B2B Export & Import Corporate Website

Official responsive B2B web portal for **SSK Exports** (*"We Trade the World"*), a DGFT-registered Manufacturer, Importer, Exporter, and Global Supplier established in 2013 in Coimbatore, Tamil Nadu, India.

## Repository Structure

```text
ssk-exports-website/
├── index.html              # Main responsive B2B storefront & RFQ portal
├── assets/
│   ├── favicon.svg         # Scalable vector browser tab icon (SSK Exports leaf emblem)
│   └── favicon.png         # 256x256 PNG browser tab & Apple touch icon
├── css/
│   └── styles.css          # Custom theme styling & background patterns
├── js/
│   └── app.js              # Interactive product catalog, search, filters & RFQ generator
├── .gitignore              # Standard Git ignore rules
└── README.md               # Setup & Cloudflare Workers / GitHub Pages deployment guide
```

## Deploying on Cloudflare Workers (Static Assets) or GitHub Pages

1. Push all files (`index.html`, `assets/`, `css/`, `js/`) to your GitHub repository.
2. In **Cloudflare Dashboard → Workers & Pages → Create**, connect your GitHub repository.
3. Set the **Build output / Assets directory** to `/` (root) — all root-relative paths (`/assets/favicon.svg`, `/assets/favicon.png`) resolve automatically across routes.
