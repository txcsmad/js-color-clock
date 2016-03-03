'use strict';

document.addEventListener('DOMContentLoaded', _ => {
    let node = document.querySelector('.digits');
    let clock = new Clock(node);
    clock.start();
});
