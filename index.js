const androidDisplay = document.getElementById('android-display').querySelector('.display-content');
const iphoneDisplay = document.getElementById('iphone-display').querySelector('.display-content');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');

let android = false;
let iphone = false;

document.querySelector('.android').addEventListener('click', function() {
    document.querySelector('.select').classList.add('move-right');
    document.querySelector('.android-calc').classList.add('show');
    android = true;
    iphone = false;
});

document.querySelector('.iphone').addEventListener('click', function() {
    document.querySelector('.select').classList.add('move-left');
    document.querySelector('.iphone-calc').classList.add('show');
    iphone = true;
    android = false;
});

function displayNumber(number){
    if (android){
        androidDisplay.textContent += number;
    } 
    else if (iphone){
        iphoneDisplay.textContent += number;
    }
}

function doubleZero(){
    if (android) {
        androidDisplay.textContent += '00';
    } 
    else if (iphone) {
        iphoneDisplay.textContent += '00';
    }
}

function displaySymbol(symbol){
    let display;
    if (android) {
        display = androidDisplay;
    } 
    else if (iphone) {
        display = iphoneDisplay;

    }
    if (display) {
        if (['+', '-', '*', '/', '%', '.'].includes(display.textContent.slice(-1))) {
            display.textContent = display.textContent.slice(0, -1) + symbol;
        } else {
            display.textContent += symbol;
        }
    }
}

equal.addEventListener('click', function() {
    if (android) {
        display = androidDisplay;
    } 
    else if (iphone) {
        display = iphoneDisplay;
    }

    if (display) {
        display.textContent = eval(display.textContent);
    }
})

clear.addEventListener('click', function clearContent() {
    if (android) {
        androidDisplay.textContent = '';
    } 
    else if (iphone) {
        iphoneDisplay.textContent = '';
    }
})

backspace.addEventListener('click', function removeChar() {
    if (android) {
        androidDisplay.textContent = androidDisplay.textContent.slice(0, -1);
    } 
    else if (iphone) {
        iphoneDisplay.textContent = iphoneDisplay.textContent.slice(0, -1);
    }
})