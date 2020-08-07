const $start = document.querySelector('#start')
const $game = document.querySelector('#game')
const $time = document.querySelector('#time')

let score = 0
let isGameStarted = false


$start.addEventListener('click', startGame)
$game.addEventListener('click', handBoxClick)


function startGame(){
    isGameStarted = true
    $game.style.backgroundColor = '#FFF'
    $game.style.borderColor = 'red'
    $start.classList.add('hide')
    
    let interval = setInterval(function(){
        let time = parseFloat($time.textContent) 
    
        if(time<=0){
            clearInterval(interval)
            endGame()
        } else{
            $time.textContent = (time - 0.1).toFixed(1)
        }
    },100)

    renderBox()
}

function endGame(){
    isGameStarted = false
}

function handBoxClick(event){
    if(isGameStarted == false){
        return
    }

    if (event.target.dataset.box){
        score++
        renderBox()
    }
}

function renderBox(){
    $game.innerHTML = ''
    let box = document.createElement('div')
    let boxSize = getRandom(40, 100)
    let gameSize = $game.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize

    box.style.height = box.style.width = boxSize +'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = randomColor()
    box.style.top = getRandom(0, maxTop)+ 'px'
    box.style.left = getRandom(0, maxLeft)+ 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max){
    return Math.floor(Math.random() * (max-min) + min)
}

function randomColor(){
    return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
}