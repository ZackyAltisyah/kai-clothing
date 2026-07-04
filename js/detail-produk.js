/* ==========================================
   DETAIL PRODUK
========================================== */

// Harga berdasarkan ukuran
const hargaUkuran = {
    "S": 89000,
    "M": 94000,
    "L": 99000,
    "XL": 109000
};

// Ambil semua tombol ukuran
const tombolUkuran = document.querySelectorAll(".ukuran button");

// Ambil elemen harga
const harga = document.querySelector(".harga-detail h2");

// Ukuran default
let ukuranDipilih = "S";

// Format Rupiah
function formatRupiah(angka){

    return "Rp" + angka.toLocaleString("id-ID");

}

// Saat tombol ukuran diklik
tombolUkuran.forEach(button=>{

    button.addEventListener("click",()=>{

        // Hapus class aktif
        tombolUkuran.forEach(btn=>{

            btn.classList.remove("aktif");

        });

        // Tambahkan class aktif
        button.classList.add("aktif");

        ukuranDipilih = button.innerText;

        harga.innerText = formatRupiah(hargaUkuran[ukuranDipilih]);

    });

});

// Aktifkan ukuran S saat pertama dibuka
tombolUkuran[0].classList.add("aktif");



/* ==========================================
   JUMLAH PRODUK
========================================== */

const minus = document.getElementById("minus");

const plus = document.getElementById("plus");

const qty = document.getElementById("qty");

let jumlah = 1;

minus.addEventListener("click",()=>{

    if(jumlah>1){

        jumlah--;

        qty.value = jumlah;

    }

});

plus.addEventListener("click",()=>{

    jumlah++;

    qty.value = jumlah;

});

/* ==========================================
   DATA PRODUK
========================================== */

const dataProduk = {

    "kaos-hitam":{

        nama:"Kaos Oversize Hitam",

        gambar:"images/produk/kaos-hitam.jpeg",

        badge:"🔥 Terlaris",

        harga:"Rp89.000",

        hargaLama:"Rp109.000",

        deskripsi:
        "Kaos Oversize Hitam Kai.Clothing dibuat dari bahan cotton premium yang lembut, adem, dan nyaman digunakan untuk aktivitas sehari-hari. Desain oversize memberikan tampilan modern dan cocok dipadukan dengan berbagai gaya outfit.",

        spesifikasi: [
            "Bahan Cotton Premium",
            "Model Oversize Fit",
            "Warna Hitam",
            "Sablon Premium Quality",
            "Tersedia Ukuran S, M, L, XL",
            "Nyaman Digunakan Sehari-hari"
        ]

    },

    "kaos-putih":{

        nama:"Kaos Oversize Putih",

        gambar:"images/produk/kaos-putih.jpeg",

        badge:"🔥 Terlaris",

        harga:"Rp89.000",

        hargaLama:"Rp109.000",

        deskripsi:
        "Kaos Oversize Putih Kai.Clothing menggunakan bahan cotton premium yang lembut, ringan, dan nyaman digunakan sepanjang hari. Warna putih memberikan tampilan bersih dan mudah dipadukan dengan berbagai jenis outfit.",

        spesifikasi: [
            "Bahan Cotton Premium",
            "Model Oversize Fit",
            "Warna Putih",
            "Sablon Premium Quality",
            "Tersedia Ukuran S, M, L, XL",
            "Nyaman Digunakan Sehari-hari"
        ]

    },

    "celana-hitam":{

        nama:"Celana Wide Hitam",

        gambar:"images/produk/celana-hitam.jpeg",

        badge:"🆕 Terbaru",

        harga:"Rp149.000",

        hargaLama:"Rp169.000",

        deskripsi:
        "Celana Wide Hitam Kai.Clothing memiliki potongan wide leg yang memberikan tampilan modern dan nyaman digunakan. Bahan yang lembut dan fleksibel membuat celana ini cocok digunakan untuk aktivitas sehari-hari maupun gaya casual.",

        spesifikasi: [
            "Model Wide Leg",
            "Warna Hitam",
            "Bahan Lembut dan Nyaman",
            "Pinggang Elastis",
            "Tersedia Ukuran S (28-29), M (30-32), L (33-34), XL (36-38)",
            "Cocok untuk Gaya Casual"
        ]

    },

    "celana-abu":{

        nama:"Celana Wide Abu",

        gambar:"images/produk/celana-abu.jpeg",

        badge:"🆕 Terbaru",

        harga:"Rp149.000",

        hargaLama:"Rp169.000",

        deskripsi:
        "Celana Wide Abu Kai.Clothing dirancang dengan potongan wide leg yang nyaman dan memberikan tampilan casual modern. Warna abu-abu yang netral membuat celana ini mudah dipadukan dengan berbagai warna atasan.",

        spesifikasi: [
            "Model Wide Leg",
            "Warna Abu-abu",
            "Bahan Lembut dan Nyaman",
            "Pinggang Elastis",
            "Tersedia Ukuran S (28-29), M (30-32), L (33-34), XL (36-38)",
            "Cocok untuk Gaya Casual"
        ]

    },

    "topi-hitam":{

        nama:"Topi Trucker Hitam",

        gambar:"images/produk/topi-hitam.png",

        badge:"🎉 Promo",

        harga:"Rp69.000",

        hargaLama:"Rp79.000",

        deskripsi:
        "Topi Hitam Kai.Clothing memiliki desain sederhana dan modern yang cocok digunakan untuk melengkapi berbagai gaya outfit. Material yang ringan dan nyaman membuat topi ini cocok digunakan untuk aktivitas sehari-hari.",

        spesifikasi: [
            "Material Berkualitas",
            "Warna Hitam",
            "Desain Casual dan Modern",
            "Ukuran Adjustable",
            "Ringan dan Nyaman Digunakan",
            "Cocok untuk Aktivitas Sehari-hari"
        ]

    },

    "topi-pink":{

        nama:"Topi Trucker Pink",

        gambar:"images/produk/topi-pink.png",

        badge:"🎉 Promo",

        harga:"Rp74.000",

        hargaLama:"Rp84.000",

        deskripsi:
        "Topi Pink Kai.Clothing hadir dengan warna menarik dan desain casual yang cocok digunakan untuk melengkapi penampilan sehari-hari. Dilengkapi pengatur ukuran sehingga dapat disesuaikan dengan nyaman.",

    spesifikasi: [
        "Material Berkualitas",
        "Warna Pink",
        "Desain Casual dan Modern",
        "Ukuran Adjustable",
        "Ringan dan Nyaman Digunakan",
        "Cocok untuk Aktivitas Sehari-hari"
    ]

    }

};

