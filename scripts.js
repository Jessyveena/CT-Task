$(document).ready(function(){
    $(window).scroll(function(e){
        if ($(window).scrollTop() > 92) {
            $('.header').addClass('white-bg')
        } else {
            $('.header').removeClass('white-bg')
        }
    });
});

$(document).ready(function(){
    $('.ct-slider').slick({
        infinite: true,
        draggable: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });  
});

$(document).ready(function(){
    $(window).scroll(function(e){
        if ($(window).scrollTop() > 80) {
            var offset = $(window).scrollTop() - 80;
            $('.title--text').css({'-webkit-transform':'translateY(' + offset + 'px)'})
        } else if ($(window).scrollTop() == 0) {
            $('.title--text').css({'-webkit-transform':'translateY(0px)'})
        }
    });
});

$(document).ready(function(){
    $('.section-team--menu-item a').click(function(e){
        e.preventDefault();
        // Show active menu item
        var scheduleLink = $(this).attr('data-link');
        $('.section-team--menu-item').removeClass('active');
        $(this).parent().addClass('active');
        // Show active schedule
        $('.section-team--content-schedule').removeClass('fade-in');
        $('.section-team--content-schedule').addClass('fade-out');
        $('.' + scheduleLink).addClass('active')
        setTimeout(function(){
            $('.section-team--content-schedule:not(.' + scheduleLink + ')').removeClass('active');
            $('.' + scheduleLink).addClass('fade-in');
            $('.' + scheduleLink).removeClass('fade-out');
        }, 300);
    });
});