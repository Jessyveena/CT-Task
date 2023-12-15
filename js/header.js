$(document).ready(function(){
    $(window).scroll(function(e){
        if ($(window).scrollTop() > 92) {
            $('.header').addClass('white-bg')
        } else {
            $('.header').removeClass('white-bg')
        }
    });
});