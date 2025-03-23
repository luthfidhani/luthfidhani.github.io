function sendMessage() {
  const message = document.querySelector(".modal-body textarea").value;

  if (!message) {
    // alert("Plis lah isi pesan yang mau dikirim.\nGaboleh kosong dong 🙄");
    showCustomAlert("Plis lah isi pesan yang mau dikirim.\nGaboleh kosong dong 🙄", [
        {
          text: "Iya deh",
          class: "btn-primary",
        },
      ]);
    return;
  }

  // Gue tau ini ga aman, tapi ini cuma buat iseng-iseng doang kok
  // Plis jangan dikerjain yaa 😅
  // Ga baik loh, kan lagi lebaran 🙏
  // Minal aidin wal faidzin Yaaa 🙏
  const url =
    "https://script.google.com/macros/s/AKfycbzoN75OpZQZwayg9JMUIL4R5Q4k7PVPhoNfpT8aMB0Gl8XBEpbJE1IDDEYq00VF3-IeDg/exec";

  fetch(url, {
    method: "POST",
    mode: "no-cors", //
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: message }),
  });
  alert("Pesan berhasil terkirim 💌");
}

function copyToClipboard() {
  const input = document.querySelector(".modal-body input");
  const number = input.value.replace(/\s+/g, "");
  navigator.clipboard.writeText(number);
  showCustomAlert("Ciyee nomor gue dicopy.\nDitunggu THRnya ya 🤑", [
    {
      text: "Lanjutkan 🚀",
      class: "btn-primary",
    },
  ]);
}

function alertTHR() {
    showCustomAlert("Yakin THRnya udah dikirim? 🤔", [
      {
        text: "Udah!",
        class: "btn-primary",
        action: () => {
          setTimeout(() => {
            showCustomAlert("Ahh yang bener, THRnya udah dikirim? 🤑", [
              {
                text: "Beneran Udah!",
                class: "btn-primary",
                action: () => {
                  setTimeout(() => {
                    showCustomAlert("Oke deh, Makasih ya udah dikirim THRnya 🙏", [
                      {
                        text: "Sama-sama!",
                        class: "btn-primary",
                      },
                    ]);
                  }, 100); // Delay modal ke-3
                },
              },
            ]);
          }, 100); // Delay modal ke-2
        },
      },
    ]);
  }
  

function showCustomAlert(
  message,
  buttons = [{ text: "OK", class: "btn-primary", action: null }]
) {
  // Set judul dan isi modal
  document.getElementById("customAlertBody").innerHTML = message;

  // Ambil footer dan hapus semua tombol sebelumnya
  let footer = document.getElementById("customAlertFooter");
  footer.innerHTML = "";

  // Loop tombol yang dikasih di parameter
  buttons.forEach((btn) => {
    let button = document.createElement("button");
    button.className = `btn ${btn.class}`;
    button.innerText = btn.text;
    button.setAttribute("data-bs-dismiss", "modal"); // Default nutup modal

    // Kalau ada action, tambahin event onclick
    if (btn.action) {
      button.onclick = btn.action;
    }

    footer.appendChild(button);
  });

  // Munculin modal
  let customModal = new bootstrap.Modal(
    document.getElementById("customAlertModal")
  );
  customModal.show();
}
