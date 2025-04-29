document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    const video = document.getElementById('bgVideo');
    const intro = document.getElementById('intro');
    const main = document.getElementById('main');

    if (key === 'y') {
        intro.style.display = 'none';
        main.style.display = 'flex';
        video.muted = false;
        video.volume = 0.3; // Volumen al 30%
        video.play();
    }

    if (key === 'm') {
        video.muted = !video.muted;
    }
});
