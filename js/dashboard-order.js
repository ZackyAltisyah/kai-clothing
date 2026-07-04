/* ==========================================
   AMBIL DATA PESANAN
========================================== */

let daftarTransaksi =
JSON.parse(localStorage.getItem("daftarTransaksi")) || [];


/* ==========================================
   ELEMEN HTML
========================================== */

const daftarOrder =
document.getElementById("daftar-order");

const totalOrder =
document.getElementById("total-order");

const orderDiproses =
document.getElementById("order-diproses");

const orderDikirim =
document.getElementById("order-dikirim");

const orderSelesai =
document.getElementById("order-selesai");

const cariOrder =
document.getElementById("cari-order");

const btnRefresh =
document.getElementById("btn-refresh-order");


/* ==========================================
   ELEMEN MODAL
========================================== */

const modalDetail =
document.getElementById("modal-detail-order");

const btnTutupModal =
document.getElementById("btn-tutup-modal");

const detailInvoice =
document.getElementById("detail-invoice");

const detailStatus =
document.getElementById("detail-status");

const detailKurir =
document.getElementById("detail-kurir");

const detailPembayaran =
document.getElementById("detail-pembayaran");

const detailNama =
document.getElementById("detail-nama");

const detailHp =
document.getElementById("detail-hp");

const detailAlamat =
document.getElementById("detail-alamat");

const detailDaftarProduk =
document.getElementById("detail-daftar-produk");

const detailSubtotal =
document.getElementById("detail-subtotal");

const detailOngkir =
document.getElementById("detail-ongkir");

const detailTotal =
document.getElementById("detail-total");

const pilihStatusOrder =
document.getElementById("pilih-status-order");

const btnSimpanStatus =
document.getElementById("btn-simpan-status");


/* ==========================================
   INDEX ORDER YANG SEDANG DIBUKA
========================================== */

let indexOrderAktif = null;

let invoiceOrderAktif = null;


/* ==========================================
   FORMAT RUPIAH
========================================== */

function formatRupiah(angka){

    return "Rp" +
    Number(angka || 0).toLocaleString("id-ID");

}


/* ==========================================
   HITUNG JUMLAH PRODUK
========================================== */

function hitungJumlahProduk(produk){

    if(!Array.isArray(produk)){
        return 0;
    }

    return produk.reduce(function(total, item){

        return total + Number(item.jumlah || 0);

    }, 0);

}


/* ==========================================
   TAMPILKAN RINGKASAN ORDER
========================================== */

function tampilkanRingkasan(){

    totalOrder.innerText =
    daftarTransaksi.length;


    orderDiproses.innerText =
    daftarTransaksi.filter(function(order){

        return order.status === "Diproses";

    }).length;


    orderDikirim.innerText =
    daftarTransaksi.filter(function(order){

        return order.status === "Dikirim";

    }).length;


    orderSelesai.innerText =
    daftarTransaksi.filter(function(order){

        return order.status === "Selesai";

    }).length;

}


/* ==========================================
   CLASS STATUS
========================================== */

function ambilClassStatus(status){

    if(status === "Dikirim"){
        return "status-dikirim";
    }

    if(status === "Selesai"){
        return "status-selesai";
    }

    return "status-diproses";

}


/* ==========================================
   TAMPILKAN DAFTAR ORDER
========================================== */

