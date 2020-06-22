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

  // let dayOfWeek = 7;

  let bold = 'font-weight: 900';
  let italic = 'font-style: italic';
  let italicBold = [
    'font-style: italic;', 'font-weight: bold;'
  ].join('');

  week.forEach((item, index) => {

    if (index + 1 === dayOfWeek && (item === 'Saturday' || item === 'Sunday')) {
      console.log('%c%s', italicBold, item);
    }

    else if (index + 1 === dayOfWeek) {
      console.log('%c%s', bold, item);
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

