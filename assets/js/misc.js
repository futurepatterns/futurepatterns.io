// Change navbar background when hamburger is clicked
document.getElementById("hamburger").onclick = function() {
    if(window.scrollY==0){
        $('nav').toggleClass("color-white");
    }
};

// Close navbar when a link is clicked
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});