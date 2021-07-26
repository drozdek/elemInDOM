document.addEventListener('DOMContentLoaded', () => {

    const getElementDims = (arg) => {
        if (typeof arg !== "undefined") {
            const dims = document.querySelector(arg).getBoundingClientRect();
            return dims
        }

    };

    let scroll = window.addEventListener('scroll', (e) => {
        const dims = getElementDims('#square');

        if (dims.top < 0 || dims.right < 0 || dims.bottom < 0 || dims.left < 0) {
            console.log('element not fully in the DOM tree');
            return false
        }
        else {
            console.log('element fully in the DOM tree');
            return true;
        }
    });

});