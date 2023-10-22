let emailSuccess = document.getElementById("email-success");
let emailFail = document.getElementById("email-fail");
let getTouch = document.getElementById("get-in-touch");
let contactForm = document.getElementById("contact-form");


function sendMail(contactForm) {
    emailjs.send("service_y10gf5i", "template_xjhz7bt", {
        "from_name": contactForm.name.value,
        "to_name": "Joanne",
        "user_email": contactForm.emailaddress.value,
        "message": contactForm.content.value,
    })
    .then (
        function(response) {
            console.log("SUCCESS", response);
            emailSuccess.classList.remove("hide");
            getTouch.classList.add("hide");
            contactForm.classList.add("hide");

        },
        function (error) {
            console.log("ERROR", error);
            emailFail.classList.remove("hide");
            getTouch.classList.add("hide");
        }
    ); return false;
}