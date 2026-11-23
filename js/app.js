// SSK Exports Interactive Catalog, Credentials & RFQ Logic

const products = [
  {
    id: "spices-turmeric",
    category: "spices",
    categoryLabel: "Spices & Agro",
    title: "Turmeric, Black Pepper & Red Chilli",
    hs: "HS Code: 0910 / 0904",
    desc: "High-curcumin Erode & Salem finger/powdered turmeric, bold Tellicherry black pepper, and stemless/with-stem Teja & S17 red chillies.",
    packaging: "25kg / 50kg PP Woven Bags, Jute Bags, or Custom Retail Pouches",
    origin: "Erode, Salem & Pollachi, Tamil Nadu"
  },
  {
    id: "spices-seeds",
    category: "spices",
    categoryLabel: "Spices & Agro",
    title: "Coriander, Jeera, Cardamom & Sesame",
    hs: "HS Code: 0909 / 0908 / 1207",
    desc: "Machine-cleaned aromatic coriander seeds, cumin (jeera), bold green cardamom pods, and hulled/natural white sesame seeds.",
    packaging: "25kg / 50kg Vacuum or Moisture-Barrier Export Bags",
    origin: "Tamil Nadu, Kerala & Gujarat Sourcing Network"
  },
  {
    id: "agro-rice-jaggery",
    category: "spices",
    categoryLabel: "Agro Commodities",
    title: "Non-Basmati Rice, Organic Jaggery & Coir Pith",
    hs: "HS Code: 1006 / 1701 / 5305",
    desc: "Export-grade Ponni & IR64 parboiled/raw rice, chemical-free cane jaggery blocks/powder, mature coconuts, and low-EC coco peat blocks.",
    packaging: "5kg–50kg Bags; 5kg Compressed Coir Blocks (Palletized)",
    origin: "Coimbatore, Pollachi & Cauvery Delta"
  },
  {
    id: "produce-fresh",
    category: "produce",
    categoryLabel: "Fresh & Frozen Produce",
    title: "Fresh Onions, Vegetables & Leafy Greens",
    hs: "HS Code: 0703 / 0709",
    desc: "Farm-fresh red & rose onions, drumstick, okra, green chillies, curry leaves, and pre-cooled seasonal vegetables harvested at peak maturity.",
    packaging: "5kg / 10kg / 20kg Ventilated Mesh Bags & Corrugated Cartons",
    origin: "Coimbatore & Oddanchatram Agro Belts"
  },
  {
    id: "produce-fruits",
    category: "produce",
    categoryLabel: "Fresh & Frozen Produce",
    title: "Tropical Fresh Fruits & IQF Frozen Vegetables",
    hs: "HS Code: 0803 / 0804 / 0710",
    desc: "Cavendish & Nendran bananas, Alphonso/Banganapalli mangoes, pomegranates, plus hygienically blanched & frozen cut vegetables.",
    packaging: "Export-Grade CFB Boxes with Cold-Chain Pre-Cooling",
    origin: "Tamil Nadu & South India"
  },
  {
    id: "palm-tableware",
    category: "palm",
    categoryLabel: "Organic Palm Tableware",
    title: "100% Natural Areca Palm Leaf Plates & Bowls",
    hs: "HS Code: 4602 / 1404",
    desc: "Biodegradable, compostable, chemical-free round & square dinner plates, compartmental trays, bowls, and spoons crafted from fallen palm sheaths.",
    packaging: "Shrink-Wrapped 25-Piece Sleeves in Master Export Cartons",
    origin: "Coimbatore & Pollachi, Tamil Nadu"
  },
  {
    id: "scrap-ferrous",
    category: "scrap",
    categoryLabel: "Scrap & Recyclables",
    title: "HMS 1 & 2 Ferrous Metal Scrap",
    hs: "HS Code: 7204",
    desc: "Heavy Melting Steel (HMS 1 & 2), shredded steel scrap, cast iron scrap, and industrial structural steel offcuts sorted for foundry & steel mill remelting.",
    packaging: "Loose Bulk in 20ft / 40ft Heavy-Duty Open-Top or Standard Containers",
    origin: "Coimbatore Industrial Cluster, Tamil Nadu"
  },
  {
    id: "scrap-copper",
    category: "scrap",
    categoryLabel: "Scrap & Recyclables",
    title: "Copper Millberry & Insulated Cable Scrap",
    hs: "HS Code: 7404",
    desc: "99.9% pure bright bare copper wire scrap (Millberry), birch/cliff copper, and stripped/insulated electrical cable scrap free from non-metallic attachments.",
    packaging: "Compressed Bales, Jumbo FIBC Bags, or Steel Drums",
    origin: "Tamil Nadu & South India"
  },
  {
    id: "scrap-aluminium",
    category: "scrap",
    categoryLabel: "Scrap & Recyclables",
    title: "Aluminium Scrap (Tense, Taint/Tabor & Extrusion)",
    hs: "HS Code: 7602",
    desc: "Clean aluminium 6063 extrusion scrap, cast aluminium (Tense), sheet scrap (Taint/Tabor), and UBC baled scrap graded to ISRI specifications.",
    packaging: "Hydraulically Compressed Bales or Palletized Jumbo Bags",
    origin: "Coimbatore & Chennai Industrial Hubs"
  },
  {
    id: "scrap-brass-ss",
    category: "scrap",
    categoryLabel: "Scrap & Recyclables",
    title: "Brass & Stainless Steel Scrap (SS 304 / 316)",
    hs: "HS Code: 7404 / 7204",
    desc: "Honey brass scrap, brass turnings, and non-magnetic austenitic stainless steel 304 & 316 industrial solids and turnings verified for alloy composition.",
    packaging: "500kg–1,000kg Jumbo Bags or Drummed Container Loads",
    origin: "Coimbatore Engineering Zone"
  },
  {
    id: "scrap-plastic-paper",
    category: "scrap",
    categoryLabel: "Scrap & Recyclables",
    title: "Plastic & Paper Recyclable Scrap (HDPE, PET & OCC)",
    hs: "HS Code: 3915 / 4707",
    desc: "Washed/baled HDPE drums & pipes, clear/green PET bottle flakes & bales, LDPE film scrap, and OCC (Old Corrugated Cardboard) bales.",
    packaging: "High-Density Compressed Bales Loaded in 40ft High-Cube Containers",
    origin: "Tamil Nadu Recycling Facilities"
  },
  {
    id: "industrial-dies",
    category: "industrial",
    categoryLabel: "Industrial & Engineering",
    title: "Precision Extrusion Dies, Nozzles & Flanges",
    hs: "HS Code: 84689000",
    desc: "Custom-machined square die heads, coating die holders, taper cone flanges, flux guides, and precision nozzles for steel & industrial manufacturing.",
    packaging: "Anti-Rust Export Wrapping in Wooden / Heavy-Duty Air-Cargo Crates",
    origin: "Coimbatore Engineering Hub, Tamil Nadu"
  },
  {
    id: "industrial-crucibles",
    category: "industrial",
    categoryLabel: "Industrial & Engineering",
    title: "Platinum Laboratory Crucibles & Kitchen Appliances",
    hs: "HS Code: 8468 / 7115 / 8516",
    desc: "High-purity platinum crucibles (25g / 30ml capacity) for metallurgical testing alongside commercial & domestic kitchen appliances.",
    packaging: "Shock-Proof Foam-Lined Security & Export Cartons",
    origin: "Coimbatore, Tamil Nadu"
  },
  {
    id: "stones-granites",
    category: "stones",
    categoryLabel: "Granites, Marbles & Tiles",
    title: "South Indian Granites, Marbles & Vitrified Tiles",
    hs: "HS Code: 6802 / 6907",
    desc: "Polished & flamed Black Galaxy, Absolute Black, Kashmire White granite slabs/tiles, natural marbles, and architectural ceramic/vitrified tiles.",
    packaging: "Fumigated Seaworthy Wooden Crates & A-Frames",
    origin: "Krishnagiri, Hosur & Salem Quarries"
  },
  {
    id: "textiles-garments",
    category: "stones",
    categoryLabel: "Textiles & Apparel",
    title: "Readymade Garments & Knitwear Apparel",
    hs: "HS Code: 6109 / 6203 / 6204",
    desc: "Combed cotton T-shirts, polo shirts, woven shirts, sportswear, and private-label apparel manufactured in the Tiruppur-Coimbatore textile belt.",
    packaging: "Individual Polybags in 5-Ply Master Export Cartons",
    origin: "Tiruppur & Coimbatore, Tamil Nadu"
  }
];

