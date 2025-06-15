window.addEventListener('scroll', function () {
  const panel = document.getElementById('sticky-panel');
  if (window.scrollY > 150) {
    panel.classList.add('show');
    panel.classList.remove('hidden');
  } else {
    panel.classList.remove('show');
    panel.classList.add('hidden');
  }
});
