// script.js
const quotes = [
    "“The only limit to our realization of tomorrow is our doubts of today.” – Franklin D. Roosevelt",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.” – Winston Churchill",
    "“The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.” – Ralph Waldo Emerson",
    "“In the end, we will remember not the words of our enemies, but the silence of our friends.” – Martin Luther King Jr.",
    "“You must be the change you wish to see in the world.” – Mahatma Gandhi",
    "“It does not matter how slowly you go as long as you do not stop.” – Confucius",
    "“You miss 100% of the shots you don’t take.” – Wayne Gretzky",
    "“Believe you can and you're halfway there.” – Theodore Roosevelt"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

