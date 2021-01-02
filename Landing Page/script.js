


const clockHolder = document.getElementById('clock');
const greeting = document.getElementById('greeting')
const name = document.getElementById('name');
const focus = document.getElementById('focus');


// Options
const showAmPm = true;

function setClock() {
    var dateObj = new Date();
   
    var seconds = dateObj.getSeconds();
    var minutes = dateObj.getMinutes();
    var hours = dateObj.getHours();
    // set AM or PM
    const amPm = hours >= 12 ? 'PM' : 'AM'
    // 12hr Format
    hours = hours % 12 || 12;

    clockHolder.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${showAmPm ? amPm : ''}`;
    setTimeout(setClock, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and Greeting
function setBgGreet() {
    var today = new Date();
    
    hour = today.getHours();

    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('morning.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';
    } else if (hour < 18) {
        // afternoon
        document.body.style.backgroundImage = "url('afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// set Name 
function setName(e) {
    if (e.type === 'keypress') {
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Name 
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
// set Focus 
function setFocus(e) {
    if (e.type === 'keypress') {
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}
// Get Focus 
function getFoocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
// Run
setClock();
setBgGreet();
getName();
getFoocus();