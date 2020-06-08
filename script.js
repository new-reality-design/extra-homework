'use strict';

/*Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
Переменная lang может принимать 2 значения: 'ru' 'en'.
//Написать условия при котором в зависимости от значения lang 
//будут выводится дни недели на русском или английском языке. Решите задачу
через if,
через switch-case
через многомерный массив без ифов и switch.*/

let langQuestion1 = prompt('(1) Выбор языка: ru / en', 'en');
let output = document.querySelector('.output');

if (langQuestion1 === 'ru') {
  output.innerHTML = '"if-else"- Дни недели: Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье.';
  // console.log('"if-else"- ru');
} else if (langQuestion1 === 'en') {
  output.innerHTML = '"if-else" - Days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.';
  // console.log('"if-else" - en');
} else if (langQuestion1 !== 'en' && langQuestion1 !== 'ru') {
  output.innerHTML = '"if-else" : Надо выбрать язык.';
}


let langQuestion2 = prompt('(2)- Выбор языка: ru / en', 'en');
let output2 = document.querySelector('.output-2');

switch (langQuestion2) {
  case 'ru':
    output2.innerHTML = '"switch-case" - Дни недели: Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье.';
    // console.log('"switch-case" - ru');
    break;

  case 'en':
    output2.innerHTML = '"switch-case" - Days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.';
    // console.log('"switch-case" - en');
    break;

  default:
    output2.innerHTML = '"switch-case" : Надо выбрать язык.';
  // console.log('???');
}


let langQuestion3 = prompt('(3)- Выбор языка: ru / en', 'en');
let output3 = document.querySelector('.output-3');
let output4 = document.querySelector('.output-4');
let output5 = document.querySelector('.output-5');

let array = [
  [
    '"Многомерный массив" - Дни недели: ', 'Понедельник,', 'Вторник,', 'Среда,', 'Четверг,', 'Пятница,', 'Суббота,', 'Воскресенье.'
  ],
  [
    '"Arrays" - Days of the week: ', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,', 'Sunday.'
  ]
];

langQuestion3 === 'ru' ? array[0].forEach(item => {
  output3.innerHTML += item + ' ';
}) : langQuestion3 === 'en' ? array[1].forEach(item => {
  output4.innerHTML += item + ' ';
}) : output5.innerHTML = '"Массивы" : Надо выбрать язык.';

/*
array.forEach(item => {
  item.forEach(item => {
    output3.innerHTML += item + ' ';
  });
  output3.innerHTML += '<br>';
});
*/

/*
У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

	Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
 *
 */



let namePerson = 'Артем';
// let namePerson = 'Максим';

namePerson === 'Артем' ? console.log('Директор')
  : namePerson === 'Максим' ? console.log('Преподаватель')
    : console.log('Студент');