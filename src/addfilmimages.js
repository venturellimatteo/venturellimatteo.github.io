let images = [];

for (let i = 1; i <= 25; i++) {
    images.push(`/src/assets/images/film/film-${i}.jpg`);
}

const grid = document.querySelector('.grid');

images.forEach(imageSrc => {
    const thumbnailLi = document.createElement('li');
    thumbnailLi.className = 'thumbnail';
    thumbnailLi.setAttribute('data-type', 'image');

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = '';

    thumbnailLi.appendChild(img);
    grid.appendChild(thumbnailLi);
});