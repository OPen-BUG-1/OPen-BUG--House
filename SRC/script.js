var acc = document.getElementsByClassName("accordion");


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        console.log("click")
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
