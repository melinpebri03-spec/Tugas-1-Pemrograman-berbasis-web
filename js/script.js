document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (email === "melinda@ut.ac.id" && password === "123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password salah!");
  }
});

// Forgot password
document.getElementById('forgotLink')?.addEventListener('click', () => {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('forgotForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
});

document.getElementById('backToLogin1')?.addEventListener('click', () => {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('forgotForm').classList.add('hidden');
});

document.getElementById('registerLink')?.addEventListener('click', () => {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
  document.getElementById('forgotForm').classList.add('hidden');
});

document.getElementById('backToLogin2')?.addEventListener('click', () => {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
});

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function logout() {
  window.location.href = "login.html";
}

function logout() {
  window.location.href = "login.html";
}

// Laporan dan histori transaksi
document.getElementById("laporanBtn").addEventListener("click", () => {
  const output = document.getElementById("output-container");
  output.innerHTML = `
    <div class="info-box">
      <h3>Laporan Pengiriman</h3>
      <p>Buku dalam proses pengiriman.</p>
    </div>
  `;
});

document.getElementById("historiBtn").addEventListener("click", () => {
  const output = document.getElementById("output-container");
  output.innerHTML = `
    <div class="info-box">
      <h3>Histori Transaksi</h3>
      <table class="table-transaksi">
        <tr>
          <th>Jumlah Transaksi</th>
          <th>Tanggal</th>
          <th>Status</th>
          <th>Nomor Resi</th>
        </tr>
        <tr>
          <td>Rp1.200.000</td>
          <td>15 Oktober 2025</td>
          <td>Sudah dibayarkan</td>
          <td>0923478623</td>
        </tr>
      </table>
    </div>
  `;
});

// Tracking
function cariResi() {
  const resi = document.getElementById('resi').value.trim();
  const hasil = document.getElementById('hasilTracking');

  if (resi === "0923478623") {
    hasil.classList.remove('hidden');
  } else {
    hasil.classList.add('hidden');
    alert("Nomor resi tidak ditemukan.");
  }
}
