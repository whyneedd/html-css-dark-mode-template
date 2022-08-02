const modeLightAndDark = () => {
    var btn = document.querySelector(".modeBox__btn");
    var btnBox = document.querySelector(".modeBox__btnBox");

    btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            btnBox.classList.toggle("active");
            document.body.classList.toggle("dark");
        });
}
modeLightAndDark();