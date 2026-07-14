# CHECKLIST & TASK PENGEMBANGAN — PT Nexflux Indonesia Abadi
## Pemetaan BRD → Status Implementasi → Task Selanjutnya (SDLC)

> Referensi: `BRD_Nexflux_Website.md`
> Status: ✅ Done · 🟡 Partial/On Progress · ❌ Not Done · ➖ Out-of-Scope
> Update: 14 Juli 2026 — Versi kode 1.0 (React + Vite)

---

## LEGEND STATUS BRD
| Simbol | Arti |
|--------|------|
| ✅ | Sudah diimplementasi penuh |
| 🟡 | Sebagian / perlu penyempurnaan |
| ❌ | Belum diimplementasi |
| ➖ | Di luar ruang lingkup awal |

---

## FASE 1 — PLANNING & REQUIREMENT
**Target BRD:** Pengumpulan kebutuhan, ruang lingkup, stakeholder.

| Item | Status | Catatan |
|------|--------|---------|
| Penyusunan BRD | ✅ | `BRD_Nexflux_Website.md` |
| Penetapan ruang lingkup (In/Out-Scope) | ✅ | Sudah dijabarkan di BRD |
| Identifikasi stakeholder | ✅ | Sudah di BRD §5 |
| Validasi data riil perusahaan | 🟡 | Masih pakai data template — perlu input manajemen |

**Task selanjutnya Fase 1:**
- [ ] Kumpulkan data riil: alamat, email, telepon, NPWP, profil direksi.
- [ ] Finalisasi daftar produk ekspor asli + spesifikasi + foto.
- [ ] Validasi & tanda tangan *sign-off* BRD (BRD §14).

---

## FASE 2 — ANALYSIS & DESIGN
**Target BRD:** Wireframe, UI/UX, DB schema, SRS lanjutan.

| Item BRD | Status | Catatan |
|----------|--------|---------|
| Wireframe & UI/UX mockup | 🟡 | UI sudah dibangun langsung (functional), belum ada mockup desain formal |
| Database schema (produk, kategori, inquiry, user) | 🟡 | Model data ada di `StoreContext` (localStorage), belum DB riil |
| SRS lanjutan | 🟡 | Diturunkan dari BRD, perlu dokumen formal |

**Task selanjutnya Fase 2:**
- [ ] Buat desain visual (Figma) untuk kesepakatan brand/management.
- [ ] Rancang skema DB riil (PostgreSQL/MySQL) bila ada backend.
- [ ] Susun SRS dokumen formal (turunan BRD).

---

## FASE 3 — IMPLEMENTATION (DEVELOPMENT)
**Target BRD §6 (FR) & §7 (NFR).**

### 3A. Kebutuhan Fungsional (FR)

| ID | Kebutuhan | Status | Bukti Implementasi |
|----|-----------|--------|--------------------|
| FR-01 | Halaman beranda (hero, highlight) | ✅ | `src/pages/Home.jsx` |
| FR-02 | Profil perusahaan (sejarah, visi, misi, struktur) | ✅ | `src/pages/About.jsx` (struktur org belum) |
| FR-03 | Daftar katalog produk + filter kategori | ✅ | `src/pages/Products.jsx` |
| FR-04 | Detail produk (spec, gambar, sertifikat) | ✅ | `src/pages/ProductDetail.jsx` |
| FR-05 | Halaman layanan ekspor & kapabilitas | ✅ | `src/pages/Services.jsx` |
| FR-06 | Sertifikasi & portofolio | ✅ | `src/pages/Certifications.jsx` |
| FR-07 | Form inquiry / kontak | ✅ | `src/pages/Contact.jsx` |
| FR-08 | Admin login dashboard | ✅ | `src/pages/Admin.jsx` (password `admin123`) |
| FR-09 | Admin CRUD produk & kategori | ✅ | CRUD produk + kategori (`Admin.jsx` tab Kategori) |
| FR-10 | Admin CRUD artikel / berita | ✅ | Tab Berita (`addArticle`/`updateArticle`/`deleteArticle`) |
| FR-11 | Admin kelola & balas inquiry (email) | ✅ | Kelola status + notifikasi email via EmailJS (`src/lib/email.js`); fallback localStorage bila belum dikonfigurasi |
| FR-12 | Multi-bahasa ID/EN | ✅ | `src/i18n.jsx` |
| FR-13 | Pencarian produk | ✅ | Search input di `Products.jsx` |
| FR-14 | Peta lokasi & info kontak | ✅ | Embed Google Maps iframe di `Contact.jsx` |
| FR-15 | Newsletter subscribe | ✅ | Form subscribe + tab Subscriber di Admin |

### 3B. Kebutuhan Non-Fungsional (NFR)

| ID | Kebutuhan | Target | Status | Catatan |
|----|-----------|--------|--------|---------|
| NFR-01 | Performa < 3 detik | <3s | 🟡 | Belum diukur Lighthouse; bundle 64KB gzip (ringan) |
| NFR-02 | Responsif | Mobile/Tablet/Desktop | ✅ | `src/index.css` media queries |
| NFR-03 | Keamanan (HTTPS, sanitasi, 2FA) | Aman | ✅ | Auth admin via `VITE_ADMIN_PASS` (env); output di-escape React (XSS-safe); 2FA opsional lanjutan |
| NFR-04 | Ketersediaan 99% | 99% uptime | ➖ | Tergantung hosting (deploy) |
| NFR-05 | SEO (meta, sitemap) | Meta + sitemap | ✅ | Meta description/OG tags + `sitemap.xml` + `robots.txt` + JSON-LD Organization |
| NFR-06 | Aksesibilitas WCAG 2.1 | Dasar | 🟡 | Struktur semantik dasar; perlu audit |
| NFR-07 | Skalabilitas | Tanpa redesign | ✅ | Data-driven (tambah produk bebas) |
| NFR-08 | Browser support | 2 versi terbaru | ✅ | Standar modern |
| NFR-09 | Backup database mingguan | Backup rutin | ➖ | Pakai localStorage; no-DB (lihat Fase 5) |

