// Data awal website PT Nexflux Indonesia Abadi
// Semua konten bilingual: _id (Bahasa Indonesia), _en (English)

export const company = {
  name: 'PT Nexflux Indonesia Abadi',
  tagline_id: 'Mitra Ekspor Terpercaya Indonesia',
  tagline_en: 'Your Trusted Indonesia Export Partner',
  founded: 2015,
  hq_id: 'Jakarta, Indonesia',
  hq_en: 'Jakarta, Indonesia',
  branches_id: 'Surabaya, Batam',
  branches_en: 'Surabaya, Batam',
  markets_id: 'Asia, Timur Tengah, Eropa, Amerika Utara',
  markets_en: 'Asia, Middle East, Europe, North America',
  vision_id:
    'Menjadi mitra ekspor terpercaya yang menghubungkan produk unggulan Indonesia ke pasar global.',
  vision_en:
    'To be a trusted export partner connecting Indonesia’s finest products to the global market.',
  mission_id: [
    'Menyediakan produk berkualitas dengan standar internasional.',
    'Memberikan layanan ekspor end-to-end bagi buyer global.',
    'Membangun hubungan jangka panjang yang saling menguntungkan.'
  ],
  mission_en: [
    'Deliver quality products that meet international standards.',
    'Provide end-to-end export services for global buyers.',
    'Build long-term, mutually beneficial partnerships.'
  ],
  about_id:
    'PT Nexflux Indonesia Abadi adalah perusahaan eksportir Indonesia yang berdiri sejak 2015. Kami menghubungkan produsen dan komoditas unggulan Tanah Air dengan buyer internasional melalui layanan ekspor profesional, dokumentasi lengkap, dan jaminan kualitas.',
  about_en:
    'PT Nexflux Indonesia Abadi is an Indonesian export company established in 2015. We connect local producers and premium commodities with international buyers through professional export services, complete documentation, and quality assurance.',
  email: 'export@nexflux.id',
  phone: '+62 21 5000 0000',
  address_id: 'Jl. Industri Raya No. 88, Jakarta Timur, Indonesia',
  address_en: 'Jl. Industri Raya No. 88, East Jakarta, Indonesia',
  maps: 'https://www.google.com/maps/search/Jakarta+Indonesia',
  mapsEmbed:
    'https://www.google.com/maps?q=Jakarta,Indonesia&output=embed',
  org_id: [
    { role: 'Direktur Utama', name: 'Bapak A. Nexflux' },
    { role: 'Head of Export', name: 'Ibu S. Abadi' },
    { role: 'Sales & Marketing International', name: 'Tim Export' },
    { role: 'Quality Control & Compliance', name: 'Tim QC' },
    { role: 'Logistics & Documentation', name: 'Tim Logistik' }
  ],
  org_en: [
    { role: 'President Director', name: 'Mr. A. Nexflux' },
    { role: 'Head of Export', name: 'Ms. S. Abadi' },
    { role: 'International Sales & Marketing', name: 'Export Team' },
    { role: 'Quality Control & Compliance', name: 'QC Team' },
    { role: 'Logistics & Documentation', name: 'Logistics Team' }
  ]
}

export const categories = [
  { id: 'agri', name_id: 'Agrikultur & Komoditas', name_en: 'Agriculture & Commodities', slug: 'agri' },
  { id: 'marine', name_id: 'Maritim & Perikanan', name_en: 'Marine & Fisheries', slug: 'marine' },
  { id: 'craft', name_id: 'Handicraft & Furniture', name_en: 'Handicraft & Furniture', slug: 'craft' },
  { id: 'industrial', name_id: 'Industrial & Manufactured', name_en: 'Industrial & Manufactured', slug: 'industrial' },
  { id: 'mineral', name_id: 'Mineral & Bahan Baku', name_en: 'Mineral & Raw Material', slug: 'mineral' }
]

