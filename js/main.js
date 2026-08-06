// ===============================
// Menu Mobile
// ===============================

const menu = document.querySelector(".menu");
const mobile = document.querySelector(".menu-mobile");

mobile.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// ===============================
// Fecha menu ao clicar
// ===============================

document.querySelectorAll(".menu a").forEach(item => {

    item.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

// ===============================
// Header Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background="rgba(5,8,22,.95)";

    }else{

        header.style.background="rgba(5,8,22,.75)";

    }

});

// ===============================
// Scroll Reveal
// ===============================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll("section,.card,.project,.item").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ===============================
// Botão Voltar ao Topo
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML="↑";

topButton.className="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("visible");

}else{

topButton.classList.remove("visible");

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// Digitação
// ===============================

const title=document.querySelector(".hero h2");

const texto="DBA • Desenvolvedor • Analista de Dados";

let i=0;

function digitar(){

if(i<texto.length){

title.innerHTML+=texto.charAt(i);

i++;

setTimeout(digitar,60);

}

}

title.innerHTML="";

digitar();

// ===============================
// Copyright
// ===============================

document.querySelector("footer p").innerHTML=

`© ${new Date().getFullYear()} Randolph Del Aguila`;