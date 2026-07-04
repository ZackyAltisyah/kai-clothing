/* ==========================================
   DATA CHECKOUT
========================================== */

let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

const checkoutList = document.getElementById("checkout-list");
const totalProduk = document.getElementById("checkout-total-produk");
const totalBelanja = document.getElementById("checkout-total-belanja");

tampilkanCheckout();

/* ==========================================
   TAMPILKAN CHECKOUT
========================================== */

function tampilkanCheckout(){

    checkoutList.innerHTML = "";

    let totalItem = 0;
    let totalHarga = 0;

    if(keranjang.length === 0){

        checkoutList.innerHTML = `

        <p style="text-align:center; padding:40px;">

            Keranjang masih kosong.

        </p>

        `;

        totalProduk.innerText = "0";
        totalBelanja.innerText = "Rp0";

        return;

    }

    keranjang.forEach(function(produk){

        const harga = Number(
            produk.harga
                .replace("Rp","")
                .replace(/\./g,"")
        );

        const subtotal = harga * produk.jumlah;

        totalItem += produk.jumlah;

        totalHarga += subtotal;

        checkoutList.innerHTML += `

        <div class="checkout-item">

            <img src="${produk.gambar}" alt="${produk.nama}">

            <div class="checkout-info">

                <h3>${produk.nama}</h3>

                <p>Ukuran : ${produk.ukuran}</p>

                <p>Jumlah : ${produk.jumlah}</p>

                <p>Harga : ${produk.harga}</p>

                <p class="harga">

                    Subtotal :
                    Rp${subtotal.toLocaleString("id-ID")}

                </p>

            </div>

        </div>

        `;

    });

    totalProduk.innerText = totalItem;

    totalBelanja.innerText =
    "Rp" + totalHarga.toLocaleString("id-ID");

}

/* ==========================================
   LANJUT KE PEMBAYARAN
========================================== */

const btnBayar = document.getElementById("btn-lanjut-bayar");

btnBayar.addEventListener("click", function(){

    const nama = document.getElementById("nama-penerima").value.trim();

    const hp = document.getElementById("no-hp").value.trim();

    const alamat = document.getElementById("alamat").value.trim();

    if(nama === ""){

        alert("Nama penerima harus diisi.");

        return;

    }

    if(hp === ""){

        alert("Nomor WhatsApp harus diisi.");

        return;

    }

    if(alamat === ""){

        alert("Alamat harus diisi.");

        return;

    }

    /* ==========================================
   SIMPAN DATA CHECKOUT
========================================== */

const kurir = document.querySelector(
    'input[name="kurir"]:checked'
).value;

const pembayaran = document.querySelector(
    'input[name="bayar"]:checked'
).value;

const dataCheckout = {

    nama: nama,

    hp: hp,

    alamat: alamat,

    kurir: kurir,

    pembayaran: pembayaran,

    keranjang: keranjang

};

localStorage.setItem(

    "checkout",

    JSON.stringify(dataCheckout)

);

window.location.href = "pembayaran.html";

});