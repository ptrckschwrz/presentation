const imageCount = 13; // Number of images
let currentIndex = 1; // Start with the first image

const sliderImage = document.getElementById('slider-image');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

// Function to update the image source
function updateImage() {
    sliderImage.src = `${currentIndex}.png`;
}

// Event listeners for buttons
leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 1) ? imageCount : currentIndex - 1;
    updateImage();
});

rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex === imageCount) ? 1 : currentIndex + 1;
    updateImage();
});
