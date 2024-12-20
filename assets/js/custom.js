// Custom JavaScript
$(document).ready(function() {
  "use strict";

// hero text
var typedhero = new Typed('#typedhero', {
  strings: ['High Quality', 'Fully Responsive', '24/7 Support'],
  typeSpeed: 30,
  backSpeed: 50,
  smartBackspace: true,
  loop: true
  });

// sticky header
function headerSticky(){
  var windowPos=$(window).scrollTop();
  if( windowPos>20){
    $('.fixed-top').addClass("on-scroll");
    $('.light-nav-on-scroll').addClass("lio-menu-light").removeClass("lio-menu-dark");
    $('.dark-nav-on-scroll').addClass("lio-menu-dark").removeClass("lio-menu-light");
  } else {
    $('.fixed-top').removeClass("on-scroll");
    $('.light-nav-on-load').addClass("lio-menu-light").removeClass("lio-menu-dark");
    $('.dark-nav-on-load').addClass("lio-menu-dark").removeClass("lio-menu-light");
  }
}
headerSticky();
$(window).scroll(headerSticky);

// main menu
$('.main-navigation .sf-menu').superfish({
  delay: 100,
  animation: { opacity: 'show', height: 'show' },
  speed: 300,
});

// menudropdown auto align
var wapoMainWindowWidth = $(window).width();
$('.sf-menu ul li').mouseover(function(){
  // checks if third level menu exist
  var subMenuExist = $(this).find('.sub-menu').length;
  if( subMenuExist > 0){
    var subMenuWidth = $(this).find('.sub-menu').width();
    var subMenuOffset = $(this).find('.sub-menu').parent().offset().left + subMenuWidth;

    // if sub menu is off screen, give new position
    if((subMenuOffset + subMenuWidth) > wapoMainWindowWidth){
      var newSubMenuPosition = subMenuWidth;
      $(this).find('.sub-menu').css({
        left: -newSubMenuPosition,
        top: '0',
      });
    }
  }
 });

// nav scroll
if($('#lio-header-global').length){
  var navoffset = $('#lio-header-global').height();
  $('.lio-nav a[href^="#"], .lio-scroll-link').on("click", function(e) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - navoffset - 25
    }, "slow","easeInSine");
  });
} else {
  $('.lio-scroll-link').on("click", function(e) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, "slow","easeInSine");
  });
}

// scrollspy
var win = $(window);
$("section").each(function () {
  if (win.scrollTop() >= $(this).offset().top - 140) {
    $(".lio-nav li a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
  }
});
win.on("scroll", function () {
  $("section").each(function () {
    if (win.scrollTop() >= $(this).offset().top - 140) {
      $(".lio-nav a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
    }
  });
});

// sectionAnchor - link to section from another page
function sectionAnchor() {
var navoffset = $('#lio-header-global').height();
  var hash = window.location.hash;
  if (hash !== '') {
    setTimeout(function() {
      $('html, body').stop().animate({
        scrollTop: $(hash).offset().top - navoffset - 25
      }, 800, 'easeInSine');
      history.pushState('', document.title, window.location.pathname);
    }, 500);
  }
} sectionAnchor();

// responsive menu
$('.main-navigation .lio-nav').slicknav({
  label:"",
  prependTo: '.lio-responsive-header-menu',
  closedSymbol: '',
  openedSymbol: '',
  allowParentLinks:"true",
  menuButton: '#lio-menu-button',
  closeOnClick:true
});

// responsive menu button
$("#lio-menu-button").on("click", function(e) {
  $(".slicknav_nav").slideToggle();
});

// responsive menu hamburger
var $hamburger = $("#lio-menu-button");
  $hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
});

// responsive header nav scroll
var mnavoffset = $('.lio-responsive-header').height();
var scroll = new SmoothScroll('.lio-responsive-header-menu a', {
  speed: 500,
  speedAsDuration: true,
  offset: mnavoffset + 40
});

// scrollspy for responsive
var win = $(window);
$("section").each(function () {
  if (win.scrollTop() >= $(this).offset().top - 140) {
    $(".slicknav_menu li a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
  }
});
win.on("scroll", function () {
  $("section").each(function () {
    if (win.scrollTop() >= $(this).offset().top - 140) {
      $(".slicknav_menu a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
    }
  });
});

// responsiveAnchor - link to section from another page
function responsiveAnchor() {
var windowWidth=$(window).width();
  if(windowWidth<992){
    var mnavoffset = $('.lio-responsive-header').height();
    var hash = window.location.hash;
    if (hash !== '') {
      setTimeout(function() {
        $('html, body').stop().animate({
          scrollTop: $(hash).offset().top - mnavoffset - 40
        }, 800, 'easeInSine');
        history.pushState('', document.title, window.location.pathname);
      }, 500);
    }
  }
} responsiveAnchor();

// wow animations
if( $(window).outerWidth() >= 767 ) {
  new WOW().init({
    mobile: false,
  });
}

// parallax
if( $(window).outerWidth() >= 767 ) {
  $(".parallax").parallaxie({
    speed: 0.60,
    size: 'auto',
  });
  $(".parallax.parallax-slow").parallaxie({
    speed: 0.30,
  });
}

// video popup
$('.lio-video-popup').venobox();

//Contact form
$(function () {
  var v = $("#contactform").validate({
    submitHandler: function (form) {
      $(form).ajaxSubmit({
        target: "#contactresult",
        clearForm: true
      });
    }
  });
});

});
// document ready end

// on load
$(window).on('load', function(){
 "use strict";

// preloader
$('.lio-preloader').delay(400).fadeOut(500);
});
// on load end