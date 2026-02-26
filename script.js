document.addEventListener('DOMContentLoaded', () => {
    const regForm = document.getElementById('registrationForm');
    const formSection = document.getElementById('formSection');
    const displayArea = document.getElementById('displayArea');
    const resultContent = document.getElementById('resultContent');

    regForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const user = document.getElementById('username').value;

        // 1. Sembunyikan bagian form 
        formSection.classList.add('hidden');

        // 2. Tampilkan bagian konfirmasi 
        displayArea.classList.remove('hidden');

        // 3. Masukkan teks konfirmasi 
        resultContent.innerHTML = `
            <div style="margin: 20px 0; font-size: 1.1rem;">
                <p>Halo, <strong>${nama}</strong>!</p>
                <p>Akun dengan username <span style="color: #ff5c8d;">@${user}</span> telah berhasil dicatat.</p>
            </div>
        `;
    });
});