window.onload = () => {
    let places = document.querySelectorAll('.container');
    var modal = document.getElementById("myModal");
    var contentModal = document.querySelector('.modal-content');

    places.forEach(element => {
        element.addEventListener('mouseenter', hoverPlace)
        element.addEventListener('mouseleave', hoverPlace)
        element.addEventListener('click', (evt) => {
            selectPlaceSpaceClass(evt.currentTarget, insertContentOpenModal)
            modal.style.display = "block";
        })
    });
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function insertContentOpenModal(placeSpace) {
        contentModal.innerHTML = placeSpace.outerHTML

        if (placeSpace.className.includes('corner')) {
            if (placeSpace.className.includes('free-parking'))
                contentModal.style.transform = 'rotate(-135deg)'
            else if (placeSpace.className.includes('go-to-jail'))
                contentModal.style.transform = 'rotate(-225deg)'
            else if (placeSpace.className.includes('jail'))
                contentModal.style.transform = 'rotate(-45deg)'
            else if (placeSpace.className.includes('go'))
                contentModal.style.transform = 'rotate(-315deg)'

            contentModal.style.height = window.getComputedStyle(placeSpace).width
            contentModal.style.width = window.getComputedStyle(placeSpace).height
        }
        else {
            contentModal.style.transform = ''
            if (placeSpace.parentElement.className.includes('horizontal-row')) {
                contentModal.style.width = window.getComputedStyle(placeSpace).width
                contentModal.style.height = window.getComputedStyle(placeSpace).height
            }
            else if (placeSpace.parentElement.className.includes('vertical-row')) {
                contentModal.style.height = window.getComputedStyle(placeSpace).width
                contentModal.style.width = window.getComputedStyle(placeSpace).height
            }
        }
    }


};

function selectPlaceSpaceClass(e, f) {
    if (e.parentElement.className.includes('space'))
        f(e.parentElement)
    else
        if (e.parentElement.parentElement.className.includes('space'))
            f(e.parentElement.parentElement)
}

function hoverPlace(event) { selectPlaceSpaceClass(event.currentTarget, toogleHoverPlace); }

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
