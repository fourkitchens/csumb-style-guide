// Small handheld collpased navigation

(function ($) {
    'use strict';
    $(document).ready(function () {

    var pullNav    = $('#pull-nav');
    var menu    = $('.navigation');
    var menuHeight  = menu.height();
  
    var pullSearch    = $('#pull-search');
    var search    = $('.actions');
    var searchHeight  = search.height();

    $(pullNav).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle("300");
    pullNav.toggleClass('active');
    });

    $(pullSearch).on('click', function(e) {
      e.preventDefault();
      search.slideToggle("300");
      pullSearch.toggleClass('active');
    });
 });
})(jQuery);