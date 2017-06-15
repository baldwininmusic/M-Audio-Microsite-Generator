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


// Categories Slideshow
  $('.home-page-categories').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 4,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// Categories Hover SCRIPTS
  // NEW PRODCUTS
  $('.cat-container-1').on('mouseenter', function() {
    $('.new-products-overlay').toggleClass('cat-container-overlay-hover');
    $('.new-products-header').toggleClass('cat-container-header-hover');
  }).on('mouseleave', function() {
    $('.new-products-overlay').toggleClass('cat-container-overlay-hover');
    $('.new-products-header').toggleClass('cat-container-header-hover');
  });
  // USB AUDIO | MIDI INTERFACES
  $('.cat-container-2').on('mouseenter', function() {
    $('.usb-midi-overlay').toggleClass('cat-container-overlay-hover');
    $('.usb-midi-header').toggleClass('cat-container-header-hover');
  }).on('mouseleave', function() {
    $('.usb-midi-overlay').toggleClass('cat-container-overlay-hover');
    $('.usb-midi-header').toggleClass('cat-container-header-hover');
  });
  // KEYBOARD CONTROLLERS
  $('.cat-container-3').on('mouseenter', function() {
    $('.keyboard-controllers-overlay').toggleClass('cat-container-overlay-hover');
    $('.keyboard-controllers-header').toggleClass('cat-container-header-hover');
  }).on('mouseleave', function() {
    $('.keyboard-controllers-overlay').toggleClass('cat-container-overlay-hover');
    $('.keyboard-controllers-header').toggleClass('cat-container-header-hover');
  });
  // MONITORS | HEADPHONES
  $('.cat-container-4').on('mouseenter', function() {
    $('.monitors-headphones-overlay').toggleClass('cat-container-overlay-hover');
    $('.monitors-headphones-header').toggleClass('cat-container-header-hover');
  }).on('mouseleave', function() {
    $('.monitors-headphones-overlay').toggleClass('cat-container-overlay-hover');
    $('.monitors-headphones-header').toggleClass('cat-container-header-hover');
  });
  // MICROPHONES
  $('.cat-container-5').on('mouseenter', function() {
    $('.microphones-overlay').toggleClass('cat-container-overlay-hover');
    $('.microphones-header').toggleClass('cat-container-header-hover');
  }).on('mouseleave', function() {
    $('.microphones-overlay').toggleClass('cat-container-overlay-hover');
    $('.microphones-header').toggleClass('cat-container-header-hover');
  });
  // ACCESSORIES
  $('.cat-container-6').on('mouseenter', function() {
    $('.accessories-overlay').toggleClass('cat-container-overlay-hover');
    $('.accessories-header').toggleClass('cat-container-header-hover');
  }).on('mouseleave', function() {
    $('.accessories-overlay').toggleClass('cat-container-overlay-hover');
    $('.accessories-header').toggleClass('cat-container-header-hover');
  });
  // LEGACY
  $('.cat-container-7').on('mouseenter', function() {
    $('.legacy-overlay').toggleClass('cat-container-overlay-hover');
    $('.legacy-header').toggleClass('cat-container-header-hover');
  }).on('mouseleave', function() {
    $('.legacy-overlay').toggleClass('cat-container-overlay-hover');
    $('.legacy-header').toggleClass('cat-container-header-hover');
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

  // Product Page Hero Btn Hover SCRIPTS
    $('.find-a-dealer-btn').on('mouseenter', function() {
      $('.find-dealer-left-bracket, .find-dealer-right-bracket').show();
    }).on('mouseleave', function() {
      $('.find-dealer-left-bracket, .find-dealer-right-bracket').hide();
    });

    $('.buy-online-btn').on('mouseenter', function() {
      $('.buy-online-left-bracket, .buy-online-right-bracket').show();
    }).on('mouseleave', function() {
      $('.buy-online-left-bracket, .buy-online-right-bracket').hide();
    });

// PRODUCT PAGE STICKY NAV LINKS SCRIPTS

  // PREVENT LINK GOING TO TOP OF PAGE
    $('.sticky-nav-link').click(function(e){
      e.preventDefault();
    });

  // Add Brackets on active LINK
    $('#product-overview').on('click', function() {
      $('.product-page-nav-left-bracket').hide();
      $('.product-page-nav-right-bracket').hide();
      $('.overview-left-bracket').show();
      $('.overview-right-bracket').show();
    });
    $('#product-features').on('click', function() {
      $('.product-page-nav-left-bracket').hide();
      $('.product-page-nav-right-bracket').hide();
      $('.features-left-bracket').show();
      $('.features-right-bracket').show();
    });
    $('#product-media').on('click', function() {
      $('.product-page-nav-left-bracket').hide();
      $('.product-page-nav-right-bracket').hide();
      $('.media-left-bracket').show();
      $('.media-right-bracket').show();
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

  // Artists Page SCRIPTS
    // Artist #1
    $('.artist-1-overlay-container').on('mouseenter', function() {
      $('.artist-1-overlay-container').addClass('m-audio-artists-overlay-container-hover');
      $('.artist-1-copy-wrapper').addClass('m-audio-artists-overlay-copy-wrapper-hover');
    }).on('mouseleave', function() {
      $('.m-audio-artists-overlay-container').removeClass('m-audio-artists-overlay-container-hover');
      $('.m-audio-artists-overlay-copy-wrapper').removeClass('m-audio-artists-overlay-copy-wrapper-hover');
    });

    // Artist #2
    $('.artist-2-overlay-container').on('mouseenter', function() {
      $('.artist-2-overlay-container').addClass('artist-2-overlay-container-hover');
      $('.artist-2-copy-wrapper').addClass('m-audio-artists-overlay-copy-wrapper-hover');
    }).on('mouseleave', function() {
      $('.m-audio-artists-overlay-container').removeClass('artist-2-overlay-container-hover');
      $('.m-audio-artists-overlay-copy-wrapper').removeClass('m-audio-artists-overlay-copy-wrapper-hover');
    });

    // Artist #3
    $('.artist-3-overlay-container').on('mouseenter', function() {
      $('.artist-3-overlay-container').addClass('artist-3-overlay-container-hover');
      $('.artist-3-copy-wrapper').addClass('m-audio-artists-overlay-copy-wrapper-hover');
    }).on('mouseleave', function() {
      $('.m-audio-artists-overlay-container').removeClass('artist-3-overlay-container-hover');
      $('.m-audio-artists-overlay-copy-wrapper').removeClass('m-audio-artists-overlay-copy-wrapper-hover');
    });


    // Artist #4
    $('.artist-4-overlay-container').on('mouseenter', function() {
      $('.artist-4-overlay-container').addClass('artist-4-overlay-container-hover');
      $('.artist-4-copy-wrapper').addClass('m-audio-artists-overlay-copy-wrapper-hover');
    }).on('mouseleave', function() {
      $('.m-audio-artists-overlay-container').removeClass('artist-4-overlay-container-hover');
      $('.m-audio-artists-overlay-copy-wrapper').removeClass('m-audio-artists-overlay-copy-wrapper-hover');
    });

    // Artist #5
    $('.artist-5-overlay-container').on('mouseenter', function() {
      $('.artist-5-overlay-container').addClass('artist-5-overlay-container-hover');
      $('.artist-5-copy-wrapper').addClass('m-audio-artists-overlay-copy-wrapper-hover');
    }).on('mouseleave', function() {
      $('.m-audio-artists-overlay-container').removeClass('artist-5-overlay-container-hover');
      $('.m-audio-artists-overlay-copy-wrapper').removeClass('m-audio-artists-overlay-copy-wrapper-hover');
    });

    // Artist #6
    $('.artist-6-overlay-container').on('mouseenter', function() {
      $('.artist-6-overlay-container').addClass('artist-6-overlay-container-hover');
      $('.artist-6-copy-wrapper').addClass('m-audio-artists-overlay-copy-wrapper-hover');
    }).on('mouseleave', function() {
      $('.m-audio-artists-overlay-container').removeClass('artist-6-overlay-container-hover');
      $('.m-audio-artists-overlay-copy-wrapper').removeClass('m-audio-artists-overlay-copy-wrapper-hover');
    });


/*
|--------------------------------------------------------------------------
|                   M-Track 2X2M Microsite/Product Page
|--------------------------------------------------------------------------
*/

$('.ion-play').on('click', function() {
  $('.noblesse-oblige-reveal').fadeIn(1000);
});
$('.reveal-overlay').on('click', function() {
  $('.noblesse-oblige-reveal').fadeOut(1000);
});

// Overview Slide Show
  $('.overview-slick-slider-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });

// Features Slide Show
  $('.features-slick-slider-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  });



/*
|--------------------------------------------------------------------------
|                     Artists Page Social Sharing
|--------------------------------------------------------------------------
*/

  $('#share').jsSocials({
    showLabel: false,
    showCount: true,
    shares: ['facebook', 'twitter']
  });


  /*
   |--------------------------------------------------------------------------
   |                     M3-8 Product Microsite
   |--------------------------------------------------------------------------
   */


  $('#m3-8-hero').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
    arrows: false
  });

  $('#m3-8-hero-mobile').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false
        }
      }
    ]
  });


  $('#m3-8-summary').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplaySpeed: 10000,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });




  /*
   |--------------------------------------------------------------------------
   |                     CTRL-49 Product Microsite
   |--------------------------------------------------------------------------
   */


  $('div#ctrl-49-main-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    fade: true,
    speed: 500
  });



  $('.overview-video-selection').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: false,
    speed: 500,
    arrows: true,
    asNavFor: '.overview-video-selector',
    infinite: false
  }).on('beforeChange', function(event, slick, currentSlide){

    pauseYouTubeVideos();

  });


  $('.overview-video-selector').slick({
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    asNavFor: '.overview-video-selection',
    focusOnSelect: true,
    infinite: false,
    arrows: true
  });



  $('#software-include-slider').slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth:  false,
    arrows: false,
    dots: true,
    infinite: false,

    responsive: [
      {
        breakpoint: 769,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          // infinite: true,
          autoplay: true,
          speed: 400,
          autoplaySpeed: 3000
        }
      }
    ]
  });


  $('.video-with-cover-container .video-cover').on('click', function(){
    var playerContainer = $(this).closest('.video-with-cover-container');
    var youtubeVideo = playerContainer.children('.video-player')[0];
    var playerId = $(youtubeVideo).attr('id');
    var player = YT.get(playerId);


    playerContainer.addClass('video-started');

    pauseYouTubeVideos();

    player.playVideo()
  });


  $('.box-wrapper.collapsible').on('click',function(e){

    console.log('Collapse/Expand!');

    console.log('Target: ', e.currentTarget);
    $(e.currentTarget).toggleClass('show');
  });

