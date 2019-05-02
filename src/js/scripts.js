//= jquery.min.js
//= jquery.magnific-popup.min.js
//= owl.carousel.min.js

window.onload = function(){
  // $("body").toggleClass('opacity');
  $("#overlayer").delay(1000).fadeOut("slow");
  overlay.toggle();
  setTimeout(function() {
    overlay.toggle();
  }, 800);
}

function heightFooter(){
  var heightFoot = $('.footer').outerHeight();
  $('body').css({ 'padding-bottom': heightFoot});
}
heightFooter()
$( window ).resize(function() {
  heightFooter()
});

$(".burger-menu").on("click", function() {  
  $(".menu-header").toggleClass('is-active');
  $("body").toggleClass('overflow');
})

/* Popup Window */

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

/* Popup Window End */

$('.slider-events').owlCarousel({
  loop: true,
  margin: 10,
  nav:true,
  responsive:{
    0:{
      items:1
    },
    480:{
      items:2
    },
    720:{
      items:3
    },
    854:{
      items:4
    }
  }
});
