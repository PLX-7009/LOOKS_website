document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links (optional)
    // ... (any existing smooth scroll code can remain) ...

    // The alert for "Book Now" buttons on services.html is no longer needed
    // as they are now actual links. You can remove the following block:
    /*
    const bookButtons = document.querySelectorAll('.book-btn'); // This class might still be on the <a> tags
    bookButtons.forEach(button => {
        // If .book-btn is only on <a> tags now, this event listener might still fire
        // but is redundant if the primary action is navigation.
        // If you converted <button> to <a>, ensure this doesn't interfere or remove it.
        button.addEventListener('click', function(event) {
            // If you want to PREVENT the default link behavior and do something else,
            // you would use event.preventDefault(). But here, we WANT the link to work.
            // So, this specific listener for alerts should be removed.
            // alert('Redirecting to booking system (not implemented in this demo).');
        });
    });
    */

    console.log("LOOKS Barbershop website script loaded.");

    // Example: Add a subtle hover effect to service boxes using JS (though CSS is usually better for this)
    const serviceBoxes = document.querySelectorAll('.service-box');
    serviceBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            // console.log('Mouse entered service box');
        });
        box.addEventListener('mouseleave', () => {
            // console.log('Mouse left service box');
        });
    });
});