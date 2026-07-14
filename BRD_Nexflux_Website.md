# BRD (Business Requirements Document)
## Website Company Profile — PT NEXFLUX INDONESIA ABADI

| Item | Detail |
|------|--------|
| **Nama Proyek** | Website Company Profile PT Nexflux Indonesia Abadi |
| **Dokumen** | Business Requirements Document (BRD) |
| **Versi** | 1.0 |
| **Tanggal** | 14 Juli 2026 |
| **Status** | Draft |
| **Metodologi** | SDLC (Software Development Life Cycle) — model Iteratif/Agile |
| **Pemilik Produk** | Manajemen PT Nexflux Indonesia Abadi |
| **Tim Pengembang** | Divisi IT / Vendor Pengembang Web |

---

## 1. Pendahuluan

### 1.1 Latar Belakang
PT Nexflux Indonesia Abadi adalah perusahaan eksportir yang bergerak di bidang perdagangan produk Indonesia ke pasar internasional. Saat ini perusahaan belum memiliki kehadiran digital yang representatif. Kehadiran website company profile menjadi kebutuhan strategis untuk:
- Membangun kredibilitas dan kepercayaan (trust) di mata buyer internasional.
- Menampilkan profil perusahaan dan portofolio produk ekspor secara profesional.
- Menjadi kanal komunikasi dan prospek bisnis (lead generation) 24/7.
- Mendukung dokumen tender, kemitraan, dan sertifikasi internasional.

### 1.2 Tujuan Dokumen
Dokumen ini mendefinisikan kebutuhan bisnis, fungsional, non-fungsional, ruang lingkup, dan kriteria keberhasilan pengembangan website company profile PT Nexflux Indonesia Abadi sesuai tahapan SDLC.

---

## 2. Ruang Lingkup (Scope)

### 2.1 Dalam Ruang Lingkup (In-Scope)
- Halaman profil perusahaan (About / Company Overview).
- Halaman katalog produk ekspor (Product Catalog).
- Halaman layanan ekspor & kapabilitas.
- Halaman sertifikasi, penghargaan, dan portofolio klien.
- Halaman kontak & form inquiry (permintaan penawaran).
- Admin panel untuk manajemen konten (produk, artikel, inquiry).
- Multi-bahasa (Bahasa Indonesia & English).
- SEO dasar & responsif (mobile-friendly).

### 2.2 Di Luar Ruang Lingkup (Out-of-Scope)
- Sistem e-commerce / transaksi pembayaran online.
- Integrasi ERP / sistem akuntansi internal.
- Aplikasi mobile native (iOS/Android).
- Sistem logistik & tracking shipment real-time.
- Portal B2B marketplace pihak ketiga.

---

## 3. Profil Perusahaan (Company Detail)

### 3.1 Identitas Perusahaan
| Field | Informasi |
|-------|-----------|
| Nama Resmi | PT Nexflux Indonesia Abadi |
| Bidang Usaha | Perusahaan Eksportir (Trading & Manufacturing Support) |
| Status | Perseroan Terbatas (PT) |
| Tahun Berdiri | 2015 |
| Kantor Pusat | Jakarta, Indonesia |
| Cabang / Representatives | Surabaya, Batam |
| Pasar Utama | Asia, Timur Tengah, Eropa, Amerika Utara |
| Visi | Menjadimitra ekspor terpercaya yang menghubungkan produk unggulan Indonesia ke pasar global. |
| Misi | 1) Menyediakan produk berkualitas standar internasional; 2) Memberikan layanan ekspor end-to-end; 3) Membangun hubungan jangka panjang dengan buyer global. |

### 3.2 Struktur Organisasi (Contoh)
- Direktur Utama
- Head of Export
- Sales & Marketing International
- Quality Control & Compliance
- Logistics & Documentation
- Customer Relations

### 3.3 Sertifikasi (Target / Existing)
- NIB & Izin Ekspor (IT-Ekspor)
- ISO 9001:2015 (Quality Management)
- SNI / Produk Compliance
- Sertifikat Halal (untuk produk tertentu)
- FTA / COO Documentation (ASEAN, China, dll)

---

## 4. Katalog Produk (Product Catalog)

Katalog menampung produk ekspor yang ditawarkan. Setiap produk memiliki atribut berikut:

| Atribut | Keterangan |
|---------|-----------|
| Nama Produk | Nama produk ekspor |
| Kategori | Kelompok produk (lihat di bawah) |
| Spesifikasi | Dimensi, material, grade, standar |
| Negara Tujuan | Target market |
| Kapasitas / MOQ | Minimum order & kapasitas supply |
| Sertifikasi | Dokumen pendukung |
| Gambar | Foto produk |
| Deskripsi | Penjelasan & keunggulan |

### 4.1 Kategori Produk Utama
1. **Agrikultur & Komoditas** (kelapa, kopi, rempah, sawit)
2. **Produk Maritim & Perikanan** (rumput laut, ikan beku)
3. **Handicraft & Furniture** (rotan, kayu, kerajinan)
4. **Industrial & Manufactured Goods** (komponen, tekstil, kemasan)
5. **Mineral & Bahan Baku** (batu bara, nikel, pasir silika)

> Catatan: Daftar produk di atas merupakan template yang dapat disesuaikan dengan portofolio riil PT Nexflux Indonesia Abadi saat pengumpulan kebutuhan (requirement gathering) dengan user.

---

## 5. Stakeholder & Peran

| Stakeholder | Peran |
|-------------|-------|
| Manajemen / Direksi | Pemilik produk, approval kebutuhan & anggaran |
| Marketing Team | Penginput konten, produk, artikel |
| Customer / Buyer | Pengguna akhir website (prospek global) |
| Admin IT | Mengelola sistem & keamanan |
| Developer / Vendor | Implementasi teknis |

