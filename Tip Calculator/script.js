
const confirmButton = document.querySelector('#calculate');
const result = document.querySelector('#tipResult');
const resultHolder = document.querySelector('.result');



// ? Get Input Values 
// ? Turn tip into decimal
// ? decimal tip X bill = tip
//? total bill = bill + tip


function getInputs() {
    const bill = document.querySelector('#billInput').value;
    const tip = document.querySelector('#tipInput').value;
    clearInputs();
    calculateTip(tip, bill);
}

function calculateTip(tip, bill) {
    const decTip = parseFloat(Number(tip) / 100);
    const calTip = decTip * Number(bill);
    showResult(calTip);
}

function showResult(tip) {
    result.innerHTML = tip.toFixed(2);
    resultHolder.classList.remove('hidden');
    
}

function clearInputs() {
  document.querySelector('#billInput').value = '';
  document.querySelector('#tipInput').value = '';
}


confirmButton.addEventListener('click', () => {
    
    getInputs();
});