export const products = [
  {
    id: 'p1',
    categoryId: 'agri',
    name_id: 'Kelapa Premium (Desiccated)',
    name_en: 'Premium Coconut (Desiccated)',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&q=80',
    spec_id: 'Moisture < 3%, Grade A, 25kg/bal',
    spec_en: 'Moisture < 3%, Grade A, 25kg/bale',
    moq_id: '1x 20ft Container',
    moq_en: '1x 20ft Container',
    cert_id: 'SNI, HALAL, ISO 9001',
    cert_en: 'SNI, HALAL, ISO 9001',
    desc_id:
      'Kelapa kering premium untuk industri pangan dan bakery internasional dengan kualitas konsisten dan kemasan ekspor.',
    desc_en:
      'Premium dried coconut for international food and bakery industries with consistent quality and export-grade packaging.'
  },
  {
    id: 'p2',
    categoryId: 'agri',
    name_id: 'Kopi Arabika Gayo',
    name_en: 'Gayo Arabica Coffee',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
    spec_id: 'Green Bean, Grade 1, 60kg/karung',
    spec_en: 'Green Bean, Grade 1, 60kg/sack',
    moq_id: '5 Ton',
    moq_en: '5 Tons',
    cert_id: 'SNI, Organic (Optional)',
    cert_en: 'SNI, Organic (Optional)',
    desc_id:
      'Kopi arabika specialty dari dataran tinggi Gayo dengan cita rasa fruity dan aroma khas, siap ekspor.',
    desc_en:
      'Specialty arabica coffee from the Gayo highlands with fruity notes and a distinctive aroma, export ready.'
  },
  {
    id: 'p3',
    categoryId: 'marine',
    name_id: 'Rumput Laut Kering (Eucheuma)',
    name_en: 'Dried Seaweed (Eucheuma)',
    image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&q=80',
    spec_id: 'Kadar air < 35%, Food Grade',
    spec_en: 'Moisture < 35%, Food Grade',
    moq_id: '20 Ton',
    moq_en: '20 Tons',
    cert_id: 'HACCP, HALAL',
    cert_en: 'HACCP, HALAL',
    desc_id:
      'Rumput laut kering untuk industri karaginan dan pangan, dipasok dari perairan Indonesia.',
    desc_en:
      'Dried seaweed for carrageenan and food industries, sourced from Indonesian waters.'
  },
  {
    id: 'p4',
    categoryId: 'marine',
    name_id: 'Ikan Tuna Beku (Loins)',
    name_en: 'Frozen Tuna Loins',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80',
    spec_id: 'IQF, -18C, Grade A',
    spec_en: 'IQF, -18C, Grade A',
    moq_id: '1x 40ft Reefer',
    moq_en: '1x 40ft Reefer',
    cert_id: 'HACCP, ISO 22000',
    cert_en: 'HACCP, ISO 22000',
    desc_id:
      'Tuna loins beku kualitas premium untuk pasar restoran dan ritel internasional.',
    desc_en: 'Premium frozen tuna loins for international restaurant and retail markets.'
  },
  {
    id: 'p5',
    categoryId: 'craft',
    name_id: 'Furniture Rotan Anyaman',
    name_en: 'Woven Rattan Furniture',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80',
    spec_id: 'Handmade, Natural Finish',
    spec_en: 'Handmade, Natural Finish',
    moq_id: '100 Unit',
    moq_en: '100 Units',
    cert_id: 'FSC (Optional), ISO 9001',
    cert_en: 'FSC (Optional), ISO 9001',
    desc_id:
      'Furniture rotan anyaman tangan dengan desain modern untuk pasar home decor global.',
    desc_en: 'Hand-woven rattan furniture with modern designs for the global home decor market.'
  },
  {
    id: 'p6',
    categoryId: 'craft',
    name_id: 'Kerajinan Kayu Ukir',
    name_en: 'Hand-carved Wood Craft',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&q=80',
    spec_id: 'Solid Wood, Custom Design',
    spec_en: 'Solid Wood, Custom Design',
    moq_id: '200 Unit',
    moq_en: '200 Units',
    cert_id: 'V-Legal, SVLK',
    cert_en: 'V-Legal, SVLK',
    desc_id:
      'Kerajinan kayu ukiran tradisional Indonesia dengan finishing ekspor berkualitas tinggi.',
    desc_en: 'Traditional Indonesian hand-carved woodcraft with high-quality export finishing.'
  },
  {
    id: 'p7',
    categoryId: 'industrial',
    name_id: 'Komponen Tekstil & Kemasan',
    name_en: 'Textile Components & Packaging',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    spec_id: 'Custom Spec, Bulk',
    spec_en: 'Custom Spec, Bulk',
    moq_id: 'Negotiable',
    moq_en: 'Negotiable',
    cert_id: 'ISO 9001',
    cert_en: 'ISO 9001',
    desc_id:
      'Komponen tekstil dan kemasan industri dengan spesifikasi kustom untuk buyer manufaktur.',
    desc_en:
      'Textile components and industrial packaging with custom specifications for manufacturing buyers.'
  },
  {
    id: 'p8',
    categoryId: 'mineral',
    name_id: 'Pasir Silika Industri',
    name_en: 'Industrial Silica Sand',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80',
    spec_id: 'SiO2 > 99%, Mesh 30-100',
    spec_en: 'SiO2 > 99%, Mesh 30-100',
    moq_id: '25 Ton',
    moq_en: '25 Tons',
    cert_id: 'ISO 9001',
    cert_en: 'ISO 9001',
    desc_id:
      'Pasir silika murni untuk industri kaca, keramik, dan foundry dengan konsistensi tinggi.',
    desc_en:
      'Pure silica sand for glass, ceramic, and foundry industries with high consistency.'
  }
]

