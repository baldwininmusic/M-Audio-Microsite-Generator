$(function() {
  // INITIALIZE FOUNDATION
  $(document).foundation();
  //INITIALIZE JET-MENU
  $().jetmenu({
    indicator: false
  });

  // NAV OVERLAY SCRIPTS
  // $('#nav-overlay-huge-menu').hide();
    $('.nav-overlay-close-button').on('click', function(){
      $('#nav-overlay-huge-menu').fadeOut(1000);
    });

    $('.jquery-open').on('click', function(e) {
        e.preventDefault();
      $('#nav-overlay-huge-menu').fadeIn(1000);
    });

  // $('.jquery-close').on('click', function() {
  //   $('#nav-overlay').fadeOut(1000);
  //   $('.hero-logo-jquery, .hero-h2-jquery').fadeTo(1000, 1);
  // });

  $('.nav-overlay-container').on('click', function() {
    $('#nav-overlay').fadeOut(1000);
    $('.hero-logo-jquery, .hero-h2-jquery').fadeTo(1000, 1);
  });

// SHRINKING NAV SCRIPTS
  $('.jetmenu').data('size','big').css('background', 'rgba(255,255,255,0.7');

  $(window).scroll(function(){
    if($(document).scrollTop() > 10)
    {
      if($('.jetmenu').data('size') === 'big')
      {
          $('.jetmenu').data('size','small').css('background', 'rgba(255,255,255,0.7');
          $('.jetmenu ul.dropdown').css('top', '60px');
          $('.jetmenu').stop().animate({
              height:'60px'
          },600);
      }
    }
    else
      {
        if($('.jetmenu').data('size') === 'small')
          {
            $('.jetmenu').data('size','big').css('background', 'rgba(255,255,255,0.7');
            $('.jetmenu ul.dropdown').css('top', '80px');
            $('.jetmenu').stop().animate({
                height:'80px'
            },600);
          }
      }
  });


  // SEARCH BAR
    $('#search-bar').hide();

    $('.ion-ios-search').on('click', function(e) {
      e.preventDefault();
      $('#search-bar').fadeIn(500);
    });

    $('.ion-ios-close-outline').on('click', function() {
      $('#search-bar').fadeOut(500);
    });


  // HERO CAROUSEL
    $('.hero-carousel').slick({
      dots: true,
      infinite: true,
      speed: 2000,
      fade: true,
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      cssEase: 'linear'
    });

  // CATEGORIES GRID ON HOMEPAGE

  // GRID #1
  $('.grid-img-1').on('mouseenter', function(){
    $('.grid-img-1 .overlay').stop().fadeOut(500);
    $('.grid-img-1 .grid-h4').stop().fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-1 .overlay').stop().fadeIn(500);
    $('.grid-img-1 .grid-h4').stop().fadeIn(500);
  });
  // GRID #2
  $('.grid-img-2').on('mouseenter', function(){
    $('.grid-img-2 .overlay').stop().fadeOut(500);
    $('.grid-img-2 .grid-h4').stop().fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-2 .overlay').stop().fadeIn(500);
    $('.grid-img-2 .grid-h4').stop().fadeIn(500);
  });
  // GRID #3
  $('.grid-img-3').on('mouseenter', function(){
    $('.grid-img-3 .overlay').stop().fadeOut(500);
    $('.grid-img-3 .grid-h4').stop().fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-3 .overlay').stop().fadeIn(500);
    $('.grid-img-3 .grid-h4').stop().fadeIn(500);
  });
  // GRID #4
  $('.grid-img-4').on('mouseenter', function(){
    $('.grid-img-4 .overlay').stop().fadeOut(500);
    $('.grid-img-4 .grid-h4').stop().fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-4 .overlay').stop().fadeIn(500);
    $('.grid-img-4 .grid-h4').stop().fadeIn(500);
  });
  // GRID #5
  $('.grid-img-5').on('mouseenter', function(){
    $('.grid-img-5 .overlay').stop().fadeOut(500);
    $('.grid-img-5 .grid-h4').stop().fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-5 .overlay').stop().fadeIn(500);
    $('.grid-img-5 .grid-h4').stop().fadeIn(500);
  });
  // GRID #6
  $('.grid-img-6').on('mouseenter', function(){
    $('.grid-img-6 .overlay').stop().fadeOut(500);
    $('.grid-img-6 .grid-h4').stop().fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-6 .overlay').stop().fadeIn(500);
    $('.grid-img-6 .grid-h4').stop().fadeIn(500);
  });
  // GRID #7
  $('.grid-img-7').on('mouseenter', function(){
    $('.grid-img-7 .overlay').stop().fadeOut(500);
    $('.grid-img-7 .grid-h4').stop().fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-7 .overlay').stop().fadeIn(500);
    $('.grid-img-7 .grid-h4').stop().fadeIn(500);
  });
  // GRID #8
  $('.grid-img-8').on('mouseenter', function(){
    $('.grid-img-8 .overlay').stop().fadeOut(500);
    $('.grid-img-8 .grid-h4').stop().fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-8 .overlay').stop().fadeIn(500);
    $('.grid-img-8 .grid-h4').stop().fadeIn(500);
  });

// PRODUCT PAGE HERO CAROUSEL
  $('.product-carousel').slick({
      dots: true,
      infinite: true,
      speed: 2000,
      fade: true,
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      cssEase: 'linear'
    });

// PRODUCT PAGE STICKY NAV LINKS SCRIPTS

  // PREVENT LINK GOING TO TOP OF PAGE
    $('.sticky-nav-link').click(function(e){
      e.preventDefault();
    });

    $('#product-page-features').hide();
    $('#product-page-requirements').hide();
    $('#product-page-media').hide();
    $('#comparison-chart').hide();
    $('#product-page-downloads').hide();

    $('#product-overview').on('click', function(){
      $('.product-content-jquery').stop().fadeTo('slow',0).hide();
      $('#product-page-overview').delay(300).stop().fadeTo('slow',1);
    });

    $('#product-features').on('click', function(){
      $('.product-content-jquery').stop().fadeTo('slow',0).hide();
      $('#product-page-features').stop().delay(300).fadeTo('slow',1);
    });

    $('#product-requirements').on('click', function(){
      $('.product-content-jquery').stop().fadeTo('slow',0).hide();
      $('#product-page-requirements').stop().delay(300).fadeTo('slow',1);
    });

    $('#product-media').on('click', function(){
      $('.product-content-jquery').stop().fadeTo('slow',0).hide();
      $('#product-page-media').delay(300).stop().fadeTo('slow',1);
    });

    $('#product-downloads').on('click', function(){
      $('.product-content-jquery').stop().fadeTo('slow',0).hide();
      $('#product-page-downloads').delay(300).stop().fadeTo('slow',1);
    });


  //LIGHT GALLERY
    $('#lightgallery').lightGallery({
      selector: 'a',
      mode: 'lg-fade'
    });

    $('#lightgallery-video').lightGallery({
      selector: 'a',
      mode: 'lg-fade'
    });

  // LIFESTYLE PRODUCT PAGES
    $('.lifestyle-hero-image-container').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        fade: true,
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: 'linear'
      });

  // ARTISTS PAGE HOVER SCRIPTS
    $('.artists-hover-div').hide();

    $('.artist-1').on('mouseenter', function() {
      $('.artist-1-hover').show();
    }).on('mouseleave', function() {
      $('.artists-hover-div').hide();
    });

    $('.artist-2').on('mouseenter', function() {
      $('.artist-2-hover').show();
    }).on('mouseleave', function() {
      $('.artists-hover-div').hide();
    });

    $('.artist-3').on('mouseenter', function() {
      $('.artist-3-hover').show();
    }).on('mouseleave', function() {
      $('.artists-hover-div').hide();
    });

    $('.artist-4').on('mouseenter', function() {
      $('.artist-4-hover').show();
    }).on('mouseleave', function() {
      $('.artists-hover-div').hide();
    });

    $('.artist-5').on('mouseenter', function() {
      $('.artist-5-hover').show();
    }).on('mouseleave', function() {
      $('.artists-hover-div').hide();
    });

    $('.artist-6').on('mouseenter', function() {
      $('.artist-6-hover').show();
    }).on('mouseleave', function() {
      $('.artists-hover-div').hide();
    });


// M-Tracks Hover SCRIPTS
  $('.hover-content-1').hide();
  $('.m-track-container-1').on('mouseenter', function() {
    $('.hover-content-1').fadeIn(400);
  }).on('mouseleave', function() {
    $('.hover-content-1').fadeOut(400);
  });

  $('.hover-content-2').hide();
  $('.m-track-container-2').on('mouseenter', function() {
    $('.hover-content-2').fadeIn(400);
  }).on('mouseleave', function() {
    $('.hover-content-2').fadeOut(400);
  });

  $('.hover-content-3').hide();
  $('.m-track-container-3').on('mouseenter', function() {
    $('.hover-content-3').fadeIn(400);
  }).on('mouseleave', function() {
    $('.hover-content-3').fadeOut(400);
  });




}); // CLOSING OF $(function() {
