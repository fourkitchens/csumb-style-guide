$(function() {
  var pullNav    = $('#pull-nav');
    menu    = $('nav ul.main-menu');
    menuHeight  = menu.height();
  
  var pullSearch    = $('#pull-search');
    search    = $('.form-item-search-block-form');
    searchHeight  = search.height();

  $(pullNav).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(pullSearch).on('click', function(e) {
    e.preventDefault();
    search.slideToggle();
  });

});
