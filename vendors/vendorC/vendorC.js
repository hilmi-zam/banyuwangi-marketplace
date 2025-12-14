/**
 * Vendor C - Simulasi Data Produk dari Vendor C (Nested Object)
 * 
 * File ini hanya berisi data produk Vendor C dengan struktur nested
 * Tidak ada perhitungan harga final atau logic integrasi
 */

const vendorCData = {
  vendor_info: {
    name: 'Vendor C',
    code: 'VC'
  },
  products: [
    {
      item: {
        code: 'VC-A01',
        title: 'SSD 512GB',
        details: {
          brand: 'Samsung',
          capacity: '512GB',
          type: 'NVMe'
        }
      },
      pricing: {
        amount: 750000,
        currency: 'IDR'
      },
      inventory: {
        available: 35,
        reserved: 5
      }
    },
    {
      item: {
        code: 'VC-A02',
        title: 'RAM DDR4 16GB',
        details: {
          brand: 'Corsair',
          capacity: '16GB',
          speed: '3200MHz'
        }
      },
      pricing: {
        amount: 1100000,
        currency: 'IDR'
      },
      inventory: {
        available: 28,
        reserved: 2
      }
    },
    {
      item: {
        code: 'VC-A03',
        title: 'Power Supply 650W',
        details: {
          brand: 'Seasonic',
          wattage: '650W',
          modular: true
        }
      },
      pricing: {
        amount: 950000,
        currency: 'IDR'
      },
      inventory: {
        available: 18,
        reserved: 0
      }
    }
  ]
};

module.exports = vendorCData;
