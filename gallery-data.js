/* ============================================================
   gallery-data.js
   SINGLE SOURCE OF TRUTH for every photo/video in the gallery.
   Used by BOTH index.html (homepage preview) and gallery.html
   (full archive page).

   TO ADD A NEW PHOTO LATER:
   Just copy one of the lines below and change the values.
   It will automatically show up on both pages — no other
   file needs to change.

   Fields:
   category  → "warli" | "madhubani" | "kasuti"
   type      → "image" | "video"
   title     → short caption shown under the photo
   url       → the actual image/video link (local file or internet URL)
   fallback  → backup image shown if "url" fails to load
   ============================================================ */

const galleryData = [
  /* ---------- WARLI (6 photos) ---------- */
  { category:"warli", type:"image", title:"Warli Village Scene",
    url:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Warli_painting_1.jpg",
    fallback:"https://placehold.co/400x500/b5552c/f4ecdc?text=Warli+Art" },

  { category:"warli", type:"image", title:"Tarpa Harvest Dance",
    url:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Warli_Painting.jpg",
    fallback:"https://placehold.co/400x320/b5552c/f4ecdc?text=Tarpa+Dance" },

  { category:"warli", type:"image", title:"Warli by Jivya Soma Mashe",
    url:"https://upload.wikimedia.org/wikipedia/commons/0/0c/A_Warli_painting_by_Jivya_Soma_Mashe%2C_Thane_district.jpg",
    fallback:"https://placehold.co/400x420/b5552c/f4ecdc?text=Jivya+Soma+Mashe" },

  { category:"warli", type:"image", title:"Warli Wall Art Detail",
    url:"https://upload.wikimedia.org/wikipedia/commons/8/8e/Warli-art-1.jpg",
    fallback:"https://placehold.co/400x360/b5552c/f4ecdc?text=Wall+Art+Detail" },

  { category:"warli", type:"image", title:"Warli Tree & Village Motif",
    url:"https://upload.wikimedia.org/wikipedia/commons/a/a4/Warli_art_at_Borivali_Stn_01.jpg",
    fallback:"https://placehold.co/400x480/b5552c/f4ecdc?text=Tree+Motif" },

  { category:"warli", type:"image", title:"Warli Painting on Paper",
    url:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Anonymous_Warli_painting_on_paper%2C_64_x_86_cm.jpg",
    fallback:"https://placehold.co/400x340/b5552c/f4ecdc?text=Warli+on+Paper" },

  /* ---------- MADHUBANI (6 photos) ---------- */
  { category:"madhubani", type:"image", title:"Sacred Fish Motif",
    url:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Madhubani_painting_fish.jpg",
    fallback:"https://placehold.co/400x420/6e1f23/f4ecdc?text=Madhubani" },

  { category:"madhubani", type:"image", title:"Tree of Life",
    url:"https://upload.wikimedia.org/wikipedia/commons/5/54/Madhubani_art.jpg",
    fallback:"https://placehold.co/400x500/6e1f23/f4ecdc?text=Tree+of+Life" },

  { category:"madhubani", type:"image", title:"Mithila Peacock Motif",
    url:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Madhubani_Painting.jpg",
    fallback:"https://placehold.co/400x460/6e1f23/f4ecdc?text=Peacock+Motif" },

  { category:"madhubani", type:"image", title:"Madhubani Deity Panel",
    url:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Madhubani_painting.jpg",
    fallback:"https://placehold.co/400x380/6e1f23/f4ecdc?text=Deity+Panel" },

  { category:"madhubani", type:"image", title:"Madhubani Floral Border",
    url:"https://upload.wikimedia.org/wikipedia/commons/3/3e/Madhubani_paintings.jpg",
    fallback:"https://placehold.co/400x440/6e1f23/f4ecdc?text=Floral+Border" },

  { category:"madhubani", type:"image", title:"Madhubani Wedding Scene",
    url:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Madhubani_Art_work.jpg",
    fallback:"https://placehold.co/400x400/6e1f23/f4ecdc?text=Wedding+Scene" },

  /* ---------- KASUTI (6 photos) ---------- */
  { category:"kasuti", type:"image", title:"Temple Motif",
    url:"https://upload.wikimedia.org/wikipedia/commons/3/35/Kasuti_embroidery.jpg",
    fallback:"https://placehold.co/400x340/3f7a52/f4ecdc?text=Kasuti" },

  { category:"kasuti", type:"image", title:"Lotus Pattern",
    url:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Kasuti_work.jpg",
    fallback:"https://placehold.co/400x460/3f7a52/f4ecdc?text=Lotus+Motif" },

  { category:"kasuti", type:"image", title:"Kasuti Saree Border",
    url:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Kasuti_Saree.jpg",
    fallback:"https://placehold.co/400x420/3f7a52/f4ecdc?text=Saree+Border" },

  { category:"kasuti", type:"image", title:"Kasuti Gavanti Stitch Detail",
    url:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Kasuti_stitch.jpg",
    fallback:"https://placehold.co/400x380/3f7a52/f4ecdc?text=Gavanti+Stitch" },

  { category:"kasuti", type:"image", title:"Kasuti Palanquin Motif",
    url:"https://upload.wikimedia.org/wikipedia/commons/9/9c/Kasuti_palanquin.jpg",
    fallback:"https://placehold.co/400x440/3f7a52/f4ecdc?text=Palanquin+Motif" },

  { category:"kasuti", type:"image", title:"Kasuti Embroidered Blouse Panel",
    url:"https://upload.wikimedia.org/wikipedia/commons/5/5d/Kasuti_blouse.jpg",
    fallback:"https://placehold.co/400x400/3f7a52/f4ecdc?text=Blouse+Panel" }

  /* 👇 ADD NEW PHOTOS HERE — just copy the pattern above and
     change category / title / url. Don't forget the comma
     above this line if you add after the last item! */
];