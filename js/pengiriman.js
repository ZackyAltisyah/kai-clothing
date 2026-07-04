/* ==========================================
   AMBIL DATA TRANSAKSI
========================================== */

const transaksi =
JSON.parse(localStorage.getItem("transaksi")) || {};


/* ==========================================
   ELEMEN HTML
========================================== */

const kirimNama =
document.getElementById("kirim-nama");

const kirimHp =
document.getElementById("kirim-hp");

const kirimAlamat =
document.getElementById("kirim-alamat");

const kirimKurir =
document.getElementById("kirim-kurir");

const kirimBayar =
document.getElementById("kirim-bayar");

const kirimInvoice =
document.getElementById("kirim-invoice");

const kirimTotalProduk =
document.getElementById("kirim-total-produk");

const kirimSubtotal =
document.getElementById("kirim-subtotal");

const kirimOngkir =
document.getElementById("kirim-ongkir");

const kirimTotal =
document.getElementById("kirim-total");

const estimasiKirim =
document.getElementById("estimasi-kirim");

const btnSelesai =
document.getElementById("btn-selesai");


/* ==========================================
   JIKA DATA TIDAK ADA
========================================== */

if(!transaksi.invoice){

    alert("Data transaksi tidak ditemukan.");

    window.location.href = "index.html";

}


/* ==========================================
   TAMPILKAN DATA PENERIMA
========================================== */

kirimNama.innerText =
transaksi.nama;

kirimHp.innerText =
transaksi.hp;

kirimAlamat.innerText =
transaksi.alamat;

kirimKurir.innerText =
transaksi.kurir;

kirimBayar.innerText =
transaksi.pembayaran;

kirimInvoice.innerText =
transaksi.invoice;


/* ==========================================
   HITUNG TOTAL PRODUK
========================================== */

let jumlahProduk = 0;

transaksi.produk.forEach(function(item){

    jumlahProduk += item.jumlah;

});


kirimTotalProduk.innerText =
jumlahProduk;

kirimSubtotal.innerText =
"Rp" +
transaksi.subtotal.toLocaleString("id-ID");

kirimOngkir.innerText =
"Rp" +
transaksi.ongkir.toLocaleString("id-ID");

kirimTotal.innerText =
"Rp" +
transaksi.total.toLocaleString("id-ID");


/* ==========================================
   ESTIMASI PENGIRIMAN
========================================== */

let estimasi = "2 - 3 Hari";

if(transaksi.kurir === "J&T"){

    estimasi = "2 - 4 Hari";

}

else if(transaksi.kurir === "SiCepat"){

    estimasi = "2 - 3 Hari";

}

else if(transaksi.kurir === "AnterAja"){

    estimasi = "2 - 5 Hari";

}

estimasiKirim.innerText =
estimasi;


/* ==========================================
   TOMBOL KEMBALI KE BERANDA
========================================== */

btnSelesai.addEventListener("click", function(){

    window.location.href =
    "index.html";

});