$(document).ready(function(){
    const mediaQuery = window.innerWidth;

    if(mediaQuery < 574){
        // console.log("mobile device style");
        
        //hide scroll class from mobile device
        $('section').removeClass('scroll');
        
        // hamberger mobile navigation
        $("#hamberger").click(function(){
            $("#header-nav").slideToggle();
        })

        $(".footer__fixed").addClass("hide");

        // fixed load after 1000px scroll
        $(window).scroll(function () {
            var height = $(window).height();
        
            if ($(window).scrollTop() > height) {
            $(".footer__fixed").removeClass("hide");
        
            } else {
            $(".footer__fixed").addClass("hide");
            }
        });

        // scroll up to show body header
        var prevScrollpos = window.pageYOffset;

        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;

            if (prevScrollpos > currentScrollPos) {
                // console.log('up');
                $("#body-header").addClass('header-fixed');
                $("#body-header").removeClass('body__header');
            } else {
                // console.log('down');
                $("#body-header").removeClass('header-fixed');
                $("#body-header").addClass('body__header');

            }
            prevScrollpos = currentScrollPos;
        }

    } else if ((mediaQuery < 768)){
        
        //hide scroll class from mobile device
        $('section').removeClass('scroll');

        
        // console.log("tab device style");
        $(".footer__fixed").addClass("hide");

        // fixed load after 1000px scroll
        $(window).scroll(function () {
            var height = $(window).height();
        
            if ($(window).scrollTop() > height) {
            // console.log("hi");
            $(".footer__fixed").removeClass("hide");
        
            } else {
            // console.log("hello");
            $(".footer__fixed").addClass("hide");
            }
        });

    } else {
        console.log("large device style");

        $(function() {
            $.scrollify({
                section : ".scroll",
                // interstitialSection : ".body__footer",
                easing: "easeOutExpo",
                scrollSpeed: 100,
                offset : 0,
                scrollbars: true,
                standardScrollElements: "",
                updateHash: true,
                touchScroll:true,
                // before:function() {},
                // after:function() {},
                // afterResize:function() {},
                // afterRender:function() {}
            });
        });

        $(window).scroll(function () {
            var height = $(window).height();
        
            if ($(window).scrollTop() > 800) {
                // after scroll 800px show hamberger
                $('.hamberger').css('display', 'block');

                $(".hamberger").click(function(){
                    $("#body-header").addClass('body__header__scroll');
                    $("#body-header").removeClass('body__header');
                    // alert(0);
                })
                
            } else {
                // lesser then 800px hide hamberger
                $('.hamberger').css('display', 'none');
                $("#body-header").removeClass('body__header__scroll');
                $("#body-header").addClass('body__header');
            }
        });
    }

    // fixed load after 1000px scroll
    $(window).scroll(function () {
        var height = $(window).height();
    
        if ($(window).scrollTop() > 800) {
        //   console.log("hi");
          $(".fixed__bottom").removeClass("hide");
            
        //   $('.hamberger').css('display', 'block')
        } else {
        //   console.log("hello");
          $(".fixed__bottom").addClass("hide");
            
        // $('.hamberger').css('display', 'none')

        }
    });
})

/***************************************
 * 
 *  #home page location slider
 *  - large screen 
 *      2 images visible
 *      right side scroll button
 *     
 *  - small screen
 *      1 image visible
 *
 ************************************** */   
  $('.section__location-slider .owl-carousel').owlCarousel({
    stagePadding: 1,
    loop:true,
    margin:20,
    nav:true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    navText:["<div class='d-none nav-btn prev-slide'></div>","<div class='nav-btn next-slide'><span class='link__icon'>&#8594;</span></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2.3
        }
    }
})

$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});

// gallery slider
$('.section__gallery-slider .owl-carousel').owlCarousel({
    stagePadding: 1,
    loop:true,
    margin:20,
    nav:true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    navText:["<div class='d-none nav-btn prev-slide'></div>","<div class='nav-btn next-slide'><span class='link__icon'>&#8594;</span></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2.3
        }
    }
})

$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});