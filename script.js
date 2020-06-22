'use strict';

/*
1) Создать массив week и записать в него дни недели в виде строк
·        Вывести на экран все дни недели
·        Каждый из них с новой строчки
·        Выходные дни - курсивом
·        Текущий день - жирным шрифтом(использовать объект даты)
 */

let week = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

function displayAllDays() {

  let time = new Date(),
    dayOfWeek = time.getDay();

  let bold = 'font-weight: bold';
  let italic = 'font-style: italic';
  let italicBold = [
    'font-weight: bold',
    'font-style: italic'
  ].join('');

  week.forEach((item, index) => {

    if (index + 1 === dayOfWeek) {
      console.log('%c%s', bold, item);
    }

    else if (index + 1 === dayOfWeek && (item === 'Saturday' || item === 'Sunday')) {
      console.log('%c%s', italicBold, item);
    }

    else if (item === 'Saturday' || item === 'Sunday') {
      console.log('%c%s', italic, item);
    }

    else {
      console.log(item);
    }
  });

}
displayAllDays();


/*
let output = document.querySelector('.output');

function displayDay() {

  let time = new Date(),
    dayOfWeek = time.getDay();
  // console.log('1: ', time, '2: ', dayOfWeek);

  week.forEach((item, index) => {

    if (item === 'Saturday' || item === 'Sunday') {
      output.innerHTML += `<br><br><i>${item}</i><br><br>`;
      if (index + 1 === dayOfWeek) {
        // console.log('Today is ', item);
        output.innerHTML = `<br><b>${item}</b><br><br>`;
      }

    } else {
      output.innerHTML += `<br><br>${item}<br><br>`;
      if (index + 1 === dayOfWeek) {
        // console.log('Today is ', item);
        output.innerHTML = `<br><b>${item}</b><br><br>`;
      }
    }

  });
}

displayDay();
*/
let output = document.querySelector('.output');

function displayDay() {

  let time = new Date(),
    dayOfWeek = time.getDay();
  // console.log('1: ', time, '2: ', dayOfWeek);

  week.forEach((item, index) => {

    if (item === 'Saturday' || item === 'Sunday') {
      output.innerHTML += `<br><br><i>${item}</i><br><br>`;
      if (index + 1 === dayOfWeek) {
        // console.log('Today is ', item);
        output.innerHTML = `<br><b>${item}</b><br><br>`;
      }

    } else {
      output.innerHTML += `<br><br>${item}<br><br>`;
      if (index + 1 === dayOfWeek) {
        // console.log('Today is ', item);
        output.innerHTML = `<br><b>${item}</b><br><br>`;
      }
    }

  });
}

displayDay();