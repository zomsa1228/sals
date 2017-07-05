$(function() {
  let menu = $('#menu');
  let map = $('#map');

  $('.fa-bars').on('click', function() {
    if(menu.hasClass('on-scroll')) {
      menu.animate({
        'left': 0
      });

      map.animate({
        'marginLeft': '250px'
      });
    } else {
      menu.animate({
        'left': '-250px'
      });

      map.animate({
        'marginLeft': 0
      });
    }

    menu.toggleClass('on-scroll');
  });
});
