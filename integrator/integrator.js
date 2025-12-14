/**
 * Integrator - Logic Integrasi & Normalisasi Data dari Semua Vendor
 * 
 * File ini berisi:
 * - Import data dari vendorA, vendorB, vendorC
 * - Normalisasi format data dari berbagai vendor
 * - Logic pengolahan & integrasi data
 * - Tidak boleh diakses oleh file vendor
 */

const vendorAData = require('../vendors/vendorA/vendorA.js');
const vendorBData = require('../vendors/vendorB/vendorB.js');
const vendorCData = require('../vendors/vendorC/vendorC.js');

/**
 * Normalisasi data Vendor A ke format standar
 */
function normalizeVendorA(data) {
  return data.map(item => ({
    vendor: 'Vendor A',
    productId: item.id,
    productName: item.name,
    price: item.price,
    currency: item.currency,
    stock: item.stock,
    category: item.category
  }));
}

/**
 * Normalisasi data Vendor B ke format standar
 */
function normalizeVendorB(data) {
  return data.map(item => ({
    vendor: 'Vendor B',
    productId: item.product_id,
    productName: item.product_name,
    price: item.harga,
    currency: item.mata_uang,
    stock: item.jumlah_stok,
    category: item.kategori
  }));
}

/**
 * Normalisasi data Vendor C (nested) ke format standar
 */
function normalizeVendorC(data) {
  return data.products.map(item => ({
    vendor: 'Vendor C',
    productId: item.item.code,
    productName: item.item.title,
    price: item.pricing.amount,
    currency: item.pricing.currency,
    stock: item.inventory.available,
    category: 'Electronics',
    details: item.item.details
  }));
}

/**
 * Integrasi data dari semua vendor
 */
function integrateData() {
  const normalizedA = normalizeVendorA(vendorAData);
  const normalizedB = normalizeVendorB(vendorBData);
  const normalizedC = normalizeVendorC(vendorCData);

  // Gabungkan semua data
  const integratedData = [
    ...normalizedA,
    ...normalizedB,
    ...normalizedC
  ];

  return {
    timestamp: new Date().toISOString(),
    totalProducts: integratedData.length,
    totalValue: integratedData.reduce((sum, item) => sum + item.price, 0),
    currency: 'IDR',
    products: integratedData,
    summary: {
      vendorCount: 3,
      categoryBreakdown: getCategoryBreakdown(integratedData),
      vendorBreakdown: getVendorBreakdown(integratedData)
    }
  };
}

/**
 * Breakdown kategori produk
 */
function getCategoryBreakdown(products) {
  const breakdown = {};
  products.forEach(product => {
    const category = product.category;
    breakdown[category] = (breakdown[category] || 0) + 1;
  });
  return breakdown;
}

/**
 * Breakdown per vendor
 */
function getVendorBreakdown(products) {
  const breakdown = {};
  products.forEach(product => {
    const vendor = product.vendor;
    breakdown[vendor] = (breakdown[vendor] || 0) + 1;
  });
  return breakdown;
}

module.exports = {
  integrateData,
  normalizeVendorA,
  normalizeVendorB,
  normalizeVendorC
};
