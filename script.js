// Michael Arnold Sagala — Landing Page Pribadi
// Progressive enhancement: status pengiriman form kontak.

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#kontak form");
  if (!form) return;

  var status = document.createElement("p");
  status.id = "form-status";
  status.setAttribute("role", "status");
  status.style.marginTop = "1rem";
  status.style.padding = "0.75rem 1rem";
  status.style.borderRadius = "5px";
  status.style.display = "none";
  form.appendChild(status);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Mohon lengkapi semua kolom dengan benar sebelum mengirim.";
      status.style.display = "block";
      status.style.background = "#fdecea";
      status.style.color = "#b3261e";
      form.reportValidity();
      return;
    }

    var nama = form.nama.value.trim();
    status.textContent =
      "Terima kasih, " + nama + "! Pesan kamu sudah dicatat di halaman ini. " +
      "Hubungkan form ini ke layanan seperti Formspree atau backend kamu sendiri agar pesan benar-benar terkirim.";
    status.style.display = "block";
    status.style.background = "#eef1ff";
    status.style.color = "#667eea";
    form.reset();
  });
});