const incotermDetails = {
  fob: {
    title: "FOB (Free On Board — Indian Ports / Airports)",
    text: "We handle sourcing, quality grading, export packaging, inland transportation, and Indian customs clearance up to loading onto your nominated vessel or flight."
  },
  cif: {
    title: "CIF (Cost, Insurance & Freight to Destination Port)",
    text: "Door-to-port convenience: SSK Exports manages marine/air freight booking and transit insurance directly to your destination seaport or airport."
  },
  air: {
    title: "Express Air Cargo (Perishables & Precision Engineering)",
    text: "Temperature-controlled and priority air freight dispatch for fresh produce, leafy vegetables, and high-value industrial components."
  },
  lc: {
    title: "Irrevocable LC / Telegraphic Transfer (TT)",
    text: "Secure international banking compliance supporting Irrevocable Letter of Credit (L/C) at sight and mutually agreed Telegraphic Transfer (T/T) schedules."
  }
};

let activeCategory = "all";
let searchQuery = "";

const productGrid = document.getElementById("product-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("product-search");
const categoryTabs = document.querySelectorAll(".cat-btn");

function renderProducts() {
  const filtered = products.filter(item => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.hs.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  productGrid.innerHTML = filtered.map(item => `
    <article class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-brand-400 transition group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-full bg-brand-50 text-brand-800 border border-brand-200 text-xs font-bold">
            ${item.categoryLabel}
          </span>
          <span class="text-xs font-mono text-slate-400">${item.hs}</span>
        </div>
        <h3 class="text-lg font-extrabold text-slate-900 group-hover:text-brand-700 transition">
          ${item.title}
        </h3>
        <p class="text-sm text-slate-600 mt-2 leading-relaxed">
          ${item.desc}
        </p>
      </div>

      <div class="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
        <button onclick="openProductModal('${item.id}')" class="text-xs font-bold text-slate-700 hover:text-brand-700 transition">
          View Specs →
        </button>
        <button onclick="quickQuote('${item.title.replace(/'/g, "\'")}', '${item.categoryLabel}')" class="px-3.5 py-2 rounded-lg bg-brand-700 hover:bg-brand-800 text-white text-xs font-semibold transition">
          Inquire Now
        </button>
      </div>
    </article>
  `).join("");
}

categoryTabs.forEach(btn => {
  btn.addEventListener("click", () => {
    activeCategory = btn.dataset.category;
    categoryTabs.forEach(b => {
      b.classList.remove("bg-brand-700", "text-white", "shadow-sm");
      b.classList.add("bg-white", "text-slate-700", "border", "border-slate-200");
    });
    btn.classList.add("bg-brand-700", "text-white", "shadow-sm");
    btn.classList.remove("bg-white", "text-slate-700", "border", "border-slate-200");
    renderProducts();
  });
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

document.getElementById("reset-filter-btn").addEventListener("click", () => {
  activeCategory = "all";
  searchQuery = "";
  searchInput.value = "";
  categoryTabs[0].click();
});

function filterFromFooter(cat) {
  const targetBtn = document.querySelector(`.cat-btn[data-category="${cat}"]`);
  if (targetBtn) targetBtn.click();
}

// Product Modal
const modal = document.getElementById("product-modal");
let currentModalProduct = null;

function openProductModal(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;
  currentModalProduct = item;
  document.getElementById("modal-badge").textContent = item.categoryLabel;
  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-hs").textContent = item.hs;
  document.getElementById("modal-desc").textContent = item.desc;
  document.getElementById("modal-pack").textContent = item.packaging;
  document.getElementById("modal-origin").textContent = item.origin;
  document.getElementById("modal-wa-link").href = `https://wa.me/919566407232?text=${encodeURIComponent(`Hello SSK Exports, I am interested in importing: ${item.title} (${item.hs}). Please share specifications and FOB/CIF pricing.`)}`;
  modal.classList.remove("hidden");
}

document.getElementById("close-modal-btn").addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

document.getElementById("modal-prefill-rfq").addEventListener("click", () => {
  if (!currentModalProduct) return;
  modal.classList.add("hidden");
  quickQuote(currentModalProduct.title, currentModalProduct.categoryLabel);
});

function quickQuote(title, categoryLabel) {
  const rfqSection = document.getElementById("rfq");
  const detailsBox = document.getElementById("rfq-details");
  const catSelect = document.getElementById("rfq-category");

  for (let i = 0; i < catSelect.options.length; i++) {
    if (catSelect.options[i].text.toLowerCase().includes(categoryLabel.split(" ")[0].toLowerCase())) {
      catSelect.selectedIndex = i;
      break;
    }
  }

  detailsBox.value = `Product Required: ${title}\nPreferred Grade / Packaging: Standard Export Grade\nTarget Quantity: `;
  rfqSection.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => detailsBox.focus(), 500);
}

// Incoterm Switcher
document.querySelectorAll(".term-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.term;
    const info = incotermDetails[key];
    document.querySelectorAll(".term-btn").forEach(b => {
      b.classList.remove("bg-brand-500", "text-brand-950");
      b.classList.add("bg-white/10", "text-white");
    });
    btn.classList.add("bg-brand-500", "text-brand-950");
    btn.classList.remove("bg-white/10", "text-white");

    document.getElementById("incoterm-panel").innerHTML = `
      <div class="font-bold text-brand-300 text-base">${info.title}</div>
      <p class="leading-relaxed">${info.text}</p>
    `;
  });
});

