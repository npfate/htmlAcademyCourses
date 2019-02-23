var calculateSalary = function (salary) {
  var bigSalary = 100000;
  var dirtySalary = (salary >= bigSalary) ? Math.round(salary * 0.55) : Math.round(salary * 0.65);
  
  // var dirtySalary = Math.round(salary * 0.65);
  // if (salary >= bigSalary) {
  //   dirtySalary = Math.round(salary * 0.55);
  // }
  
  return dirtySalary;
};


/* Техническое задание

Мяу! Мне нужна программа, которая от «грязной» зарплаты (зарплата до вычета налогов) посчитает примерную «чистую» зарплату (которая выдаётся на лапы).

Оформи программу в виде функции calculateSalary c одним параметром — величиной грязной зарплаты. Функция должна возвращать чистую зарплату.

Большая точность мне не нужна, просто считаем, что 35% величины грязной зарплаты составляют налоги, а если грязная зарплата больше или равна 100 тысячам, то налоги составляют уже 45%.

*/
