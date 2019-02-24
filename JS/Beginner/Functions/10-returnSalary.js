var calculateSalary = function (salary) {  
  var salary = (salary >= 100000) ? Math.round(salary * 0.55) : Math.round(salary * 0.65); 
  return salary;
};

// var calculateSalary = function (salary) {
//   var bigSalary = 100000;  
//   var dirtySalary = Math.round(salary * 0.65);
//   if (salary >= bigSalary) {
//     dirtySalary = Math.round(salary * 0.55);
//   }
//   return salary;
// };

console.log(calculateSalary(50000));

/* Техническое задание

35% величины грязной зарплаты составляют налоги, 
а если грязная зарплата больше или равна 100 тысячам, то налоги составляют уже 45%.

*/
