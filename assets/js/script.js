$(document).ready(function() {
    // Initializes sidenav, which turns links into hamburger icon, when nav bar is resized
    $('.sidenav').sidenav();

    // Check screen size on page load and add/remove .valign-wrappert to About section
    if ($(window).width() <= 600) {
        $(".valign-row").removeClass("valign-wrapper");
    };

    if ($(window).width() > 601) {
        if ($(".valign-row").hasClass("valign-wrapper") === true) {
            return;
        } else {
            $(".valign-row").addClass("valign-wrapper");
        }
    }
})