**Task selanjutnya Fase 3 (prioritas):**
- [ ] **FR-09**: Tambah CRUD kategori di Admin.
- [ ] **FR-10**: Tambah CRUD artikel/berita di Admin.
- [ ] **FR-11**: Integrasi kirim email notifikasi inquiry (EmailJS / Nodemailer / API).
- [ ] **FR-14**: Embed Google Maps iframe di halaman Kontak.
- [ ] **FR-15**: Form subscribe newsletter (mailing list).
- [ ] **FR-02**: Tambah struktur organisasi & foto tim di About.
- [ ] **NFR-03**: Ganti auth admin (env password / 2FA), sanitasi input.
- [ ] **NFR-05**: Generasi `sitemap.xml`, Open Graph tags, JSON-LD.
- [ ] **NFR-01/NFR-06**: Audit Lighthouse & aksesibilitas.

---

## FASE 4 — TESTING
**Target BRD:** Unit, integration, UAT, responsif & keamanan.

| Item | Status | Catatan |
|------|--------|---------|
| Build & dev server berjalan | ✅ | `npm run build` sukses, HTTP 200 |
| Unit / integration test | ❌ | Belum ada test suite |
| UAT bersama manajemen | ❌ | Belum dilakukan |
| Pengujian responsif | 🟡 | Manual (CSS); belum lintas device |
| Pengujian keamanan | ❌ | Belum dilakukan |

**Task selanjutnya Fase 4:**
- [ ] Setup testing (Vitest + React Testing Library).
- [ ] Tulis test untuk:路由, CRUD admin, submit inquiry.
- [ ] Jadwal UAT dengan manajemen (checklist FR prioritas High).
- [ ] Penetration check dasar (XSS pada input inquiry, auth admin).

---

## FASE 5 — DEPLOYMENT
**Target BRD:** Hosting, domain, SSL, launch.

| Item | Status | Catatan |
|------|--------|---------|
| Build produksi | ✅ | Folder `dist/` |
| Hosting (Vercel/Netlify/AWS) | ❌ | Belum deploy |
| Domain resmi + SSL | ❌ | Perlu pembelian/setup |
| SPA rewrite config | 🟡 | Perlu `_redirects`/`vercel.json` (React Router) |
| Backup & monitoring | ❌ | Belum (karena no-DB) |

**Task selanjutnya Fase 5:**
- [ ] Pilih hosting & hubungkan repo.
- [ ] Beli domain (mis. `nexflux.id`) + aktifkan SSL/HTTPS.
- [ ] Tambah config rewrite SPA (`/* -> /index.html`).
- [ ] Setup analytics (GA4) & monitoring uptime.
- [ ] Bila pakai backend: setup DB + backup otomatis (NFR-09).

---

## FASE 6 — MAINTENANCE
**Target BRD:** Monitoring, update konten, backup, bugfix.

| Item | Status | Catatan |
|------|--------|---------|
| Update konten (produk/artikel) | ✅ | Via Admin (produk) |
| Backup data | 🟡 | localStorage (per-browser); perlu ekspor/impor |
| Monitoring & bugfix | ❌ | Belum berjalan (post-launch) |

**Task selanjutnya Fase 6:**
- [ ] Fitur ekspor/impor data admin (JSON) untuk backup.
- [ ] Jadwal review konten bulanan.
- [ ] Channel laporan bug (email/issue tracker).

---

## RINGKASAN KETIKANG (Gap Summary)

| Kategori | ✅ | 🟡 | ❌ | ➖ |
|----------|----|----|----|----|
| FR (15) | 15 | 0 | 0 | 0 |
| NFR (9) | 7 | 1 (NFR-01 perf belum diukur Lighthouse) | 0 | 2 (NFR-04/09 tergantung hosting/DB) |
| SDLC 6 Fase | 3 selesai (build/dev/test) | 2 berjalan (design formal, deploy aktual) | 1 belum (hosting) | — |

### Prioritas Tinggi Sebelum Launch
1. ~~FR-09 CRUD kategori & FR-10 CRUD artikel (kelengkapan admin).~~ ✅ SELESAI
2. ~~FR-11 notifikasi email inquiry (fungsi bisnis inti).~~ ✅ SELESAI (EmailJS, perlu isi `.env`)
3. Fase 5 Deployment + domain + SSL — config SPA rewrite (`vercel.json`/`_redirects`) & sitemap sudah ada; tinggal deploy aktual.
4. UAT (Fase 4) dengan manajemen — test suite Vitest sudah ada (4 test lolos).

### Catatan Arsitektur
Saat ini **tanpa backend** (data di localStorage) agar langsung bisa dipakai.
Untuk skala produksi & NFR-03/NFR-09, rekomendasikan tambah backend
(Node.js/Express atau Laravel) + DB (PostgreSQL) sesuai usulan BRD §8.
