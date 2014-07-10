// Small handheld collpased navigation

(function ($) {
    'use strict';
    $(document).ready(function () {
    var pullNav                   = $('.pull-nav'),
        menu                      = $('.navigation-wrap'),
        pullNavTop                = $('.pull-nav-main'),
        menuTop                   = $('.mobile-bar'),        
        pullNavDesktop            = $('.pull-nav-desktop'),
        menuDesktop               = $('.desktop-bar'),
        pullSideMenu              = $('.pull-sidebar'),
        menuSidebar               = $('.menu-left-sidebar'),        
        pullDepartment            = $('.pull-department'),     
        menuDepartment            = $('.navigation-wrap'),      
        pullStudent               = $('.pull-student-menu'),     
        menuStudent               = $('.user-actions'),  
        pullSearch                = $('.pull-search'),
        search                    = $('.actions'),
        toggler                   = function(a){
          $(this).toggleClass('active');
          a.data.toggled.animate({
            height: "toggle",
            opacity: "toggle"
            }, "500");
        };      
        pullNav.click({toggled : menu}, toggler);
        pullNavTop.click({toggled : menuTop}, toggler);
        pullNavDesktop.click({toggled : menuDesktop}, toggler);
        pullSideMenu.click({toggled : menuSidebar}, toggler);
        pullDepartment.click({toggled : menuDepartment}, toggler);
        pullStudent.click({toggled : menuStudent}, toggler);
        pullSearch.click({toggled : search}, toggler);
       });
})(jQuery);
