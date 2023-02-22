const btn = document.querySelector('.switch');
const video = document.querySelector('.video-container');
const layer = document.querySelector('#layer');

btn.addEventListener('input', function () {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        layer.classList.add('screen')
        video.pause();
    }
    else {
        layer.classList.remove('screen');
        btn.classList.remove('slide');
        video.play();
    }
});

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
    preloader.classList.add("hide-preloader");
})