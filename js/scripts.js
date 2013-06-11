$(function () {

  $('#slider').anythingSlider({

      // Set mode to "horizontal", "vertical" or "fade"
      // (only first letter needed); replaces vertical option
      mode: 'horizontal',
      // If true, the entire slider will expand to fit the parent element
      expand: true,
      // If true, solitary images/objects in the panel will expand to
      // fit the viewport
      resizeContents: true,
      // Anything other than "linear" or "swing" requires the easing plugin
      easing: "swing",

      // If true, builds the forwards and backwards buttons
      buildArrows: false,
      // If true, builds a list of anchor links to link to each panel
      buildNavigation: true,
      // If true, builds the start/stop button
      buildStartStop: false,

      // Append controls (navigation + start-stop) to a HTML element
      // (jQuery Object, selector or HTMLNode), if not null
      appendControlsTo: ".homeSliderNav",

      // If true, side navigation arrows will slide out on
      // hovering & hide @ other times
      toggleArrows: true,
      // if true, slide in controls (navigation + play/stop button)
      // on hover and slide change, hide @ other times
      toggleControls: false,

      // if false, keyboard arrow keys will not work for this slider.
      enableKeyboard: true,

      // *********** Navigation ***********
      // This sets the initial panel
      startPanel: 1,
      // Should links change the hashtag in the URL?
      hashTags: true,
      // if false, the slider will not wrap
      infiniteSlides: true,
      // Details at the top of the file on this use (advanced use)
      navigationFormatter: function(index, panel) {
          // This is the default format (show just the panel index number)
          return ['Home', 'How it works', 'Get Involved', 'NSL Games', 'More'][index - 1];
      },
      // Set this to the maximum number of visible navigation tabs;
      // false to disable
      navigationSize: false,

      // *********** Slideshow options ***********
      // If true, the slideshow will start running; replaces "startStopped" option
      autoPlay: false,
      // If true, user changing slides will not stop the slideshow
      autoPlayLocked: false,
      // If true, starting a slideshow will delay advancing slides; if false, the slider will immediately advance to the next slide when slideshow starts
      autoPlayDelayed: false,
      // If true & the slideshow is active, the slideshow will pause on hover
      pauseOnHover: true,
      // If true & the slideshow is active, the  slideshow will stop on the last page. This also stops the rewind effect  when infiniteSlides is false.
      stopAtEnd: false,
      // If true, the slideshow will move right-to-left
      playRtl: false,

      // *********** Times ***********
      // How long between slideshow transitions in AutoPlay mode (in milliseconds)
      delay: 3000,
      // Resume slideshow after user interaction, only if autoplayLocked is true (in milliseconds).
      resumeDelay: 15000,
      // How long the slideshow transition takes (in milliseconds)
      animationTime: 600,
      // How long to pause slide animation before going to the desired slide (used if you want your "out" FX to show).
      delayBeforeAnimate  : 0,

      // *********** Callbacks ***********
      // Callback before the plugin initializes
      onBeforeInitialize: function(e, slider) {},
      // Callback when the plugin finished initializing
      onInitialized: function(e, slider) {},
      // Callback on slideshow start
      onShowStart: function(e, slider) {},
      // Callback after slideshow stops
      onShowStop: function(e, slider) {},
      // Callback when slideshow pauses
      onShowPause: function(e, slider) {},
      // Callback when slideshow unpauses - may not trigger
      // properly if user clicks on any controls
      onShowUnpause: function(e, slider) {},
      // Callback when slide initiates, before control animation
      onSlideInit: function(e, slider) {},
      // Callback before slide animates
      onSlideBegin: function(e, slider) {},
      // Callback when slide completes - no event variable!
      onSlideComplete: function(slider) {
        var current = slider.currentPage;
        adjustHeight(current);
      },
      // Callback when slider resizes
      onSliderResize: function(e, slider) {},

      // *********** Video ***********
      // If true & the slideshow is active & a youtube video
      // is playing, it will pause the autoplay until the video
      // is complete
      resumeOnVideoEnd: true,
      // If true the video will resume playing (if previously
      // paused, except for YouTube iframe - known issue);
      // if false, the video remains paused.
      resumeOnVisible: true,
      // If your slider has an embedded object, the script will
      // automatically add a wmode parameter with this setting
      addWmodeToObject: "opaque",
      // return true if video is playing or false if not - used
      // by video extension
      isVideoPlaying: function(base) {
          return false;
      }

  });



  function adjustHeight (current) {
    var speed = 400;
    var $body = $('body');
    var $slideWrap = $('.homeSliderWrap');

    if ($body.hasClass('wide')) {
      switch(current)
      {
      case 1:
        $slideWrap.animate({ height: 650 }, speed);
        break;

      case 2:
        $slideWrap.animate({ height: 690 }, speed);
        break;

      case 3:
        $slideWrap.animate({ height: 570 }, speed);
        break;

      case 4:
        $slideWrap.animate({ height: 680 }, speed);
        break;

      default:
        console.log("There seems to be a problem finding the target page");
      }
    }else if ($body.hasClass('medium')) {
      switch(current)
      {
      case 1:
        $slideWrap.animate({ height: 680 }, speed);
        break;

      case 2:
        $slideWrap.animate({ height: 760 }, speed);
        break;

      case 3:
        $slideWrap.animate({ height: 570 }, speed);
        break;

      case 4:
        $slideWrap.animate({ height: 700 }, speed);
        break;

      default:
        console.log("There seems to be a problem finding the target page");
      }
    }else if ($body.hasClass('mobile')) {
      switch(current)
      {
      case 1:
        $slideWrap.animate({ height: 1300 }, speed);
        break;

      case 2:
        $slideWrap.animate({ height: 1780 }, speed);
        break;

      case 3:
        $slideWrap.animate({ height: 1050 }, speed);
        break;

      case 4:
        $slideWrap.animate({ height: 1520 }, speed);
        break;

      default:
        console.log("There seems to be a problem finding the target page");
      }
    }else {
      switch(current)
      {
      case 1:
        $slideWrap.animate({ height: 1210 }, speed);
        break;

      case 2:
        $slideWrap.animate({ height: 1280 }, speed);
        break;

      case 3:
        $slideWrap.animate({ height: 690 }, speed);
        break;

      case 4:
        $slideWrap.animate({ height: 1030 }, speed);
        break;

      default:
        console.log("There seems to be a problem finding the target page");
      }
    }
  }

  // COUNTDOWN CLOCK

  var myCountdownTest = new Countdown({
    year    : 2013,
    month   : 7, 
    day     : 16,
    width   : 300, 
    height  : 85,
    rangeHi : "month",
    rangeLo : "hour",
    style   : "flip",
    target  : "countDownClock"
     
  });

  //DONATION BUTTON MODAL FOR PAYPAL BUTTON
  $('.donationBtn2').on('click', function () {
    $('#donationModal').modal();
  });


  var windowW = $(window).width();
  if( windowW > 1200 ) {
    ///console.log("screen sizw = wide");
    $('body').addClass('wide');
  }
  if( windowW > 980 && windowW < 1199 ) {
    ///console.log("screen sizw = medium");
    $('body').addClass('medium');
  }
  if( windowW > 979 && windowW < 768 ) {
    ///console.log("screen sizw = tablet");
    $('body').addClass('tablet');
  }
  if( windowW < 767 ) {
    ///console.log("screen sizw = mobile");
    $('body').addClass('mobile');
    $('form').removeClass('form-horizontal');
    $('#nslVideo').attr('width', 310);
  }

  // GET INVOLVED BUTTON CONTROLS
  var $slider = $('#slider').data('AnythingSlider');
  $('.getInvolvedBtn').on('click', function () {

    $slider.gotoPage(3, false);
  });

  // FOOTER NAV CONTROLS
  $('.footerNav li a').on('click', function () {
    var $this = $(this);
    var thisPage = parseInt( $this.data('page') );

    $slider.gotoPage(thisPage, true);
  });




  $('.tester').on('click', function () {

    var num = 1;
    var newHt = 1000;
    $('.homeSliderWrap').animate({
        height: newHt
    }, 600);

  });


  var url = document.URL;
  var lastChar = parseInt( url.substr(url.length - 1) ); 
  
  setTimeout(adjustHeight(lastChar), 1000);






});