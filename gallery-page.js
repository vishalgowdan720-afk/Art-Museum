/* ============================================================
   gallery-page.js
   Powers gallery.html — the full photo/video archive page.
   Reads from the SAME galleryData array defined in
   gallery-data.js (loaded before this file).
   ============================================================ */

const fullGalleryGrid = document.getElementById("fullGalleryGrid");
const galleryCount = document.getElementById("galleryCount");
const galleryEmpty = document.getElementById("galleryEmpty");

function renderFullGallery(items){
  if(items.length === 0){
    fullGalleryGrid.style.display = "none";
    galleryEmpty.style.display = "block";
    galleryCount.textContent = "";
    return;
  }
  fullGalleryGrid.style.display = "grid";
  galleryEmpty.style.display = "none";
  galleryCount.textContent = `Showing ${items.length} item${items.length === 1 ? "" : "s"}`;

  fullGalleryGrid.innerHTML = items.map((item, i) => `
    <div class="masonry-item" style="grid-row-end:span ${18 + (i % 3) * 4};">
      ${item.type === "video"
        ? `<span class="video-badge">▶ video</span>`
        : ""}
      <img src="${item.url}" alt="${item.title}" loading="lazy" onerror="this.src='${item.fallback}'" />
      <span class="masonry-tag">${item.title}</span>
    </div>`).join("");

  fullGalleryGrid.querySelectorAll(".masonry-item").forEach((el, i) => {
    el.addEventListener("click", () => openSingleViewer(items[i]));
  });
}

/* Initial render — show everything */
renderFullGallery(galleryData);

/* ---------- Filters + search ---------- */
document.querySelectorAll("#fullGalleryFilters .chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#fullGalleryFilters .chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    applyFullGalleryFilters();
  });
});
document.getElementById("fullGallerySearch").addEventListener("input", applyFullGalleryFilters);

function applyFullGalleryFilters(){
  const activeChip = document.querySelector("#fullGalleryFilters .chip.active").dataset.filter;
  const query = document.getElementById("fullGallerySearch").value.trim().toLowerCase();
  const filtered = galleryData.filter(item =>
    (activeChip === "all" || item.category === activeChip) &&
    item.title.toLowerCase().includes(query)
  );
  renderFullGallery(filtered);
}

/* ---------- Single-item viewer (full size image/video) ---------- */
const viewerOverlay = document.getElementById("viewerOverlay");
const viewerStage = document.getElementById("viewerStage");
const viewerCaption = document.getElementById("viewerCaption");
document.getElementById("viewerClose").addEventListener("click", closeViewer);
viewerOverlay.addEventListener("click", e => { if(e.target === viewerOverlay) closeViewer(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeViewer(); });

function openSingleViewer(item){
  viewerStage.innerHTML = item.type === "video"
    ? `<video src="${item.url}" controls autoplay></video>`
    : `<img src="${item.url}" onerror="this.src='${item.fallback}'" alt="${item.title}" />`;
  viewerCaption.textContent = item.title;
  viewerOverlay.classList.add("active");
}
function closeViewer(){
  viewerOverlay.classList.remove("active");
  viewerStage.innerHTML = "";
}

/* ---------- Nav burger (shared behavior with homepage) ---------- */
const navBurger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");
if(navBurger && navLinks){
  navBurger.addEventListener("click", () => navLinks.classList.toggle("open"));
}
window.addEventListener("scroll", () => {
  const header = document.getElementById("siteHeader");
  if(header) header.style.boxShadow = window.scrollY > 40 ? "0 6px 24px rgba(0,0,0,0.35)" : "none";
});