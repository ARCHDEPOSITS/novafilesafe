document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");
    const url = "https://cdn.novacore.app/pass/encry/testing.txt"; // Replace with the URL of the file you want to fetch

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            contentDiv.textContent = text;
        })
        .catch(error => {
            contentDiv.textContent = `Failed to load content: ${error.message}`;
        });
});
