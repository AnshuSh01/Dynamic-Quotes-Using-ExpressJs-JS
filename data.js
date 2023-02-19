const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
let dynamicdata = "", data = "", unknown = "Unknown";
const btn = document.getElementById('newquote');

const getquotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        dynamicdata = await data.json();
        getNewQuotes();
    } catch (error) {
        quotes.innerHTML = "Error Occured";
    }

}
getquotes();

const getNewQuotes = () => {
    let rand = Math.floor(Math.random() * 100);
    data = dynamicdata[rand];
    quotes.innerHTML = `Quote: ${data.text}`;
    data.author == null ? author.innerHTML = `Author: ${unknown}` : author.innerHTML = `Author: ${data.author}`;

}

