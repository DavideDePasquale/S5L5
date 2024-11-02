const header = document.querySelector("header");
const button = document.getElementById("headBtn");
const ricerca = document.querySelector(".ricerca");

window.addEventListener("scroll", () => {
    if (window.scrollY>464) {
        header.classList.add("scrollare")
        button.style.backgroundColor="#1a8917";
    } else {
        header.classList.remove("scrollare");
        button.style.backgroundColor="black";
    }
});
window.addEventListener("scroll",()=> {
  const scrollTop = window.scrollY;
    if(scrollTop>=790){
        ricerca.style.position="fixed";
        ricerca.style.top= "56.7px";
        ricerca.style.marginLeft= "57.8%";
    } else {
        ricerca.style.position="unset";
        ricerca.style.top="0px";
        ricerca.style.marginLeft="";
    }
    })