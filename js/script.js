// Tombol untuk toggle mode gelap/terang
const toggleBtn = document.getElementById('toggle-mode');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Simpan preferensi pengguna ke localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('mode', 'dark');
    toggleBtn.textContent = '☀️';
  } else {
    localStorage.setItem('mode', 'light');
    toggleBtn.textContent = '🌙';
  }
});

// Saat halaman dimuat, periksa preferensi mode sebelumnya
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});
