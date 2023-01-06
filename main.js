let names = prompt('Введите свое имя')
let year = +prompt('Введите свой год рождения')
let cur = +prompt('Введите нынешний год')

function param(a, b, c) {
    let sum = a + ' ' + (c - b) + ' лет';
    return sum
}
console.log(param(names, year, cur));

let one = +prompt('Введите количество примеров');
let minNumber = +prompt('Введите наименьшее число');
let maxNumber = +prompt('Введите наибольшее число');

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function randSym() {
    return Math.floor(Math.random() * (6 - 1) + 1)
}


for (let i = 1; i < one; i++) {
    let odin = rand(minNumber, maxNumber),
        two = rand(minNumber, maxNumber),
        symbol = randSym(),
        example = 0;
    if (symbol == 1) {
        symbol = '+';
        example = odin + two;
    } else if (symbol == 2) {
        symbol = '-';
        example = odin - two;
    } else if (symbol == 3) {
        symbol = '*';
        example = odin * two;
    } else if (symbol == 4) {
        symbol = '/';
        example = odin / two;
    }else if(symbol == 5){
        symbol = '%';
        example = odin % two;
    }
    let primer = +prompt(odin + symbol + two);
    alert(primer == example ? 'Ваш ответ верный ' + primer : 'Ваш ответ не верный ' + primer + ' Правильный ответ ' + example)
}



