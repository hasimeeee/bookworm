document.addEventListener('DOMContentLoaded', () => {
    const viewCertificatesBtn = document.getElementById('viewCertificatesBtn');
    const certificatesList = document.getElementById('certificatesList');

    viewCertificatesBtn.addEventListener('click', () => {
        certificatesList.innerHTML = ''; // Önceki sertifikaları temizle

        // A1 sertifikası
        const certificateA1 = document.createElement('div');
        certificateA1.classList.add('certificate');
        certificateA1.innerHTML = `
            <h3>A1 LEVEL CERTIFICATE</h3>
            <p>You have been awarded this certificate for successfully completing the A1 Level course.</p>
            <a href="sertifika.html" class="profile-button">View Certificate</a>
        `;
        certificatesList.appendChild(certificateA1);

        // A2 sertifikası
        const certificateA2 = document.createElement('div');
        certificateA2.classList.add('certificate');
        certificateA2.innerHTML = `
            <h3>A2 LEVEL CERTIFICATE</h3>
            <p>You have been awarded this certificate for successfully completing the A2 Level course.</p>
            <a href="sertifika2.html" class="profile-button">View Certificate</a>
        `;
        certificatesList.appendChild(certificateA2);

        // Sertifika listesini göster
        certificatesList.style.display = 'block';
    });
});
