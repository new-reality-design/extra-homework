'use strict';

/**
 Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице
1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
— Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
— В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
— Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)
 */

let textString = 'Однажды, в студёную зимнюю пору Я из лесу вышел; был сильный мороз. Гляжу, поднимается медленно в гору Лошадка, везущая хворосту воз.';
let textStringSpaces = '    Однажды, в студёную зимнюю пору Я из лесу вышел; был сильный мороз. Гляжу, поднимается медленно в гору Лошадка, везущая хворосту воз.    '; //4 пробела до и 4 после.
let textStringShort = '  ..был сильный мороз';

let numbers = 1987363474;
let empty = null;
let unknown;


const trimText = function (text) {

  let result;

  if (typeof text !== 'string') {
    alert(`${typeof text} = Это не строка.`);
  } else if (text.length > 30) {
    console.log('Оригинальная строка длиннее чем 30 символов - ', text, text.length);
    result = text.trim().slice(0, 30) + '...';
    console.log('Обрезанная строка- ', result, result.length);
  } else {
    console.log('Оригинальная строка- ', text, text.length);
    console.log(result = text.trim(), result.length);
  }
};

// trimText(textString);
// trimText(textStringSpaces);
// trimText(textStringShort);

// trimText(numbers);
// trimText(empty);
// trimText(unknown);

/*
const trimText = function (text) {

  let result;

  if (typeof text !== 'string') {
    alert(`${typeof text} = Это не строка.`);
  } else {
    console.log('Оригинальная строка- ', text);
    console.log(result = text.trim());

    if (text.length > 30) {
      console.log('Оригинальная строка длиннее чем 30 - ', text);
      result = text.trim().slice(0, 30) + '...';
      console.log('sliced text', result);
    } else {
      console.log('Оригинальная строка- ', text);
      console.log(result = text.trim());
    }
  }
};
 */


