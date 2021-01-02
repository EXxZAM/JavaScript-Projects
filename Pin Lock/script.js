const input = document.getElementById('inputPin');
const numberBtns = document.getElementsByClassName('number');
const password = '1234';


function insertNum(number) {
    input.value = input.value + number;
}


function removeLastChar() {
    input.value = input.value.slice(0, -1);
}

function refresh() {
    location.reload()
}
function login() {
    if(input.value == password) {
        console.log('Correct');
        input.value = '';
        input.classList.remove('incorrect')
        document.body.innerHTML = '';
        document.body.innerHTML = '<h1>You Logged In</h1> <br> <br> <br> <button onclick="refresh()"> Refresh </button>';
    } else {
        console.log('Wrong Password');
        
        input.classList.add("incorrect");
    }
}