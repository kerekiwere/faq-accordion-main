$(document).ready(function(){
  // Hide accordion contents initially
  $('.accordion__content').hide();

  // Toggle content visibility on click
  $('.accordion__toggle').click(function(){
    // Slide toggle clicked content & add 'open' class
    $(this).next('.accordion__content').slideToggle();
    $(this).addClass('open');

    // Slide up other contents & remove 'open' class
    $('.accordion__content').not($(this).next()).slideUp();
    $('.accordion__toggle').not($(this)).removeClass('open');
  });
});