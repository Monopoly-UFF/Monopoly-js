window.onload = () => {
    let button = document.querySelector('.button-play');

    addClass(button, 'active');
    setTimeout(() => {
        removeClass(button, 'active');

    }, 10000);

};

function addClass(el, className) {
    el.className += ` ${className}`;
}
function removeClass(el, className) {
    el.className = el.className.replace(className, '');
}

function removeClasseTodosElementos(className) {
    document.querySelectorAll('.' + className).forEach(element => {
        removeClass(element, className);
    });
}
function selecionaNumeroJogadores(el) {
    removeClasseTodosElementos('dado-ativado');
    addClass(el, 'dado-ativado');
}

