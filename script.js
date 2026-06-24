/* ============================================================
   HERITAGE BYTES — script.js
   ============================================================ */

const BACKEND_URL = "http://localhost:5000";

/* ==============================================================
   ART DATA
   ============================================================== */
const artData = {
  warli: {
    title:"Warli Art", state:"Maharashtra", region:"Palghar, Nashik, Thane",
    youtubeId:"aydjlLYt7NU",
    history:`Warli painting is one of the oldest tribal art traditions in India, practiced by the Warli people of the Sahyadri hill range in northern Maharashtra, spanning the districts of Palghar, Thane, and Nashik. While its exact age is debated, scholars place its origins as far back as 2,500–3,000 years, rooted in an oral, ritual culture that long predates any written record of the tribe.

For centuries, Warli art existed only on the inner walls of mud homes — never as something to be bought, sold, or displayed in a gallery. Women of the household would prepare a base by coating the wall with a mixture of mud, branches, and cow dung, then paint over it using a paste made from rice flour and water, mixed with a binding gum, applied with a chewed bamboo stick acting as a brush. This act of painting was itself ceremonial, performed in preparation for weddings, harvests, and other significant communal events.

Warli's introduction to the wider world is often credited to Jivya Soma Mashe, a Warli artist who began painting on paper and canvas in the 1970s at the encouragement of social worker and art historian Bhaskar Kulkarni. This transition from wall to portable surface allowed Warli art to travel beyond its village context for the first time, eventually reaching international recognition — Mashe himself received the Padma Shri in 2011, India's fourth-highest civilian honor.`,
    significance:`What makes Warli instantly recognizable is its radical visual economy: the entire tradition is built from just three shapes — the circle, the triangle, and the square. Each carries symbolic weight. The circle represents the sun and the moon, the cyclical nature of life. The triangle, derived from the shape of mountains and tapering trees, represents the natural world. The square is sacred — it usually marks the Chaukat or Chauk, a central ritual enclosure often dedicated to Palaghata, the goddess of fertility, around which an entire composition is built.

Human and animal figures emerge from two triangles joined tip to tip — an elegantly minimal solution that nonetheless conveys movement, posture, and even emotion. There is no shading, no perspective, no attempt at realism in the Western sense. Instead, Warli art is fundamentally narrative: a single painting might depict an entire wedding ceremony, a harvest celebration, the Tarpa dance (a circular group dance named after the wind instrument played at its center), hunting scenes, or the daily rhythms of farming and tending livestock.

Crucially, Warli art was never meant to be decorative in isolation — it was, and in many households still is, an act of storytelling and remembrance, encoding the tribe's relationship with nature, fertility, and community survival into a visual language anyone in the community could read.`,
    materials:`• Pigment: Traditionally white rice paste (rice flour + water), bound with gum from the gugal tree\n• Surface: Mud-plastered walls treated with cow dung and red mud (geru) for the rust-brown base; today often paper, cloth, or canvas\n• Tools: A bamboo stick with its end chewed into bristles, used as the only "brush"\n• Modern adaptation: Acrylic and poster paints are now commonly used on canvas and paper for sale and exhibition, though traditional practitioners still maintain the wall-painting custom for rituals`,
    gi:"GI Registered — Warli Paintings of Nashik District",
    learnMoreLinks:[
      {title:"Warli Art — Sahapedia", url:"https://www.sahapedia.org/warli-art"},
      {title:"Warli Paintings — Google Arts & Culture", url:"https://artsandculture.google.com/story/warli-paintings"}
    ]
  },
  madhubani: {
    title:"Madhubani Art", state:"Bihar", region:"Darbhanga, Madhubani, Sitamarhi",
    youtubeId:"XO7KPnENbf4",
    history:`Madhubani painting — also known as Mithila art, after the historical and cultural region of Mithila that spans parts of modern Bihar and Nepal — is one of India's most celebrated folk art traditions. Its origin story is woven into mythology itself: local tradition holds that King Janaka of Mithila commissioned artists to decorate the kingdom in celebration of his daughter Sita's marriage to Lord Rama, an event described in the Ramayana. Whether or not this is literal history, it signals just how deeply the art form is tied to ideas of auspiciousness, marriage, and devotion.

For generations, Madhubani was painted directly onto the freshly plastered mud walls and floors of homes, particularly during weddings and festivals, by the women of the household — never men, and never for payment. It remained a private, domestic art form until 1934, when a massive earthquake struck Bihar. While inspecting the earthquake damage, British colonial officer William G. Archer discovered the wall paintings inside collapsed homes and documented them — the first recorded outside attention the art form received.

The real transformation came decades later, in 1966, during a severe drought in the Mithila region. Bhaskar Kulkarni, an officer with the All India Handicrafts Board, encouraged local women to transfer their wall art onto paper, both to preserve the tradition and to create a new income source during the crisis. This single intervention turned Madhubani from a wall-bound ritual practice into a globally recognized fine art tradition almost overnight, and by 2007, it had earned a Geographical Indication (GI) tag formally protecting its name and origin.`,
    significance:`Madhubani is instantly distinguishable by its philosophy of horror vacui — literally, "fear of empty space." Every surface is filled: backgrounds are packed with flowers, fish, birds, geometric borders, and symbolic patterns, leaving virtually no blank canvas. Outlines are bold and double-lined, and color is applied flat, without shading or gradient, often using contrasting, saturated hues.

The tradition includes several recognizable sub-styles, each historically associated with a different social community and purpose: Bharni (filled, vividly colored depictions of deities), Kachni (fine-line, often monochrome hatching work), Tantrik (sacred geometric and esoteric imagery associated with goddess worship), Godna (tattoo-inspired patterning, historically practiced by lower-caste communities), and Kohbar (painted specifically for the nuptial chamber, rich with fertility symbolism like intertwined lotus stems and bamboo groves representing the union of bride and groom).

Common recurring motifs include fish (a symbol of fertility and good fortune), peacocks, the sun and moon, the lotus, and scenes from Hindu mythology — particularly stories of Krishna and Rama. Perhaps most significantly, Madhubani has always been a matrilineal art form: skills, motifs, and symbolic meanings are passed from mother to daughter, making the tradition a living archive of women's knowledge in rural Bihar.`,
    materials:`• Pigments: Entirely natural in origin — turmeric and pollen for yellow, indigo for blue, sindoor (vermillion) for red, lamp soot or burnt rice husk for black, and sandalwood paste or rice paste for white\n• Surface: Originally mud walls and floors treated with cow dung; today, handmade paper, cloth, and canvas\n• Tools: Twigs, matchsticks, and nib pens for outlining; fingers for filling color; brushes in modern practice\n• Binding agent: Goat's milk or gum is mixed with pigments to help them adhere`,
    gi:"GI Registered — Madhubani Paintings, 2007",
    learnMoreLinks:[
      {title:"Madhubani Painting — Sahapedia", url:"https://www.sahapedia.org/madhubani-painting"},
      {title:"Mithila Art — Google Arts & Culture", url:"https://artsandculture.google.com/story/mithila"}
    ]
  },
  kasuti: {
    title:"Kasuti Embroidery", state:"Karnataka", region:"Dharwad, Hubli, Gadag, Bijapur",
    youtubeId:"70RD6wINAG8",
    history:`Kasuti is a traditional hand-embroidery technique native to the northern districts of Karnataka, with documented roots stretching back to the Chalukya dynasty (6th century CE) and refined further under the Vijayanagara and Mysore courts. The word "Kasuti" itself derives from two Kannada words — kai (hand) and suti (cotton thread) — a fitting name for a craft defined entirely by manual precision.

Historically, Kasuti was inseparable from Lingayat and broader Karnatakan wedding culture. A bride's trousseau was expected to include garments — particularly the traditional black silk saree known as the Ilkal or Karnataka saree — bordered with intricate Kasuti embroidery, often stitched by the women of her own family as an act of love and blessing before marriage. The amount of time, patience, and skill required meant a single garment could take months to complete, and the finished embroidery served as a visible marker of a family's devotion and status.

Like many hand-craft traditions, Kasuti faced near-extinction through the 20th century as industrial textiles and changing wedding customs reduced demand. Recognizing this, the Karnataka state government — alongside craft-revival organizations — launched dedicated training and documentation programs starting in the latter half of the century, helping reintroduce Kasuti to a new generation of artisans. These efforts culminated in the craft receiving its Geographical Indication (GI) tag in 2005, formally protecting "Kasuti Embroidery" as a designation tied to its Karnataka origin.`,
    significance:`The defining technical feat of Kasuti is that it is entirely knotless — every single stitch is locked into place purely through the geometry and tension of the thread pattern itself, never through a tied knot. This is what makes Kasuti so technically demanding: a single mistake can unravel an entire section, and the embroiderer must count threads precisely rather than follow a drawn or printed outline.

Motifs are drawn directly from religious and royal architecture and daily cultural life: gopuras (temple towers), rathas (temple chariots), palanquins, elephants, peacocks, and above all the lotus, a recurring symbol of purity and prosperity across Indian art traditions. These motifs are arranged in dense, symmetrical, almost mathematical patterns across the fabric, often forming continuous borders along the edge of a saree or blouse panel.

Four specific stitches make up the entire Kasuti vocabulary: Gavanti (a double running stitch producing identical patterns on both sides of the fabric), Murgi (a zigzag "step" stitch resembling a hen's footprint, from which it gets its name — murgi means "hen"), Negi (a darning-style running stitch that mimics woven fabric), and Menthi (a cross-stitch resembling fenugreek/menthe seeds). Mastery of all four, and the ability to combine them into a coherent design, traditionally took years to develop and was considered an essential skill for women in embroidering communities of the region.`,
    materials:`• Thread: Fine silk or cotton embroidery thread, historically hand-spun, in vivid reds, greens, yellows, and white\n• Fabric: Dark-toned cotton or silk — black, indigo, or deep maroon are traditional choices that make the bright thread stand out\n• Tools: A simple needle and, often, an embroidery frame (khatola) to keep the fabric taut while counting threads\n• Technique note: No tracing or printed pattern is used — designs are built entirely by counting the warp and weft threads of the fabric itself`,
    gi:"GI Registered — Kasuti Embroidery, 2005",
    learnMoreLinks:[
      {title:"Kasuti Embroidery — Sahapedia", url:"https://www.sahapedia.org/kasuti"},
      {title:"Kasuti — Google Arts & Culture", url:"https://artsandculture.google.com/story/kasuti-embroidery"}
    ]
  }
};

