let images = [];

for (let i = 2; i <= 26; i++) {
    images.push(`/src/assets/images/Film-${i}.jpg`);
}

const grid = document.querySelector('.grid');

images.forEach(imageSrc => {
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.className = 'thumbnail';
    thumbnailDiv.setAttribute('data-type', 'image');

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = '';

    thumbnailDiv.appendChild(img);
    grid.appendChild(thumbnailDiv);
});