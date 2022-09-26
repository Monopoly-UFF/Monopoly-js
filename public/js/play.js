window.onload = () => {
    let button = document.querySelector('.button-play');

    addClass(button, 'active');
    setTimeout(() => {
        removeClass(button, 'active');

    }, 10000);

    function addClass(el, className) {
        el.className += ` ${className}`;
    }

    function removeClass(el, className) {
        el.className = el.className.replace(className, '');
    }
};