function buildModal(key){
  const d = artData[key];
  const links = d.learnMoreLinks.map(l =>
    `<a href="${l.url}" target="_blank" rel="noopener" style="display:inline-block;margin-right:14px;color:var(--terracotta-deep);font-weight:700;font-size:.85rem;">${l.title} ↗</a>`
  ).join("");
  return `
    <p class="m-label">${d.state} · ${d.region}</p>
    <h2>${d.title}</h2>
    <span class="gi-pill">✔ ${d.gi}</span>
    <div class="m-section"><h4>History &amp; Origin</h4><p>${d.history}</p></div>
    <div class="m-section"><h4>Significance</h4><p>${d.significance}</p></div>
    <div class="m-section"><h4>Materials</h4><p>${d.materials}</p></div>
    <div class="m-section">
      <h4>Documentary</h4>
      <iframe class="modal-video" src="https://www.youtube.com/embed/${d.youtubeId}" title="${d.title} documentary"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="m-section"><h4>Learn More</h4>${links}</div>
  `;
}

/* ---------- Modal open/close ---------- */
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function openModal(key){
  if(!artData[key]) return;
  modalContent.innerHTML = buildModal(key);
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}
if(modalOverlay && modalClose){
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", e => { if(e.target === modalOverlay) closeModal(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });
}

