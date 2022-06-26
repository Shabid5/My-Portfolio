$(document).ready(function () {
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 5) {
            $(".nav-bar").addClass("sticky");
        } else {
            $(".nav-bar").removeClass("sticky");
        }

        if (scrolling > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }

    });

    // Slide UP 
    $(".scroll-up-btn").click(function(){
        $('html').animate({scrollTop: 0});
    });

    // TOGGLE 
    $('.menu-btn').click(function () {
        $('.nav-bar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });


    // TYPED 
    var typed = new Typed(".typing", {
        strings: ["Developer", "Web-Designer", "Programmer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Web-Designer", "Programmer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });


    // owl carousel script 
    $('.carousell').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            }
        }

    });
});