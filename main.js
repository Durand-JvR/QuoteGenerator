document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generateButton");
    const quoteText = document.getElementById("quoteText");


    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quote = quotes[randomIndex].quote;
        author = quotes[randomIndex].author; 
        quoteText.textContent = quote + " - " + author;
    }

    generateQuote();
    generateButton.addEventListener("click", generateQuote);
});