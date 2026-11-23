# SSK Exports — Official B2B Export & Import Corporate Website

Official responsive B2B web portal for **SSK Exports** (*"We Trade the World"*), a DGFT-registered Manufacturer, Importer, Exporter, and Global Supplier established in 2013 in Coimbatore, Tamil Nadu, India.

## Repository Structure

```text
ssk-exports-website/
├── index.html          # Main responsive B2B storefront & RFQ portal
├── css/
│   └── styles.css      # Custom theme styling & background patterns
├── js/
│   └── app.js          # Interactive product catalog, search, filters & RFQ generator
├── .gitignore          # Standard Git ignore rules
└── README.md           # Setup & GitHub Pages deployment guide
```

## Key Features

- **Multi-Sector Export Catalog**: Filterable and searchable product catalog covering:
  - Spices & Agro Commodities (`HS 0910 / 0904 / 1006 / 5305`)
  - Fresh & Frozen Produce (`HS 0703 / 0709 / 0803 / 0710`)
  - Organic Areca Palm Leaf Tableware (`HS 4602 / 1404`)
  - Scrap & Recyclable Materials — Ferrous HMS 1&2, Copper, Aluminium, Brass/SS, Plastic & OCC (`HS 7204 / 7404 / 7602 / 3915 / 4707`)
  - Industrial & Engineering Tools (`HS 84689000`)
  - Granites, Marbles, Tiles & Readymade Garments (`HS 6802 / 6907 / 6109`)
- **Verified Trade Credentials**: Displays DGFT IEC (`3212024178`), GSTIN (`33DUHPS2232A1Z3`), and direct link to the verified [IndiaMART Storefront](https://www.indiamart.com/s-s-k-exports/).
- **Interactive Bulk RFQ Generator**: Generates a structured quotation inquiry with a reference ID and one-click dispatch to WhatsApp (`+91 95664 07232`) or Email (`sskexportscbe@gmail.com`).

## How to Host on GitHub Pages (Free)

1. Create a new repository on [GitHub](https://github.com/new) (e.g., `ssk-exports-website`).
2. Upload all files in this folder (`index.html`, `css/styles.css`, `js/app.js`, `README.md`, `.gitignore`) to the `main` branch.
3. Go to **Settings → Pages** in your GitHub repository.
4. Under **Build and deployment → Source**, select **Deploy from a branch**, choose `main` and `/ (root)`, and click **Save**.
5. Your live website will be published within 1–2 minutes at `https://<your-username>.github.io/ssk-exports-website/`.
