 //API URL
 const api = "https://api.quotable.io/random";

 //select DOM elements
const quote = document.getElementById("quote");
const quoteBox = document.querySelector(".quote-box")
const author = document.getElementById("author");
const theme = document.getElementById("theme");
const body = document.querySelector("body");
const submit = document.getElementById("btn");

//theme change
const themeChange=()=>{
    if(theme.innerText === "wb_sunny"){
        theme.innerText = "dark_mode"
        body.style.backgroundColor = "black"
        quote.style.backgroundColor = "black"
        quote.style.color = "white"
        submit.style.backgroundColor = "black"
        submit.style.color = "white"
        submit.style.borderColor = "white"
        theme.style.color = "rgb(68, 122, 248)"

    }else{
        theme.innerText = "wb_sunny"
        body.style.backgroundColor = "white"
        quote.style.backgroundColor = "white"
        quote.style.color = "black"
        submit.style.backgroundColor = "white"
        submit.style.color = "black"
        submit.style.borderColor = "black"
        theme.style.color = "rgb(218, 218, 2)"
    }
}

//updating data from api to DOM
const updateDOM = (data)=>{
    quote.innerText = data.content
    author.innerText = data.author
    submit.disabled = false;
    submit.style.opacity = "1"
    submit.innerText = 'GENERATE'
}

//fetch quote
const getQuote = async()=>{
    try{
        submit.disabled = true;
        submit.innerText = 'Processing...';
        submit.style.opacity = "0.5";
        const response = await fetch(api);
        const data = await response.json();
        updateDOM(data);
    }catch(err){
        console.error(err);
    }
}