export const services = [
  {
    id: 's1',
    icon: '🌐',
    title_id: 'Ekspor End-to-End',
    title_en: 'End-to-End Export',
    desc_id: 'Penanganan dari sourcing, quality control, hingga pengiriman ke pelabuhan tujuan.',
    desc_en: 'Handling from sourcing, quality control, to delivery at the destination port.'
  },
  {
    id: 's2',
    icon: '📑',
    title_id: 'Dokumentasi & Customs',
    title_en: 'Documentation & Customs',
    desc_id: 'Penyediaan dokumen ekspor, COO/FTA, dan proses kepabeanan.',
    desc_en: 'Export documents, COO/FTA, and customs clearance handling.'
  },
  {
    id: 's3',
    icon: '✅',
    title_id: 'Quality Assurance',
    title_en: 'Quality Assurance',
    desc_id: 'Inspeksi dan sertifikasi kualitas sebelum pengiriman (pre-shipment).',
    desc_en: 'Inspection and quality certification before shipment (pre-shipment).'
  },
  {
    id: 's4',
    icon: '🚢',
    title_id: 'Logistik & Freight',
    title_en: 'Logistics & Freight',
    desc_id: 'Koordinasi freight laut/udara dan asuransi pengiriman internasional.',
    desc_en: 'Sea/air freight coordination and international shipping insurance.'
  }
]

export const certifications = [
  { id: 'c1', name: 'NIB & Izin Ekspor (IT-Ekspor)', icon: '🏛️' },
  { id: 'c2', name: 'ISO 9001:2015', icon: '📜' },
  { id: 'c3', name: 'SNI Product Compliance', icon: '✔️' },
  { id: 'c4', name: 'Sertifikat Halal', icon: '🕌' },
  { id: 'c5', name: 'HACCP / ISO 22000', icon: '🥗' },
  { id: 'c6', name: 'FTA / COO Documentation', icon: '🌍' }
]

export const articles = [
  {
    id: 'a1',
    title_id: 'Tren Ekspor Komoditas Indonesia 2026',
    title_en: 'Indonesia Commodity Export Trends 2026',
    cover: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    date: '2026-01-15',
    body_id:
      'Permintaan global terhadap produk agrikultur dan mineral Indonesia terus meningkat seiring pemulihan ekonomi. Nexflux siap menjadi jembatan bagi buyer internasional.',
    body_en:
      'Global demand for Indonesian agriculture and mineral products keeps rising with economic recovery. Nexflux is ready to bridge international buyers.'
  },
  {
    id: 'a2',
    title_id: 'Standar Kualitas Ekspor yang Perlu Anda Tahu',
    title_en: 'Export Quality Standards You Should Know',
    cover: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    date: '2026-03-02',
    body_id:
      'Memahami sertifikasi seperti ISO, HACCP, dan HALAL sangat penting untuk memasuki pasar internasional dengan lancar.',
    body_en:
      'Understanding certifications like ISO, HACCP, and HALAL is essential to enter international markets smoothly.'
  }
]

