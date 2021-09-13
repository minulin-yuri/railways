'use strict';

//slider
//получаем ширину слайдера
const offset = document.querySelector('.slider').offsetWidth;
//получаем кнопки
const btnPrev = document.querySelectorAll('.prev-slide');
const btnNext = document.querySelectorAll('.next-slide');
//получаем блок с слайдами
const slider = document.querySelectorAll('.slide__item');
//определяем номер слайда
let viewSlide = 0;

slider.forEach((item, index) => {
    item.style.zIndex = index + 1;
});

/**
 * Функция отображения следующего слайда
 */
const nextSlide = () => {
    slider.forEach((item) => {
        if (item.style.zIndex == 3) {
            item.style.zIndex = 1;
            item.style.left = 1500 + 'px';
            item.style.opacity = 0;
        } else if (item.style.zIndex == 2) {
            item.style.zIndex++;
            item.style.opacity = 1;
        } else {
            item.style.zIndex++;
            item.style.left = 0;
        }
    });
}

/**
 * Функция отображения предыдущего слайда
 */
const prevSlide = () => {
    slider.forEach((item) => {
        if (item.style.zIndex == 3) {
            item.style.zIndex--;
        } else if (item.style.zIndex == 2) {
            item.style.zIndex = 1;
            item.style.left = 1500 + 'px';
            item.style.opacity = 0;
        } else {
            item.style.zIndex = 3;
            item.style.left = 0;
            item.style.opacity = 1;
        }
    });
}

//слушаем событие клика на кнопках
btnNext.forEach((item) => {
    item.addEventListener('click', nextSlide);
});
btnPrev.forEach((item) => {
    item.addEventListener('click', prevSlide);
});



