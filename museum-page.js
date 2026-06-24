/* ============================================================
   museum-page.js
   Shared logic for warli.html / madhubani.html / kasuti.html

   Each page defines its own small data (photos, videos, category)
   then calls initMuseumPage(config) once. Keeps all three pages
   using the exact same tested code instead of duplicating it.
   ============================================================ */

function initMuseumPage(config){
  /* config = {
       category: "warli" | "madhubani" | "kasuti",
       photos: [{url, fallback, caption}, ...],
       videos: [{youtubeId, title, thumb}, ...]
     } */

  renderPhotoArchive(config.photos);
  renderVideoArchive(config.videos);
  renderRelatedProducts(config.category);
  setupLightbox(config.photos);
  setupVideoModal();
}

/* ---------- PHOTO ARCHIVE ---------- */
function renderPhotoArchive(photos){
  const grid = document.getElementById("photoArchiveGrid");
  if(!grid) return;

  grid.innerHTML = photos.map((p, i) => `
    <div class="photo-archive-item" data-index="${i}">
      <img src="${p.url}" alt="${p.caption}" loading="lazy"
           onerror="this.onerror=function(){this.style.display='none';this.parentElement.classList.add('img-failed');};this.src='${p.fallback}'"/>
    </div>
  `).join("");

  grid.querySelectorAll(".photo-archive-item").forEach(el => {
    el.addEventListener("click", () => openLightbox(Number(el.dataset.index)));
  });
}

/* ---------- LIGHTBOX (photo viewer with prev/next) ---------- */
let lightboxPhotos = [];
let lightboxIndex = 0;

function setupLightbox(photos){
  lightboxPhotos = photos;
  const overlay = document.getElementById("lightboxOverlay");
  if(!overlay) return;

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => stepLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => stepLightbox(1));
  overlay.addEventListener("click", e => { if(e.target === overlay) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if(!overlay.classList.contains("active")) return;
    if(e.key === "Escape") closeLightbox();
    if(e.key === "ArrowLeft") stepLightbox(-1);
    if(e.key === "ArrowRight") stepLightbox(1);
  });
}
function openLightbox(index){
  lightboxIndex = index;
  showLightboxImage();
  document.getElementById("lightboxOverlay").classList.add("active");
}
function closeLightbox(){
  document.getElementById("lightboxOverlay").classList.remove("active");
}
function stepLightbox(dir){
  lightboxIndex = (lightboxIndex + dir + lightboxPhotos.length) % lightboxPhotos.length;
  showLightboxImage();
}
function showLightboxImage(){
  const p = lightboxPhotos[lightboxIndex];
  const img = document.getElementById("lightboxImg");
  img.src = p.url;
  img.onerror = () => { img.src = p.fallback; };
  document.getElementById("lightboxCaption").textContent =
    `${p.caption} — ${lightboxIndex + 1} / ${lightboxPhotos.length}`;
}

/* ---------- VIDEO ARCHIVE ---------- */
function renderVideoArchive(videos){
  const grid = document.getElementById("videoArchiveGrid");
  if(!grid) return;

  grid.innerHTML = videos.map((v, i) => `
    <div class="video-card" data-index="${i}">
      <div class="video-thumb" style="background-image:url('https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg')">
        <div class="video-play-icon">▶</div>
      </div>
      <div class="video-card-body">
        <h4>${v.title}</h4>
        <p>${v.subtitle || ""}</p>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".video-card").forEach((el, i) => {
    el.addEventListener("click", () => openVideoModal(videos[i].youtubeId));
  });
}

function setupVideoModal(){
  const overlay = document.getElementById("videoModalOverlay");
  if(!overlay) return;
  document.getElementById("videoModalClose").addEventListener("click", closeVideoModal);
  overlay.addEventListener("click", e => { if(e.target === overlay) closeVideoModal(); });
}
function openVideoModal(youtubeId){
  document.getElementById("videoModalFrame").src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
  document.getElementById("videoModalOverlay").classList.add("active");
}
function closeVideoModal(){
  document.getElementById("videoModalOverlay").classList.remove("active");
  document.getElementById("videoModalFrame").src = "";
}

/* ---------- RELATED PRODUCTS ----------
   Reuses the same productData array defined in script.js.
   Make sure script.js loads BEFORE museum-page.js on the page. */
function renderRelatedProducts(category){
  const grid = document.getElementById("relatedProductsGrid");
  if(!grid || typeof productData === "undefined") return;

  const items = productData.filter(p => p.category === category);
  if(items.length === 0){
    grid.innerHTML = `<p style="color:var(--ink-soft);">More artworks from this collection coming soon.</p>`;
    return;
  }

  grid.innerHTML = items.map(p => `
    <div class="product-card" data-id="${p.id}">
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
    </div>
  `).join("");

  grid.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = `product.html?id=${btn.dataset.view}`;
    });
  });
}