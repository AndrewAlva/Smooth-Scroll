// Trigger functions when the initial HTML document
// has been completely loaded and parsed,
// without waiting for stylesheets, images, and
// subframes to finish loading
var lastSection;

document.addEventListener('DOMContentLoaded', function() {
    // Do something
    lastSection = document.getElementById('last-section');
});


// Trigger functions after page is completely loaded
window.onload = function() {
    // Do something, remove preloader perhaps
    console.log("Page fully loaded.");
    console.log("Initialize.js");

    // Init request animation frame
    RAF.init();

    var TestSmoothScroll = new SmoothScroll();
    RAF.add(TestSmoothScroll)
}