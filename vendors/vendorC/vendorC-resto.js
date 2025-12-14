/**
 * Vendor C - Resto & Kuliner
 * Mahasiswa 3 - Data Makanan & Minuman
 */

const restoData = [
  {
    id: 501,
    details: {
      name: "Nasi Tempong",
      category: "Food"
    },
    pricing: {
      base_price: 20000,
      tax: 2000
    },
    stock: 50
  },
  {
    id: 502,
    details: {
      name: "Soto Ayam Banyuwangi",
      category: "Food"
    },
    pricing: {
      base_price: 25000,
      tax: 2500
    },
    stock: 45
  },
  {
    id: 503,
    details: {
      name: "Lumpia Goreng",
      category: "Food"
    },
    pricing: {
      base_price: 15000,
      tax: 1500
    },
    stock: 60
  }
];

module.exports = restoData;
