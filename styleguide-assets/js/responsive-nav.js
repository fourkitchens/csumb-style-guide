// Small handheld collpased navigation

(function ($) {
    'use strict';
    $(document).ready(function () {
    var pullNavTop                = $('.pull-nav-main'),
        menuTop                   = $('.mobile-bar'),        
        pullNavDesktop            = $('.pull-nav-desktop'),
        menuDesktop               = $('.desktop-bar'),
        pullSideMenu              = $('.pull-sidebar'),
        menuSidebar               = $('.menu-left-sidebar'),        
        pullSearch                = $('.pull-search'),
        search                    = $('.actions'),
        toggler                   = function(a){
          $(this).toggleClass('active');
          a.data.toggled.animate({
            height: "toggle",
            opacity: "toggle"
            }, "500");
        };      
        pullNavTop.click({toggled : menuTop}, toggler);
        pullNavDesktop.click({toggled : menuDesktop}, toggler);
        pullSideMenu.click({toggled : menuSidebar}, toggler);
        pullSearch.click({toggled : search}, toggler);
       });

    var pullNav                   = $('.pull-nav'),
        menu                      = $('.navigation-wrap'),
        togglez              = function(twidth){
          $(this).toggleClass('active');
          twidth.data.toggledWidth.animate({
            width: "80%",
            opacity: "toggle"
            }, "slow");
        };  
        pullNav.click({toggledWidth : menu}, togglez);
})(jQuery);
