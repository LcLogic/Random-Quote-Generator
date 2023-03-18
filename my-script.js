function getRandomQuote(arr){
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item  = arr[randomIndex];
  return item;
}

const quotes = [
  {
    quote: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  }
];

const generateQuoteButton = document.getElementById("generate-quote-button");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

generateQuoteButton.addEventListener("click", function() {
  const result = getRandomQuote(quotes);
  quoteText.textContent = result.quote;
  authorText.textContent = result.author;
});