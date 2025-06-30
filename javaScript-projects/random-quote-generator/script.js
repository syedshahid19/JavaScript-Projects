const quoteWrapper = document.querySelector(".quote-wrapper");
const refreshBtn = document.querySelector(".refresh-btn");
const loaderText = document.querySelector(".loader");

function showLoader(){
    loaderText.classList.add("show");
    quoteWrapper.classList.add("hide");
}

function removeLoader(){
    loaderText.classList.remove("show");
    quoteWrapper.classList.remove("hide");
}

function fetchRandomQuote(){
    showLoader();
    fetch("https://dummyjson.com/quotes/random")
    .then((response)=>response.json())
    .then((result)=>{
        if (result){
            removeLoader();
            displayQuote(result)
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

// async function displayRandomQuote (){
//     const response = await fetch("https://dummyjson.com/quotes/random");
//     const result = await response.json();
//     displayQuote(result)
// }

function displayQuote(getQuote){
    console.log("get", getQuote);
    quoteWrapper.innerHTML = `
        <div class="quote-item">
                <h3 id="quote">${getQuote.quote}</h3>
                <p id="author">${getQuote.author}</p>
        </div>
    `
}

fetchRandomQuote();

refreshBtn.addEventListener("click", ()=>{
    fetchRandomQuote()
})

