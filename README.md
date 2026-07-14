# PT Nexflux Indonesia Abadi — Company Profile & Export Catalog

![React 18](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)
![Vite 5](https://img.shields.io/badge/Vite-5.4.8-646CFF?logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-2.1.2-FCC72B?logo=vitest&logoColor=black)
![License: Proprietary](https://img.shields.io/badge/License-Proprietary-blue)
![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-success)

Website resmi company profile dan katalog produk ekspor digital **PT Nexflux Indonesia Abadi**. Dirancang sebagai aplikasi web modern berkinerja tinggi berbasis **React 18 + Vite**, dilengkapi dengan antarmuka dua bahasa (Indonesia & Inggris), katalog produk interaktif, sistem inquiry komersial, serta dasbor administrasi mandiri.

---

## 📑 Daftar Isi
- [Ikhtisar Proyek](#-ikhtisar-proyek)
- [Fitur Utama](#-fitur-utama)
- [Struktur Direktori](#-struktur-direktori)
- [Panduan Memulai (Quickstart)](#-panduan-memulai-quickstart)
- [Konfigurasi Environment (`.env`)](#-konfigurasi-environment-env)
- [Akses Dashboard Admin](#-akses-dashboard-admin)
- [Pengujian (Automated Testing)](#-pengujian-automated-testing)
- [Panduan Deployment](#-panduan-deployment)
- [Dokumentasi SDLC & BRD](#-dokumentasi-sdlc--brd)

---

## 🏢 Ikhtisar Proyek

PT Nexflux Indonesia Abadi adalah perusahaan eksportir komoditas alam & produk industri Indonesia berstandar internasional. Proyek ini dikembangkan mengikuti **Business Requirement Document (BRD)** dan **Software Development Life Cycle (SDLC)** terstruktur guna memastikan kualitas, keamanan, kecepatan muat (*loading speed* < 3 detik), serta kompatibilitas SEO global.

* Referensi Spesifikasi Bisnis: [BRD_Nexflux_Website.md](file:///Users/user/company-profile/BRD_Nexflux_Website.md)
* Pelacakan Implementasi & SDLC: [CHECKLIST_SDLC.md](file:///Users/user/company-profile/CHECKLIST_SDLC.md)

---

## ✨ Fitur Utama

### 🌐 1. Halaman Publik (Frontend)
* **Beranda ([Home.jsx](file:///Users/user/company-profile/src/pages/Home.jsx)):** Hero section interaktif, sorotan keunggulan kompetitif, dan produk unggulan ekspor.
* **Tentang Kami ([About.jsx](file:///Users/user/company-profile/src/pages/About.jsx)):** Sejarah perusahaan, Visi & Misi, Struktur Organisasi, serta kapabilitas operasional.
* **Katalog Produk ([Products.jsx](file:///Users/user/company-profile/src/pages/Products.jsx)):** Filter berdasarkan kategori komoditas & pencarian teks *real-time*.
* **Detail Produk ([ProductDetail.jsx](file:///Users/user/company-profile/src/pages/ProductDetail.jsx)):** Spesifikasi teknis, standar kualitas, sertifikasi ekspor, dan tombol inquiry langsung.
* **Layanan Ekspor ([Services.jsx](file:///Users/user/company-profile/src/pages/Services.jsx)):** Penjelasan alur logistik, pengemasan ekspor (*custom packaging*), OEM/Private label, dan FOB/CIF handling.
* **Sertifikasi ([Certifications.jsx](file:///Users/user/company-profile/src/pages/Certifications.jsx)):** Portofolio sertifikasi kualitas internasional (ISO, Halal, HACCP, FDA, dll.).
* **Kontak & Inquiry ([Contact.jsx](file:///Users/user/company-profile/src/pages/Contact.jsx)):** Formulir inquiry terintegrasi, peta lokasi interaktif (Google Maps Embed), dan informasi kantor pusat.

### 🛡️ 2. Dashboard Admin ([Admin.jsx](file:///Users/user/company-profile/src/pages/Admin.jsx))
* **CRUD Produk:** Tambah, edit, dan hapus spesifikasi, deskripsi bilingual, foto, serta kategori produk.
* **CRUD Kategori:** Manajemen kategori produk dengan validasi referensi silang.
* **CRUD Berita / Artikel:** Publikasi wawasan industri ekspor dan berita perusahaan.
* **Manajemen Inquiry & Email:** Melihat daftar masuk pesan klien bisnis, ubah status prospek, dan pengiriman email balasan otomatis via EmailJS.
* **Manajemen Subscriber:** Kelola pendaftar *newsletter* / calon mitra bisnis.

### ⚡ 3. Fitur Teknis & Non-Fungsional (NFR)
* **Mobile Bottom Navigation (Android View):** Navigasi bilah bawah khusus perangkat seluler ([MobileBottomNav.jsx](file:///Users/user/company-profile/src/components/MobileBottomNav.jsx)) dengan 4 menu utama interaktif (Beranda, Produk, Profil, Kontak) untuk kenyamanan akses 1-tap ala aplikasi native Android/iOS.
* **Multi-Bahasa (ID/EN):** Didukung oleh [i18n.jsx](file:///Users/user/company-profile/src/i18n.jsx) dengan persistensi preferensi bahasa di peramban pengguna.
* **SEO & Meta Lengkap:** Skema JSON-LD Organization, Open Graph tags, file `sitemap.xml`, dan `robots.txt`.
* **State Management Tanpa Backend:** Menggunakan React Context ([StoreContext.jsx](file:///Users/user/company-profile/src/context/StoreContext.jsx)) + `localStorage` yang diinisialisasi dari [initialData.js](file:///Users/user/company-profile/src/data/initialData.js). Cocok untuk deployment statis ultra-cepat.
* **Desain Responsif & Mobile Safe Area:** Tampilan konsisten di perangkat Mobile, Tablet, maupun Desktop dengan antarmuka elegan modern serta kompensasi ruang bawah otomatis pada tampilan seluler.

---

## 📂 Struktur Direktori

```text
company-profile/
├── public/
│   ├── _redirects          # Konfigurasi rewrite SPA untuk Netlify
│   ├── favicon.svg         # Ikon situs web
│   ├── robots.txt          # Panduan indeksasi mesin pencari
│   └── sitemap.xml         # Peta situs SEO
├── src/
│   ├── __tests__/          # Automated Test Suite (Vitest + RTL)
│   │   └── app.test.jsx
│   ├── components/         # Komponen UI Reusable
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── MobileBottomNav.jsx # Navigasi Bawah Khusus Android/Mobile (4 Menu)
│   │   └── Navbar.jsx
│   ├── context/            # Global State Management
│   │   └── StoreContext.jsx
│   ├── data/               # Data Inisialisasi Perusahaan & Katalog
│   │   └── initialData.js
│   ├── lib/                # Layanan Integrasi Pihak Ketiga
│   │   └── email.js        # Klien EmailJS untuk Notifikasi Inquiry
│   ├── pages/              # Halaman Aplikasi
│   │   ├── About.jsx
│   │   ├── Admin.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Products.jsx
│   │   └── Services.jsx
│   ├── App.jsx             # Routing Utama (React Router)
│   ├── i18n.jsx            # Sistem Multi-bahasa (ID/EN)
│   ├── index.css           # Sistem Style CSS Modular
│   └── main.jsx            # Entry Point Aplikasi
├── .env.example            # Contoh Template Environment Variable
├── BRD_Nexflux_Website.md  # Dokumen Spesifikasi Kebutuhan Bisnis (BRD)
├── CHECKLIST_SDLC.md       # Matriks Pelacakan SDLC & Implementasi
├── package.json            # Konfigurasi Dependensi & Skrip
└── vercel.json             # Konfigurasi Rewrite SPA untuk Vercel
```

---

## 🚀 Panduan Memulai (Quickstart)

### 1. Prasyarat Sistem
Pastikan sistem Anda telah memasang:
* **Node.js** versi 18.x atau 20.x ke atas
* **npm** (atau pnpm/yarn)

### 2. Instalasi Dependensi
Jalankan perintah berikut di direktori root proyek:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan Lokal
```bash
npm run dev
```
Aplikasi akan dapat diakses secara lokal melalui browser di: `http://localhost:5173`.

---

## ⚙️ Konfigurasi Environment (`.env`)

Salin file `.env.example` menjadi `.env` jika Anda ingin mengaktifkan kustomisasi kata sandi Admin atau integrasi pengiriman email notifikasi secara riil:

```bash
cp .env.example .env
```

Contoh konfigurasi variabel di `.env`:
```env
# Kredensial Keamanan Admin Dashboard
VITE_ADMIN_PASS=admin123

# Integrasi Pengiriman Email Inquiry (EmailJS - Opsional)
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=public_xxxxx
```

> **Catatan:** Jika variabel `VITE_EMAILJS_*` belum diisi, pengiriman notifikasi inquiry akan menggunakan sistem fallback (pencatatan ke dalam *local store* admin) tanpa menyebabkan error pada pengguna.

---

## 🔐 Akses Dashboard Admin

1. Buka halaman Admin pada URL: `/admin` (atau klik tautan **Admin** di footer halaman web).
2. Masukkan kata sandi akses:
   - **Password Default:** `admin123` (atau sesuai nilai `VITE_ADMIN_PASS` pada `.env` Anda).
3. Anda dapat mengelola:
   - **Produk & Kategori:** Tambah produk baru, ubah deskripsi ID/EN, atur gambar dan spesifikasi.
   - **Berita/Artikel:** Publikasi kabar atau artikel edukasi ekspor.
   - **Inquiry:** Memeriksa pesan masuk dari calon pembeli internasional dan merubah status prospek.
   - **Subscriber:** Daftar email pendaftar *newsletter*.

---

## 🧪 Pengujian (Automated Testing)

Proyek ini menggunakan **Vitest** dan **React Testing Library** untuk memvalidasi alur kerja aplikasi, rute halaman, rendering komponen, dan pencarian produk.

Untuk menjalankan *unit & integration test*:
```bash
# Menjalankan seluruh test case satu kali
npm test

# Menjalankan test dalam mode watch (selama pengembangan)
npm run test:watch
```

---

## 📦 Panduan Deployment

Proyek ini menghasilkan *Single Page Application* (SPA) statis yang sangat cepat dan siap di-deploy ke berbagai platform *hosting cloud*:

### 1. Membangun Berkas Produksi
```bash
npm run build
```
Hasil build produksi akan tersimpan di dalam direktori `dist/`.

### 2. Deployment ke Vercel
* Proyek ini sudah menyertakan file [vercel.json](file:///Users/user/company-profile/vercel.json) yang otomatis mengonfigurasi *SPA routing rewrite* (`/* -> /index.html`).
* Cukup hubungkan repositori Git Anda ke proyek Vercel baru dan tekan **Deploy**.

### 3. Deployment ke Netlify
* Proyek ini sudah menyertakan file `public/_redirects` berisi aturan `/* /index.html 200`.
* Hubungkan ke Netlify dengan *build command*: `npm run build` dan *publish directory*: `dist`.

---

## 📚 Dokumentasi SDLC & BRD

* **Spesifikasi Bisnis Lengkap:** Lihat file [BRD_Nexflux_Website.md](file:///Users/user/company-profile/BRD_Nexflux_Website.md) untuk memahami latar belakang bisnis, cakupan fungsional, persona pengguna, dan persyaratan teknis.
* **Status Pelacakan Implementasi:** Lihat file [CHECKLIST_SDLC.md](file:///Users/user/company-profile/CHECKLIST_SDLC.md) untuk melihat pemetaan FR/NFR terhadap kode sumber serta rekam jejak penyelesaian proyek.

---
*Copyright © 2026 PT Nexflux Indonesia Abadi. All Rights Reserved.*