document.querySelectorAll("[data-open-modal]").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.openModal));
});

/* ---------- Map ---------- */
const mapPanel = document.getElementById("mapPanel");
document.querySelectorAll(".map-pin").forEach(pin => {
  pin.addEventListener("click", () => showMapInfo(pin.dataset.art));
  pin.addEventListener("keydown", e => {
    if(e.key === "Enter" || e.key === " "){ e.preventDefault(); showMapInfo(pin.dataset.art); }
  });
});
function showMapInfo(key){
  const d = artData[key];
  if(!d) return;
  mapPanel.innerHTML = `
    <div class="map-info">
      <p class="map-tag">${d.state}</p>
      <h3>${d.title}</h3>
      <p>${d.history.split("\n\n")[0]}</p>
      <button class="btn btn-line" data-open-modal="${key}">Read Full Story &amp; Watch Video →</button>
    </div>`;
  mapPanel.querySelector("[data-open-modal]").addEventListener("click", () => openModal(key));
}

/* ==============================================================
   MARKETPLACE — browse-only, no checkout. "View Details" opens a
   modal with full info; people reach out directly to inquire.
   ============================================================== */
const productData = [
  {
    id:1, category:"warli", title:"Village Harvest Circle", artist:"Sunita Vangad",
    region:"Dahanu, Maharashtra", price:"₹3,200",
    image:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbgenhtwQ68zELZXOK4gDEBoTCag1GfGtEXd_-YlhkKMm2hiebR3aqRkp&s=10)",
    description:"A traditional Warli composition depicting the Tarpa harvest dance, painted in rice-paste white on a hand-prepared mud-toned canvas board."
  },
  {
    id:2, category:"warli", title:"Tree of Community", artist:"Ramesh Mashe",
    region:"Palghar, Maharashtra", price:"₹2,800",
    image:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1Fqi3ALf903SIcmX0YT59SaKmDYEW6cFTVA2ZMyRvPcWMiVV3w0tn8fw&s=10)",
    description:"Concentric figures encircle a central tree motif, a classic Warli theme symbolizing collective life and continuity."
  },
  {
    id:3, category:"madhubani", title:"Peacock & Lotus Pond", artist:"Kavita Devi",
    region:"Madhubani, Bihar", price:"₹4,500",
    image:"url(https://i.pinimg.com/736x/83/7f/40/837f401390dd79ac59169dbc8aa119ca.jpg)",
    description:"A Bharni-style Madhubani painting in natural pigments, dense with peacock, lotus, and fish motifs — no empty space left unfilled."
  },
  {
    id:4, category:"madhubani", title:"Kohbar Wedding Panel", artist:"Pushpa Jha",
    region:"Darbhanga, Bihar", price:"₹5,200",
    image:"url(https://m.media-amazon.com/images/I/71gU9+hKBWL._AC_UF894,1000_QL80_.jpg)",
    description:"A Kohbar-style fertility and union motif, traditionally painted in the bridal chamber, rendered here on handmade paper."
  },
  {
    id:5, category:"kasuti", title:"Temple Gopuram Panel", artist:"Lalitha Hegde",
    region:"Dharwad, Karnataka", price:"₹6,000",
    image:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxR4ATbhk3-VIRtQq7HPgKdysqvqtnmb2yYYfAuvHVG9IBqbrSvHwvus&s=10)",
    description:"Hand-embroidered Kasuti work in silk thread on black cotton, depicting a temple tower motif using the Gavanti and Murgi stitches, entirely knotless."
  },
  {
    id:6, category:"kasuti", title:"Lotus Palanquin Dupatta", artist:"Shobha Patil",
    region:"Gadag, Karnataka", price:"₹3,800",
    image:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYnTOSwrNwRnkj58qFxKcCXp10Yh7EzZpjfm3NEcKNvWA4x_PZ3EAf_SX&s=10)",
    description:"A dupatta bordered in traditional Kasuti embroidery, combining lotus and palanquin motifs in deep red and gold thread."
  }
];

