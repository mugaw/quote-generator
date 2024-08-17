async function generateQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').textContent = `"${data.content}" — ${data.author}`;
    } catch (error) {
        document.getElementById('quote').textContent = 'Failed to fetch a new quote. Please try again.';
    }
}

document.getElementById('generate-quote').addEventListener('click', generateQuote);
