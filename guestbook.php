<?php include 'koneksi.php'; ?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Buku Tamu</title>
  <link rel="stylesheet" href="css/guestbook.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>
  <header>
    <nav class="navbar">
      <ul class="nav-list">
        <li><a href="index.html">Beranda</a></li>
        <li><a href="produk.html">Produk</a></li>
        <li><a href="lokasi.html">Lokasi</a></li>
        <li><a href="kontak.html">Kontak</a></li>
        <li><a href="guestbook.php">Buku Tamu</a></li>
        <li><a href="game.html">Game</a></li>
      </ul>
      <div class="logo">Lapak Sacipa</div>
      <form action="produk.html" method="get" class="search-form">
        <input type="text" name="q" id="searchInput" placeholder="Cari produk...">
      </form>
    </nav>
  </header>

  <div class="container">
    <section class="guestbook">
      <h1><h2>Pesan Untuk Lapak Sacipa</h1>

      <form action="" method="post">
        <div class="form-group">
          <input type="text" name="nama" placeholder="Nama Anda" required>
        </div>
        <div class="form-group">
          <textarea name="pesan" placeholder="Tulis pesan Anda..." required></textarea>
        </div>
        <button type="submit" name="submit">Kirim</button>
      </form>

      <?php
      if (isset($_POST['submit'])) {
        $nama = trim($_POST['nama']);
        $pesan = trim($_POST['pesan']);

        if (strlen($nama) < 3 || strlen($pesan) < 5) {
          echo "<p>Nama dan pesan harus lebih dari 3 karakter.</p>";
        } else {
          $nama = mysqli_real_escape_string($conn, $nama);
          $pesan = mysqli_real_escape_string($conn, $pesan);
          $tanggal = date('Y-m-d H:i:s');
          $query = "INSERT INTO bukutamu (nama, pesan, tanggal) VALUES ('$nama', '$pesan', '$tanggal')";

          if (mysqli_query($conn, $query)) {
            echo "<p>Pesan berhasil dikirim!</p>";
          } else {
            echo "<p>Gagal menyimpan pesan.</p>";
          }
        }
      }
      ?>
      
      <?php
      $result = mysqli_query($conn, "SELECT * FROM bukutamu ORDER BY id DESC");
      while ($row = mysqli_fetch_assoc($result)) {
        echo "<div class='pesan'>";
        echo "<strong>" . htmlspecialchars($row['nama']) . "</strong> <em>(" . $row['tanggal'] . ")</em><br>";
        echo nl2br(htmlspecialchars($row['pesan']));
        echo "</div><hr>";
      }
      ?>
    </section>
  </div>

  <footer>
        <div class="footer-content">
            <div class="footer-info">
                <h3>Lapak Sacipa</h3>
                <p>Menyediakan berbagai jenis makanan dan minuman berkualitas</p>
            </div>
            <div class="footer-contact">
                <h4>Hubungi Kami</h4>
                <p><i class="fas fa-phone"></i> +62 817-6310-746</p>
                <p><i class="fas fa-envelope"></i> <a href="mailto:lapaksacipa@gmail.com">lapaksacipa@gmail.com</a></p>
                <p><i class="fab fa-instagram"></i> <a href="https://www.instagram.com/lapaksacipa/" target="_blank">@lapaksacipa</a></p>
            </div>
        </div>
    </footer>

</body>
</html>
