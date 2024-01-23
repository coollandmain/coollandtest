let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function (event) {
    touchStartX = event.touches[0].clientX;
}, false);

document.addEventListener('touchmove', function (event) {
    touchEndX = event.touches[0].clientX;
}, false);

document.addEventListener('touchend', function () {
    const content = document.getElementById('content');

    if (touchStartX - touchEndX > 50) {
        // Swipe left, hide menu
        hideMenu(content);
    } else if (touchEndX - touchStartX > 50) {
        // Swipe right, show menu
        showMenu(content);
    }
});

function hideMenu(content) {
    document.getElementById('menu').classList.add('transformed');
    content.classList.add('content-transformed');
}

function showMenu(content) {
    document.getElementById('menu').classList.remove('transformed');
    content.classList.remove('content-transformed');
}
function initializePage() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('coolland-events').style.display = 'none';
}

//phone
document.getElementById('button-home').addEventListener('click', showHome);
document.getElementById('button-events').addEventListener('click', showEvents);
document.getElementById('button-home').addEventListener('touchend', showHome);
document.getElementById('button-events').addEventListener('touchend', showEvents);

window.onload = initializePage;

