let progress = document.querySelector('.progress-line-wrapper');
let progressLine = document.querySelector('.progress-line__line');
let progressDashes = document.getElementsByClassName('progress-line__dashes-dash');
let progressDashesLine = document.querySelector('.progress-line__dashes');
let progressBold = document.querySelector('.progress-line__progress');
let contentBlock = document.getElementsByClassName('content-block');
let blockImages = document.getElementsByClassName('content-block__img');
let progressYears = document.getElementsByClassName('progress-line__years-year');

let strokedText = document.getElementsByClassName('stroked');

for (let i = 0; i < progressYears.length; i++) {
    switch (i) {
        case 2:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i + 2]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
        case 3:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i + 3]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
        case 4:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i + 4]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
        case 5:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i + 4]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
        case 6:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i + 9]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
        case 7:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i + 10]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
        case 8:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i + 11]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
        case 9:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i + 12]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
        case 10:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i + 13]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
        case 11:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i + 14]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
        case 12:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i + 15]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
        default:
            progressYears[i].addEventListener('click', () => {
                window.scrollTo({
                    top: offset(contentBlock[i]).top - 199,
                    behavior: 'smooth'
                });
            });
            break;
    }
};
function offsetWindow() {
    scrollTop = window.pageYOffset
    return window.pageYOffset
};
function offset(el) {
    let rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop }
};

let progressOffset = 0
let blocksOffset = [];
getBlocksOffset()
function getBlocksOffset() {
    for (let i = 0; i < contentBlock.length; i++) {
        blocksOffset.push(offset(contentBlock[i]).top - 550)
    }
};

let dashesWidthSpace = progressDashesLine.offsetWidth / (progressDashes.length - 1)
let actualWidth = Number((window.getComputedStyle(progressBold).width).replace(/\D/g, ''));
let addCounter = 0

function setWidth(howWidthBlocks = 1) {
    let newWidth = dashesWidthSpace * howWidthBlocks
    progressBold.style.width = newWidth + 'px'
}