const marketGrid = document.getElementById("marketGrid");

function renderMarket(items){
  marketGrid.innerHTML = items.map(p => `
    <div class="product-card" data-category="${p.category}" data-id="${p.id}">
      <div class="product-image" style="background:${p.image};">
        <span class="product-region-tag">${p.region}</span>
      </div>
      <div class="product-body">
        <h4>${p.title}</h4>
        <p class="product-artist">by ${p.artist}</p>
        <p class="product-desc">${p.description}</p>
        <div class="product-footer">
          <span class="product-price">${p.price}</span>
          <button class="product-view-btn" data-view="${p.id}">View Details</button>
        </div>
      </div>
    </div>`).join("");

  marketGrid.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openProductModal(Number(btn.dataset.view));
    });
  });
}

if(marketGrid){
  renderMarket(productData);

  document.querySelectorAll("#marketFilters .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#marketFilters .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const filter = chip.dataset.filter;
      const filtered = filter === "all" ? productData : productData.filter(p => p.category === filter);
      renderMarket(filtered);
    });
  });
}

/* Product detail modal — shared across homepage and museum pages,
   wherever #productModalOverlay markup is present */
const productModalOverlay = document.getElementById("productModalOverlay");
const productModalContent = document.getElementById("productModalContent");
const productModalCloseBtn = document.getElementById("productModalClose");

if(productModalOverlay && productModalCloseBtn){
  productModalCloseBtn.addEventListener("click", closeProductModal);
  productModalOverlay.addEventListener("click", e => { if(e.target === productModalOverlay) closeProductModal(); });
}

