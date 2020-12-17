$(document).ready(function() {
    // Initializes sidenav, which turns links into hamburger icon, when nav bar is resized
    $('.sidenav').sidenav();

    // Collecting all contact information and posting to database
    // node-mailer
    // how to loop repos, and resume as a pop-up
    const newContactForm = $(".newContact");
    newContactForm.on("submit", (event) => {
        event.preventDefault();
        console.log("I am clicking the submit button!");

        const fullname = $("#fullname").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();


        const newContact = {
            fullname, email, message
        };

        console.log(newContact);

        $.ajax("/api/contacts", {
            method: "POST",
            data: newContact
        }).then(() => {
            $("#fullname").val("");
            $("#email").val("");
            $("#message").val("");
        }).catch((err) => {
            console.log(err);
        });
    });
})