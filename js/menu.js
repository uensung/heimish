$('#btnHamburger').on('click', function(){
  $('.header').toggleClass('active');
  if($('.header').hasClass('active')) {
    $('.main_menu').css('height', '100%');
    $('.main_menu').css('opacity', '1');
  } else {
    $('.main_menu').css('height', '0px');
    $('.main_menu').css('opacity', '0.3');
  }
});