// RFQ Generator
document.getElementById("rfq-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("rfq-name").value.trim();
  const company = document.getElementById("rfq-company").value.trim();
  const email = document.getElementById("rfq-email").value.trim();
  const destination = document.getElementById("rfq-destination").value.trim();
  const category = document.getElementById("rfq-category").value;
  const volume = document.getElementById("rfq-volume").value.trim() || "To be discussed";
  const details = document.getElementById("rfq-details").value.trim();

  const refId = "SSK-RFQ-" + Math.floor(100000 + Math.random() * 900000);
  const summary = `EXPORT INQUIRY (${refId})
----------------------------------------
To: SSK Exports (Coimbatore, India)
Buyer Name: ${name}
Company: ${company}
Email: ${email}
Destination: ${destination}
Category: ${category}
Volume / Terms: ${volume}

Requirements:
${details}`;

  document.getElementById("rfq-ref").textContent = refId;
  document.getElementById("rfq-summary-text").textContent = summary;
  document.getElementById("rfq-result").classList.remove("hidden");

  document.getElementById("send-whatsapp-btn").href = `https://wa.me/919566407232?text=${encodeURIComponent(summary)}`;
  document.getElementById("send-email-btn").href = `mailto:sskexportscbe@gmail.com?cc=sskexportten@gmail.com&subject=${encodeURIComponent(`Export Quote Request [${refId}] - ${category}`)}&body=${encodeURIComponent(summary)}`;
});

document.getElementById("copy-rfq-btn").addEventListener("click", function () {
  const txt = document.getElementById("rfq-summary-text").textContent;
  copyText(txt, this);
});

function copyText(text, btnEl) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btnEl.textContent;
    btnEl.textContent = "Copied!";
    setTimeout(() => { btnEl.textContent = orig; }, 1800);
  });
}

// Mobile Menu Toggle
document.getElementById("mobile-menu-btn").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Init
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
