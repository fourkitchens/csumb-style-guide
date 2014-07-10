// Toggle desktop main menu ul ul

(function ($) {
    'use strict';
    $(document).ready(function () {
    var tabOne                    = $('.tab-1'),
        panelOne                  = $('.panel-1'),
        tabThree                  = $('.tab-3'),
        panelThree                = $('.panel-3'),        
        tabFour                   = $('.tab-4'),
        panelFour                 = $('.panel-4'), 
        tabSix                    = $('.tab-6'),
        panelSix                  = $('.panel-6'),         
        tabber                   = function(b){
          $(this).toggleClass('active');
          b.data.tabbed.animate({
            height: "toggle",
            opacity: "toggle"
            }, "500");
        };
        tabOne.click({tabbed : panelOne}, tabber);
        tabThree.click({tabbed : panelThree}, tabber);
        tabFour.click({tabbed : panelFour}, tabber);
        tabSix.click({tabbed : panelSix}, tabber);
    });
})(jQuery);