// const BASE_URL="https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters";
const loginbutton=document.querySelector(".right .log button");
let loginpage=document.querySelector(".login");
const closebutton=document.querySelector(".close button");
let quote=document.querySelector(".container .quote");
let select=document.querySelector(".discover select");
const arrow=document.querySelector(".discover i");
const bars=document.querySelector(".right .btn button");
let dropdown=document.querySelector(".dropdown ul");
const button=document.querySelector(".arrow");
const body=document.querySelector("body");
let container=document.querySelector(".container");

loginbutton.addEventListener("click", (evt)=>{
    evt.preventDefault();
    loginpage.style.display="inline-block";
    quote.style.zIndex="0";
    loginpage.style.zIndex="1";
});

window.onclick = (evt) => {
    evt.preventDefault();
    if(evt.target==loginpage){
        loginpage.style.display="none";
        quote.style.position="absolute";
    }
};

closebutton.addEventListener("click",(evt)=>{
    evt.preventDefault();
    loginpage.style.display="none";
    quote.style.position="absolute";
});

bars.addEventListener("click",(evt)=>{
    evt.preventDefault();
    dropdown.style.display="block";
});

window.onclick = (evt) =>{
    evt.preventDefault();
    if(evt.target==container || evt.target==bars){
        dropdown.style.display="none";
    }
}

