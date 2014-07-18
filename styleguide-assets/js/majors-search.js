$('.more-link').each(function() {
      var majorName = $(this).text();
      $(this).html($(this).html() + ' (' + $(this).parents('li').find('li').length + ')');
      $(this).next('.more').prepend('<p>You can study '+ majorName +' in one of the following majors:</p>');

});
$('form').first().on('submit', function(event) {
       event.preventDefault();
    $('#results li').remove();
    $('#results').show();
    var keyword = $('#keyword').val().toLowerCase();
    $('.programs-listing li').each(function() {
        if($(this).find('a').first().text().toLowerCase().search(keyword) !== -1) {
            var clone = $(this).clone();
           $('#results ul').append(clone);
           clone.find('.more').show();
        }
    });
});
$('.more-link').on('click', function(event) {
    event.preventDefault();
    if($(this).hasClass('showing')) {
        $(this).removeClass('showing');
        $(this).next('.more').hide();
    }
    else {
        $(this).addClass('showing');
        $(this).next('.more').show();
    }
});
