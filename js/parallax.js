$(document).ready(function(){
    $(window).scroll(function(e) {
        if ($(window).scrollTop() > 80) {
            var offset = $(window).scrollTop() - 80;
            $('.hero--text').css({'-webkit-transform':'translateY(' + offset + 'px)'})
        } else if ($(window).scrollTop() == 0) {
            $('.hero--text').css({'-webkit-transform':'translateY(0px)'})
        }
    });
});