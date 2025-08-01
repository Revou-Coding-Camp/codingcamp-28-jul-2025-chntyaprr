welcomeMessage();

function welcomeMessage() {
    const popup = prompt('Masukkan Namamu :');
    if (popup) {
        const welcomeElement = document.getElementById('welcome-speech');
        welcomeElement.textContent = popup;
    }
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

// Optional: tampilkan waktu saat halaman dibuka (tidak wajib)
window.onload = function () {
    const resultForm = document.getElementById("result-form");
    resultForm.innerHTML = `<p><strong>Current time:</strong> ${getCurrentTime()}</p>`;
};

// Saat user submit form
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const currentTime = getCurrentTime();
    const nama = document.getElementById("name-input").value;
    const tgl = document.getElementById("tl").value;
    const nohp = document.getElementById("no-hp").value;
    const pesan = document.getElementById("pesan-input").value;
    const jenisKelamin = document.querySelector('input[name="jenis-Kelamin"]:checked')?.value || "-";

    document.getElementById("result-form").innerHTML = `
        <p><strong>Current time</strong> : ${currentTime}</p>
        <p><strong>Nama</strong> : ${nama}</p>
        <p><strong>Tanggal Lahir</strong> : ${tgl}</p>
        <p><strong>No HP</strong> : ${nohp}</p>
        <p><strong>Jenis Kelamin</strong> : ${jenisKelamin}</p>
        <p><strong>Pesan</strong> : ${pesan}</p>
    `;
});
