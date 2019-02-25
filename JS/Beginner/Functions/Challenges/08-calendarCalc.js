var getDayOfWeek = function (weekday, chosenDay) {
  var days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  var daysArr = [];
  
  if (chosenDay < 1 || chosenDay > 31) {
    return 'введите значение от 1 до 31';
  }
  
  for (var i = 0; i < days.length; i++) {
    var shift = days.indexOf(weekday) + i;
    if (shift < days.length) {
      daysArr.push(days[shift]);
    } else {
      daysArr.push(days[shift - days.length]);
    }
    for (var j = 0; j < chosenDay; j++) {
      if (chosenDay > days.length) {
        chosenDay -= days.length;  
      }
    }
  }
  console.log(daysArr);
  return daysArr[chosenDay - 1];
}

getDayOfWeek('суббота', 1);

/* Техническое задание

Мяу! Напиши для меня программу-календарь.

Оформи программу в виде функции getDayOfWeek. У неё должно быть два параметра: день недели, на который выпадает первое число месяца, и число, для которого нужно найти день недели в этом месяце.

Функция должна возвращать строку с названием для недели. Название должно быть написано с маленькой буквы в именительном падеже: 'понедельник', 'вторник' и так далее.

*/
