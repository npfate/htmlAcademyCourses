var getYears = function (firstYear, lastYear, sumNumbers) {
  var keyYears = [];
  for (var i = firstYear; i <= lastYear; i++) {
    var yearLiterally = String(i);
    var sum = 0;
    for (var j = 0; j < yearLiterally.length; j++) {
      sum += parseInt(yearLiterally[j]);
    }    
    if (sum === sumNumbers) {
      keyYears.push(i)
    } 
  }
  return keyYears;
};

getYears(2018, 2045, 5);
/* Техническое задание

Мяу! Напиши программу getYears, которая будет возвращать массив с подходящими датами для Олимпиады.

Функция должна принимать на вход три параметра. Первый параметр — год, с которого нужно начать вести отсчёт (включительно). Второй — год, которым этот отсчёт надо закончить (включительно). Третий — число, которое обозначает сумму цифр в номере года.

Названия параметров могут быть любыми.

Годы в массиве должны быть расположены по возрастанию, от меньшего к большему.

*/
