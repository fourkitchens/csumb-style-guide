$(function() {
  var pull    = $('#pull');
    menu    = $('nav ul.main-menu');
    menuHeight  = menu.height();

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
});
