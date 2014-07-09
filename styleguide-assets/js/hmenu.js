// Toggle main menu ul ul

(function($){ 
  'use strict';
  $(document).ready(function(){
    $("ul.menu ul.menu" ).wrap( "<div class='submenu'></div>" );
    $('.nolink').click(function() {
      var active = $(this).next(':visible').length > 0;
      $(this).parents('.menu').children('.active').removeClass('active');
      if (!active) {
        $(this).parent().addClass('active');
      }
    });
  });
})(jQuery);
