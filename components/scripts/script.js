// Typekit
  (function(d) {
    var config = {
      kitId: 'pct7efk',
      scriptTimeout: 3000
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

$(function() {
  var topoffset = 42;

  var isTouch = 'ontouchstart' in document.documentElement;

  //window height
  var wheight = $(window).height(); //get height of the window

  $('.fullheight').css('height', wheight);
  $('.halfheight').css('height', wheight/2);

  $(window).resize(function() {
    var wheight = $(window).height(); //get height of the window
    $('.fullheight').css('height', wheight);
  }) //on resize


// Animated Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click

  //highlight navigation
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');

    if (windowpos > $('#season').offset().top-1) {
      $('nav li a').removeClass('active');
      $('a[href$="#season"]').addClass('active');
    } //windowpos

    if (windowpos > $('#program').offset().top-1) {
      $('nav li a').removeClass('active');
      $('a[href$="#program"]').addClass('active');
    } //windowpos

    if (windowpos > $('#education').offset().top-1) {
      $('nav li a').removeClass('active');
      $('a[href$="#education"]').addClass('active');
    } //windowpos

    if (windowpos > $('#players').offset().top-1) {
      $('nav li a').removeClass('active');
      $('a[href$="#players"]').addClass('active');
    } //windowpos

    if (windowpos > $('#donate').offset().top-1) {
      $('nav li a').removeClass('active');
      $('a[href$="#donate"]').addClass('active');
    } //windowpos

  }); //window scroll




  //set up ScrollMagic
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  //pin the navigation
  var pin = new ScrollScene({
    triggerElement: '#nav',
  }).setPin('#nav').addTo(controller);


  if(!isTouch) {
    //program animations
    var roomOrigin = {
      bottom: -700,
      opacity: 0,
      scale: 0
    }

    var roomDest = {
      repeat: 1,
      yoyo: true,
      bottom: 0,
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }

    var roomtween = TweenMax.staggerFromTo(
      "#peace .content",
      1, roomOrigin, roomDest);

    var pin = new ScrollScene({
      triggerElement: '#peace',
      offset: -topoffset,
      duration: 500
    }).setPin('#peace')
      .setTween(roomtween)
      .addTo(controller)


    var roomtween = TweenMax.staggerFromTo(
      "#spring .content",
      1, roomOrigin, roomDest);

    var pin = new ScrollScene({
      triggerElement: '#spring',
      offset: -topoffset,
      duration: 500
    }).setPin('#spring')
      .setTween(roomtween)
      .addTo(controller)

    var roomtween = TweenMax.staggerFromTo(
      "#dream .content",
      1, roomOrigin, roomDest);

    var pin = new ScrollScene({
      triggerElement: '#dream',
      offset: -topoffset,
      duration: 500
    }).setPin('#dream')
      .setTween(roomtween)
      .addTo(controller)

  } //not a touch device


  //atractions animation
  var attractionstween = TweenMax.staggerFromTo('#donate article', 1, { opacity: 0, scale: 0 },
      {delay: 1, opacity: 1, scale: 1,
        ease: Back.easeOut});


  var scene = new ScrollScene({
    triggerElement: '#donate',
    offset: -topoffset
  }).setTween(attractionstween)
    .addTo(controller);
}); //on load










