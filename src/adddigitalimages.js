let images = [];

for (let i = 1; i <= 29; i++) {
    images.push(`/src/assets/images/digital/digital-${i}.jpg`);
}

const grid = document.querySelector('.grid');

images.forEach(imageSrc => {
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.className = 'thumbnail';
    thumbnailDiv.setAttribute('data-type', 'image');
    thumbnailDiv.setAttribute('data-aos', 'fade-up');

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = '';

    thumbnailDiv.appendChild(img);
    grid.appendChild(thumbnailDiv);
});