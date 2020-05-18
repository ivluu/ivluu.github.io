$(document).ready(function() {
  $('.slick').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
    draggable: false
  });
});

$('.navbar-toggler').on("click", function(){
    $('#pushContent').slideToggle();
});
