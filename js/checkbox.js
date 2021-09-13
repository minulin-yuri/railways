'use strict';

const marker = document.querySelector('.checkbox-content');
const checkbox = document.querySelector('.feedback__checkbox');

checkbox.addEventListener('click', () => {
    console.log('dsjkfjd');
    if (marker.style.display === 'none') {
        marker.style.display = 'block';
    } else {
        marker.style.display = 'none';
    }
})