window.addEventListener('load', sliderFunction);
window.addEventListener('load', mobileScreens);


function sliderFunction() {
    let slider = document.getElementById('slider');
    let rightButton = document.getElementById('right-arrow');
    let leftButton = document.getElementById('left-arrow');
    let sliderLength = slider.children.length;
    let position = 0;
    let transform = 0;
    
    setInterval(autoSlide, 5000);

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
    document.addEventListener('keydown', function (event) {
        if (event.code == 'ArrowRight') moveRight();
        if (event.code == 'ArrowLeft') moveLeft();
    });
    
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

function mobileScreens() {
    if (document.documentElement.clientWidth <= 375) {
        mobileScreenMenu();
        mobileScreenSlider();
    }
}

function mobileScreenSlider() {
        let arrowsWrapper = document.getElementById('arrows-wrapper');
        let sliderImg = document.querySelector('.slider-img');
        arrowsWrapper.style.bottom = 'auto';
        arrowsWrapper.style.top = sliderImg.getBoundingClientRect().height - arrowsWrapper.getBoundingClientRect().height + 'px';
}

function mobileScreenMenu() {
    let openMenuBtn = document.getElementById('open-menu-btn');

    document.getElementById('desktop-menu').classList.add('hide');
    openMenuBtn.classList.remove('hide');
    document.querySelector('header').classList.remove('flex-container');

    openMenuBtn.onclick = function () {
        document.getElementById('mobile-menu').classList.remove('hide');
        openMenuBtn.classList.add('hide');

        let blackoutDiv = document.createElement('div');
        blackoutDiv.classList.add('blackout-mobile');
        blackoutDiv.style.height = document.documentElement.scrollHeight - document.getElementById('mobile-menu').offsetHeight + 'px';
        document.querySelector('header').after(blackoutDiv);

        let closeMenuBtn = document.getElementById('close-menu-btn');
        closeMenuBtn.onclick = function () {
            document.getElementById('mobile-menu').classList.add('hide');
            openMenuBtn.classList.remove('hide');
            blackoutDiv.remove();
        }
    }

}