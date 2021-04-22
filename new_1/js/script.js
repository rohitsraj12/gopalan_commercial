$(document).ready(function(){

    // document.getElementsByClassName("banner__video").controls = true;
    //sub navigation slider 
    $(".nav__list").click(function(){
      $(this).find(".sub__nav").slideToggle();
    });


    // var wrap = $("#body-header");
    // wrap.on("scroll", function(e) {
    
    //   if (this.scrollTop > 200) {
    //     wrap.addClass("fix-search");
    //   } else {
    //     wrap.removeClass("fix-search");
    //   }
    // });

    // scroll down fixed body header 
      // $(window).scroll(function() {    
      //     var scroll = $(window).scrollTop();
      
      //     if (scroll >= 600) {
      //         $("#body-header").addClass("header-fixed");
      //     } else {
      //         $("#body-header").removeClass("header-fixed");
      //     }

      //     if(scroll >= 600){
      //       $("#fixed-button").removeClass("hide");
      //     } else {
      //       $("#fixed-button").addClass("hide");
      //     }
      // });

    /* *******************************

      #locations page gallery section 

      - location page form close button
      - location form hide and show

   ********************************** */ 
    // location page form close button
    // $(".close").click(function(){
    //     $(".modal").fadeOut(400);
    //     $(".form__wrap").fadeOut(400);
    // });

    // $(".show__phone").click(function(){
    //     $(".modal").fadeIn(400);
    // });

    // location form hide and show
    $('#show-form').click(function(){
      $('.gallery__form-wrap').toggleClass('form__hide');
    });

    // location page form close button
    $('#btn-close').click(function(){
      $('.gallery__form-wrap').toggleClass('form__hide');
    });
    

    /**************************************
     * 
     *  faq toggle section
     * 
    ************************************* */
   // faq toggle
    $('.faq__header').click(function(){
      $('.faq__ans').slideUp(300);
      $('.fa-angle-down').css('transform', 'rotate(0deg)');
      $(this).parent().find('.faq__ans').slideToggle(300);
      $(this).parent().find('.fa-angle-down').css('transform', 'rotate(180deg)');
    });


    /*****************************************
    * 
    *   Price type capture and pass data in form
    * 
    **************************************** */ 
    $('.price__quote').click(function(){
      var catchPriceType = $(this).attr("data-price-type");
      // var catchLocation = $(this).attr("data-location");

      $('#price-quote').text(catchPriceType);
      $('#input-price').val(catchPriceType);
      console.log(catchPriceType);
      // console.log(catchLocation);
    })

    // $('.price__quote').hide();

    /*****************************************
    * 
    *   google review read more and less iems
    * 
    **************************************** */ 

    // google review read more button
    $(".load__review-btn > .btn__link").click(function(){
      $(".load__review").removeClass('hide');
      $(this).text('Load Less..');
      $(this).parent().removeClass('load__review-btn');
      $(this).parent().addClass('less__review-btn');
    });


    /* **********************************
    
      #slider
      - 1 home page location slider
      - 2 testimonial slider
    
    ************************************ */ 

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
    // stagePadding: 1,
    loop:true,
    margin:20,
    nav:true,
    // animateOut: 'slideOutUp',
    // animateIn: 'slideInUp',
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

  // -------------------------------------------------------------------------

    
    // 2nd slider testimonial
    var $owl = $('.section__testimonial .owl-carousel');

    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
      // center: true,
      loop: true,
      items: 3,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,

        dots: true,
      // autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },

    }
    });

    $(document).on('click', '.owl-item>div', function() {
      // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
      var $speed = 300;  // in ms
      $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
    });

    $('.event__block').hover(function(){
      $('.community__front > .gallery__block').toggleClass('gallery__block-body');
    });

  // ---------------------------------------------------------------------------------
  
  
  // 3slider
    var $owl = $('.section__location .owl-carousel');

    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
      center: true,
      loop: true,
      items: 3,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });




















    // typing effect for banner

    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };
})