function openProductModal(id){
  if(!productModalOverlay) return;
  const p = productData.find(item => item.id === id);
  if(!p) return;
  productModalContent.innerHTML = `
    <div class="product-detail-image" style="background:${p.image};"></div>
    <p class="m-label">${p.region}</p>
    <h2>${p.title}</h2>
    <p class="product-detail-price">${p.price}</p>
    <div class="product-detail-meta">
      <span><strong>Artist:</strong> ${p.artist}</span>
      <span><strong>Art Form:</strong> ${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span>
    </div>
    <div class="m-section"><p>${p.description}</p></div>
    <p class="product-contact-note">Interested in this piece? Reach out via the Contribute section's contact details to inquire about availability and purchase.</p>
  `;
  productModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeProductModal(){
  if(!productModalOverlay) return;
  productModalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

/* ==============================================================
   AI ART GUIDE — talks to backend at /ask-ai
   ============================================================== */
const aiLog = document.getElementById("aiLog");
const aiForm = document.getElementById("aiForm");
const aiInput = document.getElementById("aiInput");
const aiSubmit = document.getElementById("aiSubmit");

function addAiLine(text, type){
  const div = document.createElement("div");
  if(type === "user"){
    div.className = "ai-line ai-line-user";
    div.innerHTML = `<p>${escapeHtml(text)}</p>`;
  } else if(type === "loading"){
    div.className = "ai-line ai-line-loading";
    div.innerHTML = `<p>${text}</p>`;
  } else {
    div.className = "ai-line ai-line-bot";
    div.innerHTML = `<span class="ai-tag">Curator</span><p>${escapeHtml(text)}</p>`;
  }
  aiLog.appendChild(div);
  aiLog.scrollTop = aiLog.scrollHeight;
  return div;
}
function escapeHtml(str){
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

async function askAI(question){
  if(!question.trim()) return;
  addAiLine(question, "user");
  aiInput.value = "";
  const loadingLine = addAiLine("Thinking…", "loading");
  aiSubmit.disabled = true;
  aiSubmit.textContent = "...";

  try{
    const res = await fetch(`${BACKEND_URL}/ask-ai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: question.trim() })
    });
    const data = await res.json();
    loadingLine.remove();

    if(!res.ok || data.error){
      addAiLine("⚠️ " + (data.error || "Something went wrong."), "bot");
    } else {
      addAiLine(data.answer, "bot");
    }
  } catch(err){
    loadingLine.remove();
    addAiLine("⚠️ Cannot reach backend. Make sure it's running on http://localhost:5000 (cd backend && npm start).", "bot");
    console.error(err);
  }

  aiSubmit.disabled = false;
  aiSubmit.textContent = "Ask";
}

if(aiForm){
  aiForm.addEventListener("submit", e => {
    e.preventDefault();
    askAI(aiInput.value);
  });
}
document.querySelectorAll(".chip-soft").forEach(chip => {
  chip.addEventListener("click", () => askAI(chip.dataset.q));
});

/* ==============================================================
   CONTRIBUTION FORM
   ============================================================== */
const contributeForm = document.getElementById("contributeForm");
const contributeSuccess = document.getElementById("contributeSuccess");

if(contributeForm){
  contributeForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      title: document.getElementById("cTitle").value.trim(),
      artist: document.getElementById("cArtist").value.trim(),
      artForm: document.getElementById("cForm").value,
      region: document.getElementById("cRegion").value.trim(),
      description: document.getElementById("cDesc").value.trim()
    };

    try{
      const res = await fetch(`${BACKEND_URL}/submit-art`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if(res.ok){
        contributeForm.style.display = "none";
        contributeSuccess.style.display = "block";
      } else {
        alert("Submission failed. Make sure the backend server is running.");
      }
    } catch(err){
      alert("Cannot reach backend. Make sure it's running (cd backend && npm start).");
      console.error(err);
    }
  });

  const contributeAgainBtn = document.getElementById("contributeAgain");
  if(contributeAgainBtn){
    contributeAgainBtn.addEventListener("click", () => {
      contributeForm.reset();
      contributeForm.style.display = "block";
      contributeSuccess.style.display = "none";
    });
  }
}

/* ==============================================================
   NAV / SCROLL
   ============================================================== */
const navBurgerBtn = document.getElementById("navBurger");
if(navBurgerBtn){
  navBurgerBtn.addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
  });
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:"smooth", block:"start"}); }
  });
});
window.addEventListener("scroll", () => {
  const header = document.getElementById("siteHeader");
  if(header) header.style.boxShadow = window.scrollY > 40 ? "0 6px 24px rgba(0,0,0,0.35)" : "none";
});