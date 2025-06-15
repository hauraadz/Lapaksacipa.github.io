document.addEventListener('DOMContentLoaded', function() {
  // slider
  const slides = document.querySelectorAll('.slide');
  const slidesContainer = document.querySelector('.slides');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentSlide = 0;

  function showSlide(index) {
    const offset = -index * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
  }

  if (nextBtn && prevBtn && slidesContainer) {
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);

    showSlide(currentSlide); // show first slide
  }

  // searchbar
  const searchBar = document.getElementById('search-bar');
  if (searchBar) {
    searchBar.addEventListener('input', () => {
      const searchTerm = searchBar.value.toLowerCase();
      const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-category');

      galleryItems.forEach(item => {
        const name = item.querySelector('.product-name').textContent.toLowerCase();
        const matchesSearch = name.includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || item.getAttribute('data-category') === activeCategory;

        if (matchesSearch && matchesCategory) {
          item.style.display = 'block';
          item.style.animation = 'none';
          item.offsetHeight;
          item.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // animasi scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    observer.observe(el);
  });
});

 // Tutup otomatis setelah 10 detik
  setTimeout(() => {
    closePopup();
  }, 10000);

  function closePopup() {
    document.getElementById("popup-overlay").style.display = "none";
  }
