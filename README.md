# Banyuwangi Marketplace - UAS Praktikum Interoperabilitas

Proyek JSON Parsing & Data Integration untuk mata kuliah Interoperabilitas di Politeknik Negeri Banyuwangi.

## 📁 Struktur Folder

```
/banyuwangi-marketplace/
│
├── vendors/
│   ├── vendorA/
│   │   └── vendorA.js           (Simulasi data Vendor A)
│   ├── vendorB/
│   │   └── vendorB.js           (Simulasi data Vendor B)
│   └── vendorC/
│       └── vendorC.js           (Simulasi data Vendor C - Nested)
│
├── integrator/
│   └── integrator.js            (Logic integrasi & normalisasi data)
│
├── data/
│   └── output.json              (Output hasil integrasi)
│
├── index.js                     (Entry point aplikasi)
├── package.json                 (Konfigurasi project)
└── README.md                    (File ini)
```

## 👥 Peran Setiap Folder

### `vendors/` - Direktori Vendor
Setiap vendor memiliki folder sendiri yang berisi file data mereka:

- **vendorA/vendorA.js**: Data produk dari Vendor A
  - Format: Array of objects
  - Hanya berisi simulasi data, tanpa logic integrasi
  
- **vendorB/vendorB.js**: Data produk dari Vendor B
  - Format: Array of objects (dengan nama field berbeda)
  - Hanya berisi simulasi data, tidak parse data vendor lain

- **vendorC/vendorC.js**: Data produk dari Vendor C
  - Format: Nested object structure
  - Hanya berisi simulasi data, tanpa perhitungan harga

### `integrator/` - Lead Integrator
- **integrator.js**: Logic utama integrasi
  - Mengimpor data dari semua vendor
  - Normalisasi format data ke format standar
  - Kombinasi & pengolahan data
  - Hitung summary dan breakdown

### `data/` - Output Directory
- **output.json**: File output hasil integrasi
  - Berisi data terintegrasi dalam format JSON
  - Diisi otomatis oleh aplikasi
  - JANGAN diisi manual

### Root Level
- **index.js**: Entry point aplikasi
  - Memanggil integrator untuk integrasi
  - Tampilkan hasil ke console
  - Simpan output ke data/output.json

- **package.json**: Konfigurasi NPM project

## ⚙️ Cara Menjalankan

1. Pastikan Node.js sudah terinstall di komputer Anda

2. Buka terminal/command prompt di folder project

3. Jalankan perintah:
   ```bash
   npm start
   ```
   atau
   ```bash
   node index.js
   ```

4. Output akan ditampilkan di console dan disimpan ke `data/output.json`

## 📋 Aturan Teknis

- ✅ Menggunakan CommonJS (require/module.exports)
- ✅ Fokus pada JSON parsing & data integration
- ✅ Tanpa database
- ✅ Tanpa framework berat (Express, Nest, dsb)
- ✅ Kode mudah dibaca untuk dosen

## 🔒 Batasan & Isolasi

- ❌ Vendor TIDAK BOLEH mengakses folder integrator
- ✅ Integrator BOLEH mengakses folder vendor
- ❌ Tidak ada logic bisnis di vendor file
- ✅ Semua logic bisnis hanya di integrator.js
- ❌ Vendor file hanya simulasi data saja

## 📝 Catatan

Setiap anggota tim dapat fokus pada peran masing-masing:
- **Vendor A, B, C**: Hanya perlu mengisi file `vendorX.js` dengan data mereka
- **Lead Integrator**: Mengelola logic integrasi di `integrator.js`
- Struktur sudah memastikan isolasi dan kolaborasi yang baik

---

**Dibuat untuk UAS Praktikum Interoperabilitas**
**Politeknik Negeri Banyuwangi**
