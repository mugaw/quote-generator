document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate-quote');
    const quoteElement = document.getElementById('quote');
    const categorySelect = document.getElementById('quote-category');

    // Multiple free quote APIs for redundancy
    const quoteApis = [
        {
            url: 'https://dummyjson.com/quotes/random',
            handler: (data) => ({
                quote: data.quote,
                author: data.author || 'Unknown'
            })
        },
        {
            url: 'https://api.adviceslip.com/advice',
            handler: (data) => ({
                quote: data.slip.advice,
                author: 'Advice Slip'
            })
        }
    ];

    function generateQuote() {
        // Choose a random API endpoint
        const currentApi = quoteApis[Math.floor(Math.random() * quoteApis.length)];

        fetch(currentApi.url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Process quote using the specific API's handler
                const processedQuote = currentApi.handler(data);
                
                // Display the quote
                quoteElement.textContent = `"${processedQuote.quote}" — ${processedQuote.author}`;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteElement.textContent = 'Unable to fetch a quote. Please try again.';
            });
    }

    // Add event listeners
    generateButton.addEventListener('click', generateQuote);
    generateButton.addEventListener('touchstart', generateQuote);

    // Generate initial quote on page load
    generateQuote();
});