// Fade animation on scroll

const elements = document.querySelectorAll(
".card, .project, section"
);

function reveal() {

    elements.forEach(element => {

        const position =
        element.getBoundingClientRect().top;

        const screenHeight =
        window.innerHeight;

        if(position < screenHeight - 100){

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0)";
        }
    });
}

// Initial styles

elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
    "translateY(50px)";

    element.style.transition =
    "all 0.8s ease";
});

window.addEventListener("scroll", reveal);

reveal();

// Contact Form Demo

document
.querySelector("form")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
      "Thank you! Your message has been received."
    );

    this.reset();
});
