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

