'use strict';


// 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
// — Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
// — Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)


let textString = 'Однажды, в студёную зимнюю пору я из лесу вышел; был сильный мороз. Гляжу, поднимается медленно в гору лошадка, везущая хворосту воз.';
let textStringSpaces = '    Однажды, в студёную зимнюю пору я из лесу вышел; был сильный мороз. Гляжу, поднимается медленно в гору лошадка, везущая хворосту воз.    '; //4 пробела до и 4 после.
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
    console.log('result- Обрезанная строка и её длина- ', result, result.length);
  } else {
    result = text.trim();
    console.log('Оригинальная строка и её длина- ', text, text.length);
    console.log('result- Обрезанная строка и её длина- ', result, result.length);
  }
};

//Вызовы для проверок-

trimText(textString);
// trimText(textStringSpaces);
trimText(textStringShort);

trimText(numbers);
// trimText(empty);
// trimText(unknown);