/*
|--------------------------------------------------------------------------
|                                 BX5
|--------------------------------------------------------------------------
*/

// Add Brackets on active LINK
  $('#bx5-overview').on('click', function() {
    $('.bx5-tabs-left-bracket').hide();
    $('.bx5-tabs-right-bracket').hide();
    $('.overview-left-bracket').show();
    $('.overview-right-bracket').show();
  });
  $('#bx5-specs').on('click', function() {
    $('.bx5-tabs-left-bracket').hide();
    $('.bx5-tabs-right-bracket').hide();
    $('.features-left-bracket').show();
    $('.features-right-bracket').show();
  });
  $('#bx5-videos-photos').on('click', function() {
    $('.bx5-tabs-left-bracket').hide();
    $('.bx5-tabs-right-bracket').hide();
    $('.media-left-bracket').show();
    $('.media-right-bracket').show();
  });


  $('.bx5-specs').hide();
  $('.bx5-videos-photos').hide();

  $('#bx5-overview').on('click', function(){
    $('.product-content-jquery').fadeOut('fast');
    $('.bx5-overview').fadeIn('slow');
  });
  $('#bx5-specs').on('click', function(){
    $('.product-content-jquery').fadeOut('fast');
    $('.bx5-specs').fadeIn('slow');
  });
  $('#bx5-videos-photos').on('click', function(){
    $('.product-content-jquery').fadeOut('fast');
    $('.bx5-videos-photos').fadeIn('slow');
  });

