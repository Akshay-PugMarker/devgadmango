/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



jQuery(document).ready(function () {
    jQuery('.pm-banner-image').slick({
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });



    jQuery('.why-devgad-mangoes-vedio').slick({
        infinite: false,
        dots: true,
        arrows: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]

    });

    jQuery('.pm-testimonial-slider').slick({
        infinite: false,
        dots: true,
        arrows: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]
    });

    jQuery('.slick-next').text("");
    jQuery('.slick-prev').text("");

    // video popup
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });


    jQuery(".navbar-toggler").on('click', function () {
        jQuery("#pm-mobile-nav").css('height', '100vh');
    });

    jQuery(".closebtn").on('click', function () {
//        jQuery("body").css('overflow', 'hidden');
        jQuery("#pm-mobile-nav").css('height', '0px');
    });

});


window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        if (document.getElementById("pm-nav-button")) {
            document.getElementById("pm-nav-button").style.top = "0px";
        }
    } else {
        if (document.getElementById("pm-nav-button")) {
            document.getElementById("pm-nav-button").style.top = "-1000px";
        }

    }
}
    