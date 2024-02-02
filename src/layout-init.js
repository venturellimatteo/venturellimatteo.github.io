// AOS.init();

$(document).ready(function() {
  var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  gutter: '.gutter-sizer',
  });

  $grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
  });
});