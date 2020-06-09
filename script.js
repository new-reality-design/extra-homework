'use strict';

/*Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
Переменная lang может принимать 2 значения: 'ru' 'en'.
//Написать условия при котором в зависимости от значения lang 
//будут выводится дни недели на русском или английском языке. Решите задачу
через if,
через switch-case
через многомерный массив без ифов и switch.*/

//Условие 1
let lang1 = prompt('(1) Выбор языка: ru / en', 'en');
let output = document.querySelector('.output');

if (lang1 === 'ru') {
  output.innerHTML = '"1" Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье.';

} else if (lang1 === 'en') {
  output.innerHTML = '"1" Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.';

} else if (lang1 !== 'en' && lang1 !== 'ru') {
  output.innerHTML = '"1" : Надо выбрать язык.';
}



//Условие 2
let lang2 = prompt('(2)- Выбор языка: ru / en', 'en');
let output2 = document.querySelector('.output-2');

switch (lang2) {
  case 'ru':
    output2.innerHTML = '"2" Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье.';
    break;

  case 'en':
    output2.innerHTML = '"2" Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.';
    break;

  default:
    output2.innerHTML = '"2" : Надо выбрать язык.';
}



//Условие 3.1
let lang3 = prompt('(3)- Выбор языка: ru / en', 'en');
let output3 = document.querySelector('.output-3');
let output4 = document.querySelector('.output-4');
let output5 = document.querySelector('.output-5');

let array = [
  [
    '"3.1"', 'Понедельник,', 'Вторник,', 'Среда,', 'Четверг,', 'Пятница,', 'Суббота,', 'Воскресенье.'
  ],
  [
    '"3.1"', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,', 'Sunday.'
  ]
];

lang3 === 'ru' ? array[0].forEach(item => {
  output3.innerHTML += item + ' ';
}) : lang3 === 'en' ? array[1].forEach(item => {
  output4.innerHTML += item + ' ';
}) : output5.innerHTML = '"3.1" : Надо выбрать язык.';




//Условие 3.2
let lang = prompt('(4)- Выбор языка: ru / en', 'ru');
let arrObj = {
  ru: [
    '"3.2"', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
  ],
  en: [
    '"3.2"', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ]
};

let output6 = document.querySelector('.output-6');
arrObj[lang].forEach(item => {
  output6.innerHTML += item + '  ';
});



/*
У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, 
//с любым другим значением вывести в консоль “студент”
Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
 */

// let namePerson = 'Артем';
let namePerson = 'Максим';

namePerson === 'Артем' ? console.log('Директор')
  : namePerson === 'Максим' ? console.log('Преподаватель')
    : console.log('Студент');