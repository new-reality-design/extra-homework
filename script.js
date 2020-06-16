'use strict';

/*
1) Создать массив arr = []
— Записать в него 7 любых многозначных чисел в виде строк
— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)

2) Вывести в столбик все простые числа от 1 до 100
— Статья про простые числа - КЛИК
— Рядом с каждым числом написать оба делителя данного числа
    Например: “Делители этого числа: 1 и n”
 */

//1
const arr = ['424', '555', '787', '111', '222', '892', '245', '909', '413', '455'];
console.log(arr);

let newArr = arr.filter(item => {
  if (item[0] === '2' || item[0] === '4') {
    return true;
  }
});
console.log('newArr: ', newArr);


//2
const isPrimeNumber = function (num) {
  for (let i = 2; i * i <= num; i === 2 ? i++ : i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
const result = [...Array(100)].reduce((a, _, i) => a.concat(isPrimeNumber(i) ? `Делители числа ${i}: 1 и ${i}` : []), []).join('\n');
console.log(result);