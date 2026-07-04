/* ==========================================
   FILTER KATEGORI PRODUK
========================================== */

const tombolKategori = document.querySelectorAll(".kategori-btn");
const produk = document.querySelectorAll(".produk-card");

tombolKategori.forEach(button => {

    button.addEventListener("click", () => {

        // Menghapus class active dari semua tombol
        tombolKategori.forEach(btn => btn.classList.remove("active"));

        // Menambahkan class active ke tombol yang diklik
        button.classList.add("active");

        const kategori = button.dataset.filter;

        produk.forEach(card => {

            if (
                kategori === "semua" ||
                card.dataset.kategori === kategori
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ==========================================
   PENCARIAN PRODUK
========================================== */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    produk.forEach(card => {

        const namaProduk = card.querySelector("h3").textContent.toLowerCase();

        if (namaProduk.includes(keyword)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});