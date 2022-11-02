window.onload = () => {
    let places = document.querySelectorAll('.container');

    places.forEach(element => {
        element.addEventListener('mouseenter', hoverPlace)
        element.addEventListener('mouseleave', hoverPlace)
    });


};

function hoverPlace(event) {
    if (event.currentTarget.parentElement.className.includes('space'))
        toogleHoverPlace(event.currentTarget.parentElement)
    else
        if (event.currentTarget.parentElement.parentElement.className.includes('space'))
            toogleHoverPlace(event.currentTarget.parentElement.parentElement)
}
function toogleHoverPlace(element) {
    if (element.style.outline.length > 0) {
        element.style.outline = '';
        element.style.zIndex = '';
    } else
        if (element.style.outline.length === 0) {
            element.style.outline = 'black 3px solid';
            element.style.zIndex = '10';
        }
}
