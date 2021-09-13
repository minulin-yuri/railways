'use strict';

const changeText = () => {
    let introTitle = document.querySelector('.intro__title');
    (screen.width <= 480)
        ? introTitle.innerText = 'Услуги по строительству и ремонту Ж/Д путей'
        : introTitle.innerText = 'Услуги по строительству\n и ремонту железнодорожных путей';

    let applicationHeader = document.querySelector('.application__header');
    (screen.width <= 1220)
        ? applicationHeader.innerHTML = 'Оставьте заявку<br> на <span>бесплатную</span> консультацию'
        : applicationHeader.innerHTML = 'Оставьте заявку на <span>бесплатную</span> консультацию';

    let footerLink = document.querySelector('.footer__link');
    (screen.width <= 1220)
        ? footerLink.innerHTML = 'Разработка сайта<br> - студия “ТвойСтартап”'
        : footerLink.innerHTML = 'Разработка сайта - студия “ТвойСтартап”';
}

window.onload = () => {
    changeText();
}

window.onresize = () => {
    changeText();
}
