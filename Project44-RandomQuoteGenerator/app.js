const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorrEl = document.getElementById("author");
const apiURL = "http://api.quotable.io/random";

async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorrEl.innerText = "Updating...";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorrEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happend,try again later";
    authorrEl.innerText = "An error happend";
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
  }
}

btnEl.addEventListener("click", getQuote);
