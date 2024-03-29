//const contactButton = document.querySelector("#contact-me button");
const notificationBar = document.querySelector(".notification-bar");
const closeNotification = document.querySelector(".notification-bar button");
const message = document.querySelector(".message");

closeNotification.addEventListener("click", function(e){
    e.preventDefault;
    notificationBar.classList.add("hide");
    message.innerText="";
    closeNotification.innerText="";
});


//contactButton.addEventListener("mouseover", function(e){
    //e.preventDefault;
   // contactButton.classList.add("hover1");
   // console.log("Hover registered");
//});




