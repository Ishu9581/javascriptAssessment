const btnEl = document.getElementById("btn");
const contentEL = document.getElementById("quote");
const quoteauthorEl = document.getElementById("author");
const apiURL = "https://api.quotable.io/random";

async function getQuote(){
  try {
    
    btnEl.innerText = "Loading";
    btnEl.disabled=true;

    contentEL.innerText= "updatng..";
    quoteauthorEl.innerText = "updating..."
   
    const response = await fetch(apiURL);
    const data = await response.json();

    contentEL.innerText = data.content;
    quoteauthorEl.innerText = "~ " + data.author;

    btnEl.innerText = "New Quote";
    btnEl.disabled=false;
    
  } catch (error) {
    contentEL.innerText = "Sorry an error occured!!";
    quoteauthorEl.innerText = "Try again";

    btnEl.innerText = "New Quote";
    btnEl.disabled=false;
  }
  
}
btnEl.addEventListener("click", getQuote);
