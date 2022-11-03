// Variáveis
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const errs = document.querySelector(".errs");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener('keydown', function(e) {
    if(e.key === 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick
    }
})

// Funçôes
function handleTryClick(event) {
    event.preventDefault() // Não faça o padrão
    // Pegando o valor do botão
    const inputNumber = document.querySelector('#inputNumber');
    
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector('h2')
            .innerText = 'Parabéns o número era '+ inputNumber.value + '. Você acertou em ' + xAttempts + ' tentativas.'
    }

    if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || (!Number(inputNumber.value) && Number(inputNumber.value) != 0)) {
        alert("Por favor insira um número de 0 a 10!")
        }

    if(Number(inputNumber.value) != randomNumber) {
        screen1
            .querySelector('.errs')
            .innerText = `Você errou ${xAttempts} vezes`
    }
    if(Number(inputNumber.value) == randomNumber) {
        screen1
            .querySelector('.errs')
            .innerText = ""
    }
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}
