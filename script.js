// script.js
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".indisponivel");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Este item está indisponível no momento.");
        });
    });
});
