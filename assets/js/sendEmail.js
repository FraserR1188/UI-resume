function sendMail(contactForm) {
    emailjs.send("service_v94q7lv", "robbie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            conaole.log("SUCCESS", response);
        }, 
        function(error) {
            console.log("FAILED", error);
        }
    )
    return false;
}