let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')
let btn7 = document.querySelector('#btn7')
let btn8 = document.querySelector('#btn8')
let btn9 = document.querySelector('#btn9')
let rNumber = document.querySelector('#btn')
let btn10 = document.querySelector('#btn10')
let block = document.querySelector('.block')
btn1.onclick = () => {
    block.classList.add('s10');
    block.classList.remove('s20');
    block.classList.remove('s30');
    block.classList.remove('s40');
    block.classList.remove('s50');
    block.classList.remove('s60');
    block.classList.remove('s70');
    block.classList.remove('s80');
    block.classList.remove('s90');
    block.classList.remove('s100');
}
btn2.onclick = () => {
    block.classList.add('s20');
    block.classList.remove('s10');
    block.classList.remove('s30');
    block.classList.remove('s40');
    block.classList.remove('s50');
    block.classList.remove('s60');
    block.classList.remove('s70');
    block.classList.remove('s80');
    block.classList.remove('s90');
    block.classList.remove('s100');
}
btn3.onclick = () => {
    block.classList.add('s30')
    block.classList.remove('s10');
    block.classList.remove('s20');
    block.classList.remove('s40');
    block.classList.remove('s50');
    block.classList.remove('s60');
    block.classList.remove('s70');
    block.classList.remove('s80');
    block.classList.remove('s90');
    block.classList.remove('s100');
}
btn4.onclick = () => {
    block.classList.add('s40')
    block.classList.remove('s10');
    block.classList.remove('s20');
    block.classList.remove('s30');
    block.classList.remove('s50');
    block.classList.remove('s60');
    block.classList.remove('s70');
    block.classList.remove('s80');
    block.classList.remove('s90');
    block.classList.remove('s100');
}
btn5.onclick = () => {
    block.classList.add('s50')
    block.classList.remove('s10');
    block.classList.remove('s20');
    block.classList.remove('s40');
    block.classList.remove('s30');
    block.classList.remove('s60');
    block.classList.remove('s70');
    block.classList.remove('s80');
    block.classList.remove('s90');
    block.classList.remove('s100');
}
btn6.onclick = () => {
    block.classList.add('s60')
    block.classList.remove('s10');
    block.classList.remove('s20');
    block.classList.remove('s40');
    block.classList.remove('s50');
    block.classList.remove('s30');
    block.classList.remove('s70');
    block.classList.remove('s80');
    block.classList.remove('s90');
    block.classList.remove('s100');
}
btn7.onclick = () => {
    block.classList.add('s70')
    block.classList.remove('s10');
    block.classList.remove('s20');
    block.classList.remove('s40');
    block.classList.remove('s50');
    block.classList.remove('s60');
    block.classList.remove('s30');
    block.classList.remove('s80');
    block.classList.remove('s90');
    block.classList.remove('s100');
}
btn8.onclick = () => {
    block.classList.add('s80')
    block.classList.remove('s10');
    block.classList.remove('s20');
    block.classList.remove('s40');
    block.classList.remove('s50');
    block.classList.remove('s60');
    block.classList.remove('s70');
    block.classList.remove('s30');
    block.classList.remove('s90');
    block.classList.remove('s100');
}
btn9.onclick = () => {
    block.classList.add('s90')
    block.classList.remove('s10');
    block.classList.remove('s20');
    block.classList.remove('s40');
    block.classList.remove('s50');
    block.classList.remove('s60');
    block.classList.remove('s70');
    block.classList.remove('s80');
    block.classList.remove('s30');
    block.classList.remove('s100');
}
btn10.onclick = () => {
    block.classList.add('s100')
    block.classList.remove('s10');
    block.classList.remove('s20');
    block.classList.remove('s40');
    block.classList.remove('s50');
    block.classList.remove('s60');
    block.classList.remove('s70');
    block.classList.remove('s80');
    block.classList.remove('s90');
    block.classList.remove('s30');
}
rNumber.onclick = () => {
    block.width = Math.round(Math.random * 100) + '%'
}