$(document).ready(function() {

  var fileName = window.location.pathname.split("/").pop() || "index.html";
  console.log('File Name:', fileName); // Debugging line

  const imgType = fileName == 'index.html' ? 'film' : 'digital';
  console.log('Image Type:', imgType); // Debugging line

  const imgNum = fileName == 'index.html' ? 26 : 29;
  console.log('Image Number:', imgNum); // Debugging line

  if (fileName != 'aboutme.html') {
    console.log('In cycle')
    for (let i = 1; i <= imgNum; i++) {
      $(`#image-${i}`).attr('sizes', '(max-width: 600px) calc(100vw - 50px), (max-width: 1000px) calc(100vw - 300px), (max-width: 1400px) calc((100vw - 300px) / 2 - 10px), (max-width: 1800px) calc((100vw - 300px) / 3 - 20px), (min-width: 1801px) calc((100vw - 300px) / 4 - 30px)')
      $(`#image-${i}`).attr('srcset', `/src/assets/images/${imgType}/${imgType}-400-${i}.webp 400w, /src/assets/images/${imgType}/${imgType}-800-${i}.webp 800w, /src/assets/images/${imgType}/${imgType}-1200-${i}.webp 1200w, /src/assets/images/${imgType}/${imgType}-1600-${i}.webp 1600w`)
    }
  }

  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer',
  });

  $grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
  });

  AOS.init({
    // duration: 1000, // Animation duration in milliseconds
  });

  /* document.querySelectorAll('img').forEach(
    (img) => img.addEventListener('load', () => AOS.refresh())
  ); */

});