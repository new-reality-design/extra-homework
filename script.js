'use strict';

/*
Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
1) Создать переменную num со значением 266219 (тип данных число)
2) Вывести в консоль произведение (умножение) цифр этого числа
Например: число 123, при помощи javaScript получить каждое цифру ( 1, 2, 3 ) и перемножить их.
Правильно использовать цикл или методы перебора.
3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
4) Вывести на экран первые 2 цифры полученного числа
 */

let num = 266219;
console.log('Переменная num: ', num, typeof num);

function getNumbers(numbers) {
  let result = [];
  let base = 10;
  let currNum = Math.abs(numbers);
  do {
    let baseShiftedNum = Math.floor(currNum / base);
    let diff = currNum - baseShiftedNum * base;
    result.unshift(diff);
    currNum = baseShiftedNum;
  } while (currNum > 0);
  return result;
}

let numbersToArray = getNumbers(num);
// console.log('numbersToArray: ', numbersToArray);

const reducer = (accumulator, currentValue) => accumulator * currentValue;

let totalFromNum = numbersToArray.reduce(reducer);
console.log('Произведение цифр из переменной num: ', totalFromNum);
let totalNumMultiplied = totalFromNum ** 3;
console.log('Возведение в степень 3: ', totalNumMultiplied);
let newNumToStr = totalNumMultiplied.toString();
let finalNum = newNumToStr.substring(0, 2);
console.log('Первые 2 цифры полученного числа: ', parseInt(finalNum));

