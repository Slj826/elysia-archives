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