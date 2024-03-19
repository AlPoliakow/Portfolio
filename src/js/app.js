const contactButton = document.querySelector("#contact-me button");

contactButton.addEventListener("mouseover", function(){
    contactButton.classList.add("hover1");
    console.log("Hover registered");
});

