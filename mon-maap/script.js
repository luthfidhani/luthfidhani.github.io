function sendMessage() {
    const message = document.querySelector('.modal-body textarea').value;
    
    // Gw tau ini ga aman, tapi ini cuma buat iseng-iseng doang kok
    // Plis jangan dikerjain yaa 😅
    // Ga baik loh, kan lagi lebaran 🙏
    // Minal aidin wal faidzin Yaaa 🙏
    const url = "https://script.google.com/macros/s/AKfycbzoN75OpZQZwayg9JMUIL4R5Q4k7PVPhoNfpT8aMB0Gl8XBEpbJE1IDDEYq00VF3-IeDg/exec";
    
    fetch(url, {
        method: "POST",
        mode: "no-cors", //
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message })
    })
    alert("Pesan berhasil terkirim 💌");
}

function copyToClipboard() {
    const input = document.querySelector('.modal-body input');
    const number = input.value.replace(/\s+/g, '');
    navigator.clipboard.writeText(number);
    alert("Nomor berhasil disalin 🥳")
}