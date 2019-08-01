//
// theme.js
// Theme JavaScript
//

/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar-fixed-on-scroll').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("bg-white fixed-top border-bottom");
    }else{
        $('.navbar').removeClass("bg-white fixed-top border-bottom");
    }
}

if($('.navbar-fixed-on-scroll').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}