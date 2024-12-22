document.addEventListener("DOMContentLoaded", () => {
    const quoteDisplay = document.getElementById("quote");
    const generateQuoteBtn = document.getElementById("generate-quote");
    const categorySelect = document.getElementById("quote-category");

    let quotes = {};

    // Load the quotes JSON file
    fetch('quotes.json')
        .then(response => response.json())
        .then(data => {
            quotes = data;
            console.log("Quotes loaded:", quotes); // Debugging to ensure quotes are loaded
        })
        .catch(error => console.error('Error fetching quotes:', error));

    // Generate a random quote based on the selected category
    const generateQuote = () => {
        const selectedCategory = categorySelect.value;
        console.log("Selected category:", selectedCategory); // Debugging
        let selectedQuotes = [];

        if (selectedCategory && quotes[selectedCategory]) {
            selectedQuotes = quotes[selectedCategory];
        } else if (!selectedCategory) {
            // Combine all quotes if "Random" is selected
            selectedQuotes = Object.values(quotes).flat();
        }

        if (selectedQuotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * selectedQuotes.length);
            const randomQuote = selectedQuotes[randomIndex];
            quoteDisplay.textContent = `"${randomQuote.quote}" — ${randomQuote.author}`;
        } else {
            quoteDisplay.textContent = "No quotes available.";
        }
    };

    // Event listener for the button
    generateQuoteBtn.addEventListener("click", generateQuote);
});
