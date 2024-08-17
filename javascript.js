document.getElementById('generate-quote').addEventListener('click', function() {
    generateQuote();
});

document.getElementById('generate-quote').addEventListener('touchstart', function() {
    generateQuote();
});

async function generateQuote() {
    const category = document.getElementById('quote-category').value;
    let url = 'https://api.quotable.io/random';
    
    if (category) {
        url += `?tags=${category}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('quote').textContent = `"${data.content}" — ${data.author}`;
    } catch (error) {
        document.getElementById('quote').textContent = 'Failed to fetch a new quote. Please try again.';
    }
}

document.getElementById('generate-quote').addEventListener('click', generateQuote);