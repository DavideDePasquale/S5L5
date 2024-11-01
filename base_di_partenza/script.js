const header = document.querySelector("header");
const button = document.getElementById("headBtn");
const ricerca = document.getElementsByClassName("ricerca")

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
    if (window.scrollY>550) {
       ricerca.classList.add("scrollata");
    } else {
        ricerca.classList.remove("scrollata");
    }
})