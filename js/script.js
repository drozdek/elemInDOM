document.addEventListener('DOMContentLoaded', () => {

    function elementInDOM(el, bx) {

        const getElementDims = (e) => {
            if (typeof e !== "undefined") {
                const dims = document.querySelector(e).getBoundingClientRect();
                return dims
            };
        };

        const ed = getElementDims(el);
        const bd = getElementDims(bx);

        console.log(`bd.top ${bd.top} ed.top ${ed.top}  bd.left ${bd.left}  ed.left ${ed.left}`)

        if (ed.top <= bd.top || ed.left <= bd.left ||
            ed.bottom >= bd.bottom || ed.right >= bd.right) {
            console.log('child element not fully accessible in the parent element');
            return false
        }
        else {
            console.log('child element fully accessible in the parent element');
            return true;
        }

    }

});
