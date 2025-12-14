/**
 * Entry Point Aplikasi Banyuwangi Marketplace
 * 
 * File ini adalah entry point utama aplikasi
 * Fungsi:
 * - Memanggil integrator untuk mengintegrasikan data dari semua vendor
 * - Menampilkan output ke console
 * - Menyimpan output ke file /data/output.json
 */

const fs = require('fs');
const path = require('path');
const { integrateData } = require('./integrator/integrator.js');

/**
 * Main function - jalankan integrasi dan simpan output
 */
function main() {
  try {
    console.log('mulai integrasi data dari semua vendor...\n');

    // Jalankan integrasi
    const result = integrateData();

    // Tampilkan hasil ke console
    console.log('Integrasi selesai!\n');
    console.log('Ringkasan:');
    console.log(`   - Total Produk: ${result.totalProducts}`);
    console.log(`   - Total Nilai: Rp ${result.totalValue.toLocaleString('id-ID')}`);
    console.log(`   - Jumlah Vendor: ${result.summary.vendorCount}`);
    console.log('\n Breakdown Kategori:');
    Object.entries(result.summary.categoryBreakdown).forEach(([category, count]) => {
      console.log(`   - ${category}: ${count} produk`);
    });
    console.log('\nBreakdown Vendor:');
    Object.entries(result.summary.vendorBreakdown).forEach(([vendor, count]) => {
      console.log(`   - ${vendor}: ${count} produk`);
    });

    // Simpan ke file output.json
    const outputPath = path.join(__dirname, 'data', 'output.json');
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
    console.log(`\nOutput disimpan ke: ${outputPath}`);

    console.log('\n Aplikasi selesai!\n');

  } catch (error) {
    console.error(' Error saat menjalankan aplikasi:', error.message);
    process.exit(1);
  }
}

// Jalankan aplikasi
main();