window.addEventListener('scroll', () => {
    if (progressOffset === 0) {
        progressOffset = offset(progress).top
    }
    if (offsetWindow() >= progressOffset) {
        progress.classList.add('blacked')
        progressBold.style.backgroundColor = '#fff'
        progressLine.style.backgroundColor = '#fff'
        for (let i = 0; i < progressDashes.length; i++) {
            progressDashes[i].style.backgroundColor = "#fff"
        }
    }
    if (offsetWindow() < progressOffset) {
        progress.classList.remove('blacked')
        progressBold.style.backgroundColor = '#000'
        progressLine.style.backgroundColor = '#000'
        for (let i = 0; i < progressDashes.length; i++) {
            progressDashes[i].style.backgroundColor = "#000"
        }
    }

    if (offsetWindow() >= blocksOffset[0] && addCounter === 0) {
        setWidth(1)
        addCounter++
    } else if (offsetWindow() < blocksOffset[0] && addCounter === 1) {
        setWidth(0)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[1] && addCounter === 1) {
        setWidth(3)
        addCounter++
    } else if (offsetWindow() < blocksOffset[1] && addCounter === 2) {
        setWidth(1)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[2] && addCounter === 2) {
        setWidth(4)
        addCounter++
    } else if (offsetWindow() < blocksOffset[2] && addCounter === 3) {
        setWidth(3)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[4] && addCounter === 3) {
        setWidth(5)
        addCounter++
    } else if (offsetWindow() < blocksOffset[4] && addCounter === 4) {
        setWidth(4)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[6] && addCounter === 4) {
        setWidth(7)
        addCounter++
    } else if (offsetWindow() < blocksOffset[6] && addCounter === 5) {
        setWidth(5)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[7] && addCounter === 5) {
        setWidth(8)
        addCounter++
    } else if (offsetWindow() < blocksOffset[7] && addCounter === 6) {
        setWidth(7)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[8] && addCounter === 6) {
        setWidth(10)
        addCounter++
    } else if (offsetWindow() < blocksOffset[8] && addCounter === 7) {
        setWidth(8)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[9] && addCounter === 7) {
        setWidth(11)
        addCounter++
    } else if (offsetWindow() < blocksOffset[9] && addCounter === 8) {
        setWidth(10)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[11] && addCounter === 8) {
        setWidth(12)
        addCounter++
    } else if (offsetWindow() < blocksOffset[11] && addCounter === 9) {
        setWidth(11)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[15] && addCounter === 9) {
        setWidth(13)
        addCounter++
    } else if (offsetWindow() < blocksOffset[15] && addCounter === 10) {
        setWidth(12)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[16] && addCounter === 10) {
        setWidth(14)
        addCounter++
    } else if (offsetWindow() < blocksOffset[16] && addCounter === 11) {
        setWidth(13)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[17] && addCounter === 11) {
        setWidth(15)
        addCounter++
    } else if (offsetWindow() < blocksOffset[17] && addCounter === 12) {
        setWidth(14)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[18] && addCounter === 12) {
        setWidth(16)
        addCounter++
    } else if (offsetWindow() < blocksOffset[18] && addCounter === 13) {
        setWidth(15)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[19] && addCounter === 13) {
        setWidth(17)
        addCounter++
    } else if (offsetWindow() < blocksOffset[19] && addCounter === 14) {
        setWidth(16)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[20] && addCounter === 14) {
        setWidth(18)
        addCounter++
    } else if (offsetWindow() < blocksOffset[20] && addCounter === 15) {
        setWidth(17)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[21] && addCounter === 15) {
        setWidth(20)
        addCounter++
    } else if (offsetWindow() < blocksOffset[21] && addCounter === 16) {
        setWidth(18)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[23] && addCounter === 16) {
        setWidth(22)
        addCounter++
    } else if (offsetWindow() < blocksOffset[23] && addCounter === 17) {
        setWidth(20)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[26] && addCounter === 17) {
        setWidth(24)
        addCounter++
    } else if (offsetWindow() < blocksOffset[26] && addCounter === 18) {
        setWidth(22)
        addCounter--
    } else if (offsetWindow() >= blocksOffset[27] && addCounter === 18) {
        setWidth(25)
        addCounter++
    } else if (offsetWindow() < blocksOffset[27] && addCounter === 19) {
        setWidth(24)
        addCounter--
    }
});

for (let i = 0; i < blockImages.length; i++) {
    contentBlock[i].addEventListener('mouseenter', function (e) {
        $(e.target.querySelectorAll('.glitch-img')).mgGlitch({
            // set 'true' to stop the plugin
            destroy: false,
            // set 'false' to stop glitching
            glitch: true,
            // set 'false' to stop scaling
            scale: true,
            // set 'false' to stop glitch blending
            blend: true,
            // select blend mode type
            blendModeType: 'hue',
            // set min time for glitch 1 elem
            glitch1TimeMin: 200,
            // set max time for glitch 1 elem
            glitch1TimeMax: 400,
            // set min time for glitch 2 elem
            glitch2TimeMin: 10,
            // set max time for glitch 2 elem
            glitch2TimeMax: 100,
        });
    
        if (i === 12) {
            strokedText[i].style.width = '180%'
            strokedText[i].style.height = '160%'
            strokedText[i].style.borderRadius = '0%'
        } else {
            strokedText[i].style.width = '180%'
            strokedText[i].style.height = '160%'
            strokedText[i].style.borderRadius = '15%'
        }
    })
    contentBlock[i].addEventListener('mouseleave', function (e) {
        $(e.target.querySelectorAll('.glitch-img')).mgGlitch({
            destroy: true,
        });
        strokedText[i].style.width = '0%'
        strokedText[i].style.height = '0%'
        strokedText[i].style.borderRadius = '50%'
    })
}

AOS.init();
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
