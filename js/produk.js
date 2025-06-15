document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const searchInput = document.getElementById('searchInput');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');
    const zoomIcons = document.querySelectorAll('.zoom-icon');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas active dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tambah kelas active ke tombol yang diklik
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            galleryItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    // Reset animasi agar bisa diputar ulang
                    item.style.animation = 'none';
                    item.offsetHeight; // trigger reflow
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                    item.style.animation = 'none'; // matikan animasi item tersembunyi
                }
            });
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            console.log('Input detected:', searchInput.value); // Debugging
            const query = searchInput.value.toLowerCase();

            galleryItems.forEach(item => {
                const name = item.querySelector('.product-name').textContent.toLowerCase();
                if (name.includes(query)) {
                    item.style.display = 'block';
                    item.style.animation = 'none';
                    item.offsetHeight; // trigger reflow
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Lightbox
    zoomIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            const galleryItem = e.target.closest('.gallery-item');
            if (!galleryItem) return;

            const img = galleryItem.querySelector('img');
            const productName = galleryItem.querySelector('.product-name').textContent;
            const productPrice = galleryItem.querySelector('.product-price').textContent;

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = `${productName} - ${productPrice}`;

            lightbox.style.display = 'flex'; // Tampilkan lightbox
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none'; // Sembunyikan lightbox
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none'; // buat nyembunyin lightbox saat klik di luar gambar
        }
    });
});

/* search lintas halaman */
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (query) {
      document.getElementById('hasil-cari').textContent = `Hasil untuk: "${query}"`;
      // Di sini kamu bisa filter daftar produk dengan JS
    }
  });
