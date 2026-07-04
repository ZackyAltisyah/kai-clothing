/* ==========================================
   AMBIL DATA
========================================== */

const keranjang =
JSON.parse(localStorage.getItem("keranjang")) || [];

const checkoutData =
JSON.parse(localStorage.getItem("checkout")) || {};


/* ==========================================
   ELEMEN HTML
========================================== */

const nama =
document.getElementById("nama");

const hp =
document.getElementById("hp");

const alamat =
document.getElementById("alamat");

const kurir =
document.getElementById("kurir");

const pembayaran =
document.getElementById("pembayaran");

const daftarProduk =
document.getElementById("daftar-produk");

const totalProduk =
document.getElementById("total-produk");

const subtotal =
document.getElementById("subtotal");

const totalBayar =
document.getElementById("total-bayar");

const invoice =
document.getElementById("invoice");

/* ==========================================
   TAMPILKAN DATA PENERIMA
========================================== */

nama.innerText =
checkoutData.nama || "-";

hp.innerText =
checkoutData.hp || "-";

alamat.innerText =
checkoutData.alamat || "-";

kurir.innerText =
checkoutData.kurir || "-";

pembayaran.innerText =
checkoutData.pembayaran || "-";

/* ==========================================
   TAMPILKAN PRODUK
========================================== */

let total = 0;

let jumlahProduk = 0;

daftarProduk.innerHTML = "";

keranjang.forEach(function(produk){

    const harga = Number(
        produk.harga
            .replace("Rp","")
            .replace(/\./g,"")
    );

    const subtotalProduk = harga * produk.jumlah;

    total += subtotalProduk;

    jumlahProduk += produk.jumlah;

    daftarProduk.innerHTML += `

    <div class="produk-pembayaran">

        <img src="${produk.gambar}" alt="${produk.nama}">

        <div class="produk-info">

            <h4>${produk.nama}</h4>

            <p>Ukuran : ${produk.ukuran}</p>

            <p>Jumlah : ${produk.jumlah}</p>

            <p>Harga : ${produk.harga}</p>

            <h4 class="subtotal">

                Subtotal :
                Rp${subtotalProduk.toLocaleString("id-ID")}

            </h4>

        </div>

    </div>

    `;

});

/* ==========================================
   HITUNG TOTAL
========================================== */

const ongkir = 15000;

totalProduk.innerText =
jumlahProduk;

subtotal.innerText =
"Rp" + total.toLocaleString("id-ID");

totalBayar.innerText =
"Rp" + (total + ongkir).toLocaleString("id-ID");

/* ==========================================
   NOMOR INVOICE
========================================== */

const nomorInvoice =
"INV-" +
Date.now().toString().slice(-6);

invoice.innerText = nomorInvoice;


/* ==========================================
   TOMBOL KONFIRMASI
========================================== */

const btnKonfirmasi =
document.getElementById("btn-konfirmasi");

btnKonfirmasi.addEventListener("click", function(){

    if(confirm("Apakah pembayaran sudah benar?")){

/* ==========================================
   SIAPKAN DATA PRODUK UNTUK TRANSAKSI
========================================== */

const produkTransaksi =
keranjang.map(function(produk){

    const hargaAngka =
    Number(
        String(produk.harga || 0)
        .replace("Rp", "")
        .replace(/\./g, "")
        .trim()
    );


    return {

        id: produk.id || "",

        nama: produk.nama || "Produk",

        gambar: produk.gambar || "",

        ukuran: produk.ukuran || "-",

        jumlah: Number(produk.jumlah || 1),

        harga: hargaAngka

    };

});


/* ==========================================
   BUAT DATA TRANSAKSI
========================================== */

const transaksi = {

    invoice: nomorInvoice,

    nama: checkoutData.nama,

    hp: checkoutData.hp,

    alamat: checkoutData.alamat,

    kurir: checkoutData.kurir,

    pembayaran: checkoutData.pembayaran,

    produk: produkTransaksi,

    subtotal: total,

    ongkir: ongkir,

    total: total + ongkir,

    status: "Diproses"

};

/* ==========================================
   SIMPAN TRANSAKSI UNTUK PENGIRIMAN
========================================== */

/*
Transaksi terakhir tetap disimpan dengan key "transaksi"
karena pengiriman.js Anda membaca data tersebut.
*/

localStorage.setItem(
    "transaksi",
    JSON.stringify(transaksi)
);


/* ==========================================
   SIMPAN TRANSAKSI KE DASHBOARD ORDER
========================================== */

/*
Ambil daftar transaksi yang sebelumnya sudah tersimpan.
Jika belum ada transaksi, gunakan array kosong.
*/

let daftarTransaksi =
JSON.parse(
    localStorage.getItem("daftarTransaksi")
) || [];


/*
Tambahkan transaksi baru ke daftar pesanan.
*/

daftarTransaksi.push(transaksi);


/*
Simpan kembali seluruh daftar transaksi.
*/

localStorage.setItem(
    "daftarTransaksi",
    JSON.stringify(daftarTransaksi)
);


/* ==========================================
   HAPUS DATA CHECKOUT
========================================== */

localStorage.removeItem("keranjang");

localStorage.removeItem("checkout");


/* ==========================================
   PESAN BERHASIL
========================================== */

alert("Pembayaran berhasil dikonfirmasi!");

window.location.href =
"pengiriman.html";

    }

});