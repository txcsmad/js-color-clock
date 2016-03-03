'use strict'; // needed to use `class`, `let` keywords in Chrome; don't use otherwise.

document.addEventListener('DOMContentLoaded', _ => {
    let node = document.querySelector('.digits');
    let clock = new Clock(node);
    clock.start();
});
