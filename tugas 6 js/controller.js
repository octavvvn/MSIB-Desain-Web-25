//controller.js
let data = require("./data.js");

//fungsi untuk melihat data
function lihatData() {
    console.log("=== Data Saat Ini ===");
    data.map((item, index) => {
        console.log(
            `${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat
            }, Email: ${item.email}`
        );
    });
}

//fungsi untuk menambah data (push minimal 2 data)
function tambahData() {
    data.push(
        { nama: "Luhan", umur: 35, alamat: "Beijing", email: "luhan@exo.com" },
        { nama: "Tao", umur: 32, alamat: "Qingdao", email: "tao@exo.com" }
    );
    console.log("Data berhasil ditambahkan!");
}

//fungsi untuk menghapus data berdasarkan index
function hapusData(index) {
    if (index >= 0 && index < data.length) {
        data.splice(index, 1);
        console.log("Data berhasil dihapus!");
    } else {
        console.log("Index tidak ditemukan!");
    }
}

//testing
lihatData(); // lihat data awal
tambahData(); // tambah 2 data
lihatData(); // lihat data setelah ditambah
hapusData(2); // hapus data ke-3
lihatData(); // lihat data setelah dihapus
