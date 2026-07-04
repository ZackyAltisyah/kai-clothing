/* ==========================================
   AMBIL DATA KERANJANG
========================================== */

let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

const daftarKeranjang = document.getElementById("daftar-keranjang");

const totalProduk = document.getElementById("total-produk");

const totalBelanja = document.getElementById("total-belanja");


tampilkanKeranjang();


function tampilkanKeranjang(){

    daftarKeranjang.innerHTML = "";

    let total = 0;

    let jumlahProduk = 0;

    keranjang.forEach(function(produk, index){

        jumlahProduk += produk.jumlah;

    });

    totalProduk.innerText = jumlahProduk;

    keranjang.forEach(function(produk, index){

        const harga = Number(
            produk.harga
                .replace("Rp","")
                .replace(/\./g,"")
        );

        total += harga * produk.jumlah;

        daftarKeranjang.innerHTML += `

        <div class="item-keranjang">

            <img src="${produk.gambar}" alt="${produk.nama}">

            <div class="info-keranjang">

                <h3>${produk.nama}</h3>

                <p>Ukuran : ${produk.ukuran}</p>

                <div class="qty-keranjang">

            <button onclick="kurangJumlah(${index})">−</button>

            <span>${produk.jumlah}</span>

            <button onclick="tambahJumlah(${index})">+</button>

        </div>

        <p class="harga">${produk.harga}</p>

        <button class="btn-hapus" onclick="hapusProduk(${index})">

            <i class="fa-solid fa-trash"></i>

            Hapus

        </button>

            </div>

        </div>

`;

    });

    totalProduk.innerText = jumlahProduk;

    totalBelanja.innerText =
    "Rp" + total.toLocaleString("id-ID");

}

/* ==========================================
   HAPUS PRODUK
========================================== */

function hapusProduk(index){

    if(confirm("Hapus produk dari keranjang?")){

        keranjang.splice(index, 1);

        localStorage.setItem(
            "keranjang",
            JSON.stringify(keranjang)
        );

        tampilkanKeranjang();

    }

}

/* ==========================================
   TAMBAH JUMLAH
========================================== */

function tambahJumlah(index){

    keranjang[index].jumlah++;

    localStorage.setItem(
        "keranjang",
        JSON.stringify(keranjang)
    );

    tampilkanKeranjang();

}


/* ==========================================
   KURANG JUMLAH
========================================== */

function kurangJumlah(index){

    if(keranjang[index].jumlah > 1){

        keranjang[index].jumlah--;

        localStorage.setItem(
            "keranjang",
            JSON.stringify(keranjang)
        );

        tampilkanKeranjang();

    }

}