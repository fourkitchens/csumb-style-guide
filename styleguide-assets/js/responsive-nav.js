// Small handheld collpased navigation

(function ($) {
    'use strict';
    $(document).ready(function () {
    var pullNav                   = $('.pull-nav'),
        menu                      = $('.navigation-wrap'),
        pullNavTop                = $('.pull-nav-main'),
        menuTop                   = $('.mobile-bar'),        
        pullSideMenu              = $('.pull-sidebar'),
        menuSidebar               = $('.menu-left-sidebar'),        
        pullSearch                = $('#pull-search'),
        search                    = $('.actions'),
        toggler                   = function(a){
          $(this).toggleClass('active');
          a.data.toggled.slideToggle('300');
        };
        pullNav.click({toggled : menu}, toggler);
        pullNavTop.click({toggled : menuTop}, toggler);
        pullSideMenu.click({toggled : menuSidebar}, toggler);
        pullSearch.click({toggled : search}, toggler);
    });
})(jQuery);
