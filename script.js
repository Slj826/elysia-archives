const cards =
document.querySelectorAll(".character-card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
});

});
window.onload = function() {
    history.replaceState(
        null,
        null,
        window.location.pathname
    );
};

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.body.classList.remove("intro-lock");

        document.getElementById("intro-screen").remove();

        document.querySelector(".page-content")
        .classList.add("show");

    },5000);

});