/* ==========================================
DATA DESKRIPSI PRODUK
========================================== */

const dataDeskripsiProduk = {

    "kaos-hitam": {

        deskripsi:
        "Kaos Oversize Hitam Kai.Clothing dibuat menggunakan bahan cotton premium yang lembut, adem, dan nyaman digunakan sepanjang hari. Dengan desain streetwear modern serta cutting oversize, kaos ini cocok digunakan untuk aktivitas santai maupun hangout.",

        spesifikasi: [
            "Bahan Cotton Premium",
            "Model Oversize Fit",
            "Warna Hitam",
            "Sablon Premium Quality",
            "Tersedia Ukuran S, M, L, XL",
            "Nyaman Dipakai Sehari-hari"
        ]

    },


    "kaos-putih": {

        deskripsi:
        "Kaos Oversize Putih Kai.Clothing menggunakan bahan cotton premium yang lembut, adem, dan nyaman digunakan sepanjang hari. Warna putih memberikan tampilan bersih dan mudah dipadukan dengan berbagai gaya outfit casual maupun streetwear.",

        spesifikasi: [
            "Bahan Cotton Premium",
            "Model Oversize Fit",
            "Warna Putih",
            "Sablon Premium Quality",
            "Tersedia Ukuran S, M, L, XL",
            "Nyaman Dipakai Sehari-hari"
        ]

    },


    "celana-hitam": {

        deskripsi:
        "Celana Hitam Kai.Clothing dirancang dengan bahan berkualitas yang nyaman digunakan untuk aktivitas sehari-hari. Desain modern dan warna hitam yang fleksibel membuat celana ini mudah dipadukan dengan berbagai jenis atasan.",

        spesifikasi: [
            "Bahan Berkualitas Premium",
            "Desain Casual Modern",
            "Warna Hitam",
            "Nyaman Digunakan",
            "Tersedia Berbagai Ukuran 28-29, 30-32, 33-34, 36-38",
            "Cocok untuk Aktivitas Sehari-hari"
        ]

    },


    "celana-abu": {

        deskripsi:
        "Celana Abu Kai.Clothing memiliki desain casual modern dengan bahan yang nyaman dan ringan digunakan. Warna abu-abu memberikan tampilan minimalis sehingga mudah dipadukan dengan berbagai pilihan outfit.",

        spesifikasi: [
            "Bahan Berkualitas Premium",
            "Desain Casual Modern",
            "Warna Abu-abu",
            "Nyaman dan Ringan Digunakan",
            "Tersedia Berbagai Ukuran 28-29, 30-32, 33-34, 36-38",
            "Cocok untuk Gaya Casual"
        ]

    },


    "topi-hitam": {

        deskripsi:
        "Topi Hitam Kai.Clothing hadir dengan desain streetwear modern yang cocok digunakan sebagai pelengkap outfit sehari-hari. Warna hitam yang netral membuat topi ini mudah dipadukan dengan berbagai gaya pakaian.",

        spesifikasi: [
            "Bahan Berkualitas",
            "Desain Streetwear Modern",
            "Warna Hitam",
            "Ukuran Dapat Disesuaikan",
            "Nyaman Digunakan",
            "Cocok untuk Aktivitas Sehari-hari"
        ]

    },


    "topi-pink": {

        deskripsi:
        "Topi Pink Kai.Clothing hadir dengan desain casual dan warna yang menarik untuk memberikan tampilan outfit yang lebih stylish. Topi ini nyaman digunakan dan cocok sebagai aksesori untuk berbagai aktivitas sehari-hari.",

        spesifikasi: [
            "Bahan Berkualitas",
            "Desain Casual Modern",
            "Warna Pink",
            "Ukuran Dapat Disesuaikan",
            "Nyaman Digunakan",
            "Cocok sebagai Pelengkap Outfit"
        ]

    }

};

