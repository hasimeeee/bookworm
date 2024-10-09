function showReading() {
    var readingText = document.getElementById("readingText");
    readingText.classList.toggle("show");
}

function redirectToPage() {
    const selectedValue = document.getElementById("questionDropdown").value;
    console.log("Selected Question: " + selectedValue);
}