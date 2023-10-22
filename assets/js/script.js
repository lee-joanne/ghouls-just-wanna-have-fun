document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.random-image');
    const overlay = document.querySelector('.random-image-overlay');
    const rotateButton = document.getElementById("bloody-button");
    let isRotating = false;

    rotateButton.addEventListener("click", () => {
        if (!isRotating) {
            isRotating = true;
            overlay.style.display = 'block';

            setTimeout(() => {
                // Hide the overlay
                overlay.style.display = 'none';

                // Randomly select an image to display
                const randomIndex = Math.floor(Math.random() * images.length);

                // Hide all images
                images.forEach((image, index) => {
                    if (index === randomIndex) {
                        image.style.display = 'block';
                    } else {
                        image.style.display = 'none';
                    }
                });

                isRotating = false;
            }, 3000); // Adjust the duration of the overlay as needed
        }
    });
});