window.onload = function () {
    let slider = document.getElementById('slider');
    let rightButton = document.getElementById('right-arrow');
    let leftButton = document.getElementById('left-arrow');
    let sliderLength = slider.children.length;
    let position = 0;
    let transform = 0;
    
    setInterval(autoSlide, 3000);

    function autoSlide() {
        if (position == sliderLength - 1) {
            position = 0;
            transform = 0;
            slider.style.transform = `translateX(${transform}%)`;
            return;
        }
        if (position < sliderLength - 1) {
            position++;
            transform = -100 * position;
            slider.style.transform = `translateX(${transform}%)`;
        }
    }

    rightButton.addEventListener('click', moveRight);
    leftButton.addEventListener('click', moveLeft);
    
    function moveRight() {
        if (position < sliderLength - 1) {
            position++;
            transform = -100 * position;
            slider.style.transform = `translateX(${transform}%)`;
        }
    }

    function moveLeft() {
        if (position > 0) {
            transform += 100;
            slider.style.transform = `translateX(${transform}%)`;
            position--;
        }
    }
}

