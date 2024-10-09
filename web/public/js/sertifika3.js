document.addEventListener('DOMContentLoaded', function () {
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Create a new blob object containing the HTML content
        const certificateContent = document.documentElement.outerHTML;
        const blob = new Blob([certificateContent], { type: 'text/html' });

        // Create a temporary link element and trigger download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'sertifika3.html';
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
    });
});
