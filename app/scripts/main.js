$(function() {

  // NAV OVERLAY SCRIPTS
  $('#nav-overlay').hide();

  $('.jquery-open').on('click', function(e) {
      e.preventDefault();
    $('#nav-overlay').fadeIn(1000);
    $('.hero-logo-jquery, .hero-h2-jquery').fadeTo(1000, 0);
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
  $('.nav-container').data('size','big').css('background', 'rgba(255,255,255,0.7');

  $(window).scroll(function(){
    if($(document).scrollTop() > 80)
    {
      if($('.nav-container').data('size') === 'big')
      {
          $('.nav-container').data('size','small').css('background', 'rgba(255,255,255,0.7');
          $('.nav-container').stop().animate({
              height:'60px'
          },600);
      }
    }
    else
      {
        if($('.nav-container').data('size') === 'small')
          {
            $('.nav-container').data('size','big').css('background', 'rgba(255,255,255,0.7');
            $('.nav-container').stop().animate({
                height:'80px'
            },600);
          }
      }
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
    $('.grid-img-1 .overlay').fadeOut(500);
    $('.grid-img-1 .grid-h4').fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-1 .overlay').fadeIn(500);
    $('.grid-img-1 .grid-h4').fadeIn(500);
  });
  // GRID #2
  $('.grid-img-2').on('mouseenter', function(){
    $('.grid-img-2 .overlay').fadeOut(500);
    $('.grid-img-2 .grid-h4').fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-2 .overlay').fadeIn(500);
    $('.grid-img-2 .grid-h4').fadeIn(500);
  });
  // GRID #3
  $('.grid-img-3').on('mouseenter', function(){
    $('.grid-img-3 .overlay').fadeOut(500);
    $('.grid-img-3 .grid-h4').fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-3 .overlay').fadeIn(500);
    $('.grid-img-3 .grid-h4').fadeIn(500);
  });
  // GRID #4
  $('.grid-img-4').on('mouseenter', function(){
    $('.grid-img-4 .overlay').fadeOut(500);
    $('.grid-img-4 .grid-h4').fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-4 .overlay').fadeIn(500);
    $('.grid-img-4 .grid-h4').fadeIn(500);
  });
  // GRID #5
  $('.grid-img-5').on('mouseenter', function(){
    $('.grid-img-5 .overlay').fadeOut(500);
    $('.grid-img-5 .grid-h4').fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-5 .overlay').fadeIn(500);
    $('.grid-img-5 .grid-h4').fadeIn(500);
  });
  // GRID #6
  $('.grid-img-6').on('mouseenter', function(){
    $('.grid-img-6 .overlay').fadeOut(500);
    $('.grid-img-6 .grid-h4').fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-6 .overlay').fadeIn(500);
    $('.grid-img-6 .grid-h4').fadeIn(500);
  });
  // GRID #7
  $('.grid-img-7').on('mouseenter', function(){
    $('.grid-img-7 .overlay').fadeOut(500);
    $('.grid-img-7 .grid-h4').fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-7 .overlay').fadeIn(500);
    $('.grid-img-7 .grid-h4').fadeIn(500);
  });
  // GRID #8
  $('.grid-img-8').on('mouseenter', function(){
    $('.grid-img-8 .overlay').fadeOut(500);
    $('.grid-img-8 .grid-h4').fadeOut(500);
  }).on('mouseleave', function(){
    $('.grid-img-8 .overlay').fadeIn(500);
    $('.grid-img-8 .grid-h4').fadeIn(500);
  });


// PRODUCT PAGE
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

  //LIGHT GALLERY
    $("#lightgallery").lightGallery({
      mode: 'lg-fade'
    });

}); // CLOSING OF $(function() {
