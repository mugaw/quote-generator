document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate-quote');
    const quoteElement = document.getElementById('quote');
    const categorySelect = document.getElementById('quote-category');

    function generateQuote() {
        const category = categorySelect.value;
        let url = 'https://api.quotable.io/random';
        
        if (category) {
            url += `?tags=${category}`;
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                quoteElement.textContent = `"${data.content}" — ${data.author}`;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteElement.textContent = 'Failed to fetch a new quote. Please try again.';
            });
    }

    // Single event listener for multiple interaction types
    generateButton.addEventListener('click', generateQuote);
    generateButton.addEventListener('touchstart', generateQuote);
});