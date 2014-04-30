$(function() {
  var pullNav    = $('#pull-nav');
    menu    = $('.navigation');
    menuHeight  = menu.height();
  
  var pullSearch    = $('#pull-search');
    search    = $('.actions');
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
