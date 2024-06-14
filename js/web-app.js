var next = document.querySelector('#next');
var prev = document.querySelector('#prev');
var carousel = document.querySelector('.carousel');
var listItem = document.querySelector('.carousel .list');
var thumbnails = dcoument.querySelector('.carousel .thumbnail');

next.onclick = function () {
    showSlider('next');
}
prev.onclick = function () {
    showSlider('prev');
}

var timeRunning = 3000;
var runTimeOut;
function showSlider(type) {
    let itemSlider = document.querySelector('.carousel .list .item');
    let itemThumbnail = document.querySelector('.carousel .thumbnail .item');

    if(type == 'next') {
        listItem.appendChild(itemSlider[0]);
        thumbnails.appendChild(itemThumbnail[0]);
        carousel.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItem.prepend(itemSlider[positionLastItem]);
        thumbnails.prepend(itemThumbnail(positionLastItem));
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeRunning)
}