//LIGHT GALLERY
  $('#bx5-lightgallery').lightGallery({
    selector: 'a',
    mode: 'lg-fade'
  });


  /*
   |--------------------------------------------------------------------------
   |                                 Hammer88
   |--------------------------------------------------------------------------
   */


  $('#hammer88-overview').on('click', function() {
    $('.bx5-tabs-left-bracket').hide();
    $('.bx5-tabs-right-bracket').hide();
    $('.overview-left-bracket').show();
    $('.overview-right-bracket').show();
  });

  $('#hammer88-features').on('click', function() {
    $('.bx5-tabs-left-bracket').hide();
    $('.bx5-tabs-right-bracket').hide();
    $('.features-left-bracket').show();
    $('.features-right-bracket').show()
  });

  $('#hammer88-videos-photos').on('click', function() {
    $('.bx5-tabs-left-bracket').hide()
    $('.bx5-tabs-right-bracket').hide()
    $('.media-left-bracket').show()
    $('.media-right-bracket').show()
  });

  $('#hammer88-specs').on('click', function(){
    $('.bx5-tabs-left-bracket').hide()
    $('.bx5-tabs-right-bracket').hide()
    $('.specs-left-bracket').show()
    $('.specs-right-bracket').show()
  });

  $('.hammer88-specs').hide();
  $('.hammer88-videos-photos').hide();
  $('.hammer88-features').hide();

  $('#hammer88-overview').on('click', function() {
    $('.product-content-jquery').fadeOut('fast');
    $('.hammer88-overview').fadeIn('slow');
  })

  $('#hammer88-specs').on('click', function() {
    $('.product-content-jquery').fadeOut('fast');
    $('.hammer88-specs').fadeIn('slow');
  });

  $('#hammer88-videos-photos').on('click', function() {
    $('.product-content-jquery').fadeOut('fast');
    $('.hammer88-videos-photos').fadeIn('slow');
  });

  $('#hammer88-features').on('click', function(){
    $('.product-content-jquery').fadeOut('fast');
    $('.hammer88-features').fadeIn('slow');
  });

}); // CLOSING OF $(function() {
