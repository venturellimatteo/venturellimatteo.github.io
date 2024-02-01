var $grid = $('.grid').masonry({
    itemSelector: '.thumbnail',
    columnWidth: '.thumbnail',
    percentPosition: true
});

$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});