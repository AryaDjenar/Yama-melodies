let currentAudio = null;
let currentDot = null;

document.querySelectorAll('.station-container').forEach(container => {
    const dot = container.querySelector('.dot');
    const soundPath = container.getAttribute('data-sound');

    dot.addEventListener('click', () => {
        // Stop the currently playing sound and remove animation
        if (currentAudio && currentDot) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentDot.classList.remove('playing');
        }

        // Play the new audio only if a different dot is clicked
        if (currentDot !== dot) {
            currentAudio = new Audio(soundPath);
            currentAudio.play();
            dot.classList.add('playing');
            currentDot = dot;

            // Remove pulse animation when audio ends
            currentAudio.onended = () => {
                dot.classList.remove('playing');
                currentAudio = null;
                currentDot = null;
            };
        } else {
            // Stop playing if the same dot is clicked again
            currentAudio = null;
            currentDot = null;
        }
    });
});