$(document).ready(function() {
  $('.slick').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    fade: true
  });
});

$('.navbar-toggler').on("click", function(){
    $('#pushContent').slideToggle();
});
