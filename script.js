document.addEventListener('click', function () {
    const video = document.getElementById('bgVideo');
    const intro = document.getElementById('intro');
    const main = document.getElementById('main');

    intro.style.display = 'none';
    main.style.display = 'flex';
    
    video.muted = false;
    video.volume = 0.3; // volumen al 30%
    video.play();
});