/* ==========================================
   AMBIL DATA PRODUK DARI URL
========================================== */

const parameter = new URLSearchParams(window.location.search);

const idProduk = parameter.get("id");

if (idProduk && dataProduk[idProduk]) {

    const produk = dataProduk[idProduk];

    document.getElementById("nama-produk").innerText = produk.nama;

    document.getElementById("breadcrumb-produk").innerText = produk.nama;

    document.getElementById("gambar-produk").src = produk.gambar;

    document.getElementById("gambar-produk").alt = produk.nama;

    document.getElementById("badge-produk").innerText = produk.badge;

    document.getElementById("harga-produk").innerText = produk.harga;

    document.getElementById("harga-lama").innerText = produk.hargaLama;

}

/* ==========================================
   TAMBAH KE KERANJANG
========================================== */

const btnKeranjang = document.getElementById("btn-keranjang");

if (btnKeranjang) {

    btnKeranjang.addEventListener("click", function () {

        // Ambil data keranjang lama
        let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

        // Data produk yang sedang dibuka
        const produk = {

            id: idProduk,
            nama: document.getElementById("nama-produk").innerText,
            gambar: document.getElementById("gambar-produk").src,
            harga: document.getElementById("harga-produk").innerText,
            ukuran: ukuranDipilih,
            jumlah: Number(qty.value)

        };

        // Cek apakah produk yang sama dan ukuran yang sama sudah ada
        const indexProduk = keranjang.findIndex(function(item){

            return item.id === produk.id &&
                    item.ukuran === produk.ukuran;

        });

        // Jika sudah ada
        if(indexProduk !== -1){

            keranjang[indexProduk].jumlah += produk.jumlah;

        }

        // Jika belum ada
        else{

            keranjang.push(produk);

        }

        // Simpan ke Local Storage
        localStorage.setItem(
            "keranjang",
            JSON.stringify(keranjang)
        );

        alert("Produk berhasil ditambahkan ke keranjang.");

        console.log(keranjang);

    });

}

/* ==========================================
TAMPILKAN DESKRIPSI PRODUK DINAMIS
========================================== */

const deskripsiElement =
document.getElementById("deskripsi-produk");

const spesifikasiElement =
document.getElementById("spesifikasi-produk");


/* AMBIL ID PRODUK DARI URL */

const parameterURL =
new URLSearchParams(window.location.search);

const idDeskripsiProduk =
parameterURL.get("id");


/* AMBIL DATA DESKRIPSI */

const detailDeskripsi =
dataDeskripsiProduk[idDeskripsiProduk];


/* TAMPILKAN KE HALAMAN */

if(detailDeskripsi){

    deskripsiElement.innerText =
    detailDeskripsi.deskripsi;


    spesifikasiElement.innerHTML = "";


    detailDeskripsi.spesifikasi.forEach(function(item){

        spesifikasiElement.innerHTML += `

            <li>✓ ${item}</li>

        `;

    });

}