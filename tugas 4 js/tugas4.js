//class pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null; // default belum sewa
  }

  //metode untuk mencatat transaksi penyewaan kendaraan
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(`${this.nama} menyewa kendaraan: ${kendaraan}`);
  }

  //menampilkan info pelanggan
  infoPelanggan() {
    return `Nama: ${this.nama}, Telepon: ${this.nomorTelepon}, Kendaraan: ${
      this.kendaraanDisewa ? this.kendaraanDisewa : "Belum sewa"
    }`;
  }
}
//sistem manajemen transportasi
class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanDaftarPelanggan() {
    console.log("\nDaftar Pelanggan yang Sedang Menyewa Kendaraan:");
    this.daftarPelanggan.forEach((pelanggan, index) => {
      console.log(`${index + 1}. ${pelanggan.infoPelanggan()}`);
    });
  }
}

//simulasi
let pelanggan1 = new Pelanggan("Chanyeol", "08123456789");
let pelanggan2 = new Pelanggan("Lucas", "08987654321");

pelanggan1.sewaKendaraan("Mobil - Mercedes-Benz S-Class");
pelanggan2.sewaKendaraan("Motor - Ducati Panigale V4");

let sistem = new SistemTransportasi();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

sistem.tampilkanDaftarPelanggan();