---

## 6. Kebutuhan Fungsional (Functional Requirements)

| ID | Kebutuhan | Prioritas |
|----|-----------|-----------|
| FR-01 | Sistem dapat menampilkan halaman beranda (hero, highlight perusahaan) | High |
| FR-02 | Sistem dapat menampilkan profil perusahaan (sejarah, visi, misi, struktur) | High |
| FR-03 | Sistem dapat menampilkan daftar katalog produk dengan filter kategori | High |
| FR-04 | Sistem dapat menampilkan detail produk (spesifikasi, gambar, sertifikat) | High |
| FR-05 | Sistem dapat menampilkan halaman layanan ekspor & kapabilitas | Medium |
| FR-06 | Sistem dapat menampilkan halaman sertifikasi & portofolio | Medium |
| FR-07 | Pengguna dapat mengirim form inquiry / kontak | High |
| FR-08 | Admin dapat login ke dashboard | High |
| FR-09 | Admin dapat CRUD data produk & kategori | High |
| FR-10 | Admin dapat CRUD artikel / berita (news & blog) | Medium |
| FR-11 | Admin dapat mengelola & membalas inquiry (via email) | High |
| FR-12 | Sistem mendukung multi-bahasa (ID/EN) | Medium |
| FR-13 | Sistem menyediakan pencarian produk | Medium |
| FR-14 | Sistem menampilkan peta lokasi & info kontak | Low |
| FR-15 | Pengguna dapat berlangganan newsletter | Low |

---

## 7. Kebutuhan Non-Fungsional (Non-Functional Requirements)

| ID | Kebutuhan | Target |
|----|-----------|--------|
| NFR-01 | Performa | Waktu muat < 3 detik |
| NFR-02 | Responsif | Mobile, tablet, desktop (breakpoint standar) |
| NFR-03 | Keamanan | HTTPS, sanitasi input, proteksi admin (2FA opsional) |
| NFR-04 | Ketersediaan | Uptime 99% |
| NFR-05 | SEO | Meta tag, sitemap, struktur URL ramah SEO |
| NFR-06 | Aksesibilitas | Standar WCAG 2.1 dasar |
| NFR-07 | Skalabilitas | Mendukung penambahan produk tanpa redesign |
| NFR-08 | Browser support | Chrome, Firefox, Safari, Edge (2 versi terbaru) |
| NFR-09 | Backup | Backup database mingguan otomatis |

---

## 8. Arsitektur & Teknologi (Usulan)

| Layer | Usulan |
|-------|--------|
| Frontend | React / Vue / Next.js (SSR untuk SEO) |
| Backend / CMS | Node.js (Express) atau Laravel, atau headless CMS |
| Database | PostgreSQL / MySQL |
| Hosting | Cloud (Vercel / AWS / GCP) dengan CDN |
| Bahasa | Indonesian & English (i18n) |
| Keamanan | SSL/TLS, rate limiting, CAPTCHA pada form |

> Teknologi bersifat usulan dan dapat disesuaikan pada fase desain (SDLC Design).

---

## 9. SDLC — Rencana Pengembangan

### Fase 1: Planning & Requirement (BRD ini)
- Pengumpulan kebutuhan, penetapan ruang lingkup, identifikasi stakeholder.

### Fase 2: Analysis & Design
- Wireframe & UI/UX mockup.
- Database schema (produk, kategori, inquiry, user).
- SRS (Software Requirements Specification) lanjutan.

### Fase 3: Implementation (Development)
- Setup project, coding frontend & backend, integrasi.
- Pembuatan admin panel.

### Fase 4: Testing
- Unit test, integration test, UAT (User Acceptance Test) bersama manajemen.
- Pengujian responsif & keamanan.

### Fase 5: Deployment
- Hosting, domain, SSL, launch.

### Fase 6: Maintenance
- Monitoring, update konten, backup, perbaikan bug.

---

## 10. Model Data (Draft Entity)

- **Product**: id, name, category_id, description, specification, image, moq, certificate, created_at
- **Category**: id, name, slug
- **Inquiry**: id, name, company, email, country, product_id, message, status, created_at
- **User (Admin)**: id, username, password_hash, role
- **Article**: id, title, body, language, cover, published_at

---

## 11. Kriteria Keberhasilan (Success Criteria)
- Website live & dapat diakses publik dengan domain resmi.
- 100% fitur FR prioritas High terimplementasi & lolos UAT.
- Skor Lighthouse SEO/Performance ≥ 85.
- Admin dapat mengelola produk & inquiry mandiri.
- Form inquiry terhubung ke email manajemen.

---

## 12. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Konten produk belum lengkap | Delay launch | Sosialisasi & pengumpulan data awal |
| Perubahan kebutuhan | Rework | Agile sprint & approval per fase |
| Isu keamanan | Data bocor | HTTPS, audit, backup rutin |
| Budget/time overrun | Proyek terhenti | Prioritas MVP (High features) |

---

## 13. Anggaran & Jadwal (Estimasi)

| Fase | Durasi Estimasi |
|------|-----------------|
| Planning & BRD | 1 minggu |
| Design | 2 minggu |
| Development | 4–6 minggu |
| Testing & UAT | 2 minggu |
| Deployment & Launch | 1 minggu |

> Total estimasi: 10–12 minggu (dapat disesuaikan).

---

## 14. Persetujuan (Sign-off)

| Nama | Jabatan | Tanda Tangan | Tanggal |
|------|---------|--------------|---------|
| | Direktur Utama | | |
| | Head of IT / Vendor | | |
| | Head of Marketing | | |

---

*Dokumen ini adalah versi 1.0 BRD. Dapat direvisi seiring tahapan SDLC dan validasi kebutuhan dengan PT Nexflux Indonesia Abadi.*
