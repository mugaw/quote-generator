document.addEventListener("DOMContentLoaded", () => {
    const quoteDisplay = document.getElementById("quote");
    const generateQuoteBtn = document.getElementById("generate-quote");

    let quotes = [];

    // Load the quotes JSON file
    fetch('all_quotes.json')
        .then(response => response.json())
        .then(data => {
            quotes = data;
        })
        .catch(error => console.error('Error fetching quotes:', error));

    // Generate a random quote
    const generateQuote = () => {
        if (quotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            quoteDisplay.textContent = `"${randomQuote.content}" — ${randomQuote.author}`;
        } else {
            quoteDisplay.textContent = "No quotes available.";
        }
    };

    // Event listener for the button
    generateQuoteBtn.addEventListener("click", generateQuote);
});
