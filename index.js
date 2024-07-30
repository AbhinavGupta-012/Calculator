document.querySelector('.android').addEventListener('click', function() {
    document.querySelector('.select').classList.add('move-right');
    document.querySelector('.android-calc').classList.add('show');
});

document.querySelector('.iphone').addEventListener('click', function() {
    document.querySelector('.select').classList.add('move-left');
    document.querySelector('.iphone-calc').classList.add('show');
});
