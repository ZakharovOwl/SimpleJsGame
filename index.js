const $start = document.querySelector('#start')
const $game = document.querySelector('#game')

$start.addEventListener('click', startGame)

function startGame(){
    $game.style.backgroundColor = '#fff'
    $game.style.borderColor = 'red'
    //скрываю кнопку "начать"
    $start.classList.add('hide')

    renderBox()
}

function renderBox(){
    
}