// accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


var link = document.querySelectorAll(".link");

link.forEach(element => {

    element.addEventListener('click', function(e) {

        let a = e.target.parentElement.parentElement.previousElementSibling.innerText;
        let b = e.target.innerText;

        title = a + "/" + b;

        document.getElementById("kursTitle").innerText = title;


        e.preventDefault();
    });
});