$(document).ready(function() {
    "use strict"
    $(window).on("load", function() {
        $('.loader').fadeOut(500); // will fade out the black DIV that covers the website. 
        $('.wrapper').delay(500).css({'visibility':'visible'}); // Will display The all site
        $("body").delay(1000).css({'overflow-y':'visible'});
    });  

    $("header .navbar .navbar-nav a").on("click", function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop : $('#' + $(this).data('scroll')).offset().top + 2
        }, 1000);
    });

    if ($(window).width() > 992) {
        $(window).scroll(function() {

            if ($(window).scrollTop() > 200) {
                $("header.header-navbar .navbar-social").removeClass("d-lg-block");
                $("header.header-navbar").css({
                    'background-color':'#111',
                    'position':'fixed'
                });
            }else {
                $("header.header-navbar .navbar-social").addClass("d-lg-block");
                $("header.header-navbar").css({
                    'background-color':'transparent',
                    'position':'absolute'
                });
            }
            
            // Sync Sections To Navbar
            $('section').each(function() {
                if ($(window).scrollTop() > $(this).offset().top) {
                    var blockId = $(this).attr('id');
                    $("nav.navbar .navbar-nav a").removeClass("active");                
                    $('nav.navbar .navbar-nav a[data-scroll="' + blockId + '"]').addClass("active");
                }
            });
        
            
        });
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            $(".to-up").css({
                'display' : 'block'
            });
        }else {
            $(".to-up").css({
                'display' : 'none'
            });
        }
    });



    // Color Navbar links when click
    $("header nav.navbar .navbar-nav a").click(function () {
        // Start Add and Remove Active Class
        $(this).addClass("active").siblings().removeClass("active");
        // End Add and Remove Active Class 
    });

    // To Up Button
    $(".to-up").on("click", function() {
        $("html, body").animate({
            scrollTop : 0
        }, 1500);
    });

    $('.skitter-large').skitter({
        navigation: true,
        dots: false,
    });
    $(".our-food .owl-carousel").owlCarousel({
        responsive : {
            //breakpoint from 0 and up
            0 : {
                items : 1,
            },
            // breakpoint from 768 up
            768 : {
                items:2,
            },
            // breakpoint from 992 up
            992 : {
                items:3,
            },
        }
    });
    $(".reviews .owl-carousel").owlCarousel({
        responsive : {
            //breakpoint from 0 and up
            0 : {
                items : 1,
            }
        }
    });

    // Paroller Plugin for smothly moving backgrounds
    $('section.cover, section.projects, section.testimonial').paroller();
});