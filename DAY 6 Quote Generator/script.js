// api --> https://api.quotable.io/random

const quote = document.getElementById('quote');
const author = document.getElementById('author');

const apiURL = "https://api.quotable.io/random";

const getQuote = async (url)=> {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(apiURL);