// Spek standar internasional per produk (ditampilkan di detail & Spec Sheet PDF)
export const productSpecs = {
  p1: [
    { label_id: 'Tingkat Kadar Air', label_en: 'Moisture Content', value: '< 3%' },
    { label_id: 'Tipe Potongan', label_en: 'Cutting Type', value: 'Flakes / Shreds / Granulated' },
    { label_id: 'Ketebalan', label_en: 'Thickness', value: '1–3 mm' },
    { label_id: 'Grade', label_en: 'Grade', value: 'Premium A' },
    { label_id: 'Kadar Lemak', label_en: 'Fat Content', value: '60–65%' },
    { label_id: 'Kemasan', label_en: 'Packaging', value: '25 kg kraft bag, vacuum sealed' },
    { label_id: 'Masa Simpan', label_en: 'Shelf Life', value: '12 months' },
    { label_id: 'Standar', label_en: 'Standard', value: 'SNI, HALAL, ISO 9001' }
  ],
  p2: [
    { label_id: 'Jenis', label_en: 'Type', value: 'Green Bean' },
    { label_id: 'Grade', label_en: 'Grade', value: 'Grade 1 (Specialty)' },
    { label_id: 'Kadar Air', label_en: 'Moisture', value: '< 12%' },
    { label_id: 'Cacat', label_en: 'Defects', value: '< 5 (SCA)' },
    { label_id: 'Kemasan', label_en: 'Packaging', value: '60 kg GrainPro / jute sack' },
    { label_id: 'Ketinggian', label_en: 'Altitude', value: '1,200–1,500 masl' },
    { label_id: 'Masa Simpan', label_en: 'Shelf Life', value: '12 months' },
    { label_id: 'Standar', label_en: 'Standard', value: 'SNI' }
  ],
  p3: [
    { label_id: 'Kadar Air', label_en: 'Moisture', value: '< 35%' },
    { label_id: 'Jenis', label_en: 'Type', value: 'Cottonii / Spinosum' },
    { label_id: 'Kemasan', label_en: 'Packaging', value: '25 kg PP bag' },
    { label_id: 'Masa Simpan', label_en: 'Shelf Life', value: '6 months' },
    { label_id: 'Standar', label_en: 'Standard', value: 'HACCP, HALAL' }
  ],
  p4: [
    { label_id: 'Tipe', label_en: 'Type', value: 'IQF Loins' },
    { label_id: 'Suhu', label_en: 'Temperature', value: '-18°C' },
    { label_id: 'Grade', label_en: 'Grade', value: 'A (Sashimi-grade available)' },
    { label_id: 'Kemasan', label_en: 'Packaging', value: '10 kg master carton' },
    { label_id: 'Masa Simpan', label_en: 'Shelf Life', value: '24 months frozen' },
    { label_id: 'Standar', label_en: 'Standard', value: 'HACCP, ISO 22000' }
  ],
  p5: [
    { label_id: 'Material', label_en: 'Material', value: 'Natural rattan (Manau/Cane)' },
    { label_id: 'Finishing', label_en: 'Finish', value: 'Natural / Lacquer' },
    { label_id: 'Custom', label_en: 'Custom', value: 'Yes (OEM/ODM)' },
    { label_id: 'Kemasan', label_en: 'Packaging', value: 'Corrugated carton, KD' },
    { label_id: 'Standar', label_en: 'Standard', value: 'FSC optional, ISO 9001' }
  ],
  p6: [
    { label_id: 'Material', label_en: 'Material', value: 'Solid teak / mahogany' },
    { label_id: 'Finishing', label_en: 'Finish', value: 'Varnish / natural oil' },
    { label_id: 'Custom', label_en: 'Custom', value: 'Yes' },
    { label_id: 'Kemasan', label_en: 'Packaging', value: 'Bubble wrap + carton' },
    { label_id: 'Standar', label_en: 'Standard', value: 'V-Legal, SVLK' }
  ],
  p7: [
    { label_id: 'Spesifikasi', label_en: 'Specification', value: 'Custom per buyer' },
    { label_id: 'MOQ', label_en: 'MOQ', value: 'Negotiable' },
    { label_id: 'Standar', label_en: 'Standard', value: 'ISO 9001' }
  ],
  p8: [
    { label_id: 'SiO2', label_en: 'SiO2', value: '> 99%' },
    { label_id: 'Mesh', label_en: 'Mesh', value: '30–100' },
    { label_id: 'Fe2O3', label_en: 'Fe2O3', value: '< 0.05%' },
    { label_id: 'Kemasan', label_en: 'Packaging', value: '50 kg PP / jumbo bag' },
    { label_id: 'Standar', label_en: 'Standard', value: 'ISO 9001' }
  ]
}

