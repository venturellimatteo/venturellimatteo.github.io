let images = [];

for (let i = 2; i <= 26; i++) {
    images.push(`/src/assets/images/Film-${i}.jpg`);
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