function tampilkanOrder(data = daftarTransaksi){

    daftarOrder.innerHTML = "";


    if(data.length === 0){

        daftarOrder.innerHTML = `

        <tr id="order-kosong">

            <td colspan="9">

                <div class="empty-order">

                    <i class="fa-solid fa-box-open"></i>

                    <h3>Belum Ada Pesanan</h3>

                    <p>
                        Pesanan pelanggan akan tampil
                        pada dashboard ini.
                    </p>

                </div>

            </td>

        </tr>

        `;

        return;

    }


    data.forEach(function(order, index){

        const jumlahProduk =
        hitungJumlahProduk(order.produk);


        daftarOrder.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>
                <strong>
                    ${order.invoice || "-"}
                </strong>
            </td>

            <td>
                ${order.nama || "-"}
            </td>

            <td>
                ${jumlahProduk}
            </td>

            <td>
                ${formatRupiah(order.total)}
            </td>

            <td>
                ${order.kurir || "-"}
            </td>

            <td>
                ${order.pembayaran || "-"}
            </td>

            <td>

                <span class="
                    order-status
                    ${ambilClassStatus(order.status)}
                ">

                    ${order.status || "Diproses"}

                </span>

            </td>

            <td>

                <div class="order-action">

                    <button
                        type="button"
                        class="btn-detail-order"
                        onclick="bukaDetailOrder('${order.invoice}')">

                        <i class="fa-solid fa-eye"></i>

                    </button>


                    <button
                        type="button"
                        class="btn-hapus-order"
                        onclick="hapusOrder('${order.invoice}')">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            </td>

        </tr>

        `;

    });

}


/* ==========================================
   BUKA DETAIL ORDER
========================================== */

/* ==========================================
   BUKA DETAIL ORDER
========================================== */

function bukaDetailOrder(invoice){

    invoiceOrderAktif = invoice;

    /* AMBIL ULANG DATA TERBARU */

    daftarTransaksi =
    JSON.parse(
        localStorage.getItem("daftarTransaksi")
    ) || [];


    /* CARI PESANAN BERDASARKAN INVOICE */

    indexOrderAktif =
    daftarTransaksi.findIndex(function(order){

        return String(order.invoice) === String(invoice);

    });


    if(indexOrderAktif === -1){

        alert("Data pesanan tidak ditemukan.");

        return;

    }

    btnSimpanStatus.dataset.invoice = invoice;


    const order =
    daftarTransaksi[indexOrderAktif];


    /* ==========================================
       INFORMASI PESANAN
    ========================================== */

    detailInvoice.innerText =
    order.invoice || "-";


    detailStatus.innerText =
    order.status || "Diproses";


    detailKurir.innerText =
    order.kurir || "-";


    detailPembayaran.innerText =
    order.pembayaran || "-";


    /* ==========================================
       INFORMASI PELANGGAN
    ========================================== */

    detailNama.innerText =
    order.nama || "-";


    detailHp.innerText =
    order.hp ||
    order.noHp ||
    order.telepon ||
    order.whatsapp ||
    "-";


    detailAlamat.innerText =
    order.alamat ||
    order.alamatLengkap ||
    order.alamatPengiriman ||
    "-";


    /* ==========================================
       PEMBAYARAN
    ========================================== */

    const subtotal =
    Number(
        order.subtotal ||
        order.totalBelanja ||
        0
    );


    const ongkir =
    Number(
        order.ongkir ||
        order.biayaPengiriman ||
        0
    );


    const total =
    Number(
        order.total ||
        order.totalBayar ||
        subtotal + ongkir
    );


    detailSubtotal.innerText =
    formatRupiah(subtotal);


    detailOngkir.innerText =
    formatRupiah(ongkir);


    detailTotal.innerText =
    formatRupiah(total);


    pilihStatusOrder.value =
    order.status || "Diproses";


    /* ==========================================
       TAMPILKAN PRODUK
    ========================================== */

    detailDaftarProduk.innerHTML = "";


    const daftarProduk =
    order.produk ||
    order.items ||
    order.daftarProduk ||
    [];


    if(
        Array.isArray(daftarProduk) &&
        daftarProduk.length > 0
    ){

        daftarProduk.forEach(function(produk){


            const gambar =
            produk.gambar ||
            produk.image ||
            "";


            const nama =
            produk.nama ||
            produk.namaProduk ||
            produk.name ||
            "Produk";


            const ukuran =
            produk.ukuran ||
            produk.size ||
            "-";


            const jumlah =
            Number(
                produk.jumlah ||
                produk.quantity ||
                produk.qty ||
                1
            );


            const harga =
            Number(
                produk.harga ||
                produk.price ||
                0
            );


            detailDaftarProduk.innerHTML += `

            <div class="detail-produk-order">


                ${
                    gambar

                    ?

                    `

                    <img
                        src="${gambar}"
                        alt="${nama}">

                    `

                    :

                    ""

                }


                <div>

                    <h4>

                        ${nama}

                    </h4>


                    <p>

                        Ukuran :
                        ${ukuran}

                    </p>


                    <p>

                        Jumlah :
                        ${jumlah}

                    </p>


                    <p>

                        Harga :
                        ${formatRupiah(harga)}

                    </p>

                </div>


            </div>

            `;

        });


    }else{


        detailDaftarProduk.innerHTML = `

        <div class="detail-produk-kosong">

            <i class="fa-solid fa-box-open"></i>

            <p>

                Data produk tidak ditemukan.

            </p>

        </div>

        `;

    }


    /* ==========================================
       TAMPILKAN MODAL
    ========================================== */

    modalDetail.classList.add("aktif");


    document.body.style.overflow =
    "hidden";

}


/* ==========================================
   TUTUP MODAL
========================================== */

function tutupModalOrder(){

    modalDetail.classList.remove("aktif");

    document.body.style.overflow = "";

    indexOrderAktif = null;

    invoiceOrderAktif = null;

}


btnTutupModal.addEventListener(
    "click",
    tutupModalOrder
);


modalDetail.addEventListener("click", function(event){

    if(event.target === modalDetail){

        tutupModalOrder();

    }

});


document.addEventListener("keydown", function(event){

    if(
        event.key === "Escape" &&
        modalDetail.classList.contains("aktif")
    ){

        tutupModalOrder();

    }

});


/* ==========================================
   SIMPAN STATUS ORDER
========================================== */

btnSimpanStatus.addEventListener("click", function(event){

    event.preventDefault();
    event.stopPropagation();

    const invoiceAktif =
    btnSimpanStatus.dataset.invoice;

    console.log("INVOICE AKTIF:", invoiceAktif);

    daftarTransaksi =
    JSON.parse(
        localStorage.getItem("daftarTransaksi")
    ) || [];

    const indexPesanan =
    daftarTransaksi.findIndex(function(order){

        return String(order.invoice).trim() ===
               String(invoiceAktif).trim();

    });

    console.log("INDEX PESANAN:", indexPesanan);

    if(indexPesanan === -1){

        console.log(
            "SEMUA INVOICE:",
            daftarTransaksi.map(order => order.invoice)
        );

        alert("Pesanan tidak ditemukan.");

        return;

    }

    const statusBaru =
    pilihStatusOrder.value;

    daftarTransaksi[indexPesanan].status =
    statusBaru;

    localStorage.setItem(
        "daftarTransaksi",
        JSON.stringify(daftarTransaksi)
    );

    detailStatus.innerText = statusBaru;

    tampilkanRingkasan();

    tampilkanOrder();

    alert("Status pesanan berhasil diperbarui.");

});


/* ==========================================
   HAPUS ORDER
========================================== */

function hapusOrder(invoice){

    const konfirmasi =
    confirm("Hapus pesanan ini dari Dashboard Order?");


    if(!konfirmasi){
        return;
    }


    daftarTransaksi =
    daftarTransaksi.filter(function(order){

        return order.invoice !== invoice;

    });


    localStorage.setItem(
        "daftarTransaksi",
        JSON.stringify(daftarTransaksi)
    );


    tampilkanRingkasan();

    tampilkanOrder();

}


/* ==========================================
   PENCARIAN ORDER
========================================== */

cariOrder.addEventListener("input", function(){

    const keyword =
    cariOrder.value.toLowerCase().trim();


    const hasilPencarian =
    daftarTransaksi.filter(function(order){

        const invoice =
        String(order.invoice || "").toLowerCase();

        const nama =
        String(order.nama || "").toLowerCase();


        return (
            invoice.includes(keyword) ||
            nama.includes(keyword)
        );

    });


    tampilkanOrder(hasilPencarian);

});


/* ==========================================
   REFRESH DATA
========================================== */

btnRefresh.addEventListener("click", function(){

    daftarTransaksi =
    JSON.parse(
        localStorage.getItem("daftarTransaksi")
    ) || [];


    cariOrder.value = "";


    tampilkanRingkasan();

    tampilkanOrder();

});


/* ==========================================
   JALANKAN SAAT HALAMAN DIBUKA
========================================== */

tampilkanRingkasan();

tampilkanOrder();