// Lampirkan specs ke produk
products.forEach((p) => {
  p.specs = productSpecs[p.id] || []
})

// Alur kerja ekspor (hulu -> hilir)
export const exportProcess = [
  {
    id: 'step1',
    icon: '🌱',
    title_id: 'Sourcing',
    title_en: 'Sourcing',
    desc_id: 'Menyeleksi petani/pabrik terverifikasi & negosiasi harga.',
    desc_en: 'Select verified farmers/factories & negotiate pricing.'
  },
  {
    id: 'step2',
    icon: '🔍',
    title_id: 'Quality Control',
    title_en: 'Quality Control',
    desc_id: 'Inspeksi & uji lab pra-pengiriman sesuai standar internasional.',
    desc_en: 'Pre-shipment lab test & inspection to international standards.'
  },
  {
    id: 'step3',
    icon: '📦',
    title_id: 'Packaging',
    title_en: 'Packaging',
    desc_id: 'Pengemasan ekspor & pelabelan sesuai permintaan buyer.',
    desc_en: 'Export-grade packing & labelling per buyer requirement.'
  },
  {
    id: 'step4',
    icon: '📑',
    title_id: 'Dokumentasi & Custom',
    title_en: 'Documentation & Customs',
    desc_id: 'Penyediaan COO/FTA, invoice, dan proses kepabeanan.',
    desc_en: 'COO/FTA, invoice, and customs clearance handling.'
  },
  {
    id: 'step5',
    icon: '🚢',
    title_id: 'Shipping',
    title_en: 'Shipping',
    desc_id: 'Koordinasi freight, asuransi, hingga tiba di pelabuhan tujuan.',
    desc_en: 'Freight & insurance coordination to destination port.'
  }
]

// Ketentuan pembayaran internasional
export const paymentTerms = [
  { id: 'pt1', icon: '🏦', name_id: 'L/C (Letter of Credit)', name_en: 'L/C (Letter of Credit)', desc_id: 'Pembayaran aman via bank, paling umum untuk shipment besar.', desc_en: 'Secure bank-backed payment, common for large shipments.' },
  { id: 'pt2', icon: '💱', name_id: 'T/T (Telegraphic Transfer)', name_en: 'T/T (Telegraphic Transfer)', desc_id: 'Transfer bank: T/T 30% DP + 70% sebelum/pasca BL.', desc_en: 'Bank transfer: T/T 30% DP + 70% before/after BL.' },
  { id: 'pt3', icon: '🤝', name_id: 'Advanced Payment', name_en: 'Advanced Payment', desc_id: 'Untuk order percobaan/kecil dengan trust tinggi.', desc_en: 'For trial/small orders with high trust.' }
]

// Galeri operasional (ganti dengan foto asli perusahaan)
export const gallery = [
  { id: 'g1', type: 'image', src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80', caption_id: 'Aktivitas Gudang', caption_en: 'Warehouse Activity' },
  { id: 'g2', type: 'image', src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80', caption_id: 'Loading Kontainer di Pelabuhan', caption_en: 'Container Loading at Port' },
  { id: 'g3', type: 'image', src: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=800&q=80', caption_id: 'Sortir & Quality Control', caption_en: 'Sorting & Quality Control' },
  { id: 'g4', type: 'image', src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', caption_id: 'Dokumen Sertifikasi (ISO/HACCP)', caption_en: 'Certification Documents (ISO/HACCP)' },
  { id: 'g5', type: 'image', src: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=800&q=80', caption_id: 'Tim Ekspor & Dokumentasi', caption_en: 'Export & Documentation Team' },
  { id: 'g6', type: 'image', src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80', caption_id: 'Kapal Pengiriman Ekspor', caption_en: 'Export Vessel' }
]
